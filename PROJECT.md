# Dokumentasi Lengkap Project
# Website Gapoktan Ngudi Luhur — v3

> Ditulis untuk developer/mahasiswa yang mengerjakan project ini agar punya gambaran penuh tanpa harus membaca semua file satu per satu.

---

## DAFTAR ISI

1. [Konteks & Latar Belakang](#1-konteks--latar-belakang)
2. [Siapa Kliennya](#2-siapa-kliennya)
3. [Tujuan Website](#3-tujuan-website)
4. [Audiens & Target Pengguna](#4-audiens--target-pengguna)
5. [Struktur Halaman](#5-struktur-halaman)
6. [Konten Per Halaman](#6-konten-per-halaman)
7. [Arsitektur Teknis](#7-arsitektur-teknis)
8. [Design System](#8-design-system)
9. [JavaScript & Interaksi](#9-javascript--interaksi)
10. [Status Konten vs Brief](#10-status-konten-vs-brief)
11. [Yang Masih Perlu Data dari Klien](#11-yang-masih-perlu-data-dari-klien)
12. [Cara Deploy](#12-cara-deploy)
13. [Cara Maintenance](#13-cara-maintenance)

---

## 1. Konteks & Latar Belakang

### Siapa yang Minta Website Ini Dibuat?

Brief datang dari klien bernama **Gapoktan Ngudi Luhur** melalui dokumen `Web Development Brief-1-1.md`. Developer/koordinator yang ditunjuk klien adalah **Mas Chen**. Project ini kemungkinan bagian dari program **Desa Sejahtera Astra (DSA)** — program pemberdayaan desa oleh PT Astra International, di mana salah satu deliverable-nya adalah digitalisasi media kelompok tani.

### Mengapa Website Ini Penting?

Gapoktan Ngudi Luhur sudah beroperasi secara nyata dan berskala besar (ekspor ratusan ton salak per tahun ke luar negeri), tapi selama ini tidak punya media digital yang profesional. Akibatnya:

- Saat pitching ke buyer internasional atau investor, tidak ada "company profile" yang bisa dikirimkan
- Produk UMKM KWT hanya bisa dijual offline/lokal meskipun kualitasnya layak ekspor
- Agrowisata tidak bisa dipromosikan ke sekolah/instansi di luar daerah
- Bergantung sepenuhnya pada tengkulak untuk harga jual salak segar

Website ini adalah **infrastruktur digital pertama** yang representatif untuk kelompok tani ini.

---

## 2. Siapa Kliennya

### Profil Organisasi

**Gapoktan** = Gabungan Kelompok Tani. Ngudi Luhur adalah nama gapoktan-nya.

Gapoktan Ngudi Luhur adalah ekosistem pemberdayaan masyarakat desa yang terdiri dari tiga unit dengan pengelola dan target audiens berbeda:

| Unit | Pengelola | Kegiatan Utama | Halaman Website |
|---|---|---|---|
| **Poktan** (Kelompok Tani) | Petani dewasa | Budidaya & ekspor salak segar | `ekspor.html` |
| **KWT** (Kelompok Wanita Tani) | Ibu-ibu desa | Produksi & jual produk olahan | `umkm.html` |
| **Karang Taruna** | Pemuda desa | Pengelolaan agrowisata | `agrowisata.html` |

Ketiga unit ini beroperasi di bawah satu atap Gapoktan, dan halaman beranda (`index.html`) menjadi portal untuk ketiganya.

### Data Resmi Klien

```
Nama Instansi : Gapoktan Ngudi Luhur
Alamat Presisi : 99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung,
                 Kabupaten Magelang, Jawa Tengah 56483
Google Maps   : https://maps.app.goo.gl/XdoRZrutTGQzJPHN9
Mitra Resmi   : PT Sewu Segar Nusantara (Sunpride)
                Desa Sejahtera Astra / PT Astra International
Berdiri       : 2017
```

### Data Operasional (Sumber: Brief Klien, Update 2025/2026)

| Kategori | Data |
|---|---|
| Total luas lahan | 800+ hektar perkebunan Salak Nglumut |
| Lahan tersertifikasi organik | 300 hektar |
| Volume ekspor ke China | ±700 ton (Januari–Oktober 2025) |
| Rata-rata pengiriman | 30–50 ton per minggu |
| Negara tujuan aktif | China, Kamboja, Eropa, Timor Leste (4 negara) |
| Target pasar baru | Vietnam, Arab Saudi, USA, Jepang |
| Pengalaman ekspor | Sejak 2017 |

### Mitra & Kemitraan

- **PT Sewu Segar Nusantara (Sunpride)** — distributor buah premium terbesar di Indonesia. Salak Ngudi Luhur masuk jalur distribusi Sunpride untuk pasar nasional dan ekspor.
- **Desa Sejahtera Astra (DSA)** — program pemberdayaan desa dari PT Astra International. Ngudi Luhur menjadi unit percontohan (role model) nasional dalam hilirisasi produk pertanian.
- **Badan Karantina Pertanian** — produk ekspor sudah lolos kurasi BBKP/BKIPM (persyaratan wajib ekspor pangan).

---

## 3. Tujuan Website

Website ini bukan sekadar brosur digital. Ia dirancang untuk menjalankan tiga fungsi nyata:

### A. Company Profile untuk B2B
Buyer internasional, eksportir, investor, instansi pemerintah, dan kampus yang ingin studi banding butuh satu URL yang bisa menjelaskan siapa Ngudi Luhur, seberapa besar skala operasinya, dan bagaimana proses QC-nya. Fungsi ini dijalankan terutama oleh `ekspor.html` dan `index.html`.

### B. Katalog & Sales Channel untuk B2C
Konsumen akhir yang ingin membeli produk olahan KWT (kripik, dodol, sirup, dll) bisa lihat katalog, pilih produk, dan langsung pesan via WhatsApp dari website. Tidak perlu aplikasi, tidak perlu toko online berbayar. Fungsi ini dijalankan oleh `umkm.html`.

### C. Landing Page Reservasi Agrowisata
Sekolah, kampus, keluarga, dan instansi yang ingin berkunjung bisa lihat paket wisata, fasilitas, dan langsung ajukan booking melalui form di `agrowisata.html`. Form submit otomatis membuka WhatsApp dengan pesan terisi.

---

## 4. Audiens & Target Pengguna

| Audiens | Kebutuhan | Halaman Utama |
|---|---|---|
| Buyer internasional / eksportir | Volume, standar QC, sertifikasi, kontak | `ekspor.html` |
| Investor / instansi pemerintah | Profil, skala, dampak sosial, kemitraan | `index.html` |
| Konsumen pembeli produk olahan | Pilih produk, harga, cara pesan | `umkm.html` |
| Pelajar / keluarga wisata | Paket, fasilitas, lokasi, booking | `agrowisata.html` |
| Kampus / BUMN studi banding | Profil resmi, kontak formal, fasilitas | `agrowisata.html` + `ekspor.html` |
| Jurnalis / media | Fakta, angka, foto dokumentasi | `index.html` |

---

## 5. Struktur Halaman

```
index.html          ← Beranda (portal utama)
ekspor.html         ← Giat Ekspor (Poktan)
umkm.html           ← UMKM & Olahan (KWT)
agrowisata.html     ← Agrowisata (Karang Taruna)
```

Semua halaman berbagi:
- Navbar yang sama (dengan item aktif berbeda)
- Footer yang sama
- CSS global + component yang sama
- Hanya CSS per halaman (`pages/*.css`) yang berbeda

---

## 6. Konten Per Halaman

### 6.1 `index.html` — Beranda

Urutan section dan isi kontennya:

#### [S1] Hero
- Label: `ASLI NGLUMUT`
- Judul: "Pusat Agribisnis Salak Nglumut Premium"
- Subjudul: Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+ hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia & Eropa setiap minggunya.
- CTA: "Lebih Detail" → `ekspor.html`
- Visual: Foto background kanan via CSS `::after` (file: `assets/images/section1.png`)

#### [S2] Capaian & Dampak (Impact Numbers)
4 kartu dengan counter animasi (angka bergerak naik saat scroll):

| Label | Angka | Keterangan |
|---|---|---|
| GLOBAL | 800+ | Hektar Lahan |
| CHINA | 700± | Ton Ekspor |
| VOLUME | 50 | Ton / Minggu |
| PASAR | 4+ | Negara Tujuan |

#### [S3] Tentang Kami
Tiga paragraf Origin Story exact dari brief klien:
1. Lokasi, berdiri 2017, 800+ hektar, ratusan petani
2. Fokus premium, sistem hulu-ke-hilir, ekspor ke Asia & Eropa
3. Binaan DSA Astra, role model nasional hilirisasi pertanian
- CTA: "Lihat Alur Ekspor" → `ekspor.html`

#### [S4] Visi & Misi
- Visi: *"Terwujudnya ekosistem pertanian salak di Kabupaten Magelang yang berkelanjutan dan berdaya saing global melalui sinergi petani, sektor swasta, dan pemerintah."*
- Misi 1: Meningkatkan kesejahteraan petani di Desa Kaliurang dan Kecamatan Srumbung secara luas.
- Misi 2: Memperkuat posisi Kabupaten Magelang sebagai sentra hortikultura unggulan nasional.
- Misi 3: Memperluas rantai pasok ekspor komoditas lokal ke pasar dunia.
- Tampilan: Card glassmorphism di atas foto background gelap.

#### [S5] 3 Pintu Utama
Grid 3 kolom dengan foto portrait (4:5) dan label:
- Giat Ekspor → `ekspor.html`
- UMKM & Olahan → `umkm.html`
- Agrowisata → `agrowisata.html`

#### [S5.5] Living the Movement
Galeri mosaic 5 foto dokumentasi kegiatan nyata, 3 kategori:
- **Aktivitas Ekspor** — proses packing house, tim di lapangan
- **Pemberdayaan** — KWT Ngudi Luhur, kebun salak
- **Kunjungan Mitra** — dokumentasi kemitraan, studi banding
*(Diminta eksplisit oleh klien di brief bagian 5)*

#### [S6] Liputan Media
3 kartu berita yang bisa diklik:
- Berita Magelang — *"Ekspor Salak Nglumut Tembus Pasar China, Petani Berjaya"*
- Gemilang FM — *"Inovasi Olahan Salak: KWT Ngudi Luhur Produksi Kurma Salak"*
- Media Nasional — *"Agrowisata Salak Nglumut Jadi Destinasi Edukasi Unggulan"*
*(Link artikel masih placeholder, menunggu URL asli dari klien)*

#### [S7] CTA + Maps
- CTA: "Siap Bermitra atau Berkunjung?" + tombol WhatsApp
- Google Maps embed (koordinat estimasi, perlu diperbarui)

---

### 6.2 `ekspor.html` — Giat Ekspor

#### [E1] Hero
- Full-bleed foto kebun (DSC04963)
- Judul: "Dari Lereng Merapi ke Pasar Dunia."
- Subjudul: 30–50 ton/minggu ke China, Kamboja, Eropa, Timor Leste
- CTA: "Hubungi Tim Ekspor" → WhatsApp

#### [E2] Kepercayaan & Legalitas
**Mitra:**
- PT Sewu Segar Nusantara (Sunpride)
- Desa Sejahtera Astra (Astra International)

**Sertifikasi (4 kartu):**
- Karantina Pertanian — Lolos pemeriksaan BBKP/BKIPM
- Sertifikasi Organik — 300 hektar lahan tersertifikasi
- Standar Grading Ekspor — Grade A/B sesuai permintaan buyer
- Reefer Container — Pengiriman suhu terkontrol
*(Nama sertifikasi spesifik menunggu konfirmasi klien — brief dikosongkan)*

#### [E3] Alur Operasional (4 Tahap)
Exact dari brief klien:
1. **Collecting House** — Hasil panen dari 5 Poktan binaan dikumpulkan ke pusat distribusi Gapoktan.
2. **Packing House** — Pencucian dan seleksi buah berdasarkan standar berat dan tampilan fisik. Buah non-ekspor dipisahkan untuk pasar lokal/KWT.
3. **Quality Control & Grading** — Sortase kedua yang lebih ketat, penimbangan akurat, standar premium buyer internasional.
4. **Stuffing & Shipping** — Pemuatan ke kontainer suhu terkontrol, siap ke China, Eropa, Kamboja, Asia lainnya.

#### [E4] Jangkauan Ekspor
Dua kartu (Pasar Aktif vs Target Baru):

| Pasar Aktif | Volume/Keterangan |
|---|---|
| China | ±700 Ton (Jan–Okt 2025) |
| Kamboja | Pengiriman rutin |
| Eropa | Standar premium |
| Timor Leste | Pasar berkembang |

| Target Baru | Keterangan |
|---|---|
| Vietnam | Ekspansi 2025–2026 |
| Arab Saudi | Pasar Timur Tengah |
| USA | Pasar premium diaspora |
| Jepang | Standar kualitas tinggi |

Plus highlight volume: **±700 Ton** diekspor ke China saja · Jan–Okt 2025

#### [E5] Galeri Ekspor
Mosaic layout (3fr 2fr, height 520px desktop):
- Main: `DSC04978.webp` (packing house)
- Grid 4: DSC04975, DSC04986, DSC05001, DSC04983

#### [E6] CTA
Terbuka untuk kerjasama dengan eksportir, distributor, buyer internasional, investor.

---

### 6.3 `umkm.html` — UMKM & Olahan

#### [U1] Hero
- Judul: "Dari Tangan Ibu, Lahir Produk Berkelas."
- Subjudul: KWT mengubah salak segar menjadi produk bernilai tinggi
- CTA: "Lihat Semua Produk" → anchor `#katalog`

#### [U2] KWT Intro
Storytelling tentang Kelompok Wanita Tani, dukungan DSA, inovasi produk. Kutipan:
> *"Transformasi salak segar menjadi produk bernilai tinggi, dikelola oleh kelompok wanita tani sebagai motor ekonomi kreatif desa."*

#### [U3] Katalog Produk (Dinamis via JS)
Filter: Semua / Makanan / Minuman

**8 Produk (data di `js/products.js`):**

| # | Nama | Kategori | Harga |
|---|---|---|---|
| 1 | Kripik Salak Premium | makanan | Rp 25.000 |
| 2 | Dodol Salak Asli | makanan | Rp 20.000 |
| 3 | Kopi Biji Salak ⭐ | minuman | Rp 45.000 |
| 4 | Sirup Salak Nglumut | minuman | Rp 35.000 |
| 5 | Bakpia Salak | makanan | Rp 30.000 |
| 6 | Manisan Salak | makanan | Rp 15.000 |
| 7 | Selai Salak | makanan | Rp 20.000 |
| 8 | Kurma Salak | makanan | Rp 25.000 |

Setiap kartu: foto + nama + harga + deskripsi + tombol "Pesan via WhatsApp" (link WA dengan pesan otomatis berisi nama produk).

#### [U4] Produk Unggulan — Kopi Biji Salak
Feature section khusus untuk produk paling inovatif. Biji salak yang biasanya dibuang sebagai limbah diolah menjadi kopi tanpa kafein. Diklaim sebagai satu-satunya di Indonesia.

#### [U5] Cara Pemesanan
3 langkah: Pilih Produk → Klik "Pesan Sekarang" → Konfirmasi & Kirim via WA
Melayani pengiriman seluruh Indonesia (JNE, J&T, SiCepat).

---

### 6.4 `agrowisata.html` — Agrowisata

#### [A1] Hero
- Tagline (dari brief): "Warisan Merapi, Destinasi Edukasi Agribisnis Berkelanjutan."
- CTA ganda: "Lihat Paket Wisata" + "Booking Kunjungan"

#### [A2] Intro Narasi
Pengunjung tidak hanya melihat tapi merasakan langsung proses salak Nglumut dari tanam hingga olahan. Dikelola pemuda Karang Taruna.

#### [A3] Paket Kunjungan (3 Paket)

**Paket Edukasi Budidaya** (Sekolah & Kampus)
- Tur lahan budidaya
- Packing house & QC tour
- Sesi tanya jawab petani
- Circular economy / pengolahan limbah

**Wisata Petik Buah** (Keluarga & Komunitas)
- Petik salak langsung di kebun
- Edukasi varietas Nglumut
- Foto kebun berlatar Merapi
- Kunjungan rumah produksi

**Studi Banding B2B** (Instansi & BUMN) — highlighted dengan warna oranye
- Presentasi profil resmi Gapoktan
- Tur lapangan lengkap
- Sesi diskusi formal
- Dokumentasi kunjungan

#### [A4] Galeri Fasilitas (5 Area dari Brief)
- Pendopo 1–4 (kapasitas besar)
- Lahan Budidaya & Petik Buah Segar
- Rumah Tradisional (Edustay)
- Kolam Outbound & Susur Sungai
- Sabo Dam & Camping Ground (spot foto)

#### [A5] Peta & Rute
Google Maps embed + info jarak: ~30 menit dari Kota Magelang, ~1 jam dari Yogyakarta.

#### [A6] Form Booking
Field: Nama/Instansi, Tanggal Rencana, Jumlah Orang, Jenis Kunjungan (dropdown), Nomor WA, Pesan Tambahan.
Submit → `js/booking.js` generate pesan WA otomatis → buka WhatsApp.

---

## 7. Arsitektur Teknis

### Stack
```
HTML5 + CSS3 + Vanilla JavaScript
Tanpa framework (React/Vue/Next.js dll)
Tanpa build tool (Webpack/Vite dll)
Tanpa CMS
```

Pilihan ini disengaja: website bisa di-host gratis sebagai static files (GitHub Pages, Netlify, Vercel) dan tidak butuh server backend sama sekali.

### Struktur File Lengkap
```
v3/
│
├── index.html
├── ekspor.html
├── umkm.html
├── agrowisata.html
│
├── css/
│   ├── tokens.css          ← JANGAN UBAH SEMBARANGAN
│   │                          Semua variabel CSS: warna, spacing, font, radius, dll
│   ├── reset.css           ← CSS reset standar (normalize browser)
│   ├── global.css          ← Utility classes: .container, .grid, .btn, .text-*, dll
│   ├── components/
│   │   ├── navbar.css      ← Header, nav-pill, hamburger, mobile-menu
│   │   ├── footer.css      ← Footer layout
│   │   └── ui.css          ← .card, .label-pill, .btn-*, .form-input, dll
│   └── pages/
│       ├── home.css        ← Hero, impact, about, portals, movement-grid, media
│       ├── ekspor.css      ← ekspor-hero, step-number, country-code, gallery
│       ├── umkm.css        ← umkm-hero, kwt-quote, umkm-step-circle, featured
│       └── agrowisata.css  ← agro-hero, agro-feature-list, agro-gallery, booking-wrap
│
├── js/
│   ├── main.js             ← Navbar scroll effect, hamburger toggle, fade-up observer
│   ├── counter.js          ← Counter animasi angka (IntersectionObserver)
│   ├── products.js         ← Data produk UMKM + render kartu + filter kategori
│   └── booking.js          ← Submit form booking → generate link WA → redirect
│
├── images/
│   ├── hero/               ← Foto dokumentasi (DSC0*.webp, section1.webp)
│   └── umkm/               ← Foto produk (product_1.webp s/d product_20.webp)
│
└── assets/
    └── images/
        ├── section1.png    ← Ilustrasi hero beranda (CSS background)
        ├── 1.jpeg          ← Foto untuk kartu berita media
        ├── 2.jpeg
        └── 3.jpeg
```

### Urutan Load CSS (Penting)
Setiap halaman load CSS dalam urutan ini — urutan tidak boleh diubah:
```html
tokens.css     ← 1. Variabel global tersedia
reset.css      ← 2. Reset browser
global.css     ← 3. Utility classes
navbar.css     ← 4. Komponen navbar
footer.css     ← 5. Komponen footer
ui.css         ← 6. Komponen UI (card, btn, dll)
[page].css     ← 7. Override spesifik per halaman
```

---

## 8. Design System

### Filosofi Desain
Referensi utama: **Seed.com** — brand agritech dengan desain premium, bersih, minimal, earthy. Bukan desain "template" — setiap elemen punya maksud visual.

Tone: **Profesional + Organik + Empowering**. Tidak terlalu korporat, tidak terlalu folksy.

### Color Tokens
```css
--green-primary:    #153921   /* Hijau tua — warna utama brand */
--green-medium:     #1E5C32   /* Hijau medium */
--green-light:      #EAF2EC   /* Hijau muda — background subtle */
--orange-salak:     #C15A1E   /* Oranye salak — aksen & highlight */
--seed-bg-light:    #F6F5F1   /* Krem off-white — background halaman */
--seed-bg-dark:     #141414   /* Hitam — section gelap */
--seed-text-dark:   #1A1A1A   /* Teks utama */
--text-secondary:   #6B7280   /* Teks sekunder/caption */
```

### Typography
```css
Font: Inter (Google Fonts) — weight 400, 500, 600
--text-xs:   0.75rem   (12px)
--text-sm:   0.875rem  (14px)
--text-base: 1rem      (16px)
--text-lg:   1.125rem  (18px)
--text-xl:   1.25rem   (20px)
--text-2xl:  1.5rem    (24px)
--text-3xl:  1.875rem  (30px)
--text-4xl:  2.25rem   (36px)
--text-5xl:  3rem      (48px)
--text-6xl:  3.75rem   (60px)
```

### Spacing System
Berbasis 4px:
```
--sp-1: 4px   --sp-6: 24px  --sp-16: 64px
--sp-2: 8px   --sp-8: 32px  --sp-24: 96px
--sp-3: 12px  --sp-10: 40px --sp-32: 128px
--sp-4: 16px  --sp-12: 48px
```

### Komponen Utama

**`.label-pill`** — Badge teks kecil uppercase dengan border, dipakai di setiap section heading:
```css
border: 1px solid rgba(21,57,33,0.2);
border-radius: 100px;
padding: 6px 12px;
font-size: 0.7rem;
letter-spacing: 0.12em;
```

**`.btn`** — Tombol dasar. Varian: `.btn-primary` (hijau), `.btn-outline` (border only), `.btn-sm` (kecil), `.btn-green` (untuk produk).

**`.card`** — Kartu konten. Varian: `.card.solid` (background putih/krem), `.card.dark` (background gelap transparan).

**`.nav-pill`** — Navbar menggunakan dua "pil" terpisah (logo+nav kiri, CTA kanan). Default: dark glass dengan `backdrop-filter: blur(20px)`. Setelah scroll: solid light pill.

### Animasi
- **Fade-up scroll**: Elemen dengan class `.fade-up` akan muncul dari bawah saat masuk viewport (dihandle `main.js` dengan IntersectionObserver)
- **Delay**: `.delay-100`, `.delay-200`, `.delay-300` untuk stagger animasi antar elemen
- **Counter**: Angka di S2 bergerak dari 0 ke target saat section masuk viewport
- **Hover nav**: Underline slide-in pada link navbar via CSS `::after`
- **Image hover**: Scale 1.03 pada hover galeri foto

---

## 9. JavaScript & Interaksi

### `main.js`
Diload di semua halaman. Menangani:
1. **Navbar scroll effect**: Menambah class `.scrolled` ke `<header>` saat halaman discroll > 20px. CSS mengubah tampilan nav-pill dari dark glass ke solid light.
2. **Hamburger menu**: Toggle class `.open` pada header untuk membuka/menutup mobile menu.
3. **Menu overlay**: Klik di luar mobile menu menutupnya.
4. **Fade-up observer**: IntersectionObserver untuk semua elemen `.fade-up` — tambah class `.visible` saat masuk viewport, trigger animasi CSS.

### `counter.js`
Diload hanya di `index.html`. Menangani:
- Cari semua elemen `.counter-number` yang punya attribute `data-target`
- Saat section S2 masuk viewport, jalankan animasi count up dari 0 ke nilai `data-target`
- Easing: linear, durasi ~1.5 detik

### `products.js`
Diload hanya di `umkm.html`. Menangani:
- Array `PRODUCTS` berisi data 8 produk (id, name, category, price, image, desc)
- `renderProducts(products)` — generate HTML kartu produk secara dinamis dan inject ke `#product-grid`
- Filter button: saat diklik, filter array dan render ulang
- Link WA per produk: `https://wa.me/[nomor]?text=Halo KWT Ngudi Luhur, saya ingin pesan [nama produk]`

**Cara tambah produk baru:**
```js
// Di js/products.js, tambahkan object baru di array PRODUCTS:
{
    id: 9,                              // ID unik (increment dari yang terakhir)
    name: "Nama Produk",               // Nama yang tampil di kartu
    category: "makanan",               // "makanan" atau "minuman"
    price: "Rp 00.000",               // Format harga
    image: "images/umkm/product_9.webp", // Path foto (upload dulu ke folder)
    desc: "Deskripsi singkat produk."  // Maks 1-2 kalimat
}
```

### `booking.js`
Diload hanya di `agrowisata.html`. Menangani:
- Listen submit event pada `#booking-form`
- Ambil nilai: nama, tanggal, jumlah orang, jenis kunjungan, nomor WA, pesan
- Generate string pesan WA yang terformat
- Buka `https://wa.me/[nomor]?text=[pesan_encode]`

---

## 10. Status Konten vs Brief

### Semua yang Sudah Selesai ✅

| Nomor di Brief | Item | Status |
|---|---|---|
| 1 | Identitas & kontak di semua halaman | ✅ |
| 2 | Origin Story 3 paragraf + "(MDPL)" | ✅ |
| 3 | Visi & Misi — teks exact dari brief | ✅ |
| 4 | Impact numbers: 800+, ±700, 30–50 Ton/Mgg, 4 negara | ✅ |
| 4 | "Sejak 2017" ditampilkan di section header | ✅ |
| 5 | Living the Movement gallery (5 foto, 3 kategori) | ✅ |
| 6a | Alur 4 tahap ekspor (exact dari brief) | ✅ |
| 6a | Mitra Sunpride & DSA Astra | ✅ |
| 6a | Jangkauan ekspor 8 negara (4 aktif + 4 target) | ✅ |
| 6a | Galeri QC ekspor | ✅ |
| 6b | Katalog 8 produk UMKM + filter Makanan Ringan / Minuman | ✅ |
| 6b | Tombol WA per produk dengan pesan otomatis | ✅ |
| 6b | Deskripsi KWT & blockquote dari brief | ✅ |
| 6c | Tagline "Warisan Merapi..." dari brief | ✅ |
| 6c | 3 paket kunjungan (Edukasi, Petik, Studi Banding) | ✅ |
| 6c | Galeri 5 area fasilitas + caption Waduk & Sabo Dam | ✅ |
| 6c | Narasi pendukung dari brief | ✅ |
| D1 | Google Maps embed (beranda + agrowisata) | ✅ |
| D2 | Section "Ngudi Luhur dalam Berita" (Berita Magelang, Gemilang FM) | ✅ |

### Gap / Menunggu Data Klien ⏳

| Item | Keterangan |
|---|---|
| Nomor WhatsApp | Semua masih placeholder `628123456789X` — **ganti sebelum launch** |
| URL artikel media | Berita Magelang & Gemilang FM masih `href="#"` |
| Sertifikasi spesifik (6a) | Brief dikosongkan — diisi placeholder generik sementara |
| Rumah Produksi Olahan (6c) | Brief menyebut ini di Area Produksi tapi belum ada foto tersendiri |
| Foto khusus kunjungan mitra/Astra | Dibutuhkan untuk kategori "Kunjungan Tokoh/Mitra" di Living the Movement |
| Koordinat Maps exact | Perlu dikonfirmasi URL Maps yang benar (`...JPHN` vs `...JPHN9`) |
| Backsound (D3) | Opsional — menunggu keputusan klien |

### Keputusan Desain yang Berbeda dari Brief (bukan error)

| Item di Brief | Implementasi | Alasan |
|---|---|---|
| "Pesan Sekarang" | "Pesan via WhatsApp" | Lebih informatif — user tahu ke mana diarahkan |
| "Slide foto/video" Living the Movement | Static mosaic grid | Slideshow menambah bobot halaman secara signifikan |
| "Ikon yang elegan/clean" untuk Misi | Label pill teks | Ikon FA untuk tiap misi bisa ditambahkan saat redesign |
| "Sejak 2017" sebagai impact stat | Teks kecil di header section | Counter dari 0 ke 2017 tidak bermakna secara visual |

---

## 11. Yang Masih Perlu Data dari Klien

Ini yang **belum bisa diisi** karena datanya belum diberikan klien:

### A. Nomor WhatsApp (PRIORITAS UTAMA sebelum launch)
Saat ini semua nomor masih placeholder. Harus diganti sebelum website live.

| Halaman | Placeholder | Kontak untuk |
|---|---|---|
| `index.html` | `6281234567890` | Gapoktan umum |
| `ekspor.html` | `6281234567891` | Manager ekspor |
| `umkm.html` | `6281234567892` | KWT / order produk |
| `agrowisata.html` | `6281234567893` | Karang Taruna / booking |

### B. Link Artikel Media
Kartu berita di S6 beranda masih pakai `href="#"` dan judul artikel fiktif. Perlu:
- URL artikel asli dari beritamagelang.id
- URL artikel asli dari gemilangfm.com
- (Opsional) URL artikel media ketiga

### C. Nama Sertifikasi Spesifik
Brief sengaja mengosongkan bagian ini ("List telah memiliki sertifikasi apa aja: - - -"). Klien belum mengirimkan nama sertifikat yang dimiliki. Saat ini diisi dengan 4 sertifikasi generik yang masuk akal:
- Karantina Pertanian (BBKP/BKIPM)
- Sertifikasi Organik (300 ha)
- Standar Grading Ekspor
- Reefer Container

### D. Koordinat Google Maps
Embed Maps menggunakan koordinat estimasi. Perlu diperbarui dengan koordinat exact yang dikonfirmasi klien (bisa di-pin dari Google Maps langsung).

### E. Foto Tambahan (Opsional tapi Direkomendasikan)
Living the Movement sekarang pakai foto yang ada. Idealnya ada:
- Foto khusus kunjungan mitra/Astra/pejabat (untuk kategori "Kunjungan Tokoh/Mitra")
- Foto proses loading kontainer
- Foto pertemuan rutin petani / pelatihan KWT

---

## 12. Cara Deploy

Website ini adalah static files — tidak butuh server, database, atau backend apapun.

### Opsi A: GitHub Pages (Gratis)
```bash
# 1. Push semua file ke repository GitHub
git init
git add .
git commit -m "initial commit"
git remote add origin [url-repo]
git push -u origin main

# 2. Di GitHub: Settings → Pages → Source: main branch → root folder
# 3. Website live di: https://[username].github.io/[repo-name]/
```

### Opsi B: Netlify (Gratis, Lebih Mudah)
1. Buka netlify.com
2. Drag & drop folder `v3/` ke dashboard Netlify
3. Website langsung live dengan URL random (bisa custom domain)

### Opsi C: Domain Sendiri
Setelah deploy ke Netlify/GitHub Pages, bisa tambahkan custom domain (misal: `ngudiluhuragro.com`) melalui pengaturan DNS di provider domain.

---

## 13. Cara Maintenance

### Ubah Nomor WhatsApp
Cari-ganti di semua file HTML:
```
6281234567890 → nomor asli gapoktan
6281234567891 → nomor asli manager ekspor
6281234567892 → nomor asli KWT
6281234567893 → nomor asli karang taruna
```

### Tambah/Ubah Produk UMKM
Edit file `js/products.js` saja. HTML tidak perlu diubah.

### Tambah Foto
Foto hero: tambah ke `images/hero/` dengan format `.webp`
Foto produk: tambah ke `images/umkm/` dengan nama `product_N.webp`

### Ubah Warna/Font Global
Edit `css/tokens.css`. Perubahan akan otomatis berlaku di seluruh website.

### Ubah Teks
Edit langsung di file HTML yang bersangkutan. Semua teks inline di HTML.

---

*Dibuat: April 2026 | Project: Website Gapoktan Ngudi Luhur v3 | Developer: Faiz Abdurrachman*
