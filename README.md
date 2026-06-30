# Creative Services Portfolio Website

A modern, minimalist portfolio website for Creative Services, a service-based creative agency.

## Features

- **Hero Section**: Catchy headline with fade-in animations, parallax background, and animated CTA button
- **Services Section**: 9 service cards with scroll-triggered entrance animations, hover effects, and icon rotation
- **Portfolio Section**: Project showcases with alternating entrance animations, image zoom on hover, crossfade gallery, and pulsing service badges
- **About Section**: Company overview with text reveal animations and animated statistics counter
- **Contact Section**: Interactive form with focus animations, validation, and success message animation
- **Navigation**: Sticky header with scroll-triggered "Get Started" CTA button
- **Responsive Design**: Mobile-first with hamburger menu and reduced-motion support
- **Modern Tech Stack**: React + Vite + TailwindCSS + Framer Motion

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type safety
- **Lucide React**: Icon library
- **Framer Motion**: Animation library for smooth, performant animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration from `vercel.json`
4. Deploy!

## Project Structure

```
src/
├── components/
│   ├── Logo.tsx
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- Primary: `#0f172a` (navy)
- Accent: `#06b6d4` (teal)
- Neutral Light: `#f8fafc` (light gray)
- Neutral Dark: `#1e293b` (dark text)

### Images

Replace placeholder images in `public/images/` with actual project screenshots:
- `indhukanthi-1.jpg`
- `indhukanthi-2.jpg`

### Contact Information

Update contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Animations

The site uses **Framer Motion** for smooth, performant animations. Animation configuration is centralized in `src/utils/animationConfig.ts`:

```typescript
export const animationConfig = {
  entrance: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  hover: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  scroll: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}
```

**Animation Features:**
- **Hero**: Fade-in text with stagger, parallax background zoom, CTA hover lift
- **Services**: Scroll-triggered card entrance (translateY + opacity), hover lift + icon rotation
- **Portfolio**: Alternating side entrance, image zoom (1→1.05x), crossfade gallery, pulsing badges
- **About**: Text line reveal, animated stats counter (ease-out cubic)
- **Contact**: Input focus glow, button hover scale, success message slide-up
- **Navigation**: Scroll-triggered CTA fade-in

**Performance Optimizations:**
- All animations use `transform` and `opacity` only (GPU-accelerated)
- `will-change` property on high-motion elements
- `prefers-reduced-motion` media query support (disables animations on request)
- Lazy loading on portfolio images
- Mobile-optimized: faster timing, no parallax on small screens

**Customizing Animations:**
1. Adjust timing in `src/utils/animationConfig.ts`
2. Modify easing curves using cubic-bezier arrays
3. Toggle animations via `checkReducedMotion()` utility
4. Update Tailwind keyframes in `tailwind.config.js` for custom CSS animations

## License

MIT
