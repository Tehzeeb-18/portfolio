# Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your skills and experience in About section
- [ ] Add your projects with images and links
- [ ] Update work experience and education timeline
- [ ] Add your contact information and social links
- [ ] Update SEO metadata
- [ ] Add your resume/CV file
- [ ] Customize colors and theme

## 📝 Step-by-Step Customization

### 1. Hero Section (`components/Hero.tsx`)

Replace the following:
- Line 42: `Your Name` - Your actual name
- Line 51: `Frontend Developer & Graphic Designer` - Your role/title
- Line 59-61: Update the tagline to describe yourself
- Lines 82-104: Update social media links (GitHub, LinkedIn)

### 2. About Section (`components/About.tsx`)

**Skills Array (Lines 13-22):**
```typescript
const skills = [
  { name: "Your Skill", level: 90 },
  // Add or remove skills as needed
];
```

**Professional Summary (Lines 82-91):**
- Update the text to describe your background
- Mention your specializations
- Add information about your internships/work

### 3. Projects Section (`components/Projects.tsx`)

**Projects Array (Lines 13-78):**
```typescript
{
  title: "Your Project Name",
  description: "Project description",
  image: "/projects/your-image.jpg", // Add image to public/projects/
  tags: ["Tech", "Stack", "Used"],
  github: "https://github.com/yourusername/project",
  live: "https://your-project-url.com",
  gradient: "from-blue-400 to-purple-600", // Choose gradient colors
}
```

**Adding Project Images:**
1. Create folder: `public/projects/`
2. Add your project screenshots
3. Update image paths in the projects array

### 4. Experience Section (`components/Experience.tsx`)

**Work Experience (Lines 13-38):**
```typescript
{
  type: "work",
  title: "Your Job Title",
  company: "Company Name",
  period: "Start Date - End Date",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2",
  ],
  icon: <Briefcase className="w-5 h-5" />,
  color: "from-blue-500 to-cyan-500",
}
```

**Education (Lines 40-54):**
- Update degree, institution, and period
- Add relevant coursework or achievements
- Update GPA if applicable

### 5. Contact Section (`components/Contact.tsx`)

**Contact Information (Lines 35-51):**
```typescript
{
  icon: <Mail className="w-5 h-5" />,
  label: "Email",
  value: "your.email@example.com",
  href: "mailto:your.email@example.com",
}
```

**Social Links (Lines 53-71):**
- Update GitHub, LinkedIn, Twitter URLs
- Add or remove social platforms as needed

### 6. Footer (`components/Footer.tsx`)

- Line 13: Update GitHub URL
- Line 21: Update LinkedIn URL
- Line 29: Update email address
- Line 38: Update your name in copyright

### 7. SEO Metadata (`app/layout.tsx`)

Lines 11-20:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your professional description",
  keywords: ["Your", "Keywords"],
  authors: [{ name: "Your Name" }],
  // ... update other fields
};
```

### 8. Navigation (`components/Navbar.tsx`)

Line 26: Update logo text if desired

### 9. Color Scheme (`tailwind.config.ts`)

Customize the primary color palette (Lines 14-24):
```typescript
primary: {
  50: '#f0f9ff',
  // ... customize all shades
  900: '#0c4a6e',
}
```

## 🎨 Design Customization

### Changing Gradient Colors

Throughout the components, you'll find gradient classes like:
```typescript
className="bg-gradient-to-r from-primary-600 to-purple-600"
```

You can change these to any Tailwind color:
- `from-blue-500 to-cyan-500`
- `from-pink-500 to-purple-500`
- `from-green-500 to-emerald-500`

### Adjusting Animations

Framer Motion animations can be customized by changing:
- `duration`: Animation speed
- `delay`: When animation starts
- `initial` and `animate`: Start and end states

Example:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
```

## 📸 Adding Images

### Project Images
1. Create `public/projects/` folder
2. Add images (recommended: 1200x800px, optimized)
3. Update paths in `components/Projects.tsx`

### Profile Photo (Optional)
1. Add to `public/profile.jpg`
2. Import in Hero or About component
3. Use Next.js Image component for optimization

## 🔗 Adding Resume Download

1. Add your resume PDF to `public/resume.pdf`
2. The download button in Hero section will automatically work
3. Or update the path in `components/Hero.tsx` line 102

## 🌐 Domain & Deployment

After deploying, update:
1. `public/robots.txt` - Add your domain
2. Social media preview images (og:image)
3. Canonical URLs in metadata

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images (optimized for web)
- Test on multiple devices and browsers
- Update content regularly
- Add real project links when available

## 🆘 Need Help?

If you encounter issues:
1. Check the console for errors
2. Verify all imports are correct
3. Ensure all required fields are filled
4. Test in development mode first

---

Happy customizing! 🚀
