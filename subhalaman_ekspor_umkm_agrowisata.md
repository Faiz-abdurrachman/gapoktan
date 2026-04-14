# 🚪 3 Pintu Utama — Wireframe & Copywriting Lengkap
**Dokumen:** Sub-halaman Giat Ekspor · UMKM & Olahan · Agrowisata  
**Versi:** 1.0  
**Dibuat untuk:** Mas Chen (Developer)  
**Referensi:** Web Development Brief + UMKM Collaboration Sheet  

---

## 📐 PANDUAN DESAIN GLOBAL (Berlaku di Semua Sub-halaman)

| Elemen | Nilai |
|--------|-------|
| **Warna Utama** | Hijau alam `#2D6A4F` · Cokelat tanah `#6B4226` |
| **Warna Aksen** | Oranye salak `#E07B39` · Krem `#F5EFE6` |
| **Font Display** | Playfair Display / Cormorant Garamond |
| **Font Body** | DM Sans / Plus Jakarta Sans |
| **Border Radius** | `12px` kartu · `8px` tombol |
| **Animasi** | Fade-in saat scroll · hover lift pada kartu |
| **Navbar** | Sama dengan Beranda — sticky, highlight nav item aktif |

---
---

# 🌍 PINTU 1 — GIAT EKSPOR
**URL:** `/ekspor`  
**Pengelola:** Poktan (Kelompok Tani)  
**Tagline:** *Global Player*  
**Audiens Utama:** B2B — calon buyer, mitra eksportir, investor, instansi pemerintah

---

## 🗂️ STRUKTUR HALAMAN

```
[E0] NAVBAR (global)
[E1] HERO SECTION — Ekspor
[E2] HIGHLIGHT KEPERCAYAAN — Mitra & Sertifikasi
[E3] INFOGRAFIS 4 TAHAP ALUR OPERASIONAL
[E4] DATA EKSPOR — Jangkauan & Volume
[E5] GALERI EKSPOR — Foto Dokumentasi
[E6] CTA — Hubungi untuk Kerjasama
[E7] FOOTER (global)
```

---

## [E1] HERO SECTION — Ekspor

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [FOTO/VIDEO: kontainer ekspor, packing house, tim]       │
│   [overlay gelap gradient kiri]                            │
│                                                             │
│   ┌─────────────────────────────────┐                      │
│   │                                 │                      │
│   │  GIAT EKSPOR                    │                      │
│   │                                 │                      │
│   │  Dari Lereng Merapi             │                      │
│   │  ke Pasar Dunia                 │                      │
│   │                                 │                      │
│   │  Salak Nglumut premium,         │                      │
│   │  terstandarisasi, siap ekspor   │                      │
│   │                                 │                      │
│   │  [ Hubungi Tim Ekspor ]         │                      │
│   │                                 │                      │
│   └─────────────────────────────────┘                      │
│                                                             │
│   [ SCROLL UNTUK LIHAT ALUR OPERASIONAL ↓ ]               │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Foto packing house / loading kontainer (D.1) |
| Overlay | Gradient gelap dari kiri `rgba(0,0,0,0.55)` |
| Tinggi | `90vh` |
| CTA | Tombol solid hijau → scroll ke E6 / WA |
| Breadcrumb | Beranda → Giat Ekspor (di pojok kiri atas) |

### Draft Copywriting

**Label halaman (kecil):**
> GIAT EKSPOR · Poktan Ngudi Luhur

**Headline:**
> Dari Lereng Merapi ke Pasar Dunia

**Subheadline:**
> Salak Nglumut premium berkualitas ekspor — dikirim 30 hingga 50 ton setiap minggu ke China, Kamboja, Eropa, dan Timor Leste. Terstandarisasi, terkontrol, terpercaya.

**CTA:**
> 💬 Hubungi Tim Ekspor

**Scroll prompt:**
> Lihat Alur Operasional Kami ↓

---

## [E2] HIGHLIGHT KEPERCAYAAN — Mitra & Sertifikasi

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         DIPERCAYA OLEH MITRA KELAS DUNIA                   │
│                                                             │
│   ┌────────────────┐        ┌────────────────┐             │
│   │  [Logo         │        │  [Logo         │             │
│   │   Sunpride /   │        │   DSA Astra]   │             │
│   │   PT Sewu      │        │                │             │
│   │   Segar        │        │  Desa Sejahtera│             │
│   │   Nusantara]   │        │  Astra         │             │
│   └────────────────┘        └────────────────┘             │
│                                                             │
│   ─────────────────────────────────────────────            │
│                                                             │
│         SERTIFIKASI & LEGALITAS                            │
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│   │  [ikon]  │  │  [ikon]  │  │  [ikon]  │  │  [ikon]  │ │
│   │          │  │          │  │          │  │          │ │
│   │ Sertif.  │  │ Karantina│  │ [nama    │  │ [nama    │ │
│   │ Organik  │  │ Pertanian│  │  sertif] │  │  sertif] │ │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘ │
│                                                             │
│   ⚠️ Data sertifikasi lengkap menyusul dari tim            │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Putih bersih / krem `#F5EFE6` |
| Logo mitra | Grayscale · berwarna saat hover |
| Kartu sertifikasi | Ikon + nama sertifikasi + badan penerbit |
| Layout | 2 logo mitra · 4 kartu sertifikasi (placeholder) |

