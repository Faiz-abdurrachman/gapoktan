# ⚙️ Spesifikasi Teknis Website — Gapoktan Ngudi Luhur
**Dokumen:** Technical Specification for Developer (UPDATED)
**Versi:** 2.0 — Full Native JS + Google Sheets + Apps Script
**Dibuat untuk:** Mas Chen (Developer)
**Catatan:** Tidak ada framework (React/Next/Vue). Murni HTML + CSS + Vanilla JS.

---

## 📌 DAFTAR ISI

1. [Stack Teknologi](#1-stack-teknologi)
2. [Arsitektur Sistem](#2-arsitektur-sistem)
3. [Struktur Proyek](#3-struktur-proyek)
4. [Design System & Token](#4-design-system--token)
5. [Google Sheets — Struktur Database](#5-google-sheets--struktur-database)
6. [Google Apps Script — API Layer](#6-google-apps-script--api-layer)
7. [Frontend — Modul JS Per Fitur](#7-frontend--modul-js-per-fitur)
8. [Spesifikasi Komponen UI](#8-spesifikasi-komponen-ui)
9. [Animasi & Interaksi](#9-animasi--interaksi)
10. [Performa & Optimasi](#10-performa--optimasi)
11. [Responsivitas & Breakpoint](#11-responsivitas--breakpoint)
12. [Integrasi Pihak Ketiga](#12-integrasi-pihak-ketiga)
13. [Aksesibilitas](#13-aksesibilitas)
14. [Deployment & Hosting](#14-deployment--hosting)
15. [Checklist QA Sebelum Launch](#15-checklist-qa-sebelum-launch)

---

## 1. STACK TEKNOLOGI

### Core — Tidak Ada Framework

```
HTML5         : Struktur halaman (semantic tags)
CSS3          : Styling + animasi (custom properties, grid, flexbox)
Vanilla JS    : Semua logika interaktif (ES6+, async/await, modules)
```

### Database & Backend

```
Google Sheets       : Database utama (produk, booking, statistik, dll)
Google Apps Script  : API layer — jembatan Sheets ↔ Website
```

### Library Eksternal (Minimal)

```
Swiper.js      : Hero slideshow (via CDN, ~30KB)
PhotoSwipe     : Lightbox galeri foto (via CDN, ~15KB)
```

> Tidak ada bundler (Webpack/Vite), tidak ada node_modules,
> tidak ada build process. Edit → refresh → selesai.

### Tools Development

```
Editor         : VS Code
Live Server    : VS Code extension (Live Server by Ritwick Dey)
Browser DevTools: Chrome / Firefox
Image compress : Squoosh (squoosh.app)
Icon           : SVG manual / Heroicons (copy SVG langsung)
Font           : Google Fonts (Playfair Display + DM Sans)
```

---

## 2. ARSITEKTUR SISTEM

```
┌─────────────────────────────────────────────────────────────┐
│                      WEBSITE (Frontend)                     │
│              HTML + CSS + Vanilla JS (Static Files)         │
│                                                             │
│  index.html   ekspor.html   umkm.html   agrowisata.html    │
│       │             │           │              │            │
│       └─────────────┴───────────┴──────────────┘           │
│                           │                                 │
│                      js/api.js                              │
│                    (fetch wrapper)                          │
└───────────────────────────┬─────────────────────────────────┘
                            │ HTTPS fetch()
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                  GOOGLE APPS SCRIPT                         │
│                   (API / Backend)                           │
│                                                             │
│   doGet()  → baca data dari Sheets → return JSON           │
│   doPost() → tulis data ke Sheets  → return status         │
│                                                             │
│   URL: https://script.google.com/macros/s/[ID]/exec        │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    GOOGLE SHEETS                            │
│                    (Database)                               │
│                                                             │
│  Tab: produk │ statistik │ booking │ media │ fasilitas     │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ (opsional)
┌───────────────────────────▼─────────────────────────────────┐
│                   GOOGLE DRIVE                              │
│              Penyimpanan Foto & Aset (D.1)                  │
│         URL foto langsung dipakai di kolom foto_url         │
└─────────────────────────────────────────────────────────────┘
```

### Alur Data — Contoh Produk UMKM

```
Tim KWT tambah produk di Sheets
         │
         ▼
Pengunjung buka umkm.html
         │
         ▼
js/products.js → fetch ke Apps Script URL
         │
         ▼
Apps Script baca Sheet "produk" → return JSON
         │
         ▼
JS render kartu produk ke DOM
         │
         ▼
Pengunjung klik "Pesan Sekarang" → buka WhatsApp
```

### Alur Data — Booking Agrowisata

```
Pengunjung isi form di agrowisata.html
         │
         ▼
js/booking.js validasi form
         │
         ▼
fetch POST ke Apps Script
         │
         ▼
Apps Script appendRow ke Sheet "booking"
Apps Script kirim email notif ke admin
         │
         ▼
JS buka WhatsApp dengan pesan terformat
         │
         ▼
Admin lihat booking baru di Sheets
```

---

## 3. STRUKTUR PROYEK

```
ngudi-luhur/
│
├── index.html                 → Beranda (/)
├── ekspor.html                → Giat Ekspor (/ekspor)
├── umkm.html                  → UMKM & Olahan (/umkm)
├── agrowisata.html            → Agrowisata (/agrowisata)
│
├── css/
│   ├── tokens.css             → design tokens (variabel global)
│   ├── reset.css              → CSS reset / normalize
│   ├── global.css             → style global (body, typography, utility)
│   ├── components/
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── footer.css
│   │   ├── skeleton.css       → loading skeleton
│   │   └── animations.css
│   └── pages/
│       ├── home.css
│       ├── ekspor.css
│       ├── umkm.css
│       └── agrowisata.css
│
├── js/
│   ├── config.js              → konstanta global (API URL, WA nomor, dll)
│   ├── api.js                 → semua komunikasi dengan Apps Script
│   ├── main.js                → navbar, scroll behavior, animasi global
│   ├── slideshow.js           → hero slideshow (Swiper wrapper)
│   ├── counter.js             → impact counter animation
│   ├── products.js            → render & filter produk UMKM
│   ├── booking.js             → form booking → WhatsApp + Sheets
│   ├── gallery.js             → galeri foto + lightbox (PhotoSwipe)
│   └── utils.js               → helper functions (format angka, dll)
│
├── images/
│   ├── hero/                  → foto slideshow beranda
│   ├── ekspor/                → foto dokumentasi ekspor
│   ├── umkm/                  → foto produk (fallback lokal)
│   ├── agrowisata/            → foto fasilitas wisata
│   ├── mitra/                 → logo Sunpride, DSA, media
│   └── placeholder/           → placeholder saat foto belum ada
│       ├── produk.webp
│       ├── galeri.webp
│       └── hero.webp
│
├── audio/
│   └── ngudi-luhur-theme.mp3  → backsound (opsional)
│
└── apps-script/
    └── Code.gs                → kode Apps Script (dokumentasi/backup)
```

---

## 4. DESIGN SYSTEM & TOKEN

### tokens.css — Satu File untuk Semua Variabel

```css
:root {

  /* ─── Warna Utama ──────────────────────────────────── */
  --green-primary   : #2D6A4F;
  --green-dark      : #1B4332;
  --green-deep      : #0D2B1F;
  --green-light     : #EAF4EE;
  --green-surface   : #D8F3DC;

  /* ─── Warna Sekunder ───────────────────────────────── */
  --brown-primary   : #6B4226;
  --brown-light     : #F5EFE6;
  --cream           : #FAF7F2;

  /* ─── Aksen ────────────────────────────────────────── */
  --orange-salak    : #E07B39;
  --orange-dark     : #C86B2D;
  --orange-light    : #FDF0E8;

  /* ─── Teks ─────────────────────────────────────────── */
  --text-primary    : #1A1A1A;
  --text-secondary  : #4B5563;
  --text-muted      : #9CA3AF;
  --text-white      : #FFFFFF;
  --text-white-muted: rgba(255,255,255,0.75);

  /* ─── Background ───────────────────────────────────── */
  --bg-page         : #FAFAF8;
  --bg-white        : #FFFFFF;
  --bg-dark         : #1B2E1F;

  /* ─── Border ───────────────────────────────────────── */
  --border-light    : #E5E7EB;
  --border-medium   : #D1D5DB;

  /* ─── Status ───────────────────────────────────────── */
  --success         : #16A34A;
  --error           : #DC2626;
  --warning         : #D97706;

  /* ─── Typography ───────────────────────────────────── */
  --font-display    : 'Playfair Display', Georgia, serif;
  --font-body       : 'DM Sans', system-ui, sans-serif;

  --text-xs         : 0.75rem;    /* 12px */
  --text-sm         : 0.875rem;   /* 14px */
  --text-base       : 1rem;       /* 16px */
  --text-lg         : 1.125rem;   /* 18px */
  --text-xl         : 1.25rem;    /* 20px */
  --text-2xl        : 1.5rem;     /* 24px */
  --text-3xl        : 1.875rem;   /* 30px */
  --text-4xl        : 2.25rem;    /* 36px */
  --text-5xl        : 3rem;       /* 48px */
  --text-6xl        : clamp(2.5rem, 6vw, 3.75rem); /* responsive */

  --leading-tight   : 1.2;
  --leading-normal  : 1.65;
  --leading-loose   : 1.85;

  --weight-regular  : 400;
  --weight-medium   : 500;
  --weight-semibold : 600;
  --weight-bold     : 700;

  /* ─── Spacing ──────────────────────────────────────── */
  --sp-1   : 0.25rem;   /* 4px  */
  --sp-2   : 0.5rem;    /* 8px  */
  --sp-3   : 0.75rem;   /* 12px */
  --sp-4   : 1rem;      /* 16px */
  --sp-6   : 1.5rem;    /* 24px */
  --sp-8   : 2rem;      /* 32px */
  --sp-10  : 2.5rem;    /* 40px */
  --sp-12  : 3rem;      /* 48px */
  --sp-16  : 4rem;      /* 64px */
  --sp-20  : 5rem;      /* 80px */
  --sp-24  : 6rem;      /* 96px */

  --section-py      : clamp(4rem, 8vw, 6rem);
  --section-px      : clamp(1.25rem, 5vw, 4rem);
  --container-max   : 1200px;

  /* ─── Border Radius ────────────────────────────────── */
  --radius-sm       : 6px;
  --radius-md       : 12px;
  --radius-lg       : 20px;
  --radius-xl       : 32px;
  --radius-full     : 9999px;

  /* ─── Shadow ───────────────────────────────────────── */
  --shadow-sm       : 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md       : 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg       : 0 8px 32px rgba(0,0,0,0.12);
  --shadow-green    : 0 4px 20px rgba(45,106,79,0.15);

  /* ─── Transisi ─────────────────────────────────────── */
  --transition-fast : 150ms ease;
  --transition-base : 250ms ease;
  --transition-slow : 400ms ease;
}
```

---

## 5. GOOGLE SHEETS — STRUKTUR DATABASE

### Spreadsheet: "Database Ngudi Luhur"

Satu file Google Spreadsheet dengan 5 tab sheet.

---

### Tab 1 — `produk`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | Number | Auto-increment, unik |
| nama | Text | Nama produk |
| kategori | Text | "Makanan Ringan" atau "Minuman" |
| deskripsi | Text | Max 150 karakter |
| harga | Number | Angka saja (tanpa Rp) |
| foto_url | URL | Link foto dari Google Drive / hosting |
| tersedia | Boolean | TRUE / FALSE |
| unggulan | Boolean | TRUE / FALSE (badge ⭐) |
| wa_pesan | Text | Pesan WA custom (opsional, bisa kosong) |

**Contoh data:**
```
1 | Kripik Salak | Makanan Ringan | Camilan renyah dari salak Nglumut pilihan | 25000 | https://... | TRUE | FALSE | -
2 | Kopi Biji Salak | Minuman | Kopi unik dari biji salak Nglumut | 45000 | https://... | TRUE | TRUE | Halo, saya tertarik dengan Kopi Biji Salak...
```

---

### Tab 2 — `statistik`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| key | Text | Identifier unik |
| label | Text | Label tampilan |
| nilai | Number | Angka untuk counter |
| prefix | Text | Teks sebelum angka (contoh: "±") |
| suffix | Text | Teks setelah angka (contoh: "+ Hektar") |
| keterangan | Text | Sub-label di bawah angka |
| animasi | Boolean | TRUE = counter naik, FALSE = statis |
| urutan | Number | Urutan tampil di website |

**Contoh data:**
```
lahan       | Total Lahan     | 800  |    | + Hektar    | Perkebunan Salak Nglumut      | TRUE  | 1
ekspor_china| Volume Ekspor   | 700  | ±  | Ton         | Januari–Oktober 2025          | TRUE  | 2
pengiriman  | Rata-rata Kirim | 50   |    | Ton/Minggu  | Frekuensi pengiriman rutin    | FALSE | 3
negara      | Jangkauan Ekspor| 4    |    | + Negara    | China, Kamboja, Eropa, Timor  | TRUE  | 4
```

---

### Tab 3 — `booking`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| timestamp | DateTime | Otomatis dari Apps Script |
| nama | Text | Nama pengunjung / instansi |
| instansi | Text | Nama instansi (opsional) |
| paket | Text | Jenis paket wisata |
| peserta | Number | Jumlah peserta |
| tanggal | Date | Tanggal rencana kunjungan |
| wa | Text | Nomor WhatsApp |
| pesan | Text | Pesan tambahan |
| status | Text | "Pending" / "Dikonfirmasi" / "Selesai" |
| catatan_admin | Text | Catatan internal admin |

> Sheet ini hanya diisi oleh Apps Script (doPost). Tim admin hanya edit kolom `status` dan `catatan_admin`.

---

### Tab 4 — `media`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | Number | Auto |
| nama_media | Text | Nama media |
| logo_url | URL | URL logo media |
| link_artikel | URL | Link ke artikel / siaran |
| deskripsi | Text | Deskripsi singkat liputan |
| aktif | Boolean | TRUE = tampil di website |
| urutan | Number | Urutan tampil |

---

### Tab 5 — `fasilitas`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | Number | Auto |
| nama | Text | Nama fasilitas |
| area | Text | "Produksi" / "Pertemuan" / "Outdoor" |
| deskripsi | Text | Deskripsi singkat |
| foto_url | URL | URL foto fasilitas |
| aktif | Boolean | TRUE = tampil |
| urutan | Number | Urutan tampil |

---

### Cara Simpan Foto di Google Drive untuk Dipakai di Sheets

```
1. Upload foto ke Google Drive (folder khusus "Foto Website")
2. Klik kanan foto → "Get link" → ubah ke "Anyone with the link"
3. Salin link → format: https://drive.google.com/file/d/[FILE_ID]/view
4. Ubah ke format direct URL:
   https://drive.google.com/uc?export=view&id=[FILE_ID]
5. Tempel URL ini ke kolom foto_url di Sheets
```

---

## 6. GOOGLE APPS SCRIPT — API LAYER

### Code.gs — File Utama

```javascript
// ═══════════════════════════════════════════════════════════
// KONFIGURASI — sesuaikan sebelum deploy
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  SHEET_ID    : 'GANTI_DENGAN_ID_SPREADSHEET',
  ADMIN_EMAIL : 'GANTI_DENGAN_EMAIL_ADMIN@gmail.com',
  ALLOWED_ORIGIN: '*' // ganti dengan domain website setelah live
};

// ═══════════════════════════════════════════════════════════
// ENTRY POINT — GET (baca data)
// ═══════════════════════════════════════════════════════════

function doGet(e) {
  try {
    const sheet  = e.parameter.sheet  || 'produk';
    const action = e.parameter.action || 'getAll';
    const field  = e.parameter.field  || null;
    const value  = e.parameter.value  || null;

    let data;

    switch (action) {
      case 'getAll':
        data = getAllData(sheet);
        break;
      case 'getFiltered':
        data = getFiltered(sheet, field, value);
        break;
      case 'getActive':
        data = getActive(sheet);
        break;
      case 'getSorted':
        data = getSorted(sheet, field || 'urutan');
        break;
      default:
        data = getAllData(sheet);
    }

    return buildResponse({ status: 200, data });

  } catch (err) {
    return buildResponse({ status: 500, error: err.message });
  }
}

// ═══════════════════════════════════════════════════════════
// ENTRY POINT — POST (tulis data)
// ═══════════════════════════════════════════════════════════

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet   = payload.sheet || 'booking';
    let result;

    switch (sheet) {
      case 'booking':
        result = saveBooking(payload.data);
        break;
      default:
        throw new Error('Sheet tidak dikenali: ' + sheet);
    }

    return buildResponse({ status: 200, success: true, data: result });

  } catch (err) {
    return buildResponse({ status: 500, error: err.message });
  }
}

// ═══════════════════════════════════════════════════════════
// HELPER — Baca Semua Data
// ═══════════════════════════════════════════════════════════

function getAllData(sheetName) {
  const ss      = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  const sheet   = ss.getSheetByName(sheetName);

  if (!sheet) throw new Error('Sheet tidak ditemukan: ' + sheetName);

  const rows    = sheet.getDataRange().getValues();
  const headers = rows[0].map(h => String(h).trim());

  return rows.slice(1)
    .filter(row => row[0] !== '' && row[0] !== null)
    .map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        // Normalize boolean
        if (row[i] === true  || row[i] === 'TRUE'  || row[i] === 'true')  obj[h] = true;
        else if (row[i] === false || row[i] === 'FALSE' || row[i] === 'false') obj[h] = false;
        else obj[h] = row[i];
      });
      return obj;
    });
}

// ═══════════════════════════════════════════════════════════
// HELPER — Filter & Sort
// ═══════════════════════════════════════════════════════════

function getFiltered(sheetName, field, value) {
  return getAllData(sheetName).filter(row =>
    String(row[field]).toLowerCase() === String(value).toLowerCase()
  );
}

function getActive(sheetName) {
  return getAllData(sheetName)
    .filter(row => row.aktif === true || row.tersedia === true);
}

function getSorted(sheetName, field) {
  return getAllData(sheetName).sort((a, b) =>
    (Number(a[field]) || 0) - (Number(b[field]) || 0)
  );
}

// ═══════════════════════════════════════════════════════════
// HELPER — Simpan Booking
// ═══════════════════════════════════════════════════════════

function saveBooking(data) {
  const ss    = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  const sheet = ss.getSheetByName('booking');

  const row = [
    new Date(),
    data.nama        || '',
    data.instansi    || '-',
    data.paket       || '',
    Number(data.peserta) || 0,
    data.tanggal     || '',
    data.wa          || '',
    data.pesan       || '-',
    'Pending',
    ''  // catatan_admin (kosong)
  ];

  sheet.appendRow(row);

  // Kirim notifikasi email ke admin
  try {
    sendEmailNotif(data);
  } catch(e) {
    // email gagal tidak boleh gagalkan response
    Logger.log('Email gagal: ' + e.message);
  }

  return { message: 'Booking tersimpan', timestamp: new Date().toISOString() };
}

// ═══════════════════════════════════════════════════════════
// HELPER — Email Notifikasi Admin
// ═══════════════════════════════════════════════════════════

function sendEmailNotif(data) {
  const subject = `[Booking Baru] ${data.nama} — Paket ${data.paket}`;
  const body    = `
Halo Admin Ngudi Luhur,

Ada booking agrowisata baru masuk:

━━━━━━━━━━━━━━━━━━━━━━━━━━
  Nama / Instansi : ${data.nama} ${data.instansi ? '(' + data.instansi + ')' : ''}
  Paket           : ${data.paket}
  Jumlah Peserta  : ${data.peserta} orang
  Tanggal Rencana : ${data.tanggal}
  No. WhatsApp    : ${data.wa}
  Pesan           : ${data.pesan || '-'}
━━━━━━━━━━━━━━━━━━━━━━━━━━

Segera hubungi calon pengunjung untuk konfirmasi.

Lihat semua booking di Sheets:
https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}

— Sistem Website Ngudi Luhur
  `;

  MailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, body);
}

// ═══════════════════════════════════════════════════════════
// HELPER — Build Response JSON
// ═══════════════════════════════════════════════════════════

function buildResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Cara Deploy Apps Script

```
1. Buka Google Spreadsheet → Extensions → Apps Script
2. Hapus kode default, paste Code.gs di atas
3. Ganti CONFIG.SHEET_ID dengan ID spreadsheet
   (ID ada di URL: docs.google.com/spreadsheets/d/[ID_DI_SINI]/edit)
4. Ganti CONFIG.ADMIN_EMAIL dengan email admin
5. Klik Deploy → New Deployment
6. Pilih type: Web app
7. Execute as: Me (akun Google pemilik Sheets)
8. Who has access: Anyone
9. Klik Deploy → copy URL deployment
10. Paste URL ke js/config.js di website
```

---

## 7. FRONTEND — MODUL JS PER FITUR

### js/config.js — Konfigurasi Global

```javascript
// ═══════════════════════════════════════════════════════════
// KONFIGURASI GLOBAL — sesuaikan sebelum launch
// ═══════════════════════════════════════════════════════════

const CONFIG = {
  // URL Apps Script deployment (dari langkah deploy di atas)
  API_URL: 'https://script.google.com/macros/s/GANTI_DEPLOYMENT_ID/exec',

  // Nomor WhatsApp per divisi (format: 62xxx tanpa + atau spasi)
  WA: {
    UMUM      : '6281234567890', // ketua Gapoktan / umum
    EKSPOR    : '6281234567891', // tim Poktan ekspor
    UMKM      : '6281234567892', // tim KWT
    AGROWISATA: '6281234567893', // tim Karang Taruna
  },

  // Google Maps link
  MAPS_LINK: 'https://maps.app.goo.gl/XdoRZrutTGQzJPHN9',

  // Google Analytics ID
  GA_ID: 'G-XXXXXXXXXX',
};
```

---

### js/api.js — Fetch Wrapper

```javascript
// ═══════════════════════════════════════════════════════════
// API.JS — Semua komunikasi dengan Apps Script
// ═══════════════════════════════════════════════════════════

// Cache sederhana agar tidak fetch ulang data yang sama
const _cache = {};

async function apiFetch(params = {}) {
  const url    = new URL(CONFIG.API_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

  const cacheKey = url.toString();

  // Return dari cache jika ada (5 menit)
  if (_cache[cacheKey] && Date.now() - _cache[cacheKey].time < 300000) {
    return _cache[cacheKey].data;
  }

  const res  = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const json = await res.json();
  if (json.status !== 200) throw new Error(json.error || 'API error');

  _cache[cacheKey] = { data: json.data, time: Date.now() };
  return json.data;
}

async function apiPost(body = {}) {
  const res = await fetch(CONFIG.API_URL, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const json = await res.json();
  if (json.status !== 200) throw new Error(json.error || 'API error');

  return json;
}

// ─── Exported functions ────────────────────────────────────

async function getProduk(kategori = null) {
  const params = kategori
    ? { sheet: 'produk', action: 'getFiltered', field: 'kategori', value: kategori }
    : { sheet: 'produk', action: 'getActive' };

  const data = await apiFetch(params);
  return data.filter(p => p.tersedia === true);
}

async function getStatistik() {
  return apiFetch({ sheet: 'statistik', action: 'getSorted', field: 'urutan' });
}

async function getMedia() {
  const data = await apiFetch({ sheet: 'media', action: 'getSorted', field: 'urutan' });
  return data.filter(m => m.aktif === true);
}

async function getFasilitas(area = null) {
  const params = area
    ? { sheet: 'fasilitas', action: 'getFiltered', field: 'area', value: area }
    : { sheet: 'fasilitas', action: 'getSorted', field: 'urutan' };

  return apiFetch(params);
}

async function submitBooking(formData) {
  return apiPost({ sheet: 'booking', data: formData });
}
```

---

### js/utils.js — Helper Functions

```javascript
// ═══════════════════════════════════════════════════════════
// UTILS.JS — Fungsi-fungsi helper
// ═══════════════════════════════════════════════════════════

// Format angka ke Rupiah
function formatRupiah(angka) {
  if (!angka) return 'Hubungi kami';
  return 'Rp ' + Number(angka).toLocaleString('id-ID');
}

// Format nomor WA
function buildWALink(nomor, pesan = '') {
  const encoded = encodeURIComponent(pesan);
  return `https://wa.me/${nomor}?text=${encoded}`;
}

// Pesan WA default produk
function pesanProduk(namaProduk, pesanCustom = '') {
  const pesan = pesanCustom ||
    `Halo, saya ingin memesan *${namaProduk}* dari Gapoktan Ngudi Luhur. ` +
    `Mohon info ketersediaan dan pengiriman. Terima kasih 🙏`;
  return buildWALink(CONFIG.WA.UMKM, pesan);
}

// Skeleton loader HTML
function skeletonCards(n, cls = 'card') {
  return Array(n).fill(`
    <div class="${cls} skeleton" aria-hidden="true">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line w-60"></div>
        <div class="skeleton-line w-80"></div>
        <div class="skeleton-line w-40"></div>
      </div>
    </div>
  `).join('');
}

// Error state HTML
function errorState(msg = 'Gagal memuat data. Silakan coba lagi.') {
  return `
    <div class="state-error" role="alert">
      <p>${msg}</p>
      <button onclick="location.reload()" class="btn btn-outline">
        Refresh Halaman
      </button>
    </div>
  `;
}

// Empty state HTML
function emptyState(msg = 'Data belum tersedia.') {
  return `<div class="state-empty"><p>${msg}</p></div>`;
}

// Debounce
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Truncate teks
function truncate(str, max = 100) {
  return str.length > max ? str.slice(0, max) + '...' : str;
}
```

---

### js/counter.js — Impact Counter Animation

```javascript
// ═══════════════════════════════════════════════════════════
// COUNTER.JS — Animasi counter angka statistik
// ═══════════════════════════════════════════════════════════

async function initCounter() {
  const section = document.getElementById('impact-section');
  if (!section) return;

  try {
    const stats = await getStatistik();
    renderCounterCards(stats);
    observeCounter();
  } catch (err) {
    // Fallback ke data statis jika API gagal
    console.warn('API statistik gagal, pakai data statis:', err);
    renderCounterCards(FALLBACK_STATS);
    observeCounter();
  }
}

// Data fallback jika Sheets tidak bisa diakses
const FALLBACK_STATS = [
  { label: 'Total Lahan',     nilai: 800, prefix: '',  suffix: '+ Hektar',   keterangan: 'Perkebunan Salak Nglumut', animasi: true },
  { label: 'Volume Ekspor',   nilai: 700, prefix: '±', suffix: ' Ton',       keterangan: 'Januari–Oktober 2025',     animasi: true },
  { label: 'Rata-rata Kirim', nilai: 50,  prefix: '',  suffix: ' Ton/Minggu',keterangan: 'Frekuensi pengiriman rutin',animasi: false },
  { label: 'Negara Tujuan',   nilai: 4,   prefix: '',  suffix: '+ Negara',   keterangan: 'Asia & Eropa',             animasi: true },
];

function renderCounterCards(stats) {
  const container = document.getElementById('counter-grid');
  if (!container) return;

  container.innerHTML = stats.map(s => `
    <div class="counter-card fade-up">
      <span class="counter-value"
            data-target="${s.animasi ? s.nilai : ''}"
            data-prefix="${s.prefix || ''}"
            data-suffix="${s.suffix || ''}">
        ${s.prefix || ''}${s.animasi ? '0' : s.nilai}${s.suffix || ''}
      </span>
      <span class="counter-label">${s.label}</span>
      <span class="counter-sub">${s.keterangan || ''}</span>
    </div>
  `).join('');
}

function observeCounter() {
  const cards = document.querySelectorAll('.counter-card[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target.querySelector('[data-target]');
      if (!el || el.dataset.animated) return;

      el.dataset.animated = 'true';
      animateCount(el);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  cards.forEach(card => observer.observe(card));
}

function animateCount(el) {
  const target  = parseInt(el.dataset.target);
  const prefix  = el.dataset.prefix || '';
  const suffix  = el.dataset.suffix || '';
  const duration = 2000;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.floor(eased * target);

    el.textContent = prefix + current.toLocaleString('id-ID') + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target.toLocaleString('id-ID') + suffix;
  }

  requestAnimationFrame(update);
}
```

---

### js/products.js — Katalog Produk UMKM

```javascript
// ═══════════════════════════════════════════════════════════
// PRODUCTS.JS — Render & filter katalog produk UMKM
// ═══════════════════════════════════════════════════════════

let allProduk = []; // cache lokal

async function initProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = skeletonCards(8, 'product-card');

  try {
    allProduk = await getProduk();
    renderProduk(allProduk);
    initFilter();
  } catch (err) {
    grid.innerHTML = errorState('Gagal memuat produk. Coba refresh halaman.');
    console.error(err);
  }
}

function renderProduk(produk) {
  const grid = document.getElementById('product-grid');

  if (!produk.length) {
    grid.innerHTML = emptyState('Produk belum tersedia. Segera hadir!');
    return;
  }

  grid.innerHTML = produk.map((p, i) => `
    <article class="product-card fade-up" style="animation-delay: ${i * 80}ms">
      <div class="product-img-wrap">
        <img
          src="${p.foto_url || '/images/placeholder/produk.webp'}"
          alt="${p.nama} — produk olahan salak Ngudi Luhur Magelang"
          loading="lazy"
          width="400" height="300"
          onerror="this.src='/images/placeholder/produk.webp'"
        >
        ${p.unggulan ? '<span class="badge-unggulan">⭐ Unggulan</span>' : ''}
        <span class="badge-kategori">${p.kategori}</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.nama}</h3>
        <p class="product-desc">${truncate(p.deskripsi, 100)}</p>
        <div class="product-footer">
          <span class="product-price">${formatRupiah(p.harga)}</span>
          <a
            href="${pesanProduk(p.nama, p.wa_pesan)}"
            class="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
            data-wa="umkm"
            aria-label="Pesan ${p.nama} via WhatsApp"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </article>
  `).join('');

  initScrollAnimation('.product-card');
  trackWAClicks();
}

function initFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const kategori = tab.dataset.kategori;
      const filtered = kategori === 'semua'
        ? allProduk
        : allProduk.filter(p =>
            p.kategori.toLowerCase() === kategori.toLowerCase()
          );

      renderProduk(filtered);
    });
  });
}
```

---

### js/booking.js — Form Booking Agrowisata

```javascript
// ═══════════════════════════════════════════════════════════
// BOOKING.JS — Form booking → Sheets + WhatsApp
// ═══════════════════════════════════════════════════════════

function initBooking() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Set tanggal minimal H+3
  const tanggalInput = document.getElementById('tanggal');
  if (tanggalInput) {
    const min = new Date();
    min.setDate(min.getDate() + 3);
    tanggalInput.min = min.toISOString().split('T')[0];
  }

  form.addEventListener('submit', handleBookingSubmit);
}

async function handleBookingSubmit(e) {
  e.preventDefault();

  const btn    = e.target.querySelector('[type="submit"]');
  const formData = getFormData(e.target);

  // Validasi
  const errors = validateBooking(formData);
  if (errors.length) {
    showFormErrors(errors);
    return;
  }

  // Loading state
  btn.disabled    = true;
  btn.textContent = 'Menyimpan...';

  try {
    // 1. Simpan ke Sheets via Apps Script
    await submitBooking(formData);

    // 2. Buka WhatsApp
    const waMsg = buildBookingMessage(formData);
    window.open(
      buildWALink(CONFIG.WA.AGROWISATA, waMsg),
      '_blank'
    );

    // 3. Reset form + tampilkan sukses
    e.target.reset();
    showSuccess('Booking terkirim! Tim kami akan menghubungi Anda segera.');

    // GA4 event
    gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label   : 'booking_agrowisata'
    });

  } catch (err) {
    showFormError('global', 'Terjadi kesalahan. Silakan hubungi kami langsung via WhatsApp.');
    console.error(err);
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Ajukan Booking';
  }
}

function getFormData(form) {
  const fd = new FormData(form);
  return {
    nama     : fd.get('nama')?.trim(),
    instansi : fd.get('instansi')?.trim(),
    paket    : fd.get('paket'),
    peserta  : fd.get('peserta'),
    tanggal  : fd.get('tanggal'),
    wa       : fd.get('wa')?.trim(),
    pesan    : fd.get('pesan')?.trim(),
  };
}

function validateBooking(data) {
  const errors = [];
  if (!data.nama)    errors.push({ field: 'nama',    msg: 'Nama wajib diisi' });
  if (!data.paket)   errors.push({ field: 'paket',   msg: 'Pilih jenis paket' });
  if (!data.peserta || data.peserta < 1)
                     errors.push({ field: 'peserta', msg: 'Jumlah peserta tidak valid' });
  if (!data.tanggal) errors.push({ field: 'tanggal', msg: 'Tanggal kunjungan wajib diisi' });
  if (!data.wa || !/^08\d{8,11}$/.test(data.wa))
                     errors.push({ field: 'wa',      msg: 'Nomor WhatsApp tidak valid (contoh: 081234567890)' });
  return errors;
}

function buildBookingMessage(data) {
  return (
    `Halo Tim Agrowisata Ngudi Luhur 👋\n\n` +
    `Saya ingin booking kunjungan:\n` +
    `📛 Nama       : ${data.nama}${data.instansi ? ' (' + data.instansi + ')' : ''}\n` +
    `🎯 Paket      : ${data.paket}\n` +
    `👥 Peserta    : ${data.peserta} orang\n` +
    `📅 Tanggal    : ${data.tanggal}\n` +
    `${data.pesan ? '💬 Pesan      : ' + data.pesan + '\n' : ''}` +
    `\nMohon konfirmasi ketersediaan. Terima kasih!`
  );
}
```

---

### js/main.js — Global (Navbar, Animasi, Tracking)

```javascript
// ═══════════════════════════════════════════════════════════
// MAIN.JS — Script global yang jalan di semua halaman
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimation();
  initMusicToggle();
  trackWAClicks();
});

// ─── Navbar scroll behavior ───────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 80;

  window.addEventListener('scroll', debounce(() => {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }, 10));

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay   = document.getElementById('menu-overlay');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      overlay?.classList.toggle('visible', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    overlay?.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    });
  }
}

// ─── Scroll animation (Intersection Observer) ─────────────
function initScrollAnimation(selector = '.fade-up, .fade-left') {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ─── Music toggle ─────────────────────────────────────────
function initMusicToggle() {
  const audio  = document.getElementById('bg-music');
  const toggle = document.getElementById('music-toggle');
  if (!audio || !toggle) return;

  toggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      toggle.classList.add('playing');
      toggle.setAttribute('aria-label', 'Hentikan musik latar');
    } else {
      audio.pause();
      toggle.classList.remove('playing');
      toggle.setAttribute('aria-label', 'Putar musik latar');
    }
  });
}

