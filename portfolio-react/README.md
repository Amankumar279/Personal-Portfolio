# Aman Kumar - Portfolio Website

A modern, responsive portfolio website built with React and Framer Motion, showcasing full-stack development experience and projects.

## 🚀 Features

- **Modern Design**: Dark theme with neon green accents and animated backgrounds
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Code splitting and lazy loading for fast load times
- **SEO Ready**: Meta tags and semantic HTML for better search engine visibility
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 5.1
- **Animations**: Framer Motion 11.0
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Darker Grotesque & JetBrains Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── Footer.jsx
│   │   ├── Hero/             # Hero section
│   │   │   ├── Hero.jsx
│   │   │   └── Stats.jsx
│   │   ├── Experience/       # Experience section
│   │   ├── Projects/         # Projects showcase
│   │   ├── Skills/           # Skills section
│   │   └── Contact/          # Contact section
│   ├── data/
│   │   └── resumeData.js     # Portfolio data
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   └── global.css        # Global styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/resumeData.js` to update:
- Personal info (name, email, social links)
- Experience history
- Projects
- Skills
- Certifications

### Modify Design

- **Colors**: Update CSS variables in `src/styles/global.css`
- **Fonts**: Change fonts in `index.html` and update CSS variables
- **Layout**: Modify component styles in their respective CSS files

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages

1. Update `vite.config.js` with your repo name:
```js
base: '/your-repo-name/'
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 👤 Author

**Aman Kumar**
- GitHub: [@iamankumar279](https://github.com/iamankumar279)
- LinkedIn: [Aman Kumar](https://linkedin.com/in/iamankumar279)
- Email: iamankumar279@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from Lucide React
- Fonts from Google Fonts

---

Built with ❤️ using React and Framer Motion