### Draft Copywriting

**Label:**
> KEPERCAYAAN & LEGALITAS

**Headline mitra:**
> Dipercaya oleh Mitra Kelas Nasional

**Teks mitra:**
> Produk kami telah melewati kurasi ketat dan diterima oleh mitra distribusi nasional terkemuka, menjadikan Gapoktan Ngudi Luhur salah satu pemasok salak premium yang paling dipercaya di Indonesia.

**Headline sertifikasi:**
> Terstandarisasi & Tersertifikasi

**Teks sertifikasi:**
> Seluruh produk ekspor kami telah memenuhi persyaratan badan karantina pertanian dan standar internasional yang berlaku.

> ⚠️ **Catatan developer:** Slot sertifikasi menggunakan placeholder dulu. Data lengkap (nama sertifikasi, nomor, badan penerbit, tahun) akan dikirim menyusul oleh tim.

---

## [E3] INFOGRAFIS 4 TAHAP ALUR OPERASIONAL

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         DARI POHON HINGGA KONTAINER                        │
│         Alur Operasional Ekspor Kami                       │
│                                                             │
│   ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│   │          │      │          │      │          │      │          │
│   │  TAHAP 1 │ ───► │  TAHAP 2 │ ───► │  TAHAP 3 │ ───► │  TAHAP 4 │
│   │          │      │          │      │          │      │          │
│   │ Collecting│     │  Packing │      │ Quality  │      │ Stuffing │
│   │  House   │      │  House   │      │ Control  │      │    &     │
│   │          │      │          │      │& Grading │      │ Shipping │
│   │          │      │          │      │          │      │          │
│   │ [deskr.] │      │ [deskr.] │      │ [deskr.] │      │ [deskr.] │
│   └──────────┘      └──────────┘      └──────────┘      └──────────┘
│                                                             │
│   [di mobile: vertikal dengan garis penghubung]            │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Hijau sangat muda `#EAF4EE` atau putih |
| Layout desktop | 4 kartu horizontal dengan panah penghubung |
| Layout mobile | Vertikal timeline dengan garis kiri |
| Nomor tahap | Besar, bold, warna aksen oranye `#E07B39` |
| Animasi | Kartu muncul berurutan saat scroll (stagger 200ms) |
| Ikon | Ilustrasi simpel per tahap (keranjang, selang, timbangan, kontainer) |

### Draft Copywriting

**Section Label:**
> ALUR OPERASIONAL

**Headline:**
> Dari Pohon hingga Kontainer

**Subheadline:**
> Setiap tahap dikendalikan dengan standar ketat untuk memastikan kualitas premium sampai ke tangan pembeli internasional.

---

**Tahap 1 — Collecting House**

> **Nomor:** 01  
> **Judul:** Collecting House  
> **Deskripsi:** Hasil panen dari 5 Poktan binaan dikumpulkan ke pusat distribusi Gapoktan. Di sini dilakukan pencatatan berat dan asal kebun secara sistematis sebelum masuk ke proses selanjutnya.

---

**Tahap 2 — Packing House**

> **Nomor:** 02  
> **Judul:** Packing House  
> **Subjudul:** Pembersihan & Sortase Awal  
> **Deskripsi:** Buah dicuci bersih dan diseleksi berdasarkan standar berat dan tampilan fisik. Buah yang tidak memenuhi standar ekspor dipisahkan untuk pasar lokal atau produk olahan UMKM.

---

**Tahap 3 — Quality Control & Grading**

> **Nomor:** 03  
> **Judul:** Quality Control & Grading  
> **Deskripsi:** Sortase kedua yang lebih ketat dengan penimbangan akurat. Setiap buah diperiksa ulang untuk memastikan konsistensi kualitas premium yang sesuai standar buyer internasional.

---

**Tahap 4 — Stuffing & Shipping**

> **Nomor:** 04  
> **Judul:** Stuffing & Shipping  
> **Deskripsi:** Buah dimuat ke dalam kontainer bersuhu terkontrol yang menjaga kesegaran selama pengiriman. Siap diberangkatkan menuju China, Eropa, Kamboja, dan pasar Asia lainnya.

---

