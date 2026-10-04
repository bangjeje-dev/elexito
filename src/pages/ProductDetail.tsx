import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import type { Product, ProductVariant } from '../data/types';
import { Button } from '../components/ui/Button';
import { generateWhatsAppLink, generateProductOrderMessage } from '../utils/whatsapp';
import './ProductDetail.css';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    const found = products.find(p => p.slug === slug);
    if (found) {
      setProduct(found);
      if (found.variants && found.variants.length > 0) {
        setSelectedVariant(found.variants[0]);
      }
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="container" style={{ padding: 'var(--space-12) 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Button onClick={() => navigate('/')} style={{ marginTop: 'var(--space-4)' }}>Back to Catalogue</Button>
      </div>
    );
  }

  const handleOrder = () => {
    if (!product) return;
    const priceToUse = selectedVariant ? selectedVariant.price : product.price;
    const variantName = selectedVariant ? selectedVariant.name : 'Default';
    
    const message = generateProductOrderMessage(product.name, variantName, priceToUse);
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <article className="product-detail">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <ChevronLeft size={24} />
          <span>Back to Catalogue</span>
        </button>
      </div>

      <div className="container detail-container">
        <div className="product-gallery">
          <div className="gallery-scroll">
            {product.images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="info-header">
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price-display">
              {selectedVariant ? `Rp${selectedVariant.price.toLocaleString('id-ID')}` : `Mulai dari Rp${product.price.toLocaleString('id-ID')}`}
            </p>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="product-variants">
              <h3 className="variants-title">Select Option</h3>
              <div className="variants-list">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-btn ${selectedVariant?.id === variant.id ? 'selected' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    <div className="variant-name">{variant.name} {variant.size && `(${variant.size})`}</div>
                    <div className="variant-price">Rp{variant.price.toLocaleString('id-ID')}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="product-actions">
            <Button 
              variant="whatsapp" 
              fullWidth 
              onClick={handleOrder}
              icon={<MessageCircle size={20} />}
            >
              Order via WhatsApp
            </Button>
            <p className="action-hint">Opens WhatsApp with a pre-filled message.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
