/* ─── SPA Router ────────────────────────────────────────── */

const ROUTES = {
    '/': {
        page:         'pages/home.html',
        title:        'Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut Premium',
        navActive:    null,
        mobileActive: 'beranda',
        navRightHtml: '<a href="https://wa.me/6281234567890" class="nav-btn">Hubungi Kami</a>',
        mobileCta:    { href: 'https://wa.me/6281234567890', text: 'Hubungi Kami', external: true },
        footerWa:     { href: 'https://wa.me/6281234567890', text: 'WhatsApp Gapoktan' },
    },
    '/ekspor': {
        page:         'pages/ekspor.html',
        title:        'Ekspor Salak Nglumut Premium — Gapoktan Ngudi Luhur Srumbung Magelang',
        navActive:    'ekspor',
        mobileActive: 'ekspor',
        navRightHtml: '<span class="nav-cta-text">Hubungi Manager Ekspor</span><a href="https://wa.me/6281234567891" class="nav-btn" target="_blank" rel="noopener noreferrer">WhatsApp</a>',
        mobileCta:    { href: 'https://wa.me/6281234567891', text: 'Hubungi Tim Ekspor', external: true },
        footerWa:     { href: 'https://wa.me/6281234567891', text: 'WhatsApp Tim Ekspor' },
    },
    '/umkm': {
        page:         'pages/umkm.html',
        title:        'Produk Olahan Salak Premium — UMKM Ngudi Luhur Magelang',
        navActive:    'umkm',
        mobileActive: 'umkm',
        navRightHtml: '<span class="nav-cta-text">Hubungi KWT</span><a href="https://wa.me/6281234567892" class="nav-btn" target="_blank" rel="noopener noreferrer">WhatsApp</a>',
        mobileCta:    { href: 'https://wa.me/6281234567892', text: 'Pesan Produk', external: true },
        footerWa:     { href: 'https://wa.me/6281234567892', text: 'WhatsApp KWT' },
    },
    '/agrowisata': {
        page:         'pages/agrowisata.html',
        title:        'Agrowisata Srumbung Magelang — Wisata Edukasi & Petik Salak Lereng Merapi',
        navActive:    'agrowisata',
        mobileActive: 'agrowisata',
        navRightHtml: '<span class="nav-cta-text">Reservasi Kunjungan</span><a href="#booking" class="nav-btn">Form Booking</a>',
        mobileCta:    { href: '#booking', text: 'Booking Kunjungan', external: false },
        footerWa:     { href: 'https://wa.me/6281234567893', text: 'WhatsApp Agrowisata' },
    },
};

function _resolveRoute(pathname) {
    const path = pathname.replace(/\/$/, '') || '/';
    return ROUTES[path] || ROUTES['/'];
}

async function _fetchFragment(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('404: ' + url);
    return res.text();
}

function _applyRoute(route) {
    document.title = route.title;

    document.querySelectorAll('.nav-link[data-page]').forEach(el => {
        el.classList.toggle('active', el.dataset.page === route.navActive);
    });
    document.querySelectorAll('.mobile-nav-link[data-page]').forEach(el => {
        el.classList.toggle('active', el.dataset.page === route.mobileActive);
    });

    const navRight = document.getElementById('nav-right');
    if (navRight) navRight.innerHTML = route.navRightHtml;

    const mobileCta = document.getElementById('mobile-cta');
    if (mobileCta) {
        mobileCta.href = route.mobileCta.href;
        mobileCta.textContent = route.mobileCta.text;
        if (route.mobileCta.external) {
            mobileCta.setAttribute('target', '_blank');
            mobileCta.setAttribute('rel', 'noopener noreferrer');
        } else {
            mobileCta.removeAttribute('target');
            mobileCta.removeAttribute('rel');
        }
    }

    const footerWa = document.getElementById('footer-wa');
    if (footerWa) {
        footerWa.href = route.footerWa.href;
        footerWa.innerHTML = '<span class="icon icon-whatsapp" style="margin-right:6px;"></span>' + route.footerWa.text;
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function _runPageInit() {
    if (typeof _updateNavTheme === 'function') _updateNavTheme();
    initScrollAnimations();

    document.querySelectorAll('.portals a img').forEach(img => {
        img.addEventListener('mouseover', () => { img.style.transform = 'scale(1.05)'; });
        img.addEventListener('mouseout',  () => { img.style.transform = 'scale(1)'; });
    });

    if (typeof initCounters    === 'function') initCounters();
    if (typeof initCatalog     === 'function') initCatalog();
    if (typeof initBookingForm === 'function') initBookingForm();
}

async function _navigateTo(pathname, push) {
    const route = _resolveRoute(pathname);
    let html;
    try {
        html = await _fetchFragment(route.page);
    } catch {
        if (push) location.href = pathname;
        return;
    }

    const swap = () => {
        document.getElementById('app').innerHTML = html;
        if (push) history.pushState(null, '', pathname);
        window.scrollTo({ top: 0, behavior: 'instant' });
        _applyRoute(route);
        _runPageInit();
    };

    if (document.startViewTransition) {
        await document.startViewTransition(swap).finished;
    } else {
        swap();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const [navbarHtml, footerHtml] = await Promise.all([
            _fetchFragment('components/navbar.html'),
            _fetchFragment('components/footer.html'),
        ]);
        document.getElementById('navbar-slot').innerHTML = navbarHtml;
        document.getElementById('footer-slot').innerHTML = footerHtml;
        initNavbar();
    } catch (e) {
        console.error('Failed to load components:', e);
    }

    await _navigateTo(location.pathname, false);

    document.addEventListener('click', e => {
        const a = e.target.closest('a[href]');
        if (!a || a.target === '_blank') return;

        let url;
        try { url = new URL(a.href, location.href); } catch { return; }
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname && url.hash) return;
        if (url.pathname === location.pathname) return;

        e.preventDefault();
        _navigateTo(url.pathname, true);
    });

    window.addEventListener('popstate', () => _navigateTo(location.pathname, false));
});