## [E4] DATA EKSPOR — Jangkauan & Volume

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         JANGKAUAN EKSPOR KAMI                              │
│                                                             │
│   ┌──────────────────────────────┐  ┌─────────────────┐   │
│   │                              │  │                 │   │
│   │   [PETA DUNIA SEDERHANA]     │  │ PASAR AKTIF     │   │
│   │   dengan titik-titik negara  │  │ ─────────────── │   │
│   │   tujuan ekspor              │  │ 🇨🇳 China        │   │
│   │                              │  │ 🇰🇭 Kamboja      │   │
│   │   (opsional — bisa diganti   │  │ 🇪🇺 Eropa        │   │
│   │    dengan ilustrasi globe)   │  │ 🇹🇱 Timor Leste  │   │
│   │                              │  │                 │   │
│   └──────────────────────────────┘  │ TARGET BARU     │   │
│                                     │ ─────────────── │   │
│                                     │ 🇻🇳 Vietnam      │   │
│                                     │ 🇸🇦 Arab Saudi   │   │
│                                     │ 🇺🇸 USA          │   │
│                                     │ 🇯🇵 Jepang       │   │
│                                     └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Hijau gelap `#1B4332` |
| Teks | Putih |
| Peta | Opsional SVG sederhana atau ilustrasi globe |
| Daftar negara | 2 kolom: Pasar Aktif vs Target Baru |
| Badge volume | Highlight `±700 Ton` dengan warna aksen |

### Draft Copywriting

**Section Label:**
> JANGKAUAN EKSPOR

**Headline:**
> Menjangkau Pasar di 4 Benua

**Subheadline:**
> Dengan pengiriman rutin 30–50 ton per minggu, produk kami telah menjangkau pasar Asia dan Eropa — dan terus berkembang ke pasar-pasar baru.

**Label kiri:**
> Pasar Aktif Saat Ini

**Label kanan:**
> Target Pasar Baru

**Highlight angka:**
> ±700 Ton diekspor ke China saja sepanjang Januari–Oktober 2025.

---

## [E5] GALERI EKSPOR

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         DOKUMENTASI EKSPOR                                 │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│   │              │  │              │  │              │    │
│   │  [foto 1]    │  │  [foto 2]    │  │  [foto 3]    │    │
│   │  Kontainer   │  │  Tim Packing │  │  Loading     │    │
│   │  ekspor      │  │  House       │  │  Proses      │    │
│   │              │  │              │  │              │    │
│   └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐                       │
│   │              │  │              │                       │
│   │  [foto 4]    │  │  [foto 5]    │                       │
│   │  Kunjungan   │  │  Quality     │                       │
│   │  buyer/mitra │  │  Control     │                       │
│   │              │  │              │                       │
│   └──────────────┘  └──────────────┘                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Layout | Masonry grid / 3 kolom |
| Hover | Overlay gelap + caption foto |
| Lightbox | Klik foto → buka full-screen |
| Foto dibutuhkan | Kontainer, loading, packing house, QC, kunjungan mitra |

### Draft Copywriting

**Section Label:**
> DOKUMENTASI

**Headline:**
> High Quality Control, Setiap Tahap

---

## [E6] CTA — HUBUNGI UNTUK KERJASAMA

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         TERTARIK BERMITRA?                                 │
│                                                             │
│   Kami terbuka untuk kerjasama dengan eksportir,           │
│   distributor, buyer internasional, dan investor           │
│   yang ingin mengembangkan supply chain salak              │
│   premium bersama kami.                                    │
│                                                             │
│         [ 💬 Hubungi via WhatsApp ]                        │
│         [ 📧 Kirim Pesan / Form ]  ← opsional              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Draft Copywriting

**Headline:**
> Tertarik Bermitra bersama Kami?

**Subtext:**
> Kami terbuka untuk kerjasama dengan eksportir, distributor, buyer internasional, dan investor yang ingin mengembangkan rantai pasok salak premium bersama komunitas petani Srumbung, Magelang.

**CTA:**
> 💬 Hubungi Tim Ekspor via WhatsApp

---
---

# 🛒 PINTU 2 — UMKM & OLAHAN
**URL:** `/umkm`  
**Pengelola:** KWT (Kelompok Wanita Tani)  
**Tagline:** *The Innovation*  
**Audiens Utama:** B2C — konsumen produk olahan, pembeli oleh-oleh, reseller

---

## 🗂️ STRUKTUR HALAMAN

```
[U0] NAVBAR (global)
[U1] HERO SECTION — UMKM
[U2] INTRO KWT — Storytelling Pemberdayaan
[U3] KATALOG PRODUK — Product Grid Dinamis
[U4] HIGHLIGHT PRODUK UNGGULAN
[U5] CARA PEMESANAN
[U6] CTA — Pesan Sekarang
[U7] FOOTER (global)
```

---

## [U1] HERO SECTION — UMKM

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [FOTO: ibu-ibu KWT sedang mengolah produk]               │
│   [suasana hangat, warna earthy]                           │
│                                                             │
│   ┌─────────────────────────────────┐                      │
│   │                                 │                      │
│   │  UMKM & OLAHAN                  │                      │
│   │                                 │                      │
│   │  Dari Tangan Ibu,               │                      │
│   │  Lahir Produk Berkelas          │                      │
│   │                                 │                      │
│   │  Transformasi salak segar       │                      │
│   │  menjadi produk bernilai        │                      │
│   │  tambah tinggi                  │                      │
│   │                                 │                      │
│   │  [ Lihat Produk Kami ]          │                      │
│   │                                 │                      │
│   └─────────────────────────────────┘                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Foto KWT mengolah produk (suasana hangat) |
| Overlay | Gradient cokelat hangat kiri `rgba(60,30,10,0.5)` |
| Tinggi | `85vh` |
| Tone | Lebih hangat dan personal dibanding halaman ekspor |

