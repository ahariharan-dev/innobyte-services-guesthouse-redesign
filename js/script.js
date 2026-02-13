/* ========================================
   KINGSUKH GUEST HOUSE - JAVASCRIPT
   Interactive Features and Animations
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    /* ========== MOBILE NAVIGATION TOGGLE ========== */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    
    /* ========== STICKY NAVIGATION & SCROLL EFFECTS ========== */
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        // Add shadow to navbar on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        if (window.scrollY > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });
    
    // Scroll to top functionality
    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    /* ========== ACTIVE NAVIGATION LINK ON SCROLL ========== */
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    
    /* ========== SMOOTH SCROLLING FOR ANCHOR LINKS ========== */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#" or empty
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    /* ========== ANIMATED COUNTER FOR STATS ========== */
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        // Check if stats section is in viewport
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statsPosition < screenPosition && !statsAnimated) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                let count = 0;
                const increment = target / 100; // Adjust speed here
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        stat.textContent = Math.floor(count) + '+';
                        setTimeout(updateCount, 20);
                    } else {
                        stat.textContent = target + '+';
                    }
                };
                
                updateCount();
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    
    /* ========== CONTACT FORM SUBMISSION ========== */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!firstName || !lastName || !email || !mobile || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[0-9]{10}$/;
            const cleanPhone = mobile.replace(/\D/g, '');
            if (cleanPhone.length < 10) {
                alert('Please enter a valid phone number');
                return;
            }
            
            // Success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', {
                firstName,
                lastName,
                email,
                mobile,
                message
            });
        });
    }
    
    
    /* ========== SIMPLE AOS (ANIMATE ON SCROLL) ALTERNATIVE ========== */
    // This is a lightweight alternative to AOS library
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    function checkAnimations() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize animation styles
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    window.addEventListener('scroll', checkAnimations);
    checkAnimations(); // Check on page load
    
    
    /* ========== GALLERY IMAGE CLICK (OPTIONAL LIGHTBOX EFFECT) ========== */
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.getAttribute('src');
            
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${imgSrc}" alt="Gallery Image">
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Fade in animation
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            function closeLightbox() {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = 'auto';
                }, 300);
            }
            
            // Close on ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            });
        });
    });
    
    
    /* ========== LAZY LOADING IMAGES ========== */
    // Simple lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    
    /* ========== PARALLAX EFFECT FOR HERO SECTION ========== */
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    
    /* ========== TYPING EFFECT FOR HERO TITLE (OPTIONAL) ========== */
    // Uncomment this section if you want a typing effect on the hero title
    /*
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    }
    */
    
    
    /* ========== CONSOLE MESSAGE ========== */
    console.log('%c Welcome to Kingsukh Guest House! ', 'background: #2c5f2d; color: #fff; font-size: 16px; padding: 10px;');
    console.log('Website developed with ❤️ for better user experience');
    
});


/* ========== LIGHTBOX STYLES (INJECTED VIA JAVASCRIPT) ========== */
// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        animation: zoomIn 0.3s ease;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 3rem;
        color: #fff;
        cursor: pointer;
        font-weight: 300;
        transition: color 0.3s ease;
    }
    
    .lightbox-close:hover {
        color: #97bf0d;
    }
    
    @keyframes zoomIn {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        .lightbox-close {
            top: -30px;
            font-size: 2rem;
        }
    }
`;

// Inject styles into document head
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);


/* ========== PERFORMANCE OPTIMIZATION ========== */
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll event handlers here if needed
}));


/* ========== ACCESSIBILITY ENHANCEMENTS ========== */
// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu on ESC
    if (e.key === 'Escape') {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Add focus styles for keyboard navigation
const focusableElements = document.querySelectorAll('a, button, input, textarea');
focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #97bf0d';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});


/* ========== LOADING ANIMATION (OPTIONAL) ========== */
// Show page after everything is loaded
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});
