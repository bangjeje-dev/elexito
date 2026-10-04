# Dapur Elexito Asset Structure

This document outlines where all brand, product, and application image assets should be placed. The application is configured to pull assets directly from these specific paths.

## Directory Structure
All assets live inside the `/public/assets/` directory.

```text
public/
└── assets/
    ├── brand/
    │   ├── favicon.webp          (Favicon and PWA icon)
    │   └── logo/
    │       ├── logo.svg          (Primary logo)
    │       ├── logo-dark.svg     (Optional dark variation)
    │       ├── logo-light.svg    (Optional light variation)
    │       └── logo-mark.svg     (Icon only / standalone mark)
    ├── products/
    │   ├── fudgy-brownies/
    │   │   ├── 01.webp           (Primary thumbnail)
    │   │   ├── 02.webp           (Gallery image)
    │   │   └── 03.webp           (Gallery image)
    │   ├── brownies-kering-mini/
    │   ├── bolu-ketan-hitam-mini/
    │   ├── bolu-ketan-hitam/
    │   ├── pudding-choco-fruit/
    │   ├── pudding-choco-fruit-premium/
    │   ├── puding-coklat-cup/
    │   ├── banana-strudel/
    │   ├── rogut/
    │   └── sosis-solo/
    ├── hero/
    │   └── hero-[name].webp      (e.g., hero-main.webp)
    └── social/
        └── social-share.webp     (Open Graph / social media sharing images)
```

## How to add your real assets

### 1. Brand Logo
Place your primary logo at `public/assets/brand/logo/`.
The header navigation is configured to load the logo image. If the file is missing, it will gracefully fall back to displaying the text "Dapur Elexito". **WEBP** and **SVG** are both highly recommended formats. For example, `Asset 1.webp` is used as the current logo asset.

### 2. Product Images
Convert your product photography to `.webp` format for the best performance and smallest file size without losing quality.
Place them in their respective product folder inside `public/assets/products/`.
Use sequential naming to denote the display order in the gallery (`01.webp`, `02.webp`, etc.).
For example: `public/assets/products/fudgy-brownies/01.webp`
Then, update `src/data/products.ts` so the `thumbnail` points to the `01.webp` image, and the `images` array lists all available views.

### 3. Favicon & PWA Icons
- The application is configured to use a single WebP asset for all favicon and PWA app icon needs.
- Place it at: `public/assets/brand/favicon.webp`
The HTML head and `vite.config.ts` are already configured to reference this single file.

### 4. Hero Banners
Any promotional banners or hero images should be placed in `public/assets/hero/`.

## Best Practices & Responsive Constraints
- **Format:** Prefer `.webp` (or `.avif`) for photos, and `.svg` for logos and flat icons.
- **Hero Image:** The hero banner is strictly locked to a **4:5 aspect ratio**. Target asset dimensions are **1080 × 1350 px**.
- **Mobile-First Lock:** The application UI is intentionally locked to a mobile-only layout structure. On desktop devices, the application will appear centered with a maximum width of 600px. This preserves the 2-column grid and premium mobile design language everywhere.
- **Product Thumbnails:** Keep product thumbnails consistently square (1:1 aspect ratio) so the grid remains visually balanced.
- **Naming:** Stick to the `kebab-case` naming convention shown above. Avoid spaces and uppercase letters in filenames.
