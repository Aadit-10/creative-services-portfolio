# Creative Services Portfolio Website

A modern, minimalist portfolio website for Creative Services, a service-based creative agency.

## Features

- **Hero Section**: Catchy headline with CTA button
- **Services Section**: 7 service cards with icons and descriptions
- **Portfolio Section**: 2 project showcases with screenshot galleries
- **About Section**: Company overview with statistics
- **Contact Section**: Contact information display
- **Responsive Design**: Mobile-first with hamburger menu
- **Modern Tech Stack**: React + Vite + TailwindCSS

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type safety
- **Lucide React**: Icon library

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

## License

MIT
