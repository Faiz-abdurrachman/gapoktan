# 🏠 Beranda (Homepage) — Gapoktan Ngudi Luhur
**Dokumen:** Wireframe Layout + Draft Copywriting  
**Versi:** 1.0  
**Dibuat untuk:** Mas Chen (Developer)  
**Tanggal:** 2025/2026  

---

## 📐 PANDUAN DESAIN GLOBAL

| Elemen | Nilai |
|--------|-------|
| **Vibe** | Profesional · Empowering · Organik · Kredibel |
| **Warna Utama** | Hijau alam `#2D6A4F` · Cokelat tanah `#6B4226` |
| **Warna Aksen** | Oranye salak `#E07B39` · Krem `#F5EFE6` |
| **Warna Teks** | Gelap `#1A1A1A` · Abu muted `#6B7280` |
| **Font Display** | Playfair Display / Cormorant Garamond (judul besar) |
| **Font Body** | DM Sans / Plus Jakarta Sans |
| **Tone Copywriting** | Storytelling · Dampak sosial · Kualitas premium |

---

## 🗂️ STRUKTUR HALAMAN (Scroll dari atas ke bawah)

```
[S0] HEADER / NAVBAR
[S1] HERO SECTION — "Living the Movement"
[S2] CAPAIAN & DAMPAK — Counter Animation
[S3] TENTANG KAMI — Origin Story
[S4] VISI & MISI — Core Values
[S5] 3 PINTU UTAMA — Navigation Cards
[S6] NGUDI LUHUR DALAM BERITA — Media Coverage
[S7] CTA PENUTUP — Call to Action Global
[S8] FOOTER
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S0] HEADER / NAVBAR

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│  🌿 NGUDI LUHUR    Beranda  Ekspor  UMKM  Agrowisata  [WA] │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Elemen | Detail |
|--------|--------|
| Logo | Ikon daun/salak + wordmark "Ngudi Luhur" |
| Nav items | Beranda · Giat Ekspor · UMKM & Olahan · Agrowisata |
| CTA Button | "Hubungi Kami" → link WhatsApp |
| Behavior | Sticky (tetap di atas saat scroll) |
| Background | Transparan saat di hero, solid putih/hijau gelap setelah scroll |

### Catatan Developer

> Gunakan efek `backdrop-blur` saat navbar berubah menjadi solid. Tambahkan smooth transition 300ms.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S1] HERO SECTION — "Living the Movement"

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [SLIDESHOW / VIDEO BACKGROUND]                           │
│   (foto kontainer · kebun salak · tim packing house)       │
│                                                             │
│   ┌──────────────────────────────────┐                     │
│   │                                  │                     │
│   │  PUSAT AGRIBISNIS SALAK          │                     │
│   │  NGLUMUT PREMIUM                 │                     │
│   │                                  │                     │
│   │  Integrasi Lokal, Standar Global │                     │
│   │                                  │                     │
│   │  [ Jelajahi Ekspor ]             │                     │
│   │  [ Kunjungi Agrowisata ]         │                     │
│   │                                  │                     │
│   └──────────────────────────────────┘                     │
│                                                             │
│   ● ○ ○ ○   (slide indicator)                              │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Full-screen slideshow foto (dari GDrive D.1) atau video loop |
| Overlay | Dark gradient `rgba(0,0,0,0.45)` agar teks terbaca |
| Text alignment | Kiri bawah (hindari tengah — lebih premium) |
| Tinggi section | `100vh` (full layar pertama) |
| Slide | Auto-play 5 detik, manual dot indicator |
| CTA | 2 tombol: satu outline putih, satu solid oranye salak |

### Konten Foto/Video yang Dibutuhkan (D.1)

- [ ] Foto hamparan kebun salak dengan latar Merapi
- [ ] Foto proses loading kontainer ekspor
- [ ] Foto tim di packing house
- [ ] Foto kunjungan mitra Astra / Kementan / buyer internasional
- [ ] Foto pertemuan petani (suasana komunitas)

### Draft Copywriting

**Headline Utama (pilih salah satu):**

> **"Pusat Agribisnis Salak Nglumut Premium"**

> **"Dari Lereng Merapi ke Pasar Dunia"**

> **"Integrasi Lokal, Standar Global"**

**Subheadline:**

> Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+ hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia & Eropa setiap minggunya.

**CTA Button 1 (outline):**
> → Lihat Alur Ekspor

**CTA Button 2 (solid):**
> → Kunjungi Agrowisata

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S2] CAPAIAN & DAMPAK — Counter Animation

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         DAMPAK NYATA YANG TERUS BERTUMBUH                  │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  800+    │  │  ±700    │  │  30–50   │  │   4+     │  │
│  │  Hektar  │  │   Ton    │  │  Ton/Mgg │  │  Negara  │  │
│  │          │  │          │  │          │  │  Ekspor  │  │
│  │ Lahan    │  │ Ekspor   │  │ Rata-rata│  │          │  │
│  │ Salak    │  │ ke China │  │ Pengirm. │  │          │  │
│  │ Nglumut  │  │ (2025)   │  │          │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│         Sejak 2017 · Binaan Desa Sejahtera Astra           │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Hijau tua gelap `#1B4332` atau foto kebun blur |
| Warna angka | Putih / oranye aksen |
| Animasi | Counter naik dari 0 saat elemen masuk viewport (Intersection Observer) |
| Layout | 4 kolom di desktop · 2x2 di tablet · 1 kolom di mobile |
| Ikon | Satu ikon kecil per kartu (hektar, ekspor, truk, globe) |

