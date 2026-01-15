# 🎨 Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features smooth animations, glassmorphism effects, and a beautiful gradient design.

## ✨ Features

- ⚡ Fast and optimized with Vite
- 🎨 Modern UI with glassmorphism and gradients
- 📱 Fully responsive design
- 🎭 Smooth animations and transitions
- 🌙 Beautiful dark theme
- 🚀 Easy to deploy on GitHub Pages

## 🛠️ Technologies

- React 19
- Vite 7
- React Icons
- CSS3 with modern features
- GitHub Pages for deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **index.html** - Update the title and meta tags
2. **src/components/Hero.jsx** - Your name, title, and introduction
3. **src/components/About.jsx** - About yourself
4. **src/components/Projects.jsx** - Your projects
5. **src/components/Skills.jsx** - Your skills
6. **src/components/Contact.jsx** - Your contact information and social links

### Colors and Design

Customize the design system in `src/index.css`:
- Update CSS variables in the `:root` selector
- Modify gradients, colors, spacing, etc.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/'  // or '/' if using username.github.io
```

2. Initialize git and create a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/root`
   - Save

Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Alternative: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml` for automatic deployment on every push to main.

## 📦 Build

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 Sections

- **Hero** - Eye-catching introduction with CTA buttons
- **About** - Information about you and your highlights
- **Projects** - Showcase your best work
- **Skills** - Display your technical skills
- **Contact** - Get in touch section with social links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💬 Support

If you have any questions or need help, feel free to open an issue or contact me.

---

Built with ❤️ using React & Vite
