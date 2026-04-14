/* ─── Product Catalog Logic ──────────────────────────── */

const PRODUCTS = [
    {
        id: 1,
        name: "Kripik Salak Premium",
        category: "makanan",
        price: "Rp 25.000",
        image: "images/umkm/product_1.webp",
        desc: "Camilan renyah dari salak Nglumut pilihan dengan proses vacuum frying."
    },
    {
        id: 2,
        name: "Dodol Salak Asli",
        category: "makanan",
        price: "Rp 20.000",
        image: "images/umkm/product_2.webp",
        desc: "Manis legit dengan aroma salak yang kuat, diolah secara tradisional."
    },
    {
        id: 3,
        name: "Kopi Biji Salak",
        category: "minuman",
        price: "Rp 45.000",
        image: "images/umkm/product_3.webp",
        desc: "Inovasi minuman menyehatkan tanpa kafein dari biji salak pilihan."
    },
    {
        id: 4,
        name: "Sirup Salak Nglumut",
        category: "minuman",
        price: "Rp 35.000",
        image: "images/umkm/product_4.webp",
        desc: "Segar dan alami, tanpa pemanis buatan. Cocok untuk hidangan pesta."
    },
    {
        id: 5,
        name: "Bakpia Salak",
        category: "makanan",
        price: "Rp 30.000",
        image: "images/umkm/product_5.webp",
        desc: "Khas Jogja-Magelang dengan isian salak yang lumer di mulut."
    },
    {
        id: 6,
        name: "Manisan Salak",
        category: "makanan",
        price: "Rp 15.000",
        image: "images/umkm/product_6.webp",
        desc: "Buah salak segar dalam rendaman sirup yang manis dan menyegarkan."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
});

function initCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Initial render
    renderProducts(PRODUCTS);

    // Filter logic
    const filters = document.querySelectorAll('.btn-filter');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const filteredProducts = filter === 'all' 
                ? PRODUCTS 
                : PRODUCTS.filter(p => p.category === filter);
            
            renderProducts(filteredProducts);
        });
    });
}

function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Clear existing

    products.forEach((p, index) => {
        const card = document.createElement('article');
        card.className = 'card product-card fade-up visible'; // visible by default for now or use observer
        card.style.transitionDelay = `${index * 50}ms`;
        
        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="card-body">
                <h3 class="mb-2" style="font-size: 1.125rem;">${p.name}</h3>
                <span class="product-price">${p.price}</span>
                <p class="text-xs text-content mb-6">${p.desc}</p>
                <a href="https://wa.me/6281234567891?text=Halo KWT Ngudi Luhur, saya ingin pesan ${p.name}" class="btn btn-green btn-sm" target="_blank">Pesan via WA</a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}
