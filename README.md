# Department Project Portfolio Website

A modern, responsive portfolio website designed for showcasing department projects with interactive features and GitHub integration.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Smooth animations, hover effects, and transitions
- **Dark/Light Mode**: Toggle between themes with persistent settings
- **Project Showcase**: Filterable project cards with categories (Web, Mobile, Desktop)
- **GitHub Integration**: Ready for GitHub API integration to fetch repository data
- **Contact Form**: Functional contact form with form validation
- **Modern Stack**: Built with vanilla HTML, CSS, and JavaScript for optimal performance

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/portfolio) (Replace with your actual GitHub Pages URL)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages / Netlify

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and other assets (create as needed)
```

## 🎨 Customization

### Personal Information
Update the following sections in `index.html`:
- Hero section: Name, title, description
- About section: Department info, skills, stats
- Contact section: Email, LinkedIn, GitHub links

### Projects
1. **Manual Method**: Edit the `sampleProjects` array in `script.js`
2. **GitHub API Method**: Uncomment the GitHub API code and replace `'yourusername'` with your GitHub username

### Styling
- Colors: Modify CSS custom properties in `:root` section of `styles.css`
- Fonts: Change Google Fonts import in `index.html`
- Layout: Adjust grid and flexbox properties as needed

### GitHub API Integration

To automatically fetch your GitHub repositories:

1. Uncomment the GitHub API code at the bottom of `script.js`
2. Replace `'yourusername'` with your actual GitHub username
3. Optionally customize the project mapping logic

```javascript
// Uncomment these lines in script.js
(async () => {
    const githubProjects = await fetchGitHubProjects('yourusername');
    if (githubProjects.length > 0) {
        renderProjects(githubProjects);
    }
})();
```

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select source: Deploy from a branch
5. Choose main branch and root folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Your site will be deployed automatically

### Local Development
1. Clone/download the repository
2. Open `index.html` in your browser
3. For live reloading, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

## 📱 Features Breakdown

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Theme toggle with persistent settings

### Hero Section
- Animated typing effect
- Floating technology badges
- Call-to-action buttons

### About Section
- Skills categorization
- Animated statistics cards
- Department information

### Projects Section
- Filterable project cards
- Hover animations
- GitHub and demo links
- Technology tags

### Contact Section
- Contact form with validation
- Social media links
- Contact information display

## 🎯 Best Practices Implemented

- **Semantic HTML**: Proper HTML5 semantic elements
- **Accessibility**: ARIA labels, keyboard navigation support
- **Performance**: Lazy loading, optimized animations
- **SEO**: Meta tags, proper heading structure
- **Cross-browser**: Compatible with modern browsers
- **Mobile-first**: Responsive design approach

## 📝 Customization Guide

### Adding New Projects
```javascript
const newProject = {
    title: "Project Title",
    description: "Project description",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "web", // web, mobile, or desktop
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com", // optional
    image: "image-url" // optional
};
```

### Changing Color Scheme
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* Add more custom colors */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [GitHub Repo](https://github.com/yourusername/portfolio)
- **Live Site**: [Portfolio Website](https://yourusername.github.io/portfolio)
- **Author**: [Your Name](https://github.com/yourusername)

## 💡 Future Enhancements

- [ ] Blog section integration
- [ ] Project search functionality
- [ ] Advanced animations with GSAP
- [ ] CMS integration (Strapi/Contentful)
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] PWA features

---

**Note**: Remember to replace placeholder content (your name, links, etc.) with your actual information before deployment.

Made with ❤️ for showcasing amazing projects!
