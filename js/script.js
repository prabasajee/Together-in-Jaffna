// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.quick-card, .attraction-card, .itinerary-card, .hero-text, .hero-image'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Image lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
    document.head.appendChild(script);
    
    script.onload = function() {
        // Implement intersection observer for lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.dataset.src = img.src;
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNUY1RjUiLz48L3N2Zz4=';
            imageObserver.observe(img);
        });
    };
}

// WebP support detection
function supportsWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

// Add WebP class to html element
supportsWebP(function(supported) {
    if (supported) {
        document.documentElement.classList.add('webp');
    } else {
        document.documentElement.classList.add('no-webp');
    }
});

// Progressive image loading with blur effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        // Create a tiny version for blur effect
        const placeholder = new Image();
        placeholder.src = img.src.replace(/\.(jpg|jpeg|png|webp)$/, '_placeholder.$1');
        placeholder.onload = function() {
            img.style.backgroundImage = `url(${placeholder.src})`;
            img.style.backgroundSize = 'cover';
            img.style.backgroundPosition = 'center';
        };
        
        img.addEventListener('load', function() {
            this.style.backgroundImage = '';
            this.classList.add('loaded');
        });
    });
});

// Modern image interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add touch support for mobile hover effects
    const cards = document.querySelectorAll('.attraction-card, .hero-image-container');
    
    cards.forEach(card => {
        let touchTimer;
        
        card.addEventListener('touchstart', function() {
            touchTimer = setTimeout(() => {
                this.classList.add('touch-active');
            }, 200);
        });
        
        card.addEventListener('touchend', function() {
            clearTimeout(touchTimer);
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 2000);
        });
    });
    
    // Image error handling with better fallbacks
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.addEventListener('error', function() {
            // Try WebP fallback first
            if (this.src.includes('.webp')) {
                this.src = this.src.replace('.webp', '.jpg');
            } else {
                // Use a better placeholder with site branding
                this.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250">
                        <rect width="400" height="250" fill="#00B8D9" opacity="0.1"/>
                        <text x="200" y="120" text-anchor="middle" font-family="Arial" font-size="16" fill="#00B8D9">
                            📸 Image Loading...
                        </text>
                        <text x="200" y="140" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">
                            Jaffna Family Explorer
                        </text>
                    </svg>
                `);
                this.alt = 'Image not available - Jaffna Family Explorer';
            }
        });
    });
});

// Form validation and interaction (for future contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Local storage for user preferences
function saveUserPreference(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
}

function getUserPreference(key, defaultValue) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
        console.warn('Could not read from localStorage:', error);
        return defaultValue;
    }
}

// Initialize tooltips and interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for card interactions
    const cards = document.querySelectorAll('.quick-card, .attraction-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading states for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                return; // Don't add loading state for anchor links
            }
            
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Image not available';
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Your scroll handling code here
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

// Service Worker registration for PWA capabilities (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
