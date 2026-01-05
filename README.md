# Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with Next.js 15, React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth gradients
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance**: Optimized for fast loading and smooth interactions
- **Type Safe**: Built with TypeScript for better code quality

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated background
2. **About** - Professional summary and skills showcase
3. **Projects** - Portfolio of development and design work
4. **Experience** - Timeline of work experience and education
5. **Contact** - Contact form and social links

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git (optional)

### Steps

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **components/Hero.tsx** - Your name, role, and tagline
2. **components/About.tsx** - Professional summary and skills
3. **components/Projects.tsx** - Your projects with descriptions
4. **components/Experience.tsx** - Work experience and education
5. **components/Contact.tsx** - Contact information and social links
6. **components/Footer.tsx** - Footer links and copyright
7. **app/layout.tsx** - SEO metadata

### Colors & Theme

Modify `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Images

Add your project images to the `public/projects/` directory and update the image paths in `components/Projects.tsx`.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure everything for you.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📝 Environment Variables

If you add features like contact form backend or analytics, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🎯 Performance Tips

- Optimize images using Next.js Image component
- Use lazy loading for heavy components
- Minimize bundle size by removing unused dependencies
- Enable caching for static assets

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Lucide React
- Animations powered by Framer Motion

## 📧 Contact

For questions or feedback, reach out via the contact form on the website or through social media links.

---

**Made with ❤️ using Next.js and Tailwind CSS**
