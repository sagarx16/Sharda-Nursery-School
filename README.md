# S.N. Public School & Tuition Center — Next.js Application

A production-ready, scalable, and responsive Next.js (App Router) web application built for **S.N. Public School & Tuition Center**, Bokaro Steel City. Migrated faithfully from Google Stitch design reference (Project ID: `2557966356959833211`).

---

## 🌟 Tech Stack & Features

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Stitch design tokens (`#500012` Crimson Maroon, `#D4AF37` Gold, `#fff8f4` Soft Ivory canvas)
- **Typography**: Playfair Display (Headings) + Plus Jakarta Sans (Body & UI) via `next/font/google`
- **Icons**: Lucide React & Material Symbols Outlined
- **Images**: Next.js `next/image` with local optimized assets from `/public/images/`
- **Dynamic Content**:
  - Central `config/site.ts` auto-calculates current & upcoming academic session years (e.g. `2026-27`) based on system date.
  - Dynamic footer copyright year (`new Date().getFullYear()`).
  - Dynamic intake year badges across hero sections and forms.
- **Functional API**: Next.js API route (`/app/api/inquiry/route.ts`) handling admission form submissions with input validation, Resend email notifications, and clean success feedback.

---

## 📁 App Router Architecture & Page Structure

```text
app/
├── layout.tsx                # Root layout with Google Fonts, Header, Footer & SEO metadata
├── page.tsx                  # Home & Welcome Page (Overview, Wings, Entrance Coaching, Form & FAQs)
├── academics-admissions/
│   └── page.tsx              # Academics & Admissions Page (Stitch design reference implementation)
├── campus-life-gallery/
│   └── page.tsx              # Campus Life & Facilities + Filterable Photo Gallery
├── contact/
│   └── page.tsx              # Contact Us, Operating Hours, Map & Direct Call
└── api/
    └── inquiry/
        └── route.ts          # POST API Route for Admission Inquiries
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your `RESEND_API_KEY` and `NOTIFICATION_EMAIL` if you wish to receive email notifications when inquiries are submitted.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🏛️ Brand Color Palette (Stitch Tokens)

| Token Role | Hex Color | Usage |
| :--- | :--- | :--- |
| **Primary Maroon** | `#500012` / `#721324` | Top bar, primary headers, badges & key CTAs |
| **Radiant Gold** | `#735c00` / `#fed65b` | Badges, achievement stars, admission highlights |
| **Tertiary Accent** | `#00263e` / `#cce5ff` | Middle school wing, science highlights |
| **Soft Ivory Base** | `#fff8f4` / `#faf2ed` | Background canvas and card surfaces |

---

## 📞 Support & Location

- **School Name**: S.N. Public School & Tuition Center
- **Address**: Sector 9/C, Shopping Center, Bokaro Steel City, Jharkhand - 827009
- **Phone**: +91 9835112975
- **Email**: contact@shardanurserybokaro.com
