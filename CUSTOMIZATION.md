# 🎨 Customization Guide - Kingsukh Guest House

This guide helps you customize the website without breaking anything!

---

## 🌈 1. Changing Colors

### Location: `css/style.css` (lines 9-16)

```css
:root {
    /* Current Colors */
    --primary-color: #2c5f2d;      /* Dark Green */
    --secondary-color: #97bf0d;    /* Lime Green */
    --accent-color: #ff6b35;       /* Orange */
    --dark-color: #1a1a1a;         /* Almost Black */
    --light-color: #ffffff;        /* White */
    --gray-color: #6c757d;         /* Gray */
}
```

### How to Change:
1. Open `css/style.css`
2. Find `:root` section at the top
3. Replace hex color codes
4. Save and refresh browser

### Popular Color Schemes:

**Blue Theme:**
```css
--primary-color: #1e3a8a;     /* Deep Blue */
--secondary-color: #3b82f6;   /* Bright Blue */
--accent-color: #f59e0b;      /* Amber */
```

**Purple Theme:**
```css
--primary-color: #6b21a8;     /* Deep Purple */
--secondary-color: #a855f7;   /* Purple */
--accent-color: #ec4899;      /* Pink */
```

**Red Theme:**
```css
--primary-color: #991b1b;     /* Dark Red */
--secondary-color: #ef4444;   /* Red */
--accent-color: #f97316;      /* Orange */
```

---

## 📝 2. Editing Text Content

### Hero Section
**Location:** `index.html` (lines 40-49)

```html
<p class="hero-subtitle">Simple - Unique - Friendly</p>
<h1 class="hero-title">Make Yourself At Home<br>In Our <span>Guest House</span></h1>
<p class="hero-description">Experience the perfect blend of comfort and nature in the heart of Purulia</p>
```

### About Section
**Location:** `index.html` (lines 65-75)

Change the description text to match your guest house story.

### Contact Information
**Location:** `index.html` (multiple places)

Search and replace:
- Phone: `+91 9007062180`
- Email: `kkghosh0099@gmail.com`
- Address: Update in About, Contact, and Footer sections

---

## 🏠 3. Adding/Removing Rooms

### To Add a New Room:

**Location:** `index.html` (after line 123)

Copy this template:
```html
<div class="room-card" data-aos="fade-up" data-aos-delay="300">
    <div class="room-image">
        <img src="assets/your-room-image.jpg" alt="Room Name">
        <div class="room-overlay">
            <a href="https://wa.link/at5ion" class="btn btn-small" target="_blank">Check Availability</a>
        </div>
    </div>
    <div class="room-content">
        <h3>Your Room Name</h3>
        <p>Your room description here...</p>
        <div class="room-features">
            <span><i class="fas fa-bed"></i> 2 Beds</span>
            <span><i class="fas fa-wifi"></i> Free WiFi</span>
            <span><i class="fas fa-tv"></i> TV</span>
        </div>
        <div class="room-footer">
            <div class="room-price">
                <span class="price-label">Starting from</span>
                <span class="price">₹2000<small>/night</small></span>
            </div>
            <a href="https://wa.link/at5ion" class="btn-link" target="_blank">
                Book Now <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
```

### To Remove a Room:
Delete the entire `<div class="room-card">...</div>` block.

---

## 🎯 4. Modifying Services

### Location: `index.html` (lines 140-175)

Each service card looks like:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-shield-alt"></i>  <!-- Change icon here -->
    </div>
    <h3>Service Name</h3>              <!-- Change title -->
    <p>Service description...</p>       <!-- Change description -->
</div>
```

### Available Font Awesome Icons:
- `fa-shield-alt` - Security
- `fa-clock` - Time/Service
- `fa-utensils` - Restaurant
- `fa-map-marked-alt` - Guide/Location
- `fa-wifi` - WiFi
- `fa-car` - Parking/Transport
- `fa-spa` - Wellness
- `fa-dumbbell` - Fitness
- `fa-swimming-pool` - Pool
- `fa-concierge-bell` - Room Service

Find more at: https://fontawesome.com/icons

---

## 🖼️ 5. Gallery Management

### Adding Gallery Images

**Location:** `index.html` (lines 190-240)

Copy this template:
```html
<div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
    <img src="assets/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

### Changing Gallery Grid Layout

**Location:** `css/style.css` (line 670)

```css
.gallery-grid {
    grid-template-columns: repeat(5, 1fr);  /* Change number */
}
```

Options:
- `repeat(3, 1fr)` - 3 columns
- `repeat(4, 1fr)` - 4 columns
- `repeat(5, 1fr)` - 5 columns (current)

---

## 🔤 6. Changing Fonts

### Current Fonts:
- **Headings:** Playfair Display (serif)
- **Body:** Poppins (sans-serif)

### To Change:

**Step 1:** Find new fonts at https://fonts.google.com

**Step 2:** Update HTML `<head>` (line 12):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Step 3:** Update CSS variables (line 18-19):
```css
--font-primary: 'Your-Body-Font', sans-serif;
--font-heading: 'Your-Heading-Font', serif;
```

### Popular Font Combinations:

**Modern:**
- Headings: Montserrat
- Body: Open Sans

