import { Link } from 'react-router-dom';
import type { Product } from '../../data/types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <div className="image-placeholder">
          <img src={product.thumbnail} alt={product.name} onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
      </div>
      <div className="product-card-content">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          Mulai dari Rp{product.price.toLocaleString('id-ID')}
        </p>
      </div>
    </Link>
  );
}
