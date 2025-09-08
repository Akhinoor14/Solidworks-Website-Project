# Department Portfolio Website

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

3. **Your site will be live at**: `https://yourusername.github.io/portfolio`

### Option 2: Netlify

1. **Drag & Drop Method**
   - Go to [Netlify](https://netlify.com)
   - Drag your project folder to the deploy area
   - Get instant deployment with custom URL

2. **Git Integration Method**
   - Connect your GitHub repository
   - Auto-deploy on every push
   - Custom domain support

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Quick Setup Commands

```bash
# Clone or download the project
cd "c:\Users\AKHINOOR\Desktop\Solidworks Website Project"

# Optional: Start a local server for development
# Using Python (if installed)
python -m http.server 8000

# Using Node.js live-server (if Node.js is installed)
npx live-server

# Open in browser: http://localhost:8000
```

## Customization Checklist

- [ ] Replace "Your Name" with your actual name
- [ ] Update department information
- [ ] Add your profile photo (replace placeholder URL)
- [ ] Update contact information (email, LinkedIn, GitHub)
- [ ] Customize the projects array with your actual projects
- [ ] Update GitHub username in the API integration
- [ ] Modify color scheme if desired
- [ ] Add your actual social media links

## Files to Customize

1. **index.html** - Personal information, contact details
2. **script.js** - Projects data, GitHub username
3. **styles.css** - Colors, fonts (optional)

Enjoy your new portfolio website! 🚀