### Draft Copywriting

**Label halaman:**
> UMKM & OLAHAN · Kelompok Wanita Tani

**Headline:**
> Dari Tangan Ibu, Lahir Produk Berkelas

**Subheadline:**
> Kelompok Wanita Tani Ngudi Luhur mengubah salak segar pilihan menjadi produk olahan bernilai tinggi — mulai dari camilan premium hingga minuman unik yang belum pernah ada sebelumnya.

**CTA:**
> 🛒 Lihat Semua Produk

---

## [U2] INTRO KWT — Storytelling Pemberdayaan

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌──────────────────────────────┐  ┌───────────────────┐  │
│   │                              │  │                   │  │
│   │  MOTOR EKONOMI KREATIF DESA  │  │  [foto: suasana   │  │
│   │                              │  │   KWT bersama,    │  │
│   │  [paragraf storytelling      │  │   produksi, atau  │  │
│   │   tentang KWT]               │  │   kemasan produk] │  │
│   │                              │  │                   │  │
│   │  "Transformasi salak segar   │  │                   │  │
│   │   menjadi produk bernilai    │  │                   │  │
│   │   tambah tinggi, dikelola    │  │                   │  │
│   │   oleh kelompok wanita tani  │  │                   │  │
│   │   sebagai motor ekonomi      │  │                   │  │
│   │   kreatif desa."             │  │                   │  │
│   │                              │  │                   │  │
│   └──────────────────────────────┘  └───────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Draft Copywriting

**Section Label:**
> TENTANG KWT KAMI

**Headline:**
> Motor Ekonomi Kreatif Desa

**Paragraf 1:**
> Di balik setiap produk olahan Ngudi Luhur, ada tangan-tangan terampil ibu-ibu Kelompok Wanita Tani (KWT) yang bekerja dengan penuh dedikasi. Mereka bukan sekadar pengolah — mereka adalah wirausahawan desa yang mengubah komoditas pertanian menjadi produk bernilai tambah tinggi.

**Paragraf 2:**
> Dengan dukungan program Desa Sejahtera Astra, KWT Ngudi Luhur terus berinovasi — menciptakan produk-produk unik dari salak Nglumut yang tidak hanya laris di pasar lokal, tetapi berpotensi menembus pasar nasional bahkan internasional.

**Blockquote (pull quote):**
> *"Transformasi salak segar menjadi produk bernilai tambah tinggi, dikelola oleh kelompok wanita tani sebagai motor ekonomi kreatif desa."*

---

## [U3] KATALOG PRODUK — Product Grid Dinamis

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         KATALOG PRODUK KAMI                                │
│                                                             │
│   [ Semua ] [ Makanan Ringan ] [ Minuman ]  ← filter tab   │
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│   │ [foto]   │  │ [foto]   │  │ [foto]   │  │ [foto]   │  │
│   │          │  │          │  │          │  │          │  │
│   │ Kripik   │  │ Dodol    │  │ Manisan  │  │ Bakpia   │  │
│   │ Salak    │  │ Salak    │  │ Salak    │  │ Salak    │  │
│   │          │  │          │  │          │  │          │  │
│   │ Deskr.   │  │ Deskr.   │  │ Deskr.   │  │ Deskr.   │  │
│   │ singkat  │  │ singkat  │  │ singkat  │  │ singkat  │  │
│   │          │  │          │  │          │  │          │  │
│   │ Rp ----  │  │ Rp ----  │  │ Rp ----  │  │ Rp ----  │  │
│   │ [Pesan]  │  │ [Pesan]  │  │ [Pesan]  │  │ [Pesan]  │  │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│   │ [foto]   │  │ [foto]   │  │ [foto]   │  │ [foto]   │  │
│   │ Selai    │  │ Sirup    │  │ Kurma    │  │ Kopi Biji│  │
│   │ Salak    │  │ Salak    │  │ Salak    │  │ Salak ⭐  │  │
│   │          │  │          │  │          │  │          │  │
│   │ Deskr.   │  │ Deskr.   │  │ Deskr.   │  │ Deskr.   │  │
│   │ Rp ----  │  │ Rp ----  │  │ Rp ----  │  │ Rp ----  │  │
│   │ [Pesan]  │  │ [Pesan]  │  │ [Pesan]  │  │ [Pesan]  │  │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Layout | 4 kolom desktop · 2 kolom tablet · 1 kolom mobile |
| Filter | Tab kategori: Semua / Makanan Ringan / Minuman |
| Per kartu | Foto · Nama Produk · Deskripsi Singkat · Harga · Tombol Pesan |
| Tombol Pesan | Redirect ke WhatsApp dengan pesan otomatis produk |
| Badge | ⭐ "Produk Unggulan" pada Kopi Biji Salak |
| Harga | Placeholder `Rp —` sampai data masuk |
| Animasi | Fade-in kartu saat filter berubah (300ms) |

### Daftar Produk (Placeholder)

**Kategori: Makanan Ringan**

