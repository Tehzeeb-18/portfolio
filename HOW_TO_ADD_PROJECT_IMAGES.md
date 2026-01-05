# How to Add Project Images

Follow these steps to add screenshots of your projects to the portfolio.

## 📸 Step 1: Take Screenshots

### For Cafedine (https://cafedinetask.netlify.app/)
1. Open the website in your browser
2. Press `F11` for fullscreen (optional, for cleaner screenshot)
3. Take a screenshot:
   - **Windows:** Press `Windows + Shift + S` or use Snipping Tool
   - **Mac:** Press `Cmd + Shift + 4`
4. Save as `cafedine.jpg` or `cafedine.png`

### Recommended Screenshot Settings
- **Resolution:** 1200x800 pixels (or similar 3:2 ratio)
- **Format:** JPG or PNG
- **Quality:** High quality but optimized for web
- **Content:** Show the main/hero section of your project

## 📁 Step 2: Create Projects Folder

In your portfolio directory, create the folder:

```
C:\Users\DeLL\Documents\My Portofolio\public\projects\
```

**Using File Explorer:**
1. Navigate to `C:\Users\DeLL\Documents\My Portofolio\public\`
2. Right-click → New → Folder
3. Name it `projects`

**Using Command Prompt:**
```cmd
cd "C:\Users\DeLL\Documents\My Portofolio"
mkdir public\projects
```

## 📥 Step 3: Add Your Images

Copy your screenshots to the `public/projects/` folder with these names:

- `cafedine.jpg` - Cafedine website screenshot
- `skin-detection.jpg` - Skin lesion detection project
- `brand-design.jpg` - Your graphic design work
- `animated-landing.jpg` - Any animated landing page
- `dashboard.jpg` - Dashboard project
- `motion-graphics.jpg` - Motion graphics work

## 🎨 Step 4: Optimize Images (Optional but Recommended)

Use online tools to optimize your images:

1. **TinyPNG** - https://tinypng.com
   - Drag and drop your images
   - Download optimized versions
   - Can reduce file size by 50-70%

2. **Squoosh** - https://squoosh.app
   - More control over compression
   - Compare before/after

3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)
   - Desktop apps for batch optimization

## 🖼️ Current Project Images Needed

Based on your projects, you need these images:

1. ✅ **cafedine.jpg** - Screenshot from https://cafedinetask.netlify.app/
2. ⏳ **skin-detection.jpg** - Your final year project
3. ⏳ **brand-design.jpg** - Your graphic design portfolio
4. ⏳ **animated-landing.jpg** - Any animation project
5. ⏳ **dashboard.jpg** - Dashboard project (if you have one)
6. ⏳ **motion-graphics.jpg** - Motion graphics work

## 🔄 If You Don't Have All Projects Yet

**Option 1: Remove Placeholder Projects**

Edit `components/Projects.tsx` and keep only your real projects.

**Option 2: Use Gradient Backgrounds (Current Setup)**

The portfolio currently uses gradient backgrounds with the first letter of the project name. This looks professional until you add real images!

**Option 3: Use Placeholder Images**

Use free stock photos from:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com

## ✅ Verify Images Work

After adding images:

1. Refresh your browser (http://localhost:3000)
2. Scroll to the Projects section
3. Images should appear in the project cards
4. If not showing, check:
   - File names match exactly (case-sensitive)
   - Files are in `public/projects/` folder
   - File extensions are correct (.jpg or .png)

## 📝 Quick Checklist

- [ ] Created `public/projects/` folder
- [ ] Took screenshot of Cafedine website
- [ ] Saved as `cafedine.jpg` in projects folder
- [ ] Optimized image size (optional)
- [ ] Refreshed browser to see changes
- [ ] Added other project screenshots (as available)

## 💡 Pro Tips

1. **Consistent sizing:** Try to keep all images the same dimensions
2. **Show the best part:** Capture the most impressive section of your project
3. **Clean screenshots:** Close unnecessary browser tabs/toolbars
4. **Mobile view:** Consider taking mobile screenshots too
5. **Update regularly:** Add new projects as you complete them

## 🆘 Troubleshooting

**Images not showing?**
- Check file path: `public/projects/cafedine.jpg`
- Check file name spelling (exact match)
- Try refreshing with Ctrl+F5 (hard refresh)
- Check browser console for errors (F12)

**Images too large?**
- Optimize with TinyPNG
- Resize to 1200x800 pixels
- Convert to JPG if using PNG

**Wrong aspect ratio?**
- Crop to 3:2 ratio (1200x800, 900x600, etc.)
- Use online crop tools

---

**Once you add the images, your portfolio will look even more professional!** 🚀
