# Explorer's Feast - Modpack Website

A beautiful, responsive landing page for the Explorer's Feast Minecraft modpack built with Next.js 16.

## Features

- 🎨 6 Theme Options (Light, Dark, Purple, Green, Pink, Violet)
- 🌍 Multi-language Support (中文, English, 日本語)
- ✨ Animated typing effect for title
- 📊 Counting animations for statistics
- 📱 Fully responsive design
- 🎭 Smooth transitions and hover effects

## Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

1. **Fork or Clone this repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd explorers-feast-website
   \`\`\`

2. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   \`\`\`

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Next.js on Netlify**
   - Install the Netlify Next.js plugin (Netlify will prompt you)
   - Your site will be live!

### Option 3: Self-hosting

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Start the production server**
   \`\`\`bash
   npm start
   \`\`\`

4. **Access your site**
   - Open browser to `http://localhost:3000`
   - For public access, use nginx or similar to proxy to your server

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

## Customization

- **Colors**: Edit theme colors in `app/globals.css`
- **Content**: Update translations in `app/page.tsx`
- **Links**: Modify Discord, QQ, and social links in `app/page.tsx`

## Tech Stack

- Next.js 16
- React 19.2
- Tailwind CSS v4
- TypeScript
- shadcn/ui components

## License

© 2025 Lonivxy & KimiOkComputer
