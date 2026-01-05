# Installation Guide

Step-by-step instructions for setting up your portfolio website.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Node.js** (v18.0.0 or higher)
  - Download: [nodejs.org](https://nodejs.org)
  - Verify: `node --version`
  
- **npm** (comes with Node.js) or **yarn** or **pnpm**
  - Verify: `npm --version`

### Optional
- **Git** (for version control)
  - Download: [git-scm.com](https://git-scm.com)
  - Verify: `git --version`

- **VS Code** (recommended code editor)
  - Download: [code.visualstudio.com](https://code.visualstudio.com)

## 🚀 Installation Methods

### Method 1: Download ZIP (Easiest)

1. **Download the project**
   - Download the ZIP file
   - Extract to your desired location

2. **Open in terminal/command prompt**
   ```bash
   cd path/to/portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - Next.js
   - React
   - Tailwind CSS
   - Framer Motion
   - Lucide React
   - TypeScript
   - And other dependencies

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio!

### Method 2: Git Clone

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Go to [http://localhost:3000](http://localhost:3000)

## 🔧 Detailed Setup Steps

### Step 1: Install Node.js

#### Windows
1. Download installer from [nodejs.org](https://nodejs.org)
2. Run the installer
3. Follow installation wizard
4. Restart your computer
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### macOS
Using Homebrew:
```bash
brew install node
```

Or download from [nodejs.org](https://nodejs.org)

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Install Dependencies

Navigate to project directory:
```bash
cd portfolio
```

Install all dependencies:
```bash
npm install
```

**What gets installed:**
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - CSS framework
- `typescript` - Type checking
- And development dependencies

**Installation time:** 2-5 minutes depending on internet speed

### Step 3: Verify Installation

Check if everything is installed correctly:

```bash
# Check Node.js
node --version
# Should show: v18.x.x or higher

# Check npm
npm --version
# Should show: 9.x.x or higher

# List installed packages
npm list --depth=0
```

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
> portfolio@0.1.0 dev
> next dev

  ▲ Next.js 15.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

### Step 5: Open in Browser

1. Open your browser
2. Go to [http://localhost:3000](http://localhost:3000)
3. You should see the portfolio homepage!

## 🎨 VS Code Setup (Recommended)

### Install VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - Quick React component creation

2. **Tailwind CSS IntelliSense**
   - Autocomplete for Tailwind classes

3. **Prettier - Code formatter**
   - Automatic code formatting

4. **ESLint**
   - Code quality checking

5. **TypeScript and JavaScript Language Features**
   - Better TypeScript support

### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## 🐛 Troubleshooting Installation

### Issue: "node: command not found"

**Solution:**
- Node.js is not installed or not in PATH
- Reinstall Node.js
- Restart terminal/computer

### Issue: "npm install" fails

**Solution 1:** Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2:** Delete node_modules and try again
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3:** Use different package manager
```bash
# Try yarn
npm install -g yarn
yarn install

# Or pnpm
npm install -g pnpm
pnpm install
```

### Issue: Port 3000 already in use

**Solution:** Use different port
```bash
npm run dev -- -p 3001
```

Or kill the process using port 3000:

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: "Cannot find module" errors

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:**
```bash
# Rebuild TypeScript
npm run build
```

### Issue: Tailwind styles not working

**Solution:**
1. Check `tailwind.config.ts` exists
2. Check `postcss.config.mjs` exists
3. Restart dev server
4. Clear browser cache

### Issue: Framer Motion animations not working

**Solution:**
1. Check browser supports JavaScript
2. Check console for errors
3. Verify framer-motion is installed:
   ```bash
   npm list framer-motion
   ```

## 📦 Alternative Package Managers

### Using Yarn

```bash
# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev

# Build
yarn build
```

### Using pnpm

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build
pnpm build
```

## 🔄 Updating Dependencies

To update all dependencies to latest versions:

```bash
# Check for updates
npm outdated

# Update all
npm update

# Or update specific package
npm update next
```

## 🧹 Clean Installation

If you encounter persistent issues:

```bash
# Remove all installed packages
rm -rf node_modules

# Remove lock file
rm package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

## ✅ Installation Checklist

- [ ] Node.js v18+ installed
- [ ] npm/yarn/pnpm available
- [ ] Project downloaded/cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Browser shows portfolio at localhost:3000
- [ ] No console errors
- [ ] Hot reload works (edit a file and see changes)

## 🎯 Next Steps

After successful installation:

1. **Read QUICK_START.md** - 5-minute customization guide
2. **Read CUSTOMIZATION.md** - Detailed customization instructions
3. **Update your information** - Make it yours!
4. **Test thoroughly** - Check all features work
5. **Deploy** - Follow DEPLOYMENT.md

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [npm Documentation](https://docs.npmjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Troubleshooting Guide](https://nextjs.org/docs/messages)

## 🆘 Still Having Issues?

1. Check Node.js version: `node --version` (must be 18+)
2. Check npm version: `npm --version`
3. Try different package manager (yarn/pnpm)
4. Check firewall/antivirus settings
5. Try on different network
6. Check system requirements

---

**Installation should take 5-10 minutes total.** If you're stuck for more than 30 minutes, there might be a system-specific issue. Consider asking for help with your specific error message.

Good luck! 🚀