### Data Statistik Lengkap

| Label | Angka | Satuan | Keterangan |
|-------|-------|--------|------------|
| Total Lahan | 800 | + Hektar | Perkebunan Salak Nglumut |
| Volume Ekspor China | 700 | ± Ton | Januari–Oktober 2025 |
| Rata-rata Pengiriman | 30–50 | Ton/Minggu | Frekuensi rutin |
| Jangkauan Ekspor | 4 | + Negara | China, Kamboja, Eropa, Timor Leste |
| Pengalaman | 2017 | Sejak | Tahun mulai ekspor |
| Target Pasar Baru | 4 | Negara | Vietnam, Arab Saudi, USA, Jepang |

### Draft Copywriting

**Section Label (kecil, di atas):**
> DAMPAK & CAPAIAN

**Headline:**
> Angka yang Berbicara Lebih Keras dari Kata-kata

**Subtext (di bawah kartu):**
> Sejak 2017, Gapoktan Ngudi Luhur telah membangun ekosistem yang bukan hanya menghasilkan produk — tetapi mengangkat kesejahteraan ratusan keluarga petani di Srumbung, Magelang.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S3] TENTANG KAMI — Origin Story

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌──────────────────┐   ┌──────────────────────────────┐  │
│   │                  │   │  TENTANG KAMI                │  │
│   │  [FOTO UTAMA]    │   │                              │  │
│   │  (kebun/petani/  │   │  Pusat Agribisnis Salak      │  │
│   │  hamparan lahan) │   │  Nglumut Premium             │  │
│   │                  │   │                              │  │
│   │                  │   │  [paragraf 1]                │  │
│   │                  │   │                              │  │
│   │                  │   │  [paragraf 2]                │  │
│   │                  │   │                              │  │
│   │                  │   │  Kemitraan:                  │  │
│   │                  │   │  [logo Sunpride] [logo DSA]  │  │
│   └──────────────────┘   └──────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Layout | 2 kolom 50/50 · di mobile menjadi stacked |
| Foto | Foto landscape kebun / petani di lahan (dari D.1) |
| Kemitraan | Logo Sunpride + Logo DSA Astra dengan teks "Mitra Resmi" |
| Animasi | Fade-in dari kiri (foto) dan kanan (teks) saat scroll |

### Draft Copywriting

**Section Label:**
> TENTANG KAMI

**Headline:**
> Integrasi Lokal, Standar Global

**Paragraf 1:**
> Berlokasi di kawasan vulkanik subur lereng barat Gunung Merapi, Gapoktan Ngudi Luhur merupakan pengelola sentra salak terbaik di Indonesia. Sejak tahun 2017, kami telah membangun ekosistem pertanian terintegrasi yang memberdayakan ratusan petani lokal di atas aset lahan seluas lebih dari 800 hektar.

**Paragraf 2:**
> Kami fokus pada produksi Salak Nglumut Kualitas Premium yang memiliki daya saing tinggi di pasar internasional. Dengan sistem manajemen hulu-ke-hilir yang terstandarisasi, Gapoktan Ngudi Luhur telah sukses mengekspor ratusan ton komoditas setiap tahunnya ke berbagai negara di Asia dan Eropa.

