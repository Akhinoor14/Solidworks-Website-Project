# Portfolio Website - Images & Assets

This folder contains profile images and project screenshots for **Md Akhinoor Islam's Engineering Portfolio Website**.

## 📁 Folder Structure
```
images/
├── profile.jpg          # Main profile photo (recommended)
├── profile.png          # Alternative profile photo
├── project-screenshots/ # Project demonstration images
└── gallery/            # Additional project gallery images
```

## 🖼️ Image Requirements

### Profile Image
- **Filename**: `profile.jpg` or `profile.png`
- **Dimensions**: 300x300px (square ratio recommended)
- **Format**: JPG, PNG, or WebP
- **Size**: Under 500KB for optimal loading
- **Usage**: Update HTML: `<img src="./images/profile.jpg">`

### Project Images
- **Main Project Images**: 600x300px (2:1 ratio)
- **Gallery Images**: 800x400px (2:1 ratio) 
- **Thumbnails**: 80x60px for modal galleries
- **Format**: JPG/JPEG, PNG, WebP

## 🎯 Current Project Structure

### Featured Projects:
1. **SOLIDWORKS Beginner Projects** (Desktop)
   - 20+ CAD projects with tutorials
   - Engineering focus with 3D modeling

2. **Arduino UNO Projects with Tinkercad** (Web)
   - 40+ embedded systems experiments
   - IoT and sensor interfacing

3. **Electronic Components Guide** (Web)
   - Interactive electronics reference
   - Circuit design and analysis

## 🔧 Image Fallback System

The portfolio includes automatic fallback placeholders:
- **Arduino Projects**: Orange placeholder
- **SOLIDWORKS Projects**: Blue placeholder  
- **Electronic Components**: Green placeholder
- **General Engineering**: Purple placeholder

## 📝 How to Add Custom Images

1. **Profile Photo**:
   ```bash
   # Save your photo as:
   images/profile.jpg
   
   # Update in index.html:
   <img src="./images/profile.jpg" alt="Profile">
   ```

2. **Project Screenshots**:
   ```javascript
   // Update in script.js:
   image: "./images/your-project-image.jpg"
   gallery: [
       "./images/gallery/project1-1.jpg",
       "./images/gallery/project1-2.jpg"
   ]
   ```

## 🎨 Supported Formats & Specifications

| Image Type | Dimensions | Format | Max Size |
|------------|------------|--------|----------|
| Profile Photo | 300x300px | JPG/PNG/WebP | 500KB |
| Project Main | 600x300px | JPG/PNG/WebP | 800KB |
| Gallery Images | 800x400px | JPG/PNG/WebP | 1MB |
| Thumbnails | 80x60px | JPG/PNG/WebP | 100KB |

## 🚀 Performance Tips

- **Optimize Images**: Use tools like TinyPNG or Squoosh
- **WebP Format**: Modern browsers support for better compression
- **Lazy Loading**: Images load only when needed (already implemented)
- **CDN Alternative**: Consider using Cloudinary or ImgBB for hosting

## 🔗 External Image URLs

Currently using Unsplash for project images:
- Professional stock photos related to engineering
- Automatic fallback to branded placeholders
- No external dependencies for critical images

## 📱 Responsive Design

Images automatically adapt to:
- **Desktop**: Full resolution display
- **Tablet**: Scaled appropriately 
- **Mobile**: Optimized for touch interfaces
- **High-DPI**: Retina display support

## 🛠️ Technical Implementation

The portfolio includes:
- **Error Handling**: Automatic fallback for broken images
- **Loading States**: Smooth image loading experience
- **Modal Gallery**: Interactive image viewing
- **Image Optimization**: Lazy loading and compression

## 📋 Quick Setup Checklist

- [ ] Add your profile photo as `profile.jpg`
- [ ] Update image path in `index.html`
- [ ] Add project screenshots to respective folders
- [ ] Update image URLs in `script.js`
- [ ] Test image loading on different devices
- [ ] Verify fallback placeholders work correctly

---

**Engineering Portfolio by Md Akhinoor Islam**  
*Energy Science and Engineering Student, KUET*