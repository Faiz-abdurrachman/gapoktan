/* ─── Global JS ────────────────────────────────────────── */

let _updateNavTheme = null;

function initNavbar() {
    const header = document.querySelector('.header');
    if (!header || header._initialized) return;
    header._initialized = true;

    function updateNavTheme() {
        const navY = 60;
        let isDark = false;
        document.querySelectorAll('section.bg-dark').forEach(section => {
            const r = section.getBoundingClientRect();
            if (r.top <= navY && r.bottom >= 0) isDark = true;
        });
        header.classList.toggle('on-dark', isDark);
        header.classList.toggle('on-light', !isDark);
    }
    _updateNavTheme = updateNavTheme;

    updateNavTheme();
    window.addEventListener('scroll', updateNavTheme, { passive: true });

    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');

    if (!toggle || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay?.classList.add('visible');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay?.classList.remove('visible');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    overlay?.addEventListener('click', closeMenu);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/* ─── Scroll Animations ─────────────────────────────────── */

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
