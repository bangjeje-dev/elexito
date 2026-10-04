import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
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

  const [activeIndex, setActiveIndex] = useState(0);

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
        <h2>Produk tidak ditemukan</h2>
        <Button onClick={() => navigate('/')} style={{ marginTop: 'var(--space-4)' }}>Kembali ke Katalog</Button>
      </div>
    );
  }

  const activeImages = selectedVariant?.images && selectedVariant.images.length > 0 
    ? selectedVariant.images 
    : product.images;

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setActiveIndex(0);
    const scrollContainer = document.querySelector('.gallery-scroll');
    if (scrollContainer) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

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
          <span>Kembali ke Katalog</span>
        </button>
      </div>

      <div className="container detail-container">
        <div className="product-gallery">
          <div className="gallery-scroll" onScroll={handleScroll}>
            {activeImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
          {activeImages.length > 1 && (
            <div className="gallery-indicators">
              {activeImages.map((_, idx) => (
                <div key={idx} className={`indicator-dot ${idx === activeIndex ? 'active' : ''}`} />
              ))}
            </div>
          )}
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
              <h3 className="variants-title">Pilih Varian</h3>
              <div className="variants-list">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-btn ${selectedVariant?.id === variant.id ? 'selected' : ''}`}
                    onClick={() => handleVariantSelect(variant)}
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
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              }
            >
              Pesan via WhatsApp
            </Button>
            <p className="action-hint">Akan membuka WhatsApp dengan pesan otomatis.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
