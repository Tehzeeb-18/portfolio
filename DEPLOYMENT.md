# Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! Your site is live

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Netlify

### Method 1: Git Integration

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## ☁️ AWS Amplify

1. **Push to GitHub**

2. **Deploy on AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Build settings (auto-detected):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Click "Save and deploy"

## 🚂 Railway

1. **Push to GitHub**

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Next.js
   - Click "Deploy"

## 🎨 Render

1. **Push to GitHub**

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Settings:
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
   - Click "Create Web Service"

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 🌊 DigitalOcean App Platform

1. **Push to GitHub**

2. **Deploy on DigitalOcean**
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect your GitHub repository
   - Configure:
     - Build Command: `npm run build`
     - Run Command: `npm start`
   - Click "Next" and "Launch App"

## 📊 Environment Variables

If you need environment variables:

### Vercel
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy

### Netlify
- Go to Site Settings → Build & Deploy → Environment
- Add your variables
- Trigger new deploy

### Other Platforms
- Check their documentation for environment variable configuration

## 🔒 Custom Domain Setup

### General Steps

1. **Purchase a domain** (Namecheap, GoDaddy, Google Domains, etc.)

2. **Add domain to your hosting platform**
   - Follow platform-specific instructions
   - Usually in Project Settings → Domains

3. **Update DNS records**
   - Add A record or CNAME as instructed
   - Wait for DNS propagation (can take up to 48 hours)

4. **Enable HTTPS**
   - Most platforms auto-provision SSL certificates
   - Ensure "Force HTTPS" is enabled

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add real project images
- [ ] Test on multiple devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update SEO metadata
- [ ] Test contact form
- [ ] Add Google Analytics (optional)
- [ ] Create custom 404 page (optional)
- [ ] Test dark mode
- [ ] Check console for errors
- [ ] Test performance (Lighthouse)

## 🎯 Post-Deployment

1. **Test your live site**
   - Check all pages and sections
   - Test on mobile devices
   - Verify all links work

2. **Set up analytics** (optional)
   - Google Analytics
   - Vercel Analytics
   - Plausible

3. **Submit to search engines**
   - Google Search Console
   - Bing Webmaster Tools

4. **Share your portfolio**
   - Update LinkedIn
   - Add to resume
   - Share on social media

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Verify all dependencies are installed
- Check for TypeScript errors
- Review build logs

### Images Not Loading
- Ensure images are in `public/` folder
- Check file paths are correct
- Verify image formats are supported

### Styling Issues
- Clear browser cache
- Check Tailwind CSS is properly configured
- Verify dark mode classes

### Performance Issues
- Optimize images (use WebP format)
- Enable caching
- Use Next.js Image component
- Minimize JavaScript bundle

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

Good luck with your deployment! 🚀
