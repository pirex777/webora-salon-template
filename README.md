# Webora Studio — Premium Beauty Salon Template

A complete single-page salon website built with React 19, TypeScript, Vite 6, Tailwind CSS 4, and Lucide icons. No backend, API keys, or paid integrations.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173).

```sh
npm run check    # strict TypeScript validation
npm run build    # type checking and production build in dist/
npm run preview  # serve the production build locally
```

After initial installation, use `npm ci` for reproducible installs from the included lockfile.

## Customize a salon

Edit **src/config.ts** for the salon name, initials, WhatsApp number and message, Instagram URL and handle, address, map destination, opening hours, services, and every main photograph.

The number **96500000000 is a placeholder**. Booking buttons deliberately display a demo dialog instead of contacting that number. Set a real international digits-only number and set `isDemo: false` to activate every WhatsApp link, including the floating button. Instagram currently links to Instagram's homepage; replace it with a client's actual profile. The map is a neighborhood search, not a verified salon location.

The address, hours, salon copy and testimonials are demonstration content. Each sample review is clearly marked. Replace review content with approved, verified testimonials before client launch; do not remove the labels while using fictional copy. Edit the content in src/main.tsx and metadata in index.html for each client. The footer year updates automatically.

## Structure

- `src/config.ts`: typed central client configuration and Unsplash source URLs
- `src/main.tsx`: reusable brand and booking controls; all page sections and accessible demo dialog
- `src/styles.css`: Tailwind import, visual system, responsive layouts, entrance and hover effects
- `public/favicon.svg`: editable monogram icon
- `vite.config.ts`, `tsconfig.json`, `package.json`: build configuration
- `.openai/hosting.json`: private demonstration hosting identity; remove or replace for a new deployment

## Imagery and typography

Photography uses free Unsplash demonstration images and is not represented as actual salon work. Source IDs are centralized in config.ts. Replace them with client-owned or appropriately licensed photos; download and optimize those photos into public/ for independent hosting. Remote images require access to images.unsplash.com. Gallery images are decorative portfolio inspiration, not review evidence. Each image has descriptive alt text; below-the-fold images load lazily and the hero receives high fetch priority. Fonts are Cormorant Garamond and Manrope via Google Fonts, with local system fallbacks. Self-host licensed font files for deployments that require no third-party requests.

## Accessibility, motion and language

Includes landmarks, skip navigation, keyboard focus styling, accessible icon labels, a stateful mobile menu with Escape support, native modal focus behavior, and reduced-motion overrides. Layout uses logical inline properties where appropriate. The configuration already exposes locale and direction. To add Arabic, move section copy into locale dictionaries, provide Arabic font coverage, set locale to ar and direction to rtl, and review directional icons, spacing and line wrapping in both languages. Arabic translation is not included.

## Deploy

Run `npm run build`, then upload **dist/** to any static host (e.g. Cloudflare Pages, GitHub Pages, or Netlify). No server functions or SPA route rewrites are needed. For hosting under a subdirectory, set Vite's base option and update the favicon path accordingly.

## Release checks

Before a client launch, replace all demonstration contact details and imagery, verify map/profile destinations, use verified reviews, update page metadata, and test real booking links. Confirm layouts on actual iOS and Android devices. No analytics or cookie tracking is included.
