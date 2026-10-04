import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-banner">
          <video 
            src="/assets/hero/2235521_Baking_Making_1280x720.mp4" 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          />
          <div className="hero-overlay">
            <div className="hero-card">
              <h1 className="hero-title">Premium Homemade Food</h1>
              <p className="hero-subtitle">
                Dibuat dengan penuh cinta dan bahan premium. Temukan pilihan kue dan hidangan gurih spesial kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="catalogue container" id="catalogue">
        <h2 className="section-title">Katalog Kami</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
