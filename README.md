# Nexa Capital - Investment Company Website

A luxury black-and-gold themed investment company website with bilingual support (English/Chinese). Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Bilingual Support**: Seamless switching between English and Chinese
- 🎨 **Luxury Design**: Black & gold color scheme with sophisticated animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile
- ⚡ **Performance**: Built with Next.js App Router for optimal performance
- 🔍 **SEO Optimized**: Proper meta tags and Open Graph support
- ♿ **Accessible**: Semantic HTML and ARIA labels

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yadubi/www-nexa.git
cd www-nexa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
www-nexa/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── LanguageToggle.tsx  # Language switcher
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Philosophy.tsx
│       ├── Approach.tsx
│       ├── Focus.tsx
│       ├── Portfolio.tsx
│       ├── Insights.tsx
│       └── Contact.tsx
└── lib/
    └── i18n/               # Internationalization
        ├── dictionary.ts   # All translations (EN/CN)
        └── language-context.tsx
```

## Customization Guide

### 1. Change Company Information

Edit `/lib/i18n/dictionary.ts` to update:

- **Company Name**: Search for "Nexa Capital" and replace
- **Email**: Update `contact.email` in both `en` and `zh` objects
- **Location**: Update `contact.location` in both languages
- **Slogan/Headlines**: Modify `hero.headline` and `hero.subheading`

Example:
```typescript
// In dictionary.ts
export const dictionary = {
  en: {
    hero: {
      headline: 'Your Custom Headline',
      // ...
    },
    contact: {
      email: 'your@email.com',
      location: 'Your Location',
    },
  },
  // Repeat for zh (Chinese)
}
```

### 2. Update Content Sections

All content is centralized in `/lib/i18n/dictionary.ts`:

- **About Section**: Edit `about.paragraph1` and `about.paragraph2`
- **Philosophy**: Edit `philosophy.paragraph1` and `philosophy.paragraph2`
- **Investment Approach**: Modify `approach.items` array
- **Investment Focus**: Modify `focus.items` array
- **Portfolio Projects**: Update `portfolio.projects` array
- **Insights Articles**: Edit `insights.articles` array

### 3. Customize Styling

#### Colors
Edit `/app/globals.css` to change the gold accent color:

```css
:root {
  --color-gold: #d4af37;        /* Main gold color */
  --color-gold-light: #f0d58c;  /* Lighter gold for hovers */
  --color-gold-dark: #b8941f;   /* Darker gold for accents */
}
```

#### Typography
Font families are configured in `/app/layout.tsx`. To change fonts:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### 4. Add/Remove Sections

To add a new section:

1. Create a new component in `/components/sections/YourSection.tsx`
2. Import and add it to `/app/page.tsx`
3. Add navigation link in `/components/Header.tsx`
4. Add translations in `/lib/i18n/dictionary.ts`

To remove a section:
1. Remove the import and component from `/app/page.tsx`
2. Remove navigation link from `/components/Header.tsx`

### 5. SEO Customization

Edit metadata in `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
  keywords: ["your", "keywords"],
  // ...
};
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click "Deploy"

Your site will be live with automatic HTTPS and global CDN.

### Deploy to Other Platforms

The site can be deployed to any platform supporting Next.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Supports Next.js SSR
- **Self-hosted**: Run `npm run build && npm start`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Fonts**: Geist Sans & Geist Mono (from Vercel)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See [LICENSE](LICENSE) file for details.

## Support

For questions or issues:
- Email: hello@nexacap.com
- GitHub Issues: [Create an issue](https://github.com/yadubi/www-nexa/issues)

---

**Note**: This is a template website. All company information, project details, and contact information are placeholders and should be replaced with your actual data.