| Nama Produk | Deskripsi Singkat | Harga |
|-------------|-------------------|-------|
| Kripik Salak | Camilan renyah dari salak Nglumut pilihan, gurih dengan rasa asli buah | ⏳ |
| Dodol Salak | Dodol kenyal manis dengan cita rasa salak yang khas dan legit | ⏳ |
| Manisan Salak | Irisan salak diawetkan secara alami, manis segar tanpa bahan pengawet | ⏳ |
| Bakpia Salak | Bakpia khas Magelang dengan isian selai salak yang lembut dan harum | ⏳ |
| Selai Salak | Selai premium berbahan dasar salak Nglumut, cocok untuk sarapan sehat | ⏳ |

**Kategori: Minuman**

| Nama Produk | Deskripsi Singkat | Harga |
|-------------|-------------------|-------|
| Sirup Salak | Minuman segar berbasis ekstrak salak Nglumut, tanpa pewarna buatan | ⏳ |
| Kurma Salak | Salak diproses menyerupai kurma — manis, padat, kaya serat | ⏳ |
| Kopi Biji Salak ⭐ | Produk inovatif: kopi unik dari biji salak pilihan. Aroma khas, rasa unik | ⏳ |

> ⚠️ **Catatan developer:** Foto produk dan harga final akan dikirim oleh tim KWT dalam file terpisah. Gunakan placeholder abu-abu untuk foto dan `Rp —` untuk harga sementara.

### Draft Copywriting

**Section Label:**
> PRODUK KAMI

**Headline:**
> Olahan Salak Terbaik dari Dapur KWT

**Subheadline:**
> Setiap produk dibuat dari bahan baku Salak Nglumut pilihan — segar, organik, dan diproses dengan standar higienitas tinggi oleh kelompok wanita tani berpengalaman.

**Template pesan WhatsApp otomatis (per produk):**
> `Halo, saya ingin memesan [NAMA PRODUK] dari Gapoktan Ngudi Luhur. Mohon informasi ketersediaan dan pengiriman. Terima kasih.`

---

## [U4] HIGHLIGHT PRODUK UNGGULAN — Kopi Biji Salak

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [BACKGROUND: foto biji salak / kopi]                     │
│                                                             │
│   ┌────────────────────────────────────────────────────┐   │
│   │  ⭐ PRODUK UNGGULAN                                │   │
│   │                                                    │   │
│   │  Kopi Biji Salak                                   │   │
│   │  Inovasi Rasa dari Lereng Merapi                   │   │
│   │                                                    │   │
│   │  [deskripsi panjang]                               │   │
│   │                                                    │   │
│   │  [ Pesan Sekarang ]                                │   │
│   └────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Draft Copywriting

**Badge:**
> ⭐ Produk Inovatif Unggulan

**Headline:**
> Kopi Biji Salak — Inovasi Rasa dari Lereng Merapi

**Deskripsi:**
> Siapa sangka biji salak — yang selama ini terbuang sebagai limbah — bisa menjadi secangkir kopi yang aromatik dan memikat? KWT Ngudi Luhur berhasil mengolah biji Salak Nglumut menjadi kopi biji salak: produk inovatif yang bernilai tinggi, ramah lingkungan, dan benar-benar belum ada duanya.

**Tagline produk:**
> *Dari limbah, lahir keistimewaan.*

**CTA:**
> ☕ Pesan Kopi Biji Salak

---

## [U5] CARA PEMESANAN

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         CARA PEMESANAN                                     │
│                                                             │
│   ┌──────────┐      ┌──────────┐      ┌──────────┐         │
│   │   [1]    │      │   [2]    │      │   [3]    │         │
│   │          │ ───► │          │ ───► │          │         │
│   │  Pilih   │      │  Klik    │      │ Konfirm  │         │
│   │  Produk  │      │  Pesan   │      │  via WA  │         │
│   │          │      │  Sekarang│      │          │         │
│   └──────────┘      └──────────┘      └──────────┘         │
│                                                             │
│   Kami melayani pemesanan dalam dan luar kota.             │
│   Pengiriman via ekspedisi terpercaya.                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Draft Copywriting

**Section Label:**
> CARA PESAN

**Headline:**
> Mudah, Cepat, Langsung ke Tangan Anda

**Langkah 1:**
> **Pilih Produk**  
> Telusuri katalog dan temukan produk yang Anda inginkan.

**Langkah 2:**
> **Klik "Pesan Sekarang"**  
> Anda akan diarahkan ke WhatsApp dengan pesan otomatis yang sudah terisi.

**Langkah 3:**
> **Konfirmasi & Pengiriman**  
> Tim kami akan konfirmasi ketersediaan, harga, dan detail pengiriman dalam waktu singkat.

**Catatan:**
> Melayani pemesanan seluruh Indonesia. Pengiriman via ekspedisi terpercaya (JNE, J&T, SiCepat).

---

## [U6] CTA — PESAN SEKARANG

### Draft Copywriting

**Headline:**
> Siap Membawa Pulang Cita Rasa Merapi?