// ─── Track klik WA untuk GA4 ──────────────────────────────
function trackWAClicks() {
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click_whatsapp', {
          event_category: 'engagement',
          event_label   : el.dataset.wa,
        });
      }
    });
  });
}
```

---

## 8. SPESIFIKASI KOMPONEN UI

### Navbar — 2 State

```
Height          : 70px desktop · 60px mobile
z-index         : 1000
Position        : sticky, top: 0

State default (di hero):
  background    : transparent
  color teks    : putih
  transition    : 300ms ease

State scrolled (> 80px):
  background    : rgba(255,255,255,0.96)
  backdrop-filter: blur(12px)
  border-bottom : 1px solid var(--border-light)
  box-shadow    : var(--shadow-sm)
  color teks    : var(--text-primary)

Mobile hamburger:
  Ikon         : 3 garis → X (CSS transition)
  Menu slide   : dari kanan, 280px lebar
  Overlay      : rgba(0,0,0,0.4) di belakang menu
  Tutup        : klik overlay / tombol X / ESC key
```

### Buttons

```css
/* Tombol utama — oranye salak */
.btn-primary {
  background   : var(--orange-salak);
  color        : white;
  padding      : 12px 24px;
  border-radius: var(--radius-md);
  font-weight  : var(--weight-semibold);
  transition   : background var(--transition-base), transform var(--transition-fast);
}
.btn-primary:hover  { background: var(--orange-dark); transform: translateY(-2px); }
.btn-primary:active { transform: translateY(0); }