**Paragraf 3:**
> Sebagai binaan dari program Desa Sejahtera Astra (DSA), kami berkomitmen menjadi unit percontohan nasional dalam hilirisasi produk pertanian — mulai dari buah segar untuk pasar ekspor, pengembangan produk turunan UMKM, hingga integrasi Agrowisata berbasis komunitas.

**Label Kemitraan:**
> Dipercaya dan Didukung Oleh

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S4] VISI & MISI — Core Values

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              VISI & MISI KAMI                              │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  🎯  VISI                                           │  │
│   │                                                     │  │
│   │  Terwujudnya ekosistem pertanian salak di           │  │
│   │  Kabupaten Magelang yang berkelanjutan dan          │  │
│   │  berdaya saing global melalui sinergi petani,       │  │
│   │  sektor swasta, dan pemerintah.                     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────┐  │
│   │  🌾  MISI 1    │  │  🏆  MISI 2    │  │ 🌍 MISI 3 │  │
│   │                │  │                │  │            │  │
│   │ Meningkatkan   │  │ Memperkuat     │  │ Memperluas │  │
│   │ kesejahteraan  │  │ posisi Kab.    │  │ rantai     │  │
│   │ petani di      │  │ Magelang sbg   │  │ pasok      │  │
│   │ Desa Kaliurang │  │ sentra         │  │ ekspor ke  │  │
│   │ & Srumbung     │  │ hortikultura   │  │ pasar      │  │
│   │                │  │ unggulan       │  │ dunia      │  │
│   └────────────────┘  └────────────────┘  └────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Krem/off-white `#F5EFE6` atau putih bersih |
| Visi | Full-width card dengan border kiri hijau tebal |
| Misi | 3 kartu sejajar dengan ikon SVG clean |
| Ikon | Minimalis, line-style (bukan emoji) |
| Animasi | Staggered fade-in per kartu saat scroll |

### Draft Copywriting

**Section Label:**
> ARAH & TUJUAN KAMI

**Headline:**
> Dibangun di Atas Nilai, Digerakkan oleh Komunitas

**Label Visi:**
> Visi

**Teks Visi:**
> Terwujudnya ekosistem pertanian salak di Kabupaten Magelang yang berkelanjutan dan berdaya saing global melalui sinergi petani, sektor swasta, dan pemerintah.

**Label Misi:**
> Misi

**Misi 1:**
> Meningkatkan kesejahteraan petani di Desa Kaliurang dan Kecamatan Srumbung secara luas.

**Misi 2:**
> Memperkuat posisi Kabupaten Magelang sebagai sentra hortikultura unggulan nasional.

**Misi 3:**
> Memperluas rantai pasok ekspor komoditas lokal ke pasar dunia.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S5] 3 PINTU UTAMA — Navigation Cards

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           TIGA PILAR EKOSISTEM KAMI                        │
│                                                             │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐  │
│  │ [foto ekspor]   │ │ [foto produk]   │ │ [foto kebun]│  │
│  │                 │ │                 │ │             │  │
│  │ 🚢 GIAT EKSPOR  │ │ 🛒 UMKM &       │ │ 🌿 AGRO-   │  │
│  │                 │ │    OLAHAN       │ │    WISATA   │  │
│  │ Global Player   │ │ The Innovation  │ │ The Exper.  │  │
│  │                 │ │                 │ │             │  │
│  │ Produk segar    │ │ Kripik, dodol,  │ │ Petik buah, │  │
│  │ premium untuk   │ │ sirup, kopi     │ │ edukasi,    │  │
│  │ pasar ekspor    │ │ biji salak, dll │ │ camping     │  │
│  │                 │ │                 │ │             │  │
│  │ [Selengkapnya→] │ │ [Lihat Produk→] │ │ [Booking →] │  │
│  └─────────────────┘ └─────────────────┘ └─────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Layout | 3 kartu sejajar · di mobile: horizontal scroll atau stacked |
| Foto | Foto nyata per pilar (dari D.1) sebagai background card |
| Overlay | Gradient gelap di bawah untuk kontras teks |
| Hover | Card naik sedikit + overlay lebih terang |
| CTA per kartu | Tombol kecil dengan arrow |
| Link | Masing-masing menuju `/ekspor`, `/umkm`, `/agrowisata` |

### Draft Copywriting

