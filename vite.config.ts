import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dapur Elexito',
        short_name: 'Elexito',
        description: 'Dapur Elexito Sales Catalogue',
        theme_color: '#FDFBF7', // Warm neutral cream
        background_color: '#FDFBF7',
        display: 'standalone',
        icons: [
          {
            src: '/assets/brand/favicon.webp?v=2',
            sizes: 'any',
            type: 'image/webp'
          }
        ]
      }
    })
  ],
})
