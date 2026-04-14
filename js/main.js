/* ─── Global JS ────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
});

/**
 * Handle Navbar scroll state and mobile menu
 */
function initNavbar() {
    const header = document.querySelector('.header');
    if (!header) return;

    // Scroll listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (to be implemented more fully later)
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            // Toggle menu logic
            console.log('Mobile menu toggled');
        });
    }
}

/**
 * Initialize Intersection Observer for fade-in animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-up');
    animateElements.forEach(el => observer.observe(el));
}