**Section Label:**
> EKOSISTEM KAMI

**Headline:**
> Tiga Pilar, Satu Gerakan

**Subheadline:**
> Dari hulu ke hilir — ekspor buah segar, produk olahan bernilai tambah, hingga wisata edukasi berbasis komunitas.

---

**Kartu 1 — Giat Ekspor**

> **Label:** Poktan · Kelompok Tani

> **Judul:** Giat Ekspor

> **Tagline:** *Global Player*

> **Deskripsi:** Salak Nglumut premium berkualitas ekspor, dikirim 30–50 ton setiap minggu ke China, Kamboja, Eropa, dan Timor Leste. Sistem hulu-ke-hilir terstandarisasi dari kebun hingga kontainer.

> **CTA:** Lihat Alur Ekspor →

---

**Kartu 2 — UMKM & Olahan**

> **Label:** KWT · Kelompok Wanita Tani

> **Judul:** UMKM & Olahan

> **Tagline:** *The Innovation*

> **Deskripsi:** Transformasi salak segar menjadi produk bernilai tambah tinggi — kripik, dodol, sirup, bakpia, hingga kopi biji salak. Dikelola oleh kelompok wanita tani sebagai motor ekonomi kreatif desa.

> **CTA:** Lihat Produk →

---

**Kartu 3 — Agrowisata**

> **Label:** Karang Taruna

> **Judul:** Agrowisata

> **Tagline:** *The Experience*

> **Deskripsi:** Warisan Merapi, Destinasi Edukasi Agribisnis Berkelanjutan. Petik buah langsung, edukasi budidaya, susur sungai, camping, hingga studi circular economy di lereng Merapi.

> **CTA:** Booking Kunjungan →

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S6] NGUDI LUHUR DALAM BERITA — Media Coverage

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           NGUDI LUHUR DALAM BERITA                         │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│   │              │  │              │  │              │    │
│   │  [LOGO       │  │  [LOGO       │  │  [LOGO       │    │
│   │  MEDIA 1]    │  │  MEDIA 2]    │  │  MEDIA 3]    │    │
│   │              │  │              │  │              │    │
│   │  Berita      │  │  Gemilang FM │  │  [Media 3]   │    │
│   │  Magelang    │  │              │  │              │    │
│   └──────────────┘  └──────────────┘  └──────────────┘    │
│         ↑ bisa diklik menuju link jurnal/berita             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Abu-abu sangat muda / krem |
| Logo | Grayscale by default · berwarna saat hover |
| Interaksi | Klik logo → buka link jurnal/berita di tab baru |
| Layout | Flex row centered · di mobile: 2 kolom |
| Data dibutuhkan | Link URL liputan Berita Magelang + Gemilang FM ⚠️ |

### Draft Copywriting

**Section Label:**
> LIPUTAN MEDIA

**Headline:**
> Ngudi Luhur dalam Berita

**Subtext:**
> Dipercaya, diliput, dan diakui oleh media lokal hingga nasional.

**Catatan untuk konten:**
> ⚠️ Data yang masih dibutuhkan: URL artikel Berita Magelang, URL siaran/artikel Gemilang FM, dan logo masing-masing media dalam format PNG/SVG.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S7] CTA PENUTUP — Call to Action Global

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [BACKGROUND: foto kebun / alam Merapi]                   │
│                                                             │
│         Siap Bermitra atau Berkunjung?                     │
│                                                             │
│    Hubungi kami untuk kerjasama ekspor, pemesanan          │
│    produk, atau reservasi paket agrowisata.                │
│                                                             │
│       [ 📞 Hubungi via WhatsApp ]                          │
│       [ 📍 Lihat Lokasi di Maps ]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Foto alam Merapi dengan overlay hijau gelap |
| Teks | Putih, centered |
| CTA 1 | Tombol solid hijau → link WhatsApp |
| CTA 2 | Tombol outline putih → embedded Google Maps |
| Ukuran | Minimal `50vh` untuk kesan impactful |

### Draft Copywriting

**Headline:**
> Siap Bermitra atau Berkunjung?

**Subtext:**
> Hubungi kami untuk kerjasama ekspor, pemesanan produk olahan, atau reservasi paket agrowisata edukatif di lereng Merapi.

**CTA 1:**
> 💬 Hubungi via WhatsApp

**CTA 2:**
> 📍 Temukan Lokasi Kami

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## [S8] FOOTER

### Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🌿 NGUDI LUHUR     │  Navigasi       │  Kontak           │
│                     │                 │                   │
│  Pusat Agribisnis   │  Beranda        │  📍 Jrakah,       │
│  Salak Nglumut      │  Giat Ekspor    │  Kaliurang,       │
│  Premium            │  UMKM & Olahan  │  Srumbung,        │
│                     │  Agrowisata     │  Kab. Magelang    │
│  Binaan DSA Astra   │                 │                   │
│                     │  Mitra          │  📞 [No. WA]      │
│  [logo Sunpride]    │  [logo DSA]     │  🗺️ Google Maps   │
│                     │                 │                   │
├─────────────────────────────────────────────────────────────│
│  © 2025 Gapoktan Ngudi Luhur · Srumbung, Magelang         │
└─────────────────────────────────────────────────────────────┘
```

### Spesifikasi Layout

| Elemen | Detail |
|--------|--------|
| Background | Hijau sangat gelap `#1B2E1F` |
| Teks | Putih / abu muda |
| Kolom | 3 kolom di desktop · stacked di mobile |
| Maps link | Langsung ke `https://maps.app.goo.gl/XdoRZrutTGQzJPHN9` |
| Copyright | Tahun otomatis via JS `new Date().getFullYear()` |

### Konten Footer

**Kolom 1 — Brand:**
> **Gapoktan Ngudi Luhur**  
> Pusat Agribisnis Salak Nglumut Premium  
> Srumbung, Kabupaten Magelang, Jawa Tengah  
> Binaan: Desa Sejahtera Astra (DSA)

**Kolom 2 — Navigasi:**
> - Beranda  
> - Giat Ekspor  
> - UMKM & Olahan  
> - Agrowisata  
> - Tentang Kami

**Kolom 3 — Kontak:**
> 📍 99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Kab. Magelang 56483  
> 🗺️ [Buka di Google Maps](https://maps.app.goo.gl/XdoRZrutTGQzJPHN9)  
> 💬 [Hubungi via WhatsApp] *(nomor menyusul)*

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ⚠️ CHECKLIST DATA YANG MASIH DIBUTUHKAN

Sebelum halaman ini bisa live, data berikut harus tersedia:

| No | Kebutuhan | PIC | Status |
|----|-----------|-----|--------|
| 1 | Foto hero slideshow (kebun, kontainer, tim) | D.1 via GDrive | ⏳ Menyusul |
| 2 | Video profil / footage agrowisata | D.1 via GDrive | ⏳ Menyusul |
| 3 | Logo Sunpride (PNG/SVG) | Tim Ngudi Luhur | ❌ Belum ada |
| 4 | Logo DSA Astra (PNG/SVG) | Tim Ngudi Luhur | ❌ Belum ada |
| 5 | URL liputan Berita Magelang | Tim Ngudi Luhur | ❌ Belum ada |
| 6 | URL liputan / siaran Gemilang FM | Tim Ngudi Luhur | ❌ Belum ada |
| 7 | Nomor WhatsApp resmi | Tim Ngudi Luhur | ❌ Belum ada |
| 8 | Foto produk UMKM (untuk kartu S5) | Tim KWT | ❌ Belum ada |
| 9 | Foto fasilitas agrowisata | Tim Karang Taruna | ❌ Belum ada |

---

## 🔤 KEYWORD SEO — Homepage

Gunakan keyword berikut secara alami dalam teks konten, meta title, dan meta description:

**Primary:**
- Salak organik Magelang
- Ekspor salak Indonesia
- Gapoktan Ngudi Luhur

**Secondary:**
- Agrowisata Srumbung
- Olahan salak premium
- Pusat studi banding pertanian
- Pemberdayaan desa Magelang
- Salak Nglumut ekspor

**Meta Title (saran):**
> Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut Premium | Ekspor & Agrowisata Srumbung Magelang

**Meta Description (saran):**
> Gapoktan Ngudi Luhur adalah sentra agribisnis salak terbaik Indonesia di lereng Merapi. 800+ hektar lahan, ekspor ke Asia & Eropa, produk UMKM olahan, dan agrowisata edukasi. Srumbung, Magelang.

---

*Dokumen ini adalah versi 1.0. Data yang belum tersedia ditandai ⚠️ dan akan diperbarui setelah diterima dari tim.*
