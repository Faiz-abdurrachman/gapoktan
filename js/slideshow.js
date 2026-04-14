/* ─── Slideshow Logic (Swiper.js) ─────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
});

function initHeroSlideshow() {
    const swiperEl = document.querySelector('.hero-swiper');
    if (!swiperEl) return;

    const heroSwiper = new Swiper('.hero-swiper', {
        // Essential Settings
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Navigation / Pagination
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
    });
}