**Subtext:**
> Dapatkan produk olahan salak premium langsung dari dapur KWT Ngudi Luhur. Segar, higienis, dan penuh kasih tangan petani Srumbung.

**CTA:**
> 💬 Pesan via WhatsApp Sekarang

---
---

# 🌿 PINTU 3 — AGROWISATA
**URL:** `/agrowisata`  
**Pengelola:** Karang Taruna  
**Tagline:** *The Experience*  
**Audiens Utama:** B2B (instansi studi banding) + B2C (wisatawan, keluarga, komunitas)

---

## 🗂️ STRUKTUR HALAMAN

```
[A0] NAVBAR (global)
[A1] HERO SECTION — Agrowisata
[A2] INTRO — Narasi Pengalaman
[A3] PAKET WISATA
[A4] GALERI FASILITAS
[A5] PETA & RUTE — Google Maps Interaktif
[A6] FORM BOOKING / CTA
[A7] FOOTER (global)
```

---

## [A1] HERO SECTION — Agrowisata

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [FOTO/VIDEO: hamparan kebun salak + latar Merapi]        │
│   [nuansa hijau alam, pagi hari, berkabut]                 │
│                                                             │
│   ┌─────────────────────────────────┐                      │
│   │                                 │                      │
│   │  AGROWISATA                     │                      │
│   │                                 │                      │
│   │  Warisan Merapi,                │                      │
│   │  Destinasi Edukasi              │                      │
│   │  Agribisnis Berkelanjutan       │                      │
│   │                                 │                      │
│   │  [ Lihat Paket Wisata ]         │                      │
│   │  [ Booking Kunjungan ]          │                      │
│   │                                 │                      │
│   └─────────────────────────────────┘                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Background | Foto hamparan kebun dengan latar Gunung Merapi |
| Overlay | Gradient hijau gelap `rgba(27,75,50,0.5)` |
| Tinggi | `100vh` |
| CTA | 2 tombol: Lihat Paket (outline) + Booking (solid) |
| Nuansa | Paling "alam" dan emosional dari semua halaman |

### Draft Copywriting

**Label halaman:**
> AGROWISATA · Karang Taruna Ngudi Luhur

**Headline:**
> Warisan Merapi, Destinasi Edukasi Agribisnis Berkelanjutan

**Subheadline:**
> Menyajikan pengalaman wisata yang memadukan keindahan alam lereng Merapi dengan edukasi sistem pertanian modern yang ramah lingkungan. Untuk pelajar, keluarga, komunitas, hingga instansi.

**CTA 1:**
> 🌿 Lihat Paket Wisata

**CTA 2:**
> 📅 Booking Kunjungan

---

## [A2] INTRO — Narasi Pengalaman

### Draft Copywriting

**Section Label:**
> TENTANG AGROWISATA KAMI

**Headline:**
> Lebih dari Sekadar Wisata

**Paragraf 1:**
> Di Agrowisata Ngudi Luhur, pengunjung tidak hanya melihat — mereka merasakan langsung bagaimana salak Nglumut terbaik di Indonesia ditanam, dirawat, dipanen, dan diolah menjadi produk bernilai tinggi.

**Paragraf 2:**
> Dengan latar Gunung Merapi yang megah dan udara pegunungan yang segar, setiap kunjungan menjadi pengalaman yang membekas — baik untuk wisatawan keluarga maupun tim dari instansi yang ingin melakukan studi banding agribisnis modern berbasis komunitas.

**Paragraf 3:**
> Dikelola sepenuhnya oleh Karang Taruna setempat, agrowisata ini adalah bukti nyata bahwa pemuda desa mampu menjadi penggerak ekonomi pariwisata berkelanjutan.

---

## [A3] PAKET WISATA

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         PAKET KUNJUNGAN                                    │
│                                                             │
│   ┌──────────────────────┐  ┌──────────────────────┐       │
│   │  🌾 PAKET EDUKASI    │  │  🍈 PAKET PETIK BUAH │       │
│   │                      │  │                      │       │
│   │  Untuk: Sekolah,     │  │  Untuk: Keluarga,    │       │
│   │  kampus, instansi    │  │  komunitas, wisatawan │      │
│   │                      │  │                      │       │
│   │  Meliputi:           │  │  Meliputi:           │       │
│   │  - Teknik budidaya   │  │  - Petik buah        │       │
│   │  - Sistem ekspor     │  │  - Edukasi singkat   │       │
│   │  - Circular economy  │  │  - Foto di kebun     │       │
│   │  - Tur packing house │  │  - Produk olahan     │       │
│   │                      │  │                      │       │
│   │  [ Booking Paket ]   │  │  [ Booking Paket ]   │       │
│   └──────────────────────┘  └──────────────────────┘       │
│                                                             │
│   ┌──────────────────────────────────────────────────────┐  │
│   │  🔬 PAKET STUDI BANDING (B2B)                        │  │
│   │                                                      │  │
│   │  Untuk: Instansi pemerintah, BUMN, universitas,      │  │
│   │  NGO, media, atau perusahaan swasta                  │  │
│   │                                                      │  │
│   │  Meliputi: Presentasi profil Gapoktan · Tur lapangan │  │
│   │  seluruh fasilitas · Sesi diskusi bersama pengelola  │  │
│   │  · Dokumentasi kunjungan resmi                       │  │
│   │                                                      │  │
│   │  [ Ajukan Kunjungan Studi Banding ]                  │  │
│   └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Layout | 2 kartu atas (B2C) + 1 kartu penuh bawah (B2B) |
| Warna kartu | Hijau muda untuk B2C · Hijau tua untuk B2B |
| Ikon | Simpel, line-style per paket |
| CTA | Masing-masing menuju form booking atau WA |