/* Tombol sekunder — outline hijau */
.btn-outline {
  border  : 2px solid var(--green-primary);
  color   : var(--green-primary);
  background: transparent;
}
.btn-outline:hover { background: var(--green-light); }

/* Tombol kecil */
.btn-sm { padding: 8px 16px; font-size: var(--text-sm); }

/* Tombol besar — untuk CTA section */
.btn-lg { padding: 16px 32px; font-size: var(--text-lg); }
```

### Cards

```
Product card:
  Width         : 100% (dalam grid)
  Border        : 1px solid var(--border-light)
  Border-radius : var(--radius-md)
  Overflow      : hidden
  Hover         : translateY(-4px) + shadow-lg
  Transition    : 250ms ease

Impact counter card:
  Background    : rgba(255,255,255,0.08)
  Border        : 1px solid rgba(255,255,255,0.15)
  Padding       : 32px 24px
  Text center   : ya
  Angka font    : var(--font-display), 3rem, bold, oranye

Fasilitas card:
  Sama dengan product card
  Foto ratio    : 16/9
  Badge area    : pojok kiri atas
```

### Forms

```
Input / Select / Textarea:
  Border         : 1px solid var(--border-light)
  Border-radius  : var(--radius-sm)
  Padding        : 12px 16px
  Font-size      : var(--text-base)
  Transition     : border 200ms ease, box-shadow 200ms ease

  Focus state:
    border-color : var(--green-primary)
    box-shadow   : 0 0 0 3px rgba(45,106,79,0.15)
    outline      : none

  Error state:
    border-color : var(--error)
    box-shadow   : 0 0 0 3px rgba(220,38,38,0.12)

