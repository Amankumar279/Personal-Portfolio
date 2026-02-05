# Portfolio Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

Check your versions:
```bash
node --version
npm --version
```

## 🚀 Quick Start (5 minutes)

### Step 1: Navigate to Project Directory
```bash
cd portfolio-react
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- react & react-dom (UI framework)
- framer-motion (animations)
- lucide-react (icons)
- vite (build tool)

### Step 3: Start Development Server
```bash
npm run dev
```

Your portfolio will be available at: `http://localhost:3000`

## 🎨 Customization

### 1. Update Your Information

Edit `src/data/resumeData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  bio: "Your bio here..."
};
```

### 2. Add Your Experience

```javascript
export const experience = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    period: "Jan 2024 – Present",
    link: "https://project-link.com",
    description: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
];
```

### 3. Add Your Projects

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    subtitle: "Brief Description",
    tech: "Tech Stack Used",
    period: "Date Range",
    link: "https://live-demo.com",
    description: [
      "Feature 1",
      "Feature 2"
    ]
  }
];
```

### 4. Update Skills

```javascript
export const skills = {
  languages: ["JavaScript", "Python", "Java"],
  frontend: ["React", "Vue", "Angular"],
  backend: ["Node.js", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "AWS", "Jenkins"]
};
```

### 5. Customize Colors

Edit `src/styles/global.css`:

```css
:root {
  --bg-primary: #0a0a0a;        /* Main background */
  --accent-primary: #00ff88;     /* Primary accent color */
  --accent-secondary: #00ccff;   /* Secondary accent color */
  --text-primary: #ffffff;       /* Primary text */
  --text-secondary: #a0a0a0;     /* Secondary text */
}
```

### 6. Change Fonts

Update `index.html` with your preferred Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;700&display=swap" rel="stylesheet">
```

Then update CSS variables in `src/styles/global.css`:

```css
:root {
  --font-primary: 'Your Font', sans-serif;
}
```

## 🏗️ Building for Production

### Build the Project
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Easiest - Recommended)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
```bash
npm install -g vercel
```
3. Deploy:
```bash
vercel
```
4. Follow the prompts and your site will be live!

### Option 2: Netlify

1. Build your project:
```bash
npm run build
```
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Your site is live!

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Custom Domain with Vercel

1. Deploy to Vercel (see Option 1)
2. Go to your project settings
3. Add your custom domain
4. Update DNS records as instructed
5. Done!

## 📱 Testing Responsiveness

### Browser DevTools
- Open DevTools (F12 or Cmd+Option+I)
- Click device toolbar icon
- Test different screen sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1440px, 1920px

### Physical Devices
Test on actual devices for best results:
- iPhone/Android phones
- iPads/Android tablets
- Desktop monitors

## 🐛 Troubleshooting

### Issue: "Module not found" errors
**Solution**: Run `npm install` again

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Use different port
npm run dev -- --port 3001
```

### Issue: Build fails
**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building: `npm run build`

### Issue: Animations not smooth
**Solution**: Check browser hardware acceleration is enabled

### Issue: Fonts not loading
**Solution**: Check internet connection or use local font files

## 📊 Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before adding
- Use appropriate image sizes

### Code Splitting
Already configured in Vite - separate vendor bundles

### Lazy Loading
For future enhancements, add route-based code splitting

## 🔒 Security Best Practices

1. Never commit `.env` files with sensitive data
2. Use environment variables for API keys
3. Keep dependencies updated: `npm update`
4. Run security audit: `npm audit`

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 💡 Tips for Best Results

1. **Keep it simple**: Don't overcomplicate the design
2. **Mobile-first**: Design for mobile, then scale up
3. **Performance**: Optimize images and minimize bundle size
4. **Accessibility**: Test with screen readers
5. **SEO**: Add meta tags and alt text for images
6. **Analytics**: Add Google Analytics or similar
7. **Regular updates**: Keep your portfolio current

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Search GitHub issues
3. Check Stack Overflow
4. Review documentation

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added all projects and experience
- [ ] Updated skills section
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Optimized images
- [ ] Added meta tags for SEO
- [ ] Tested all links work
- [ ] Fixed any console errors
- [ ] Ran production build successfully
- [ ] Checked load time (aim for <3 seconds)

---

Good luck with your portfolio! 🚀