### Draft Copywriting

**Section Label:**
> PAKET KUNJUNGAN

**Headline:**
> Pilih Pengalaman yang Tepat untuk Anda

---

**Paket 1 — Edukasi Budidaya**

> **Judul:** Paket Edukasi Budidaya  
> **Target:** Sekolah, kampus, komunitas pelajar  
> **Tagline:** *Belajar langsung dari kebun terbaik Indonesia*  
> **Isi paket:**
> - Penjelasan teknik budidaya Salak Nglumut kualitas ekspor di lahan
> - Tur packing house dan proses quality control
> - Edukasi circular economy dan pengolahan limbah pertanian
> - Sesi tanya jawab dengan petani dan pengelola

---

**Paket 2 — Wisata Petik Buah**

> **Judul:** Wisata Petik Buah  
> **Target:** Keluarga, komunitas, wisatawan umum  
> **Tagline:** *Panen sendiri, rasakan langsung*  
> **Isi paket:**
> - Pengalaman petik buah langsung di sentra salak terbaik Indonesia
> - Edukasi singkat mengenal varietas Salak Nglumut
> - Sesi foto di hamparan kebun berlatar Merapi
> - Kunjungan rumah produksi olahan KWT

---

**Paket 3 — Studi Banding (B2B)**

> **Judul:** Paket Studi Banding  
> **Target:** Instansi pemerintah, BUMN, universitas, NGO, media, perusahaan swasta  
> **Tagline:** *Belajar dari model pemberdayaan desa terbaik*  
> **Isi paket:**
> - Presentasi resmi profil dan capaian Gapoktan Ngudi Luhur
> - Tur lapangan lengkap: lahan, packing house, rumah produksi KWT
> - Sesi diskusi interaktif bersama pengelola dan petani
> - Dokumentasi kunjungan resmi (foto dan video)
> - Fasilitas pendopo kapasitas besar untuk acara formal

---

## [A4] GALERI FASILITAS

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         FASILITAS KAMI                                     │
│                                                             │
│   [ Area Produksi ] [ Area Pertemuan ] [ Area Outdoor ]    │
│           ↑ tab filter kategori fasilitas                  │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│   │ [foto]       │  │ [foto]       │  │ [foto]       │    │
│   │ Lahan        │  │ Rumah        │  │ Pendopo 1–4  │    │
│   │ Budidaya     │  │ Produksi     │  │              │    │
│   └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│   │ [foto]       │  │ [foto]       │  │ [foto]       │    │
│   │ Rumah        │  │ Kolam        │  │ Sabo Dam     │    │
│   │ Tradisional  │  │ Outbound     │  │ (spot foto)  │    │
│   │ (Edustay)    │  │              │  │              │    │
│   └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Daftar Fasilitas Lengkap

**Area Produksi:**
- Lahan Budidaya & Petik Buah Segar
- Rumah Produksi Olahan (KWT)
- Packing House

**Area Pertemuan & Budaya:**
- Pendopo 1 s/d 4 (kapasitas besar, untuk acara formal)
- Rumah Tradisional Jawa (Edustay — menginap dengan nuansa tradisional)

**Area Outdoor & Alam:**
- Kolam Outbound
- Susur Sungai
- Waduk & Sabo Dam (spot foto ikonik)
- Camping Ground (suasana sejuk lereng Merapi)

### Draft Copywriting

**Section Label:**
> FASILITAS

**Headline:**
> Lengkap untuk Semua Jenis Kunjungan

**Subheadline:**
> Dari sesi formal di pendopo kapasitas besar, pengalaman menginap di rumah tradisional Jawa, hingga petualangan outdoor di alam lereng Merapi — semua tersedia dalam satu destinasi.

---

## [A5] PETA & RUTE — Google Maps Interaktif

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         TEMUKAN KAMI                                       │
│                                                             │
│   ┌──────────────────────────────────────────────────────┐ │
│   │                                                      │ │
│   │   [EMBEDDED GOOGLE MAPS INTERAKTIF]                  │ │
│   │                                                      │ │
│   │   Gapoktan Ngudi Luhur                               │ │
│   │   99V8+5QH, Jrakah, Kaliurang,                      │ │
│   │   Kec. Srumbung, Kab. Magelang                       │ │
│   │                                                      │ │
│   └──────────────────────────────────────────────────────┘ │
│                                                             │
│   📍 Alamat lengkap         🗺️ Buka di Google Maps         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Embed | Google Maps iframe dari link: `https://maps.app.goo.gl/XdoRZrutTGQzJPHN9` |
| Tinggi maps | `450px` desktop · `300px` mobile |
| Tombol | "Buka di Google Maps" → buka tab baru ke link maps |
| Alamat | Tampilkan teks alamat di bawah maps |

