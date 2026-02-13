# 🚀 Deployment Guide - Kingsukh Guest House

## Quick Deployment Options

This guide will help you publish your website online for free!

---

## ✅ Option 1: GitHub Pages (Recommended for Beginners)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Sign up for a free account
3. Verify your email

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it: `kingsukh-guesthouse`
4. Keep it public
5. Click "Create repository"

### Step 3: Upload Your Files
**Method A: Using Git (Command Line)**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kingsukh-guesthouse.git
git push -u origin main
```

**Method B: Using GitHub Website**
1. Click "uploading an existing file"
2. Drag and drop all your files
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes
6. Your site will be live at: `https://YOUR-USERNAME.github.io/kingsukh-guesthouse/`

---

## ✅ Option 2: Netlify (Easiest Deployment)

### Step 1: Create Account
1. Go to https://www.netlify.com
2. Sign up (can use GitHub account)

### Step 2: Deploy
1. Click "Add new site" → "Deploy manually"
2. Drag and drop your entire project folder
3. Wait 30 seconds
4. Your site is live!

### Step 3: Custom Domain (Optional)
1. Click "Domain settings"
2. Add your custom domain
3. Follow DNS instructions

**Netlify Advantages:**
- ✅ Instant deployment
- ✅ Automatic HTTPS
- ✅ Free custom domain
- ✅ Continuous deployment from Git

---

## ✅ Option 3: Vercel

### Step 1: Sign Up
1. Go to https://vercel.com
2. Sign up with GitHub

### Step 2: Import Project
1. Click "New Project"
2. Import your GitHub repository
3. Click "Deploy"

### Step 3: Done!
Your site deploys automatically on every Git push.

---

## ✅ Option 4: Render

### Step 1: Create Account
1. Go to https://render.com
2. Sign up (free tier available)

### Step 2: Create Static Site
1. Click "New" → "Static Site"
2. Connect your GitHub repository
3. Build settings:
   - **Build Command:** (leave empty)
   - **Publish Directory:** .
4. Click "Create Static Site"

---

## ✅ Option 5: Traditional Web Hosting

### For Shared Hosting (Hostinger, Bluehost, etc.)

1. **Purchase hosting plan** (or use free hosting)
2. **Access cPanel or File Manager**
3. **Upload files** to `public_html` folder
4. **Done!** Visit your domain

### Files to Upload:
```
public_html/
  ├── index.html
  ├── css/
  │   └── style.css
  ├── js/
  │   └── script.js
  └── assets/
      └── (all images)
```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are in the `assets/` folder
- [ ] All file paths are correct (relative paths, not absolute)
- [ ] Test the website locally first
- [ ] Check all links work
- [ ] Contact form has proper action (or use form service)
- [ ] Social media links are correct
- [ ] Phone numbers and emails are correct
- [ ] Meta descriptions are added
- [ ] Favicon is added (optional)

---

## 🔧 Post-Deployment Setup

### 1. Connect Contact Form

Since HTML forms don't work without a backend, use these services:

**Formspree (Free & Easy)**
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  <!-- Your form fields -->
</form>
```

**Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- Your form fields -->
</form>
```

### 2. Add Google Analytics

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-TRACKING-ID');
</script>
```

### 3. Add Favicon

Place `favicon.ico` in root directory and add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### 4. Add Meta Tags for SEO

```html
<meta name="description" content="Kingsukh Guest House - Your perfect retreat in Purulia">
<meta name="keywords" content="guest house, purulia, west bengal, hotel, accommodation">
<meta property="og:title" content="Kingsukh Guest House">
<meta property="og:description" content="Experience comfort in nature">
<meta property="og:image" content="https://your-domain.com/assets/out.jpg">
```

---

## 🌐 Custom Domain Setup

### If You Have a Domain Name:

**For GitHub Pages:**
1. Create a file named `CNAME` in root
2. Add your domain: `www.yourdomain.com`
3. Update DNS records at your domain registrar:
   - Type: CNAME
   - Name: www
   - Value: YOUR-USERNAME.github.io

**For Netlify/Vercel:**
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS instructions
4. Wait for propagation (up to 24 hours)

---

## 🔍 Testing Your Live Site

After deployment, test:

1. **All Pages Load** - No 404 errors
2. **Images Display** - All images visible
3. **Links Work** - Navigation and external links
4. **Forms Work** - Contact form submits
5. **Mobile Responsive** - Test on phone/tablet
6. **Speed Test** - Use PageSpeed Insights
7. **Browser Test** - Chrome, Firefox, Safari

---

## 📊 Performance Optimization

### Before Deploying:

**1. Optimize Images**
- Use TinyPNG.com or Squoosh.app
- Convert large images to WebP format
- Recommended sizes:
  - Hero: 1920x1080px, under 200KB
  - Rooms: 800x600px, under 100KB
  - Gallery: 600x600px, under 80KB

**2. Minify CSS/JS** (Optional)
- Use CSS Minifier: cssminifier.com
- Use JS Minifier: javascript-minifier.com

**3. Enable Caching**
Add `.htaccess` file (for Apache servers):
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 🎯 Quick Comparison

| Platform | Free Tier | Setup Time | Custom Domain | Best For |
|----------|-----------|------------|---------------|----------|
| **GitHub Pages** | Yes | 5 min | Yes | Beginners |
| **Netlify** | Yes | 2 min | Yes | Quick Deploy |
| **Vercel** | Yes | 3 min | Yes | Git Integration |
| **Render** | Yes | 5 min | Yes | Full Stack |
| **Shared Hosting** | No | 10 min | Yes | Traditional |

---

## 💡 Pro Tips

1. **Use Git** for version control
2. **Keep backups** of your files
3. **Monitor uptime** with UptimeRobot
4. **Check SSL certificate** is active (HTTPS)
5. **Update regularly** with fresh content
6. **Monitor analytics** to track visitors
7. **Optimize for mobile** - 60% of traffic is mobile

---

## 🆘 Troubleshooting

**Problem:** Images not showing
- **Solution:** Check file paths are relative (./assets/image.jpg)

**Problem:** CSS not loading
- **Solution:** Clear browser cache, check file path

**Problem:** Form not submitting
- **Solution:** Add form backend service (Formspree/Netlify Forms)

**Problem:** Site looks broken on mobile
- **Solution:** Check responsive CSS, test in DevTools

**Problem:** Slow loading
- **Solution:** Optimize images, enable compression

---

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Web.dev Guide: https://web.dev

---

## 🎉 Congratulations!

Your website is now live and accessible to the world!

**Next Steps:**
1. Share your website link
2. Submit project for internship review
3. Add to your portfolio
4. Share on social media

---

**Deployment Date:** _____________  
**Live URL:** _____________________  
**Deployed By:** __________________  

---

Good luck with your deployment! 🚀
