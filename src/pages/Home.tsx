import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-banner">
          <img 
            src="/assets/hero/hero-section-elexito.webp" 
            alt="Dapur Elexito Specialties" 
            className="hero-image"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="hero-overlay">
            <div className="hero-card">
              <h1 className="hero-title">Premium Homemade Food</h1>
              <p className="hero-subtitle">
                Crafted with passion and premium ingredients. Discover our selection of meticulously baked goods and savory treats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="catalogue container" id="catalogue">
        <h2 className="section-title">Our Catalogue</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