### Konten Alamat

> **Gapoktan Ngudi Luhur**  
> 99V8+5QH, Jrakah, Kaliurang,  
> Kec. Srumbung, Kabupaten Magelang,  
> Jawa Tengah 56483  

> 🗺️ [Buka di Google Maps](https://maps.app.goo.gl/XdoRZrutTGQzJPHN9)

### Draft Copywriting

**Section Label:**
> LOKASI KAMI

**Headline:**
> Mudah Ditemukan, Layak Dikunjungi

**Subtext:**
> Kami berlokasi di lereng barat Gunung Merapi, Kecamatan Srumbung, Kabupaten Magelang — dapat ditempuh sekitar 30 menit dari Kota Magelang dan 1 jam dari Yogyakarta.

---

## [A6] FORM BOOKING / CTA

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         BOOKING KUNJUNGAN                                  │
│                                                             │
│   ┌──────────────────────────────────────────────────────┐ │
│   │  Nama / Instansi    : [_________________________]    │ │
│   │  Jenis Kunjungan    : [ Pilih Paket ▼ ]             │ │
│   │  Jumlah Peserta     : [_________________________]    │ │
│   │  Tanggal Rencana    : [_________________________]    │ │
│   │  Nomor WhatsApp     : [_________________________]    │ │
│   │  Pesan / Keperluan  : [_________________________]    │ │
│   │                       [_________________________]    │ │
│   │                                                      │ │
│   │              [ 📅 Ajukan Booking ]                   │ │
│   └──────────────────────────────────────────────────────┘ │
│                                                             │
│   Atau langsung hubungi kami via WhatsApp:                 │
│   [ 💬 Chat WhatsApp ]                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Form | Nama/instansi · Jenis paket (dropdown) · Jumlah peserta · Tanggal · No WA · Pesan |
| Submit | Kirim via WhatsApp (format pesan otomatis) atau email |
| Alternatif | Tombol langsung ke WA untuk yang tidak mau isi form |
| Validasi | Basic HTML5 validation (required fields) |

### Draft Copywriting

**Section Label:**
> BOOKING

**Headline:**
> Rencanakan Kunjungan Anda

**Subtext:**
> Isi form di bawah ini untuk mengajukan reservasi kunjungan. Tim Karang Taruna kami akan menghubungi Anda dalam 1×24 jam untuk konfirmasi dan detail lebih lanjut.

**Label form:**
- Nama / Instansi *
- Jenis Kunjungan * (Edukasi Budidaya / Petik Buah / Studi Banding / Lainnya)
- Jumlah Peserta *
- Tanggal Rencana Kunjungan *
- Nomor WhatsApp *
- Keperluan / Pesan Tambahan

**Tombol submit:**
> 📅 Ajukan Booking

**Alternatif:**
> Atau langsung hubungi kami:

> 💬 Chat via WhatsApp

---
---

# ⚠️ MASTER CHECKLIST DATA GAP
## Semua Sub-halaman

| No | Halaman | Kebutuhan | PIC | Status |
|----|---------|-----------|-----|--------|
| 1 | Ekspor | Daftar sertifikasi lengkap (nama, nomor, badan penerbit) | Tim Poktan | ❌ |
| 2 | Ekspor | Foto kontainer, loading, packing house, QC | D.1 GDrive | ⏳ |
| 3 | Ekspor | Foto kunjungan mitra Astra / Kementan / buyer | D.1 GDrive | ⏳ |
| 4 | Ekspor | Logo Sunpride PNG/SVG | Tim Ngudi Luhur | ❌ |
| 5 | Ekspor | Logo DSA Astra PNG/SVG | Tim Ngudi Luhur | ❌ |
| 6 | Ekspor | Nomor WhatsApp resmi tim ekspor | Tim Poktan | ❌ |
| 7 | UMKM | Foto semua produk olahan (background putih / lifestyle) | Tim KWT | ❌ |
| 8 | UMKM | Daftar harga semua produk | Tim KWT | ❌ |
| 9 | UMKM | Nomor WhatsApp pemesanan produk | Tim KWT | ❌ |
| 10 | Agrowisata | Foto fasilitas: pendopo, edustay, kolam, sabo dam | Tim Karang Taruna | ❌ |
| 11 | Agrowisata | Foto kebun berlatar Merapi (hero) | D.1 GDrive | ⏳ |
| 12 | Agrowisata | Harga paket wisata | Tim Karang Taruna | ❌ |
| 13 | Agrowisata | Nomor WhatsApp / kontak booking | Tim Karang Taruna | ❌ |
| 14 | Semua | Foto profil KWT (untuk storytelling) | Tim KWT | ❌ |

---

*Dokumen ini adalah versi 1.0 — akan diperbarui seiring masuknya data dari tim.*
