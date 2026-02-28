# Kingsukh Guest House - Website Redesign

## 📋 Project Overview
This is a complete redesign of the Kingsukh Guest House website with modern UI/UX, clean code and better user functionalities.

**Project ID:** 78GRB6TY2D  
**Original Website:** https://www.kingsukhguesthouse.com/

---

## 🎯 Features

### ✨ Modern Design
- Clean and professional layout
- Beautiful color scheme with green and accent colors
- Smooth animations and hover effects
- Professional typography using Google Fonts (Poppins & Playfair Display)

### 📱 Fully Responsive
- Mobile-first approach
- Optimized for smartphones, tablets, and desktops
- Breakpoints: 480px, 768px, 992px
- Collapsible mobile navigation

### 🚀 Performance Optimized
- Lightweight code (no heavy frameworks)
- Lazy loading for images
- Debounced scroll events
- Fast page load times

### ♿ Accessibility
- Semantic HTML5 structure
- ARIA labels for screen readers
- Keyboard navigation support
- Proper heading hierarchy

---

## 📁 Project Structure

```
kingsukh-guesthouse/
│
├── index.html              # Main HTML file
├── README.md              # This file
│
├── css/
│   └── style.css          # Complete CSS styling
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── assets/                # Image assets folder
│   ├── out.jpg           # Hero image / About section
│   ├── small.jpg         # Cozy Haven Room
│   ├── large.jpg         # Spacious Serenity Suite
│   ├── ayodhya.webp      # Gallery image
│   ├── palash.webp       # Gallery image
│   ├── baranti.webp      # Gallery image
│   ├── recep.jpg         # Reception area
│   ├── flower.jpg        # Garden image
│   ├── room1.jpg         # Room interior
│   └── mithonDam.webp    # Mithon Dam view
│
└── images/               # Icon images (optional)
    ├── location.png
    ├── mail.png
    ├── call.png
    ├── facebook.png
    ├── instagram.png
    ├── youtube.png
    └── twitter.png
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Poppins & Playfair Display
- **Font Awesome 6.4.0** - Icons

---

## 📦 Setup Instructions

### 1️⃣ Download the Assets
Download all images from the Google Drive folder provided:
https://drive.google.com/drive/folders/1kj5A0lmNiatECO1G3awQGr6t28PD-yMF?usp=sharing

### 2️⃣ Place the Assets
Copy all downloaded images into the `assets/` folder in your project directory.

### 3️⃣ Open the Website
Simply open `index.html` in any modern web browser:
- Chrome (recommended)
- Firefox
- Safari
- Edge

**No server required!** The website runs entirely on the client side.

---

## 🎨 Sections Included

1. **Navigation Bar**
   - Sticky header with smooth scroll
   - Responsive mobile menu
   - Active link highlighting

2. **Hero Section**
   - Full-screen banner with overlay
   - Compelling call-to-action
   - Animated scroll indicator

3. **About Section**
   - Two-column layout with image and text
   - Contact information cards
   - Booking button

4. **Rooms Section**
   - Beautiful room cards with hover effects
   - Pricing information
   - Room features and amenities

5. **Services Section**
   - Icon-based service cards
   - Animated statistics counters
   - Four main services highlighted

6. **Gallery Section**
   - Grid layout with 10 images
   - Lightbox functionality on click
   - Hover zoom effects

7. **Contact Section**
   - Contact information
   - Working contact form
   - Social media links
   - Interactive form validation

8. **Footer**
   - Four-column layout
   - Quick links and services
   - Social media icons
   - Copyright information

---

## 🎯 Key Features Explained

### Mobile Navigation
The hamburger menu appears on screens smaller than 992px. It slides in from the left and covers the full screen for better usability.

### Smooth Scrolling
All anchor links (#about, #rooms, etc.) scroll smoothly to their sections with proper offset for the fixed navbar.

### Active Navigation
The navigation automatically highlights the current section as you scroll through the page.

### Animated Stats
The statistics (100+ Bookings, 150+ Customers) animate from 0 to their final values when scrolled into view.

### Image Lightbox
Click any gallery image to view it in a full-screen lightbox with zoom animation.

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Phone number validation
- Success messages

### Scroll to Top
A button appears when scrolling down, allowing quick return to the top of the page.

---

## 🎨 Color Scheme

```css
Primary Color:   #2c5f2d (Dark Green)
Secondary Color: #97bf0d (Lime Green)
Accent Color:    #ff6b35 (Orange)
Dark Color:      #1a1a1a (Almost Black)
Gray Color:      #6c757d (Text Gray)
```

---

## 📱 Responsive Breakpoints

```css
Desktop:  1200px and above
Tablet:   992px - 768px
Mobile:   767px - 480px
Small:    Below 480px
```

---

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bf0d;
    --accent-color: #ff6b35;
}
```

### Adding More Rooms
Copy and paste a room card in `index.html`:
```html
<div class="room-card" data-aos="fade-up">
    <!-- Room content here -->
</div>
```

### Adding Gallery Images
Add more gallery items:
```html
<div class="gallery-item">
    <img src="assets/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

---

## ✅ Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

---

## 📝 Code Comments

All code files include detailed comments explaining:
- What each section does
- Why certain approaches were used
- How to customize various features

This makes it beginner-friendly and easy to understand!

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in Settings
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Create account on Netlify
2. Drag and drop your folder
3. Get instant deployment

### Option 3: Vercel (Free)
1. Sign up on Vercel
2. Import your project
3. Auto-deploy on every commit

---

## 📞 Contact Information

**Kingsukh Guest House**
- 📍 Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
- 📧 Email: kkghosh0099@gmail.com
- 📱 Phone: +91 9007062180
- 📸 Instagram: @kingsukhguesthouse

---

## 👨‍💻 Development Notes

### What's Included:
✅ Semantic HTML5
✅ Modern CSS3 with animations
✅ Vanilla JavaScript (no jQuery)
✅ Mobile-first responsive design
✅ Accessibility features
✅ Form validation
✅ Image optimization
✅ Performance optimization
✅ Cross-browser compatibility

### What's NOT Included:
❌ Backend functionality
❌ Database integration
❌ Payment gateway
❌ Real booking system
❌ Content Management System (CMS)

---

## 🎓 Learning Points

This project demonstrates:
1. Semantic HTML structure
2. CSS Grid and Flexbox layouts
3. CSS Custom Properties (variables)
4. Responsive design techniques
5. JavaScript DOM manipulation
6. Event handling
7. Form validation
8. Animation and transitions
9. Mobile-first approach
10. Clean code practices

---

## 📄 License

This project is created for educational purposes as part of a Web Developer Internship.

---

## 🙏 Acknowledgments

- Original website: Kingsukh Guest House
- Icons: Font Awesome
- Fonts: Google Fonts
- Internship: InnoByte Services

---

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [W3Schools](https://www.w3schools.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🐛 Known Issues / Future Improvements

- [ ] Add actual booking system integration
- [ ] Implement backend for contact form
- [ ] Add more gallery images
- [ ] Create a blog section
- [ ] Add customer testimonials
- [ ] Implement real-time availability checker
- [ ] Add Google Maps integration
- [ ] Create admin panel for content management

---

**Version:** 1.0  
**Last Updated:** February 2026  
**Developer:** [Your Name]  
**Project Timeline:** 25 days

---

Made with ❤️ for Kingsukh Guest House