**Elegant:**
- Headings: Cormorant Garamond
- Body: Lato

**Professional:**
- Headings: Raleway
- Body: Roboto

---

## 📐 7. Adjusting Spacing

### Location: `css/style.css` (lines 22-26)

```css
:root {
    --spacing-xs: 0.5rem;   /* Extra small */
    --spacing-sm: 1rem;     /* Small */
    --spacing-md: 2rem;     /* Medium */
    --spacing-lg: 4rem;     /* Large */
    --spacing-xl: 6rem;     /* Extra large */
}
```

**Increase spacing:** Use larger numbers (1.5rem, 2.5rem, etc.)  
**Decrease spacing:** Use smaller numbers (0.75rem, 1.5rem, etc.)

---

## 🔘 8. Button Styling

### Location: `css/style.css` (lines 115-180)

### Rounded Buttons:
```css
.btn {
    border-radius: 50px;  /* Fully rounded */
}
```

### Square Buttons:
```css
.btn {
    border-radius: 0;     /* No rounding */
}
```

### Button Sizes:
```css
.btn {
    padding: 15px 40px;   /* Larger */
    padding: 10px 25px;   /* Medium */
    padding: 8px 20px;    /* Smaller */
}
```

---

## 🌐 9. Adding Social Media Links

### Location: `index.html` (multiple locations)

Find social links sections and update:

```html
<a href="https://facebook.com/your-page" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>
```

Replace URLs:
- Facebook: `https://facebook.com/yourpage`
- Instagram: `https://instagram.com/yourhandle`
- Twitter: `https://twitter.com/yourhandle`
- YouTube: `https://youtube.com/yourchannel`

---

## 📱 10. WhatsApp Booking Link

### Current Link: `https://wa.link/at5ion`

### To Update:

**Method 1:** Using wa.me
```html
href="https://wa.me/919007062180?text=Hello, I'd like to book a room"
```

**Method 2:** Using wa.link (custom short link)
Create at: https://create.wa.link

---

## 🎨 11. Animation Speed

### Location: `css/style.css` (line 36)

```css
:root {
    --transition-fast: 0.3s ease;      /* Quick animations */
    --transition-medium: 0.5s ease;    /* Medium speed */
}
```

**Faster animations:** Use 0.2s or 0.15s  
**Slower animations:** Use 0.8s or 1s

---

## 🖼️ 12. Changing Background Image

### Hero Background

**Location:** `css/style.css` (line 306)

```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                url('../assets/your-image.jpg') center/cover no-repeat;
}
```

**Adjust overlay darkness:**
- Darker: `rgba(0, 0, 0, 0.6)`
- Lighter: `rgba(0, 0, 0, 0.2)`

---

## 📊 13. Stats Numbers

### Location: `index.html` (lines 183-187)

```html
<h3 class="stat-number" data-target="100">0</h3>  <!-- Bookings -->
<h3 class="stat-number" data-target="150">0</h3>  <!-- Customers -->
```

Change `data-target` values to update the final numbers.

---

## 🎯 14. Navigation Menu Items

### Adding Menu Item:

**Location:** `index.html` (line 20-27)

```html
<li><a href="#new-section" class="nav-link">New Page</a></li>
```

Then create the section:
```html
<section class="new-section" id="new-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

---

## 📝 15. Form Fields

### Adding a New Field:

**Location:** `index.html` (after line 335)

```html
<div class="form-group">
    <input type="text" id="newField" placeholder="Your Label" required>
</div>
```

**Location:** `js/script.js` (line 123)

Add validation:
```javascript
const newField = document.getElementById('newField').value;
```

---

## 🎨 Quick CSS Tips

### Make Text Bigger:
```css
p { font-size: 1.1rem; }  /* Increase by 10% */
```

### Change Link Colors:
```css
a { color: #your-color; }
a:hover { color: #hover-color; }
```

### Adjust Container Width:
```css
.container { max-width: 1400px; }  /* Wider */
```

### Section Background Colors:
```css
.about { background-color: #f8f9fa; }      /* Light gray */
.services { background-color: #ffffff; }    /* White */
```

---

## ⚠️ Important Notes

1. **Always backup** before making changes
2. **Test on mobile** after every change
3. **Use browser DevTools** (F12) to preview changes
4. **Clear cache** (Ctrl+F5) to see updates
5. **Keep file structure** intact
6. **Don't rename** CSS/JS files without updating HTML

---

## 🆘 If Something Breaks

1. **Undo recent changes**
2. **Check browser console** (F12) for errors
3. **Validate HTML** at validator.w3.org
4. **Restore from backup**
5. **Review this guide** carefully

---

## 📚 Learn More

- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS
- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML
- JavaScript Guide: https://javascript.info/
- Font Awesome: https://fontawesome.com/
- Google Fonts: https://fonts.google.com/

---

## 💡 Pro Tips

1. Use **consistent spacing** throughout
2. Keep **color palette limited** (3-4 colors max)
3. **Test all changes** on multiple devices
4. **Maintain readability** - don't make text too small
5. **Keep it simple** - less is often more

---

Happy Customizing! 🎉

If you need help, refer to the code comments in the files!
