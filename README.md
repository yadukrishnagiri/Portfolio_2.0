# 🎬 CINEMA REDUX - Interactive 3D Portfolio

A stunning 3D interactive portfolio website with classic 2010s movie cinema vibes, showcasing your passion for **Football**, **Movies**, and **AI/Coding**.

![Cinema Redux Preview](./preview.png)

## ✨ Features

### 🎭 Core Sections
- **Hero Section** - 3D floating cinema reel with dramatic entrance
- **About Me** - Football field scene with movie posters backdrop
- **Skills** - Interactive 3D tech stack visualization  
- **Projects** - Movie theater gallery with project showcases
- **Contact** - Retro movie ticket booking style contact form

### 🎮 Interactive Elements
- **3D Background** - Dynamic particle systems and floating objects
- **Smooth Transitions** - Camera movements between sections
- **Hover Effects** - Interactive UI elements with glow effects
- **Responsive Design** - Optimized for all devices
- **Film Grain Effect** - Authentic vintage movie aesthetic
- **Neon Glow Theme** - Classic 2010s sci-fi movie styling

### 🛠️ Tech Stack
- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Advanced animations
- **GSAP** - High-performance animations
- **Styled Components** - CSS-in-JS styling
- **Vite** - Lightning fast build tool

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone & Install**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

2. **Open your browser**
```
http://localhost:3000
```

3. **Build for production**
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
cinema-redux-portfolio/
├── public/
│   ├── cinema-icon.svg
│   └── assets/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── 3d/
│   │   │   ├── Background3D.jsx
│   │   │   ├── CinemaReel.jsx
│   │   │   └── FloatingElements.jsx
│   │   ├── Navigation.jsx
│   │   └── LoadingScreen.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## 🎯 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project setup with Vite + React
- [x] 3D canvas with Three.js integration
- [x] Loading screen with cinema effects
- [x] Global styling with 2010s movie theme
- [x] Film grain and vintage effects

### Phase 2: Core Components (Next Steps)
- [ ] Navigation with smooth scrolling
- [ ] Hero section with 3D cinema reel
- [ ] About section with football field scene
- [ ] Skills section with 3D tech visualization
- [ ] Projects section with movie theater gallery
- [ ] Contact section with ticket booking form

### Phase 3: Advanced Features
- [ ] Interactive 3D background particles
- [ ] Camera transitions between sections
- [ ] Sound effects integration
- [ ] Mobile gesture controls
- [ ] Performance optimizations

### Phase 4: Content & Polish
- [ ] Project showcase integration
- [ ] Social media links
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Final testing & deployment

## 🔧 Customization Guide

### Adding New Projects

1. **Update project data** in `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your project",
    image: "/path/to/your/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true // For hero section showcase
  }
  // Add more projects here...
]
```

2. **Add project images** to `public/assets/projects/`

3. **Update the Projects component** to display your new projects

### Updating Skills

1. **Modify skills data** in `src/data/skills.js`:
```javascript
export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 95, icon: "🟨" },
    // Add your skills here...
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    // Add your skills here...
  ],
  ai: [
    { name: "Machine Learning", level: 80, icon: "🤖" },
    // Add your AI skills here...
  ]
}
```

### Personalizing Content

1. **Update personal information** in each section component
2. **Replace placeholder text** with your own content
3. **Add your social media links** in the Contact section
4. **Upload your profile photos** to `public/assets/`

### Customizing Colors

Modify the CSS variables in `src/index.css`:
```css
:root {
  --neon-cyan: #00ffff;        /* Primary accent color */
  --neon-blue: #0066ff;        /* Secondary accent color */  
  --neon-purple: #9900ff;      /* Tertiary accent color */
  --gold-accent: #ffd700;      /* Highlight color */
  /* Customize other colors... */
}
```

## 🎨 Design Inspiration

This portfolio draws inspiration from:
- **2010s Sci-Fi Movies** (Tron Legacy, Blade Runner, etc.)
- **Cinema Aesthetics** (Film reels, movie theaters, vintage effects)
- **Neon Cyberpunk** design elements
- **Interactive 3D** web experiences

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-build and deploy

### Manual Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server

## 🤝 Contributing

Want to enhance this portfolio template?

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Performance Tips

- **Lazy load** 3D components
- **Optimize images** before adding to project
- **Use web fonts** efficiently
- **Enable gzip compression** on server
- **Monitor bundle size** with `npm run build`

## 🆘 Common Issues & Solutions

### 3D Models Not Loading
- Check file paths in `public/assets/`
- Ensure models are in supported formats (GLB, GLTF)

### Performance Issues
- Reduce particle count in 3D scenes
- Optimize image sizes
- Enable production build optimizations

### Mobile Responsiveness
- Test on various screen sizes
- Adjust 3D camera settings for mobile
- Optimize touch interactions

---

**Made with ❤️ for creative developers who love movies, football, and cutting-edge tech!**

*Ready to showcase your skills in cinematic style? Let's build something amazing together!* 🎬✨ 

## Development

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

## Deployment

This project is configured for easy deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Technologies Used

- React
- Three.js
- GSAP
- Vite
- CSS3
- Framer Motion
- React Router
- Styled Components 