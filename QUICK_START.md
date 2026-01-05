# Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from [nodejs.org](https://nodejs.org) (v18 or higher)
- Verify installation: `node --version`

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 🎯 Essential Customizations

### 1. Update Your Name (2 minutes)

**File**: `components/Hero.tsx`
- Line 42: Change `"Your Name"` to your actual name
- Line 51: Update your role/title

### 2. Add Your Projects (5 minutes)

**File**: `components/Projects.tsx`
- Lines 13-78: Update the `projects` array
- Add your project titles, descriptions, and links
- Optionally add images to `public/projects/`

### 3. Update Contact Info (2 minutes)

**File**: `components/Contact.tsx`
- Lines 35-51: Update email, phone, location
- Lines 53-71: Update social media links

### 4. Update About Section (3 minutes)

**File**: `components/About.tsx`
- Lines 13-22: Update your skills
- Lines 82-91: Update your bio

### 5. Update Experience (5 minutes)

**File**: `components/Experience.tsx`
- Lines 13-54: Update work experience and education

## 🎨 Quick Styling Changes

### Change Primary Color

**File**: `tailwind.config.ts`

Replace the primary color values (lines 14-24):
```typescript
primary: {
  500: '#0ea5e9',  // Main color
  600: '#0284c7',  // Hover state
  // ... other shades
}
```

Popular color options:
- Blue: `#0ea5e9`
- Purple: `#a855f7`
- Green: `#10b981`
- Pink: `#ec4899`
- Orange: `#f97316`

### Change Font

**File**: `app/layout.tsx`

Line 6:
```typescript
import { Inter } from "next/font/google";
// Change to: Poppins, Roboto, Montserrat, etc.
```

## 📱 Testing Checklist

Before deploying, test these:

- [ ] All sections scroll smoothly
- [ ] Dark mode toggle works
- [ ] Mobile menu opens/closes
- [ ] All links work (update placeholder URLs)
- [ ] Contact form shows success message
- [ ] Responsive on mobile (use browser dev tools)
- [ ] No console errors

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Done! 🎉

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Done! 🎉

## 🔧 Common Issues & Fixes

### Issue: npm install fails
**Fix**: 
```bash
# Clear npm cache
npm cache clean --force
# Try again
npm install
```

### Issue: Port 3000 already in use
**Fix**:
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Dark mode not working
**Fix**: Clear browser cache and localStorage

### Issue: Animations not smooth
**Fix**: Check if hardware acceleration is enabled in browser

## 📝 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to remote

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

## 🎓 Learning Resources

### Next.js
- [Official Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Documentation](https://tailwindcss.com/docs)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Framer Motion
- [Documentation](https://www.framer.com/motion/)
- [Examples](https://www.framer.com/motion/examples/)

## 💡 Pro Tips

1. **Use Real Content**: Replace placeholder text with your actual achievements
2. **Optimize Images**: Use tools like TinyPNG before adding images
3. **Test on Real Devices**: Don't just rely on browser dev tools
4. **Keep It Updated**: Regularly add new projects and skills
5. **Get Feedback**: Share with friends/colleagues for honest feedback
6. **Monitor Performance**: Use Lighthouse in Chrome DevTools
7. **Add Analytics**: Track visitors with Google Analytics or Vercel Analytics

## 🎯 Next Steps

After basic setup:

1. **Add Real Projects**: Replace example projects with your work
2. **Add Images**: Create and add project screenshots
3. **Customize Colors**: Match your personal brand
4. **Add Resume**: Place your PDF in `public/resume.pdf`
5. **Set Up Domain**: Get a custom domain for professional look
6. **Add Analytics**: Track your portfolio performance
7. **Share**: Add to LinkedIn, resume, email signature

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- See `CUSTOMIZATION.md` for step-by-step customization
- Read `DEPLOYMENT.md` for deployment guides
- Review `PROJECT_STRUCTURE.md` to understand the codebase

## ✅ Launch Checklist

Before going live:

- [ ] All personal info updated
- [ ] Real projects added
- [ ] Contact info correct
- [ ] Social links work
- [ ] Tested on mobile
- [ ] Dark mode works
- [ ] No placeholder text
- [ ] SEO metadata updated
- [ ] Resume PDF added
- [ ] All images optimized
- [ ] Tested in multiple browsers
- [ ] No console errors

---

**You're ready to launch! 🚀**

Remember: Your portfolio is never "done" - keep updating it as you grow!
