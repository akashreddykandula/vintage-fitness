# Vintage Fitness Gym – Premium Showcase Website

A luxury fitness brand website for **Vintage Fitness Gym**, Kondapur, Hyderabad.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | UI framework & build tool |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Page & scroll animations |
| Swiper.js | Mobile review carousel |
| React Icons | Icon library |

---

## Folder Structure

```
vintage-fitness/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed transparent → solid navbar + mobile menu
│   │   ├── Hero.jsx            # Full-screen hero with animated counters
│   │   ├── About.jsx           # Story, mission, pills section
│   │   ├── WhyUs.jsx           # 6 feature cards with hover effects
│   │   ├── Programs.jsx        # 6 program cards with WhatsApp CTAs
│   │   ├── Trainers.jsx        # 5 trainer cards (Mohamed, Raju, Sameer, Tarun, Rahman)
│   │   ├── Transformations.jsx # Before/after cards with results
│   │   ├── Gallery.jsx         # Masonry grid + lightbox
│   │   ├── Reviews.jsx         # 4.8★ display + cards + mobile swiper
│   │   ├── Contact.jsx         # Info + WhatsApp form
│   │   ├── Footer.jsx          # Links, social, copyright
│   │   └── WhatsAppFAB.jsx     # Floating WhatsApp button (pulsing)
│   ├── data.js                 # ⭐ All gym data, trainers, reviews, programs
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + custom CSS
├── index.html                  # SEO meta tags included
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Customization Guide

### 🔧 Update Gym Info
Edit **`src/data.js`** — all content is centralized:
- `GYM` object → name, phone, WhatsApp, address, rating, reviews
- `TRAINERS` → names, roles, experience, bios
- `PROGRAMS` → title, description, WhatsApp message
- `REVIEWS` → testimonials, reviewer names
- `TRANSFORMATIONS` → before/after stories
- `HOURS` → opening times
- `GALLERY_ITEMS` → gallery grid items

### 🎨 Change Brand Colors
Edit **`tailwind.config.js`**:
```js
colors: {
  gold: '#F5C518',       // Primary accent
  'gold-dark': '#e0b015',
  'gym-black': '#0F0F0F', // Main background
  'gym-dark': '#1E1E1E',  // Card/section background
}
```

### 📸 Add Real Photos
Replace emoji placeholders in components with `<img>` tags:
```jsx
// In Trainers.jsx, replace the avatar div with:
<img src="/images/trainer-mohamed.jpg" alt="Mohamed" className="w-full object-cover" />

// In Hero.jsx, update the background:
backgroundImage: "url('/images/gym-hero.jpg')"
```

Recommended image sizes:
- Hero background: 1920×1080px
- Trainer avatars: 400×400px (square)
- Gallery: mixed, optimized to WebP
- About section: 800×1000px (portrait)

### 📱 WhatsApp Number
Change in `src/data.js`:
```js
whatsapp: '919000023008'  // Format: country code + number, no +
```

---

## SEO Checklist

- [x] `<title>` tag with location keywords
- [x] `<meta description>` with gym highlights  
- [x] `<meta keywords>` with Hyderabad/Kondapur terms
- [x] Open Graph tags for social sharing
- [x] Semantic HTML (`<section>`, `<nav>`, `<footer>`, `<main>`)
- [x] Alt text on images (add when replacing emoji)
- [ ] Add Google Analytics script to `index.html`
- [ ] Submit sitemap to Google Search Console
- [ ] Register on Google Business Profile (already rated 4.8★)
- [ ] Add JSON-LD structured data for local business

### JSON-LD (add to index.html `<head>`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Vintage Fitness Gym",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kondapur",
    "addressLocality": "Gachibowli",
    "addressRegion": "Telangana",
    "postalCode": "500084",
    "addressCountry": "IN"
  },
  "telephone": "+919000023008",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "368"
  }
}
</script>
```

---

## Deployment Options

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to netlify.com/drop
```

### Hostinger / cPanel
```bash
npm run build
# Upload contents of 'dist/' folder to public_html/
```

---

## Performance Tips

1. **Images** — Convert all photos to `.webp` format (50–70% smaller)
2. **Lazy loading** — Add `loading="lazy"` to all `<img>` tags
3. **Fonts** — Already using `preconnect` for Google Fonts
4. **Bundle** — Vite tree-shakes unused code automatically

---

## WhatsApp Lead Flow

```
Visitor lands on site
    ↓
Clicks any CTA (Book Trial, Chat, Program, Trainer)
    ↓
Opens WhatsApp with pre-filled message
    ↓
Gym team receives lead with context (name + goal)
    ↓
Respond within 5 minutes → Convert to member
```

---

Built with ❤️ for **Vintage Fitness Gym** · Kondapur, Hyderabad
