# the3gsfitness

High-performance gym and wellness facility application & podcast website.

## Project Structure

```
├── frontend/             # React + Vite + Tailwind CSS frontend application
│   ├── src/              # Application source code & components
│   ├── public/           # Static assets, logos, and images
│   ├── package.json      # Frontend dependencies & scripts
│   ├── vite.config.ts    # Vite configuration
│   └── tsconfig.json     # TypeScript configuration
├── package.json          # Root convenience scripts (delegates to frontend)
└── README.md
```

## Running Locally

### Option 1: From the Root Directory
```bash
# Run dev server
npm run dev

# Build for production
npm run build
```

### Option 2: Inside the `frontend` Directory
```bash
cd frontend
npm install
npm run dev
```

## Deployment

- **Vercel / Netlify / Cloudflare Pages**: Set the Root Directory to `frontend` (Build command: `npm run build`, Output directory: `dist`).
- **Standard Host**: You can also build directly from root using `npm run build`.
