import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../../utils/whatsapp';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="brand">
            <img 
              src="/assets/brand/logo/Asset%201.webp" 
              alt="Dapur Elexito Logo" 
              className="brand-logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span className="brand-text-fallback" style={{ display: 'none' }}>Dapur Elexito</span>
          </Link>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <a href="https://www.instagram.com/dapur.el.exito" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#ffffff', display: 'inline-flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: '#ffffff', display: 'inline-flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Bakti+Jaya+5+No.44+Rt.10+Rw+17+Kelurahan+Harapan+Jaya,+Bekasi+17124" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" style={{ color: '#ffffff', display: 'inline-flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Dapur Elexito. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
