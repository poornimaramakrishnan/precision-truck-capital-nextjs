# Precision Truck Capital — Marketing Website


A clean, fast, fully static 5-page marketing website built with **Next.js 14** (App Router) and **Tailwind CSS** for a commercial truck financing company.

## 🚀 Live Demo

[View Live Site →](#) *(Deployed on Vercel)*

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, trust bar, value props, equipment grid, dealer teaser, testimonials |
| **Services** | `/services` | Financing programs, key benefits, how it works, FAQ accordion |
| **Dealer Program** | `/dealer-program` | Dealer benefits, 4-step process, features, dealer testimonials |
| **About** | `/about` | Company story, stats, differentiators, values, leadership team |
| **Contact** | `/contact` | Contact form, quick contact info, map note |

## 🛠 Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** (custom navy + orange color palette)
- **Lucide React** (icon library)
- **Static HTML export** — no server, no database, no CMS

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header + Footer
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── dealer-program/page.tsx  # Dealer Program page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Footer.tsx          # Footer with links
│   ├── Hero.tsx            # Reusable hero section
│   ├── IconCard.tsx        # Icon + text card component
│   ├── TrustBar.tsx        # Stats trust bar
│   ├── SectionHeading.tsx  # Section heading component
│   ├── StepsTimeline.tsx   # Numbered steps timeline
│   ├── Testimonials.tsx    # Testimonial cards
│   ├── FAQAccordion.tsx    # Collapsible FAQ
│   ├── ContactForm.tsx     # Contact/application form
│   └── CTASection.tsx      # Call-to-action banner
└── data/
    ├── site.ts             # Site-wide config (name, phone, nav)
    ├── home.ts             # Home page content
    ├── services.ts         # Services page content
    ├── dealer.ts           # Dealer program content
    ├── about.ts            # About page content
    ├── contact.ts          # Contact page content
    └── images.ts           # Hero image URLs
```

## 🚧 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build & Deploy

```bash
npm run build    # Generates static HTML in /out
```

Deploy the `/out` directory to Vercel, Netlify, or any static host.

## 🎨 Design

- **Colors**: Deep navy (#102a43) + Safety orange (#f59e0b) + White backgrounds
- **Typography**: Inter (Google Fonts)
- **Style**: Clean, modern, industrial — mobile-first responsive
- **Components**: All reusable, data-driven from /data files

## 📝 Content Management

All page content lives in simple TypeScript files under `/src/data/`. To update content, edit the relevant data file — no CMS or database needed.

---

Built for the American trucking industry.
