/* ─── Hero Slideshow — Vanilla JS, no dependencies ─────── */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
});

function initHeroSlideshow() {
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const paginationEl = document.querySelector('.hero-pagination');
    if (!slides.length || !paginationEl) return;

    let current = 0;
    let timer;

    // Build pagination dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => { clearInterval(timer); goTo(i); startTimer(); });
        paginationEl.appendChild(dot);
    });

    const dots = Array.from(paginationEl.querySelectorAll('.hero-dot'));

    // Lazy-load remaining slide images after first paint
    requestIdleCallback(() => {
        slides.forEach((slide, i) => {
            if (i === 0 || !slide.dataset.bg) return;
            const img = new Image();
            img.onload = () => { slide.style.backgroundImage = `url('${slide.dataset.bg}')`; };
            img.src = slide.dataset.bg;
        });
    }, { timeout: 2000 });

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startTimer() {
        timer = setInterval(() => goTo(current + 1), 5000);
    }

    startTimer();
}