Label:
  Font-size      : var(--text-sm)
  Font-weight    : var(--weight-medium)
  Color          : var(--text-secondary)
  Margin-bottom  : 6px

Error message:
  Font-size      : var(--text-xs)
  Color          : var(--error)
  Margin-top     : 4px
```

---

## 9. ANIMASI & INTERAKSI

### CSS Animasi Dasar

```css
/* Fade-up */
.fade-up {
  opacity  : 0;
  transform: translateY(24px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

/* Fade dari kiri */
.fade-left {
  opacity  : 0;
  transform: translateX(-32px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

/* Keduanya muncul saat class visible ditambahkan JS */
.fade-up.visible,
.fade-left.visible {
  opacity  : 1;
  transform: none;
}

/* Stagger delay via inline style */
/* JS: el.style.transitionDelay = i * 100 + 'ms' */

/* Skeleton pulse */
@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

.skeleton-img,
.skeleton-line {
  background     : var(--border-light);
  border-radius  : var(--radius-sm);
  animation      : skeleton-pulse 1.5s ease-in-out infinite;
}

/* WAJIB — hentikan semua animasi jika user minta */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration  : 0.01ms !important;
    transition-duration : 0.01ms !important;
  }
}
```

---

## 10. PERFORMA & OPTIMASI

### Target Core Web Vitals

| Metrik | Target | Cara |
|--------|--------|------|
| LCP | < 2.5s | Preload hero foto, WebP, eager loading |
| INP | < 200ms | Hindari JS blocking, debounce events |
| CLS | < 0.1 | Set width & height semua gambar |
| TTFB | < 800ms | Hosting Indonesia / CDN |

### Foto — Wajib Diikuti

```
Format     : WebP utama
Kualitas   : 80% foto, 90% UI
Hero foto  : max 1920×1080, < 300KB
Thumbnail  : max 800×600,   < 100KB
Produk     : max 600×450,   < 80KB
Tool       : squoosh.app

Penamaan file:
  ✅ kebun-salak-nglumut-srumbung.webp
  ❌ IMG_20250312_093421.jpg

Wajib di semua <img>:
  width + height  → mencegah CLS
  loading="lazy"  → kecuali hero
  alt             → deskriptif, ada keyword
  onerror         → fallback ke placeholder
```

### Cache Apps Script

```javascript
// Di api.js — cache 5 menit untuk menghindari overload quota
const _cache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 menit

// Implementasi sudah ada di api.js di atas
// Ini mencegah terlalu banyak request ke Apps Script
// yang punya limit quota harian dari Google
```

### Google Apps Script — Quota Awareness

```
Quota gratis Google Apps Script:
  URL Fetch calls : 20.000/hari
  Script runtime  : 6 menit/eksekusi
  Email sent      : 100/hari

Tips agar aman dalam quota:
  - Gunakan cache di frontend (sudah ada di api.js)
  - Batasi fetch ulang data yang sama
  - Satu fetch = semua data yang dibutuhkan halaman itu
```

---

## 11. RESPONSIVITAS & BREAKPOINT

```css
/* Mobile-first */
/* Base  : 0px      → semua style default untuk mobile */
/* sm    : 640px    → tablet kecil */
/* md    : 768px    → tablet */
/* lg    : 1024px   → desktop */
/* xl    : 1280px   → wide desktop */
```

| Komponen | Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|----------|-----------------|--------------------|--------------------|
| Navbar | Hamburger | Hamburger | Link horizontal |
| Hero | Text center bawah | Text kiri bawah | Text kiri bawah |
| Counter | 2×2 grid | 2×2 / 4 kolom | 4 kolom |
| Tentang Kami | Stacked (foto atas) | 2 kolom | 2 kolom |
| 3 Pintu | Scroll horizontal | 3 kolom kecil | 3 kolom |
| Alur 4 Tahap | Vertikal timeline | Horizontal scroll | Horizontal |
| Product Grid | 1–2 kolom | 3 kolom | 4 kolom |
| Galeri | 1 kolom | 2 kolom | 3 kolom masonry |
| Booking Form | Full width | 80% centered | 60% centered |
| Footer | Stacked | 3 kolom | 3 kolom |

---

## 12. INTEGRASI PIHAK KETIGA

### Google Analytics 4

```html
<!-- Di <head> semua halaman -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### WhatsApp

```
Format URL : https://wa.me/[nomor]?text=[pesan_encoded]
Nomor      : 62xxx (tanpa +, tanpa 0 di depan)
Target     : _blank + rel="noopener noreferrer"
Data attr  : data-wa="[konteks]" untuk tracking GA4
```

### Google Maps Embed

```html
<iframe
  src="[src dari Google Maps → Share → Embed]"
  width="100%"
  height="450"
  style="border:0; border-radius: var(--radius-md);"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Lokasi Gapoktan Ngudi Luhur, Srumbung, Magelang"
></iframe>
```

### Swiper.js (CDN)

```html
<!-- Di <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- Sebelum </body> -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### PhotoSwipe (CDN)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.css">
<script src="https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.js" type="module"></script>
```

---

## 13. AKSESIBILITAS

```
Target     : WCAG 2.1 Level AA

Wajib diimplementasikan:

✅ Skip navigation link di awal <body>
✅ Semua gambar punya alt text
✅ H1 ada dan unik di setiap halaman
✅ Form fields punya <label> yang terasosiasi
✅ Focus indicator terlihat jelas
✅ Tombol ikon punya aria-label
✅ iframe maps punya title
✅ Mobile menu punya aria-expanded
✅ Error form diumumkan ke screen reader (role="alert")
✅ prefers-reduced-motion dihormati
✅ Kontras warna minimal 4.5:1
```

---

## 14. DEPLOYMENT & HOSTING

### Rekomendasi

```
Static files (HTML/CSS/JS)
  → Netlify (gratis, mudah, drag & drop folder)
  → GitHub Pages (gratis, via push ke repo)
  → Niagahoster shared hosting (familiar, dukungan Indonesia)

Domain
  → Daftar di Niagahoster / Domainesia
  → Pilih .com atau .id
  → Aktifkan HTTPS (SSL gratis via Let's Encrypt)

Google Sheets + Apps Script
  → Gratis, tidak butuh hosting sendiri
```

### Cara Deploy ke Netlify (Termudah)

```
1. Buka netlify.com → Sign up gratis
2. Drag & drop folder proyek ke dashboard Netlify
3. Netlify generate URL sementara (xxx.netlify.app)
4. Connect domain custom di Settings → Domains
5. HTTPS otomatis aktif
6. Update berikutnya: drag & drop ulang folder yang sudah diupdate
```

---

## 15. CHECKLIST QA SEBELUM LAUNCH

### Data & API
- [ ] CONFIG.API_URL diisi URL Apps Script yang benar
- [ ] CONFIG.WA semua nomor sudah diisi
- [ ] Apps Script berhasil return data dari semua sheet
- [ ] Submit booking tersimpan ke Sheet dan email notif masuk
- [ ] Produk dengan tersedia=FALSE tidak muncul di website
- [ ] Foto dari Google Drive tampil dengan benar

### Fungsionalitas
- [ ] Navbar sticky + transisi scrolled berfungsi
- [ ] Mobile hamburger menu buka/tutup dengan benar
- [ ] Hero slideshow auto-play + dots clickable
- [ ] Counter animasi berjalan saat section terlihat
- [ ] Filter produk UMKM (Semua / Makanan / Minuman)
- [ ] Tombol "Pesan Sekarang" buka WA dengan pesan benar
- [ ] Form booking: validasi error tampil, submit buka WA
- [ ] Google Maps embed tampil + tombol "Buka di Maps"
- [ ] Galeri foto lightbox berfungsi
- [ ] Music toggle play/pause (jika ada)

### Tampilan & Responsif
- [ ] Tidak ada overflow di mobile 375px
- [ ] Semua foto tidak terdistorsi
- [ ] Skeleton loader muncul saat data loading
- [ ] Error state muncul jika API gagal
- [ ] Animasi scroll berjalan mulus
- [ ] Font Playfair Display + DM Sans termuat

### Performa
- [ ] PageSpeed mobile > 80
- [ ] PageSpeed desktop > 90
- [ ] Semua foto format WebP dan < 300KB
- [ ] Lazy loading aktif pada gambar di bawah fold

### SEO & Teknis
- [ ] Meta title & description unik di semua halaman
- [ ] H1 ada di setiap halaman
- [ ] Alt text di semua gambar
- [ ] sitemap.xml tersedia
- [ ] robots.txt tersedia
- [ ] HTTPS aktif
- [ ] Schema markup valid (cek: validator.schema.org)
- [ ] Google Analytics terpasang (cek Realtime)
- [ ] Google Search Console terhubung + sitemap disubmit
- [ ] Google Business Profile aktif dan terverifikasi

### Browser
- [ ] Chrome (terbaru)
- [ ] Firefox (terbaru)
- [ ] Safari iOS
- [ ] Samsung Internet

---

## 📎 REFERENSI TOOLS

| Kebutuhan | Tool |
|-----------|------|
| Test performa | pagespeed.web.dev |
| Kompresi foto | squoosh.app |
| Validasi schema | validator.schema.org |
| Test kontras | webaim.org/resources/contrastchecker |
| Test aksesibilitas | wave.webaim.org |
| Test mobile-friendly | search.google.com/test/mobile-friendly |
| Cek rich results | search.google.com/test/rich-results |
| Icon SVG | lucide.dev |
| Swiper docs | swiperjs.com |
| PhotoSwipe docs | photoswipe.com |
| Apps Script docs | developers.google.com/apps-script |

---

*Dokumen ini adalah versi 2.0 (Final) — Full Native JS + Google Sheets + Apps Script.*
*Tidak ada framework. Tidak ada build process. Edit → Refresh → Selesai.*
