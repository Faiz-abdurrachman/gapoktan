/* ─── Global JS ────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initRouter();
});

/* ─── Navbar ────────────────────────────────────────────── */

function initNavbar() {
    const header = document.querySelector('.header');
    if (!header) return;

    const darkSections = document.querySelectorAll('section.bg-dark');

    function updateNavTheme() {
        const navY = 60;
        let isDark = false;
        darkSections.forEach(section => {
            const r = section.getBoundingClientRect();
            if (r.top <= navY && r.bottom >= 0) isDark = true;
        });
        header.classList.toggle('on-dark', isDark);
        header.classList.toggle('on-light', !isDark);
    }

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

    document.addEventListener('keydown', (e) => {
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

/* ─── Client-side Router ────────────────────────────────── */

const _loadedScripts = new Set(
    [...document.querySelectorAll('script[src]')].map(s => new URL(s.src, location.href).pathname)
);

function initRouter() {
    // Prefetch all internal pages in the background
    ['index.html', 'ekspor.html', 'umkm.html', 'agrowisata.html'].forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'document';
        link.href = page;
        document.head.appendChild(link);
    });

    document.addEventListener('click', e => {
        const a = e.target.closest('a[href]');
        if (!a || a.target === '_blank') return;

        let url;
        try { url = new URL(a.href, location.href); } catch { return; }

        if (url.origin !== location.origin) return;
        if (url.href === location.href) return;
        if (url.pathname === location.pathname && url.hash) return;

        e.preventDefault();
        navigateTo(url.href);
    });

    window.addEventListener('popstate', () => navigateTo(location.href, false));
}

function _loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
    });
}

async function navigateTo(href, push = true) {
    try {
        const res = await fetch(href);
        if (!res.ok) throw new Error();
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');

        const swap = async () => {
            document.title = doc.title;

            const newHeader = doc.querySelector('header');
            const newMain   = doc.querySelector('main');
            const newFooter = doc.querySelector('footer');

            if (newHeader) document.querySelector('header')?.replaceWith(newHeader);
            if (newMain)   document.querySelector('main')?.replaceWith(newMain);
            if (newFooter) document.querySelector('footer')?.replaceWith(newFooter);

            if (push) history.pushState(null, '', href);
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Load any page-specific scripts not yet loaded
            const pending = [];
            doc.querySelectorAll('body script[src]').forEach(s => {
                const path = new URL(s.src, location.href).pathname;
                if (!_loadedScripts.has(path)) {
                    _loadedScripts.add(path);
                    pending.push(_loadScript(s.src));
                }
            });
            await Promise.all(pending);

            _runPageInit();
        };

        if (document.startViewTransition) {
            await document.startViewTransition(swap).finished;
        } else {
            await swap();
        }
    } catch {
        location.href = href;
    }
}

function _runPageInit() {
    initNavbar();
    initScrollAnimations();

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (typeof initCounters    === 'function') initCounters();
    if (typeof initCatalog     === 'function') initCatalog();
    if (typeof initBookingForm === 'function') initBookingForm();
}
