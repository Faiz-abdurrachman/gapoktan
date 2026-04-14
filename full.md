bro baca ini bro jadi gw mau kalo misalnya lu baca dulu fiel md nya 

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


# 🔍 Panduan SEO Lengkap — Gapoktan Ngudi Luhur
**Dokumen:** Search Engine Optimization Guide  
**Versi:** 1.0  
**Dibuat untuk:** Mas Chen (Developer) + Tim Konten  
**Target:** Ranking organik Google untuk pasar B2B & B2C  

---

## 📌 DAFTAR ISI

1. [Strategi SEO Keseluruhan](#1-strategi-seo-keseluruhan)
2. [Riset Keyword Lengkap](#2-riset-keyword-lengkap)
3. [On-Page SEO Per Halaman](#3-on-page-seo-per-halaman)
4. [Technical SEO](#4-technical-seo)
5. [Local SEO](#5-local-seo)
6. [Content SEO](#6-content-seo)
7. [Off-Page SEO](#7-off-page-seo)
8. [Panduan Schema Markup](#8-panduan-schema-markup)
9. [Checklist SEO Launch](#9-checklist-seo-launch)
10. [KPI & Cara Ukur Keberhasilan](#10-kpi--cara-ukur-keberhasilan)

---

## 1. STRATEGI SEO KESELURUHAN

### Posisi yang Ingin Dicapai

Gapoktan Ngudi Luhur ingin ditemukan oleh **3 jenis pencari berbeda** dengan intent yang berbeda:

| Jenis Pencari | Mereka Mencari | Intent |
|---------------|----------------|--------|
| **Buyer / Eksportir** | Pemasok salak premium Indonesia | Transaksional / B2B |
| **Wisatawan / Keluarga** | Agrowisata Magelang / wisata petik buah | Navigasi / Wisata |
| **Instansi / Kampus** | Studi banding pertanian / pemberdayaan desa | Informasional / B2B |
| **Konsumen Produk** | Olahan salak, kopi biji salak, jajanan Magelang | Transaksional / B2C |
| **Investor / Media** | Profil Gapoktan, ekspor salak Indonesia | Informasional |

### Pendekatan SEO

```
FASE 1 (Bulan 1–2): Pondasi Teknis
→ Setup Google Search Console + Analytics
→ Optimasi kecepatan & mobile
→ On-page SEO semua halaman
→ Google Business Profile

FASE 2 (Bulan 2–4): Konten & Local SEO
→ Blog / artikel informatif
→ Optimasi local search Magelang
→ Backlink dari media lokal

FASE 3 (Bulan 4–6): Otoritas & Skala
→ Link building dari DSA Astra, Sunpride
→ Press release digital
→ Konten video (YouTube embed)
```

---

## 2. RISET KEYWORD LENGKAP

### 2.1 Keyword Utama (Primary Keywords)

Ini keyword yang paling strategis — volume tinggi, relevansi tinggi, persaingan sedang.

| Keyword | Estimasi Volume | Tingkat Persaingan | Target Halaman |
|---------|----------------|-------------------|----------------|
| salak organik Magelang | Sedang | Rendah | Beranda / Ekspor |
| ekspor salak Indonesia | Sedang | Sedang | Giat Ekspor |
| agrowisata Srumbung | Rendah | Sangat Rendah | Agrowisata |
| Gapoktan Ngudi Luhur | Rendah | Sangat Rendah | Beranda |
| olahan salak premium | Rendah | Rendah | UMKM & Olahan |
| salak Nglumut | Sedang | Rendah | Beranda / Ekspor |

### 2.2 Keyword Sekunder (Secondary Keywords)

Keyword pendukung yang memperluas jangkauan pencarian.

| Keyword | Target Halaman | Catatan |
|---------|----------------|---------|
| pusat studi banding pertanian Magelang | Agrowisata | Sangat spesifik, persaingan rendah |
| pemberdayaan desa Magelang | Beranda / Tentang | Konten sosial dampak |
| wisata petik salak Magelang | Agrowisata | Long-tail, niat kuat |
| produk olahan salak | UMKM | Broad, banyak variasi |
| kopi biji salak | UMKM | Unik — hampir nol pesaing |
| supplier salak ekspor Jawa Tengah | Giat Ekspor | B2B spesifik |
| packing house salak Magelang | Giat Ekspor | B2B teknis |
| agrowisata edukasi Jawa Tengah | Agrowisata | Jangkauan lebih luas |
| wisata keluarga Magelang | Agrowisata | B2C volume tinggi |
| camping Srumbung Merapi | Agrowisata | Niche outdoor |
| kripik salak Magelang | UMKM | Produk spesifik |
| dodol salak | UMKM | Produk spesifik |

### 2.3 Long-Tail Keywords (Ekor Panjang)

Keyword spesifik dengan volume rendah tapi konversi tinggi — ini peluang terbesar untuk situs baru.

| Long-tail Keyword | Target |
|-------------------|--------|
| "harga salak ekspor Magelang" | Buyer / Eksportir |
| "pemasok salak premium untuk ekspor" | B2B |
| "agrowisata edukatif lereng Merapi" | Wisatawan edukatif |
| "studi banding pertanian salak" | Instansi/kampus |
| "paket wisata petik salak Magelang" | B2C keluarga |
| "oleh-oleh khas Magelang salak" | B2C wisatawan |
| "kopi dari biji salak" | B2C unik |
| "kelompok tani ekspor salak Indonesia" | Media/investor |
| "Desa Sejahtera Astra Magelang" | Branding/PR |
| "salak Nglumut kualitas ekspor" | B2B teknis |
| "wisata camping Srumbung" | Outdoor enthusiast |
| "agrowisata Magelang Merapi" | Wisatawan umum |

### 2.4 Keyword Berdasarkan Pertanyaan (Question Keywords)

Keyword dalam bentuk pertanyaan sangat bagus untuk konten blog dan snippet Google.

| Pertanyaan | Konten yang Menjawab |
|------------|----------------------|
| Apa itu Salak Nglumut? | Blog / Halaman Ekspor |
| Dimana agrowisata terbaik di Magelang? | Blog / Agrowisata |
| Berapa harga salak ekspor per kg? | FAQ / Ekspor |
| Bagaimana cara pesan produk olahan salak? | UMKM / FAQ |
| Apa bedanya salak Nglumut dan salak Pondoh? | Blog |
| Kemana ekspor salak Indonesia? | Blog / Ekspor |
| Bagaimana cara booking agrowisata Ngudi Luhur? | Agrowisata / FAQ |
| Apa produk unggulan Gapoktan Ngudi Luhur? | Beranda / UMKM |

---

## 3. ON-PAGE SEO PER HALAMAN

### 3.1 Beranda (Homepage) — `/`

```
Meta Title   : Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut 
               Premium | Ekspor & Agrowisata Srumbung Magelang
               [60 karakter maks]

Meta Desc    : Gapoktan Ngudi Luhur, sentra salak terbaik Indonesia di 
               lereng Merapi. 800+ hektar, ekspor ke Asia & Eropa, produk 
               UMKM olahan, dan agrowisata edukasi di Srumbung, Magelang.
               [155 karakter maks]

H1           : Pusat Agribisnis Salak Nglumut Premium
H2 (sections): - Capaian dan Dampak Nyata
               - Tentang Gapoktan Ngudi Luhur
               - Visi dan Misi Kami
               - Tiga Pilar Ekosistem Kami
               - Ngudi Luhur dalam Berita

URL          : / (root)
Canonical    : https://[domain].com/

Keyword Utama: salak Nglumut, Gapoktan Ngudi Luhur, agrowisata Srumbung
Keyword Sekunder: ekspor salak Indonesia, olahan salak premium
```

**Panduan penempatan keyword di Beranda:**

- Keyword `salak Nglumut` → muncul di H1, paragraf pertama Tentang Kami, dan alt text foto kebun
- Keyword `Gapoktan Ngudi Luhur` → muncul di H1, meta title, dan footer
- Keyword `agrowisata Srumbung` → muncul di section 3 Pintu dan CTA
- Keyword `ekspor salak` → muncul di section Capaian dan kartu Pintu Ekspor

---

### 3.2 Halaman Giat Ekspor — `/ekspor`

```
Meta Title   : Ekspor Salak Nglumut Premium | Gapoktan Ngudi Luhur 
               Srumbung Magelang
               
Meta Desc    : Pemasok salak Nglumut premium berkualitas ekspor dari 
               Srumbung, Magelang. Pengiriman 30–50 ton/minggu ke China, 
               Eropa & Asia. Bermitra dengan Sunpride & DSA Astra.

H1           : Ekspor Salak Nglumut Premium dari Lereng Merapi
H2 (sections): - Dipercaya oleh Mitra Kelas Nasional
               - Alur Operasional: Dari Pohon hingga Kontainer
               - Jangkauan Ekspor Kami
               - Dokumentasi Ekspor
               - Hubungi Tim Ekspor

URL          : /ekspor
Canonical    : https://[domain].com/ekspor

Keyword Utama: ekspor salak Indonesia, supplier salak premium
Keyword Sekunder: salak Nglumut kualitas ekspor, packing house salak
```

**Panduan penempatan keyword:**

- `ekspor salak Indonesia` → H1, paragraf intro, dan alt text foto kontainer
- `supplier salak premium` → section CTA dan meta description
- `Srumbung Magelang` → meta title, H2 pertama, dan footer
- `Sunpride` dan `DSA Astra` → section kepercayaan (boost otoritas brand)

---

### 3.3 Halaman UMKM & Olahan — `/umkm`

```
Meta Title   : Produk Olahan Salak Premium | UMKM Ngudi Luhur — 
               Kripik, Dodol, Kopi Biji Salak Magelang

Meta Desc    : Produk olahan salak Nglumut premium dari KWT Ngudi Luhur 
               Magelang. Kripik salak, dodol, sirup, bakpia, hingga kopi 
               biji salak inovatif. Pesan via WhatsApp!

H1           : Produk Olahan Salak Premium dari Dapur KWT Ngudi Luhur
H2 (sections): - Motor Ekonomi Kreatif Desa
               - Katalog Produk Olahan Salak
               - Kopi Biji Salak — Produk Unggulan Kami
               - Cara Pemesanan
               - Pesan Sekarang

URL          : /umkm
Canonical    : https://[domain].com/umkm

Keyword Utama: olahan salak premium, produk olahan salak
Keyword Sekunder: kripik salak Magelang, kopi biji salak, dodol salak
```

**Panduan penempatan keyword:**

- Setiap nama produk di katalog → **judul produk = keyword** (kripik salak, dodol salak, dst)
- `kopi biji salak` → highlight khusus karena hampir zero pesaing di Google
- Alt text setiap foto produk → format: `[nama produk] olahan salak Ngudi Luhur Magelang`
- Schema markup Product untuk setiap item katalog (lihat bagian 8)

---

### 3.4 Halaman Agrowisata — `/agrowisata`

```
Meta Title   : Agrowisata Srumbung Magelang | Wisata Edukasi & Petik 
               Salak Lereng Merapi — Ngudi Luhur

Meta Desc    : Agrowisata edukatif di lereng Merapi, Srumbung, Magelang. 
               Petik salak langsung, edukasi budidaya, camping, studi 
               banding pertanian. Cocok untuk keluarga & instansi.

H1           : Agrowisata Ngudi Luhur — Warisan Merapi, Destinasi Edukasi
H2 (sections): - Lebih dari Sekadar Wisata
               - Paket Kunjungan
               - Fasilitas Lengkap
               - Lokasi dan Rute
               - Booking Kunjungan

URL          : /agrowisata
Canonical    : https://[domain].com/agrowisata

Keyword Utama: agrowisata Srumbung, wisata petik salak Magelang
Keyword Sekunder: studi banding pertanian Magelang, wisata Merapi keluarga
```

**Panduan penempatan keyword:**

- `agrowisata Srumbung` → H1, meta title, dan teks intro
- `wisata Merapi` → section fasilitas outdoor dan galeri
- `studi banding pertanian` → section Paket Studi Banding (B2B)
- Koordinat GPS di schema markup LocalBusiness (sangat penting untuk local search)

---

## 4. TECHNICAL SEO

### 4.1 Kecepatan Halaman (Core Web Vitals)

Target yang harus dicapai agar tidak dihukum Google:

| Metrik | Target | Tool Ukur |
|--------|--------|-----------|
| LCP (Largest Contentful Paint) | < 2.5 detik | PageSpeed Insights |
| FID / INP (Interactivity) | < 100ms | PageSpeed Insights |
| CLS (Cumulative Layout Shift) | < 0.1 | PageSpeed Insights |
| Mobile Score | > 80 | PageSpeed Insights |
| Desktop Score | > 90 | PageSpeed Insights |

**Cara mencapainya (untuk Mas Chen):**

```
✅ Kompres semua foto dengan format WebP (bukan JPG/PNG)
✅ Lazy loading pada semua gambar di bawah fold
✅ Preload foto hero section (paling penting)
✅ Minify CSS dan JS
✅ Gunakan CDN untuk aset statis
✅ Font: gunakan font-display: swap
✅ Hindari render-blocking resources
✅ Aktifkan browser caching
```

### 4.2 Struktur URL

URL yang bersih dan deskriptif:

| Halaman | URL yang Benar | URL yang Salah |
|---------|----------------|----------------|
| Beranda | `/` | `/home` atau `/index` |
| Ekspor | `/ekspor` | `/page1` atau `/ekspor-salak-nglumut-premium` |
| UMKM | `/umkm` | `/produk` |
| Agrowisata | `/agrowisata` | `/wisata` |
| Blog | `/blog/judul-artikel` | `/blog?id=123` |

**Aturan URL:**
- Selalu huruf kecil
- Gunakan tanda hubung `-` bukan underscore `_`
- Tidak ada spasi atau karakter spesial
- Maksimal 60 karakter per URL
- Bahasa Indonesia (bukan campuran Inggris-Indonesia)

### 4.3 Struktur Heading yang Benar

Setiap halaman harus mengikuti hierarki heading ini:

```
H1 — Hanya SATU per halaman (topik utama halaman)
  H2 — Section utama (4–6 per halaman)
    H3 — Sub-section dalam H2 (sesuai kebutuhan)
      H4 — Detail dalam H3 (jarang dibutuhkan)
```

**Contoh struktur heading halaman Agrowisata:**
```
H1: Agrowisata Ngudi Luhur — Warisan Merapi, Destinasi Edukasi

  H2: Lebih dari Sekadar Wisata
  
  H2: Paket Kunjungan
    H3: Paket Edukasi Budidaya
    H3: Paket Wisata Petik Buah
    H3: Paket Studi Banding
    
  H2: Fasilitas Lengkap
    H3: Area Produksi
    H3: Area Pertemuan dan Budaya
    H3: Area Outdoor dan Alam
    
  H2: Lokasi dan Rute
  
  H2: Booking Kunjungan
```

### 4.4 Image SEO

Setiap gambar di website **wajib** memiliki:

```html
<!-- Format yang benar -->
<img 
  src="kebun-salak-nglumut-merapi.webp"
  alt="Hamparan kebun salak Nglumut di lereng Gunung Merapi, Srumbung Magelang"
  width="1200"
  height="800"
  loading="lazy"
/>

<!-- Foto hero (jangan lazy load, harus preload) -->
<img 
  src="hero-gapoktan-ngudi-luhur.webp"
  alt="Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut Premium Srumbung Magelang"
  width="1920"
  height="1080"
  loading="eager"
  fetchpriority="high"
/>
```

**Panduan penulisan alt text:**

| Foto | Alt Text yang Benar |
|------|---------------------|
| Foto kebun salak | `Hamparan kebun salak Nglumut di lereng Gunung Merapi Srumbung Magelang` |
| Foto kontainer | `Proses loading kontainer ekspor salak Nglumut Gapoktan Ngudi Luhur` |
| Foto KWT | `Kelompok Wanita Tani KWT Ngudi Luhur sedang membuat olahan produk salak` |
| Foto produk kripik | `Kripik salak Nglumut premium produk olahan UMKM Ngudi Luhur Magelang` |
| Foto pendopo | `Pendopo fasilitas agrowisata Ngudi Luhur Srumbung Magelang lereng Merapi` |

**Penamaan file foto:**
- ✅ `kebun-salak-nglumut-srumbung-magelang.webp`
- ✅ `kripik-salak-ngudi-luhur.webp`
- ❌ `IMG_20250312_093421.jpg`
- ❌ `foto1.png`

### 4.5 Sitemap XML

Buat dan submit sitemap XML ke Google Search Console:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://[domain].com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://[domain].com/ekspor</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://[domain].com/umkm</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://[domain].com/agrowisata</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://[domain].com/blog</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

> Submit ke: `https://search.google.com/search-console` → Sitemaps → Masukkan URL sitemap

### 4.6 Robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://[domain].com/sitemap.xml

# Blokir halaman yang tidak perlu diindeks
Disallow: /admin/
Disallow: /thank-you
Disallow: /?s=
```

### 4.7 SSL & HTTPS

> ✅ Wajib menggunakan HTTPS. Google memberikan sinyal ranking positif untuk situs HTTPS.  
> Redirect semua `http://` → `https://` dengan kode 301.  
> Redirect `www.` → `non-www.` (atau sebaliknya) — pilih satu, konsisten.

### 4.8 Mobile-First

Google menggunakan mobile-first indexing — versi mobile website yang dinilai, bukan desktop.

```
✅ Semua teks terbaca tanpa zoom di layar 375px
✅ Tombol / CTA minimal ukuran 44x44px (mudah diklik jari)
✅ Tidak ada horizontal scroll
✅ Form booking bisa diisi nyaman di mobile
✅ Google Maps embed responsif
✅ Counter animation tetap terlihat di mobile
```

---

## 5. LOCAL SEO

Local SEO sangat kritis untuk Ngudi Luhur karena target agrowisata dan pencari lokal.

### 5.1 Google Business Profile (Prioritas Utama)

> ⚠️ Ini adalah langkah SEO paling penting dan paling cepat memberikan hasil. Harus diselesaikan sebelum website live.

**Langkah setup Google Business Profile:**

```
1. Buka: business.google.com
2. Klaim atau buat profil baru: "Gapoktan Ngudi Luhur"
3. Isi semua informasi berikut:
```

| Field | Isi |
|-------|-----|
| Nama Bisnis | Gapoktan Ngudi Luhur |
| Kategori Utama | Agritourism Farm (Pertanian Agrowisata) |
| Kategori Tambahan | Agricultural Cooperative, Farm Store |
| Alamat | 99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Kab. Magelang 56483 |
| Koordinat | Sesuai titik maps yang ada |
| Website | https://[domain].com |
| Telepon | (isi nomor WA resmi) |
| Jam Operasional | Sesuaikan dengan jam kunjungan |
| Deskripsi | *(lihat draft di bawah)* |
| Foto | Upload minimal 10 foto berkualitas tinggi |

**Draft deskripsi Google Business Profile:**
> Gapoktan Ngudi Luhur adalah pusat agribisnis salak Nglumut premium di lereng Gunung Merapi, Srumbung, Magelang. Kami mengelola 800+ hektar lahan, mengekspor salak ke Asia dan Eropa, menyediakan produk olahan UMKM berkualitas, dan membuka paket agrowisata edukasi untuk keluarga, sekolah, dan instansi. Binaan Desa Sejahtera Astra (DSA) dan mitra resmi PT Sewu Segar Nusantara (Sunpride).

**Foto yang harus diupload ke Google Business Profile:**
- [ ] Foto tampak depan / gerbang masuk lokasi
- [ ] Foto hamparan kebun salak
- [ ] Foto pendopo fasilitas
- [ ] Foto produk olahan (minimal 3 produk)
- [ ] Foto tim / petani di lahan
- [ ] Foto kegiatan wisata / kunjungan

### 5.2 Konsistensi NAP (Name, Address, Phone)

NAP harus **identik** di semua platform. Perbedaan kecil (jalan vs. Jl., dll.) bisa membingungkan Google.

**Format NAP standar yang harus digunakan di mana saja:**

```
Nama    : Gapoktan Ngudi Luhur
Alamat  : Jrakah, Kaliurang, Kec. Srumbung, 
          Kabupaten Magelang, Jawa Tengah 56483
Telepon : [nomor WA resmi]
Website : https://[domain].com
```

**Platform yang harus memiliki NAP ini:**
- [ ] Website (footer semua halaman)
- [ ] Google Business Profile
- [ ] Facebook Page (jika ada)
- [ ] Instagram bio (jika ada)
- [ ] WhatsApp Business profile
- [ ] Direktori bisnis lokal (Yellow Pages, Cylex, dll.)

### 5.3 Keyword Local SEO

Tambahkan keyword berbasis lokasi secara alami di dalam konten:

| Keyword Lokal | Halaman |
|---------------|---------|
| agrowisata Srumbung Magelang | Agrowisata |
| wisata lereng Merapi | Agrowisata |
| kebun salak Kaliurang Magelang | Ekspor / Beranda |
| oleh-oleh Magelang salak | UMKM |
| petani salak Kecamatan Srumbung | Beranda / Tentang |
| ekspor pertanian Jawa Tengah | Ekspor |

### 5.4 Embed Google Maps di Website

Wajib ada minimal di 2 halaman: Beranda (footer) dan Agrowisata.

```html
<!-- Cara embed maps yang benar -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Lokasi Gapoktan Ngudi Luhur, Srumbung, Magelang"
></iframe>
```

> **Catatan:** Gunakan link embed dari Google Maps (bukan link share biasa). Atribut `title` pada iframe penting untuk aksesibilitas dan SEO.

---

## 6. CONTENT SEO

### 6.1 Blog / Artikel (Sangat Direkomendasikan)

Blog adalah mesin SEO jangka panjang. Rekomendasi topik artikel yang bisa mendatangkan traffic organik:

**Kategori: Informatif (Awareness)**

| Judul Artikel | Target Keyword | Estimasi Traffic |
|---------------|----------------|-----------------|
| Apa Itu Salak Nglumut? Mengenal Varietas Salak Premium Terbaik Indonesia | salak Nglumut | Sedang |
| Perbedaan Salak Nglumut dan Salak Pondoh yang Wajib Kamu Tahu | perbedaan salak Nglumut Pondoh | Rendah-Sedang |
| Mengapa Salak Magelang Diminati Pasar Ekspor Asia? | salak ekspor Magelang | Rendah |
| Mengenal Sistem Pertanian Hulu-ke-Hilir di Gapoktan Ngudi Luhur | pemberdayaan desa Magelang | Rendah |

**Kategori: Wisata (Consideration)**

| Judul Artikel | Target Keyword | Estimasi Traffic |
|---------------|----------------|-----------------|
| 7 Aktivitas Seru di Agrowisata Ngudi Luhur Srumbung yang Wajib Dicoba | agrowisata Srumbung | Rendah |
| Panduan Lengkap Kunjungan Agrowisata Keluarga ke Lereng Merapi Magelang | wisata keluarga Magelang Merapi | Sedang |
| Camping di Lereng Merapi Srumbung: Pengalaman Tak Terlupakan | camping Srumbung Merapi | Rendah |
| Studi Banding Pertanian Terbaik di Jawa Tengah: Kenapa Pilih Ngudi Luhur? | studi banding pertanian Jawa Tengah | Rendah |

**Kategori: Produk (Conversion)**

| Judul Artikel | Target Keyword | Estimasi Traffic |
|---------------|----------------|-----------------|
| Kopi Biji Salak: Inovasi Minuman Unik dari Lereng Merapi yang Mendunia | kopi biji salak | Rendah (tapi zero kompetitor) |
| 8 Produk Olahan Salak Premium yang Wajib Jadi Oleh-oleh dari Magelang | oleh-oleh Magelang salak | Sedang |
| Cara Membuat Kripik Salak: Proses di Balik Camilan Premium Ngudi Luhur | kripik salak Magelang | Rendah |

### 6.2 Panduan Penulisan Konten SEO-Friendly

Setiap halaman dan artikel harus mengikuti panduan ini:

**Struktur konten ideal:**

```
[Intro] — 100–150 kata
  → Sertakan keyword utama di 100 kata pertama
  → Jawab langsung apa yang dicari pembaca

[Body] — 400–800 kata (per section)
  → Gunakan H2 dan H3
  → Satu keyword per paragraf, jangan dipaksakan
  → Variasikan dengan sinonim dan LSI keyword

[Kesimpulan / CTA] — 50–100 kata
  → Ajak pembaca untuk action (booking, pesan, hubungi)
  → Sertakan internal link ke halaman terkait
```

**Kepadatan keyword (Keyword Density):**

> Target 1–2% dari total kata. Jangan lebih — Google menganggapnya spam.  
> Contoh: artikel 500 kata → keyword utama muncul 5–10 kali secara alami.

**Internal linking (sangat penting):**

Setiap halaman harus ada link ke halaman lain di website yang relevan:

| Di halaman | Link ke | Anchor text |
|------------|---------|-------------|
| Beranda | Ekspor | "Lihat alur ekspor kami" |
| Beranda | Agrowisata | "Booking kunjungan agrowisata" |
| Ekspor | UMKM | "Produk olahan dari salak non-ekspor" |
| UMKM | Agrowisata | "Kunjungi langsung proses produksinya" |
| Agrowisata | UMKM | "Beli produk olahan sebagai oleh-oleh" |
| Blog | Halaman terkait | Sesuai topik artikel |

### 6.3 Konten Multimedia untuk SEO

| Tipe Konten | Platform | Manfaat SEO |
|-------------|----------|-------------|
| Video profil Gapoktan | YouTube + embed di website | Dwell time naik, SERP video |
| Foto dokumentasi ekspor | Website + Google Business | Image search, kepercayaan |
| Video reels kebun / proses | Instagram + embed | Engagement, brand awareness |
| Podcast / wawancara | Spotify (opsional) | Brand authority |

---

## 7. OFF-PAGE SEO

### 7.1 Backlink — Sumber yang Harus Diprioritaskan

Backlink (tautan dari website lain ke website Ngudi Luhur) adalah salah satu faktor ranking terpenting.

**Backlink prioritas tinggi (mudah didapat):**

| Sumber | Cara Mendapat | Potensi |
|--------|---------------|---------|
| Website DSA Astra | Minta tim Astra tambahkan link profil mitra | Sangat tinggi |
| Website Sunpride / PT Sewu Segar | Minta listing sebagai mitra pemasok | Sangat tinggi |
| Website Dinas Pertanian Kab. Magelang | Daftarkan sebagai kelompok tani unggulan | Tinggi |
| Website Kementan RI | Profil Gapoktan binaan | Tinggi |
| Berita Magelang (beritamagelang.id) | Kirim press release / profil | Sedang |
| Gemilang FM | Request feature digital (artikel di website radio) | Sedang |

**Backlink jangka menengah:**

| Sumber | Cara Mendapat |
|--------|---------------|
| Media pertanian nasional (agrofarm, tabloidsinartani) | Kirim artikel / siaran pers |
| Blog wisata Magelang / Jawa Tengah | Ajak kolaborasi review agrowisata |
| Website kampus yang pernah studi banding | Minta tambahkan testimoni + link |
| Direktori bisnis (Yellow Pages, Kompass) | Daftarkan gratis |

### 7.2 Social Signals

Social media tidak langsung mempengaruhi ranking tapi mendukung brand authority.

**Platform yang direkomendasikan:**

| Platform | Konten | Frekuensi |
|----------|--------|-----------|
| Instagram | Foto kebun, produk, kegiatan wisata, Reels proses | 3–4x/minggu |
| Facebook | Artikel blog, update kegiatan, info booking | 2–3x/minggu |
| YouTube | Video profil, tour kebun, proses ekspor | 1x/bulan |
| WhatsApp Business | Broadcast promo, update produk baru | Sesuai kebutuhan |

**Pastikan semua bio/profil sosmed mencantumkan link website.**

---

## 8. PANDUAN SCHEMA MARKUP

Schema markup adalah kode yang membantu Google memahami konten website dan menampilkan rich results (hasil pencarian yang lebih kaya).

### 8.1 Schema LocalBusiness (Wajib)

Pasang di semua halaman (biasanya di `<head>` atau sebelum `</body>`):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gapoktan Ngudi Luhur",
  "description": "Pusat agribisnis salak Nglumut premium di lereng Gunung Merapi, Srumbung, Magelang. Ekspor ke Asia dan Eropa, produk UMKM olahan, dan agrowisata edukasi.",
  "url": "https://[domain].com",
  "telephone": "[nomor WA resmi]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jrakah, Kaliurang",
    "addressLocality": "Srumbung",
    "addressRegion": "Kabupaten Magelang",
    "postalCode": "56483",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[latitude dari Google Maps]",
    "longitude": "[longitude dari Google Maps]"
  },
  "openingHours": "Mo-Su 07:00-17:00",
  "sameAs": [
    "https://www.instagram.com/[akun]",
    "https://www.facebook.com/[halaman]"
  ],
  "image": "https://[domain].com/images/gapoktan-ngudi-luhur.webp",
  "priceRange": "Rp"
}
</script>
```

### 8.2 Schema Product (Untuk Halaman UMKM)

Pasang untuk setiap produk di halaman UMKM agar muncul di Google Shopping hasil pencarian:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kopi Biji Salak Ngudi Luhur",
  "description": "Kopi unik berbahan dasar biji salak Nglumut pilihan dari lereng Merapi. Aroma khas, rasa unik, produksi KWT Ngudi Luhur Magelang.",
  "image": "https://[domain].com/images/kopi-biji-salak-ngudi-luhur.webp",
  "brand": {
    "@type": "Brand",
    "name": "Ngudi Luhur"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "price": "[harga]",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Gapoktan Ngudi Luhur"
    }
  }
}
</script>
```

### 8.3 Schema TouristAttraction (Untuk Halaman Agrowisata)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Agrowisata Ngudi Luhur",
  "description": "Destinasi agrowisata edukatif di lereng Gunung Merapi, Srumbung, Magelang. Wisata petik salak, edukasi budidaya, studi banding, camping, dan fasilitas pendopo.",
  "url": "https://[domain].com/agrowisata",
  "image": "https://[domain].com/images/agrowisata-ngudi-luhur-merapi.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jrakah, Kaliurang",
    "addressLocality": "Srumbung",
    "addressRegion": "Kabupaten Magelang",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[latitude]",
    "longitude": "[longitude]"
  },
  "touristType": ["Families", "Students", "Business Visitors"]
}
</script>
```

### 8.4 Schema FAQPage (Untuk Halaman yang Punya FAQ)

Jika ada section FAQ, gunakan schema ini agar muncul langsung di hasil pencarian Google:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bagaimana cara booking agrowisata Ngudi Luhur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Isi form booking di halaman agrowisata kami atau hubungi langsung via WhatsApp. Tim akan konfirmasi dalam 1x24 jam."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja produk olahan salak yang tersedia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami menyediakan kripik salak, dodol salak, manisan salak, bakpia salak, selai salak, sirup salak, kurma salak, dan kopi biji salak."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa pesan produk UMKM untuk dikirim ke luar kota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami melayani pengiriman ke seluruh Indonesia via ekspedisi terpercaya seperti JNE, J&T, dan SiCepat."
      }
    }
  ]
}
</script>
```

---

## 9. CHECKLIST SEO LAUNCH

Gunakan checklist ini sebelum website dipublish ke publik:

### Teknis
- [ ] SSL aktif (HTTPS)
- [ ] Redirect HTTP → HTTPS berfungsi
- [ ] Sitemap XML tersedia di `/sitemap.xml`
- [ ] Robots.txt tersedia di `/robots.txt`
- [ ] Google Search Console terhubung & sitemap disubmit
- [ ] Google Analytics 4 terpasang
- [ ] PageSpeed score mobile > 80
- [ ] Tidak ada broken link (cek dengan Screaming Frog / Ahrefs)
- [ ] Canonical tag benar di semua halaman
- [ ] Meta title & description unik di semua halaman

### Konten
- [ ] H1 ada dan unik di setiap halaman
- [ ] Alt text lengkap di semua gambar
- [ ] Semua foto format WebP
- [ ] Nama file foto deskriptif (bukan IMG_xxxx)
- [ ] Internal link antar halaman sudah terpasang
- [ ] Schema markup LocalBusiness terpasang
- [ ] Schema markup TouristAttraction terpasang di /agrowisata
- [ ] Schema markup Product terpasang di /umkm
- [ ] Tidak ada duplikat konten

### Local SEO
- [ ] Google Business Profile sudah diklaim & diverifikasi
- [ ] Informasi GBP lengkap (jam, foto, deskripsi, kategori)
- [ ] NAP konsisten di website dan GBP
- [ ] Google Maps embed terpasang di /agrowisata dan footer
- [ ] Koordinat GPS benar di schema markup

### Off-Page
- [ ] Link dari website DSA Astra sudah ada
- [ ] Link dari website Sunpride sudah ada (jika memungkinkan)
- [ ] Press release dikirim ke Berita Magelang & Gemilang FM
- [ ] Profil Instagram/Facebook aktif & link ke website

---

## 10. KPI & CARA UKUR KEBERHASILAN

### Metrik yang Harus Dipantau (Bulanan)

| Metrik | Tool | Target 6 Bulan |
|--------|------|----------------|
| Organic traffic | Google Analytics 4 | 500+ kunjungan/bulan |
| Keyword ranking | Google Search Console | Top 10 untuk 5+ keyword |
| Impressions | Google Search Console | 10.000+/bulan |
| Click-through rate (CTR) | Google Search Console | > 3% |
| Bounce rate | Google Analytics 4 | < 60% |
| Konversi WA (klik tombol) | GA4 Event Tracking | 50+/bulan |
| Review Google Business | Google Business Profile | 20+ review bintang 4–5 |
| Backlink baru | Ahrefs / Google Search Console | 5+/bulan |

### Tools yang Direkomendasikan

| Tool | Fungsi | Biaya |
|------|--------|-------|
| Google Search Console | Pantau ranking & indexing | Gratis |
| Google Analytics 4 | Analisa traffic | Gratis |
| Google Business Profile | Local SEO | Gratis |
| PageSpeed Insights | Cek kecepatan | Gratis |
| Ubersuggest | Riset keyword | Gratis (terbatas) |
| Ahrefs / SEMrush | Riset mendalam + backlink | Berbayar (opsional) |

### Jadwal Review SEO

| Frekuensi | Yang Dilakukan |
|-----------|----------------|
| Mingguan | Cek Google Search Console — error, indexing baru |
| Bulanan | Laporan traffic, ranking keyword, backlink baru |
| Kuartalan | Evaluasi strategi, update konten, tambah artikel blog |
| Tahunan | Audit SEO menyeluruh, perbarui target keyword |

---

## 📝 CATATAN PENTING

> 1. **SEO butuh waktu.** Hasil organik biasanya mulai terlihat dalam 3–6 bulan setelah website live. Jangan patah arang di bulan pertama.
>
> 2. **Google Business Profile adalah prioritas nomor satu** untuk hasil cepat, terutama untuk pencarian lokal agrowisata dan wisatawan.
>
> 3. **Kopi biji salak adalah peluang emas SEO** — hampir tidak ada kompetitor yang mengoptimasi keyword ini. Buat halaman khusus atau artikel blog tentang produk ini.
>
> 4. **Minta DSA Astra dan Sunpride** untuk menambahkan link ke website Ngudi Luhur dari website mereka. Backlink dari domain otoritas tinggi ini akan sangat mempercepat ranking.
>
> 5. **Kumpulkan review Google** dari tamu agrowisata dan pembeli produk. Review positif adalah faktor lokal SEO yang sangat kuat.

---

*Dokumen ini adalah versi 1.0. Perbarui secara berkala sesuai perkembangan website dan hasil analitik.*


**No Nama UMKM Owner Location Pain Points Produk Profil Bisnis Target Audience Fungsionalitas Desain & Visual Branding Konten & SEO**

## 1

```
Gapoktan Ngudi
Luhur (Gabungan
Kelompok Tani)
```
```
Arif Reksa
```
```
Srumbung,
Magelang,
Central Java
```
```
Fluktuasi Harga: Harga salak mentah sering
anjlok, menyebabkan masalah kemiskinan
struktural bagi petani meski volume panen tinggi
(15-30 ton/minggu).
```
```
Minim Digitalisasi: Sistem pendataan,
pemasaran, hingga rantai pasok (supply chain)
masih dilakukan secara manual.
```
```
Keterbatasan Jangkauan: Belum ada media
representatif yang profesional untuk memperluas
pasar, mencari mitra, atau keperluan pitching ke
investor/pihak luar.
```
```
Hulu (Komoditas Segar): Buah salak organik
premium kualitas ekspor (dikelola oleh Kelompok
Tani/Poktan).
```
```
Hilir (Olahan/FMCG): Kripik salak, dodol salak,
manisan, bakpia, selai, sirup, kurma salak, hingga
kopi biji salak (dikelola oleh Kelompok Wanita
Tani/KWT).
```
```
Jasa (Pariwisata): Paket agrowisata dan
destinasi studi banding pertanian (dipandu oleh
Karang Taruna).
```
```
Gapoktan Ngudi Luhur adalah ekosistem
pemberdayaan masyarakat desa di Srumbung,
Magelang, yang mengelola sentra buah salak terbaik
di Indonesia. Mengelola 500 hektar lahan (300 hektar
tersertifikasi organik), bisnis ini menjadi penopang
utama ekonomi desa dengan mengintegrasikan
sektor hulu (ekspor buah segar), hilir (produk olahan
UMKM), dan jasa (agrowisata edukasi).
```
```
B2B (Business to Business):
Mitra supply chain, eksportir,
investor, dan instansi/kampus
yang ingin melakukan studi
banding.
```
```
B2C (Business to Consumer):
Wisatawan
domestik/mancanegara yang
mencari agrowisata alam, serta
konsumen pembeli produk
olahan/oleh-oleh.
```
```
Landing Page Interaktif (Company Profile): Halaman utama
yang menceritakan visi, misi, dan skala bisnis desa.
```
```
Segmentasi Halaman (Sub-pages): Halaman khusus yang
terpisah untuk Poktan (Info Ekspor & Lahan), KWT (Katalog
Produk Olahan), dan Karang Taruna (Info Paket Agrowisata).
```
```
Integrasi Multimedia: Embed video profil atau dokumentasi
kegiatan di masing-masing sub-page untuk kebutuhan
pitching.
```
```
Sistem Navigasi Cepat: Integrasi tampilan ala Linktree untuk
akses instan ke kontak WhatsApp, katalog produk, atau form
booking agrowisata.
```
```
Katalog Digital: Etalase produk hulu dan hilir lengkap
dengan deskripsi dan nilai jualnya.
```
```
vibe: Profesional, Empowering (memberdayakan),
Organik, dan Kredibel.
```
```
Warna: Earthy tones (hijau alam, cokelat tanah, sentuhan
warna cerah dari buah salak) untuk menekankan sisi
organik dan pertanian.
```
```
Aset Visual: Penggunaan foto/video high-quality dari
hamparan kebun salak, proses pengolahan produk oleh
ibu-ibu KWT, dan aktivitas ekspor untuk membangun
kepercayaan.
```
```
copywriting: Menggunakan gaya
storytelling yang menyoroti dampak sosial
(pengentasan kemiskinan struktural) dan
kualitas produk (salak terbaik, organik).
```
```
Keyword Potensial: Salak organik
Magelang, ekspor salak Indonesia,
agrowisata Srumbung, olahan salak
premium, pusat studi banding pertanian,
pemberdayaan desa Magelang.
```
## 4 5 6 7 8 9

## 10

## 11

## 12

## 13

## 14

## 15

## 16

## 17

## 18


🗺️ Sitemap Website — Gapoktan Ngudi Luhur

🏠 BERANDA (Homepage)
Halaman utama yang menjadi wajah pertama pengunjung. Semua section ada di sini, scroll dari atas ke bawah.
Beranda/
├── [S1] Hero Section — "Living the Movement"
├── [S2] Capaian & Dampak — Counter Animation
├── [S3] Tentang Kami — Origin Story + Visi Misi
├── [S4] 3 Pintu Utama — Navigation Cards
└── [S5] Ngudi Luhur dalam Berita — Logo Media

🚪 3 PINTU UTAMA (Sub-halaman Terpisah)
Pintu 1 — /ekspor · Giat Ekspor (dikelola Poktan)
ekspor/
├── [E1] Hero — Tagline "High Quality Control"
├── [E2] Infografis 4 Tahap Alur Operasional
│         ├── Tahap 1: Collecting House
│         ├── Tahap 2: Packing House
│         ├── Tahap 3: Quality Control & Grading
│         └── Tahap 4: Stuffing & Shipping
├── [E3] Sertifikasi & Dokumen Karantina  ⚠️ data belum tersedia
├── [E4] Galeri Ekspor — Foto Kontainer + Tim
└── [E5] CTA — Hubungi Mitra / Form Kerjasama
Pintu 2 — /umkm · UMKM & Olahan (dikelola KWT)
umkm/
├── [U1] Hero — "Transformasi Salak Jadi Nilai Tambah"
├── [U2] Katalog Produk — Product Grid Dinamis  ⚠️ data belum tersedia
│         ├── Makanan Ringan (kripik, dodol, manisan, bakpia, selai)
│         └── Minuman (sirup, kurma salak, kopi biji salak)
├── [U3] Sistem Pemesanan — Tombol "Pesan Sekarang" via WA
└── [U4] Profil KWT — Storytelling Pemberdayaan Ibu-ibu
Pintu 3 — /agrowisata · Agrowisata (dikelola Karang Taruna)
agrowisata/
├── [A1] Hero — Tagline "Warisan Merapi, Destinasi Edukasi"
├── [A2] Paket Wisata
│         ├── Edukasi Budidaya Salak Ekspor
│         ├── Wisata Petik Buah Langsung
│         └── Studi Circular Economy / Limbah Pertanian
├── [A3] Galeri Fasilitas
│         ├── Area Produksi (lahan + rumah produksi)
│         ├── Area Pertemuan (Pendopo 1–4, Edustay)
│         └── Area Outdoor (kolam outbound, susur sungai, camping)
├── [A4] Form Booking — Reservasi Online / WhatsApp
└── [A5] Peta & Rute — Embedded Google Maps Interaktif

🌐 ELEMEN GLOBAL (Muncul di Semua Halaman)
global/
├── Header & Navigasi — Logo + 3 Pintu + CTA Kontak
├── Footer — Alamat + Google Maps + WhatsApp + Email
├── Quick Links — Linktree-style (WA, katalog, booking)
└── Logo Mitra — Sunpride (PT Sewu Segar) + DSA (Astra)

⚙️ KEBUTUHAN TEKNIS
teknis/
├── SEO On-page — Meta title, keyword, struktur heading
├── Multimedia Embed — Video profil + aset dari GDrive (D.1)
├── Mobile Responsive — Desain adaptif B2B + B2C
└── Backsound — Instrumen modern sentuhan Jawa


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


# Web Development Brief: Gapoktan Ngudi Luhur

Editor/Developer: Mas Chen - Data Sources

Note: **D.1 (Dokumen 1 )** – nanti aku cantumkan dokumen gambar/videonya di gdrive agar mudah
penyesuaian ke web nya.

**1. Identitas & Kontak (Footer/Header Data)**

_Editor: Gunakan data ini untuk bagian kontak dan navigasi maps._

- **Nama Instansi :** Gapoktan Ngudi Luhur
- **Alamat Presisi :** 99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Kabupaten
    Magelang, Jawa Tengah 56483.
- **Titik Maps :** https://maps.app.goo.gl/XdoRZrutTGQzJPHN
- **Kemitraan :** PT Sewu Segar Nusantara (Sunpride), Desa Sejahtera Astra (DSA).
**2. Narasi "The Origin Story" (Hero Section)**

_Editor: Gunakan teks ini untuk bagian 'Tentang Kami' di halaman muka._

Profil Gapoktan Ngudi Luhur

Pusat Agribisnis Salak Nglumut Premium: Integrasi Lokal, Standar Global.

Berlokasi di kawasan vulkanik subur lereng barat Gunung Merapi dengan ketinggian strategis
(MDPL) yang optimal, Gapoktan Ngudi Luhur merupakan pengelola sentra salak terbaik di
Indonesia. Sejak tahun 2017, kami telah membangun ekosistem pertanian terintegrasi yang
memberdayakan ratusan petani lokal di atas aset lahan seluas lebih dari 800 hektar.

Kami fokus pada produksi Salak Nglumut Kualitas Premium yang memiliki daya saing tinggi di
pasar internasional. Dengan sistem manajemen hulu-ke-hilir yang terstandarisasi, Gapoktan Ngudi
Luhur telah sukses mengekspor ratusan ton komoditas setiap tahunnya ke berbagai negara di Asia
dan Eropa. Sebagai binaan dari program Desa Sejahtera Astra (DSA), kami berkomitmen menjadi
unit percontohan ( _role model_ ) nasional dalam hilirisasi produk pertanian, mulai dari buah segar
untuk pasar ekspor, pengembangan produk turunan UMKM, hingga integrasi Agrowisata berbasis
komunitas.


**3. Visi & Misi (The Core Values)**

_Editor: Tampilkan dengan ikon yang elegan/clean._

- **Visi:**
    Terwujudnya ekosistem pertanian salak di Kabupaten Magelang yang berkelanjutan dan
    berdaya saing global melalui sinergi petani, sektor swasta, dan pemerintah.
- **Misi:**
    1. Meningkatkan kesejahteraan petani di Desa Kaliurang dan Kecamatan Srumbung
       secara luas.
    2. Memperkuat posisi Kabupaten Magelang sebagai sentra hortikultura unggulan
       nasional.
    3. Memperluas rantai pasok ekspor komoditas lokal ke pasar dunia.
**4. Section: Capaian & Dampak (Impact Numbers)**

Editor: Sangat disarankan menggunakan 'Counter Animation' (angka yang bergerak naik saat di-
scroll).

```
Kategori Data Statistik (Update 2025/2026)
Total Luas Lahan 800+ Hektar Perkebunan Salak Nglumut
Volume Ekspor (China) ± 700 Ton (Januari - Oktober 2025)
Jangkauan Ekspor China, Kamboja, Eropa, Timor Leste
Target Pasar Baru Vietnam, Arab Saudi, USA, Jepang
Rata-rata Pengiriman 30 - 50 Ton / Minggu
Pengalaman Ekspor Terjalin sejak 2017
```
**5. Galeri Dokumentasi Utama (Placement: Hero Section / Awal Website)**

_Editor: Mohon sediakan section "Living the Movement" di halaman awal untuk menampilkan slide
foto/video kegiatan real yang sudah berjalan:_

- **Aktivitas Ekspor:** Foto kontainer, proses _loading_ , dan tim di _Packing House_.
- **Pemberdayaan:** Foto pertemuan rutin petani dan pelatihan KWT.
- **Kunjungan Tokoh/Mitra:** Dokumentasi kunjungan dari pihak Astra, Kementan, atau
    Buyer Internasional untuk memperkuat bukti _Trust_.


**6. Struktur "3 Pintu Utama" (Detailed Content)
a) Pintu Giat Ekspor (The Global Player)**
- **Highlight:** Dokumentasi alur "High Quality Control" dari pohon hingga kontainer.
- **Dokumen/Sertifikasi:** (Cantumkan bahwa produk telah lolos kurasi badan karantina)
    **List telah memiliki sertifikasi apa aja:**
    -
    -
    -
- **Detail Alur Operasional (Specific Content per Door)**

_Editor: Mohon buatkan infografis atau timeline yang menjelaskan 4 tahap utama kami:_

```
o Tahap 1: Collecting House – Proses pengepulan hasil panen dari 5 Poktan binaan ke pusat
distribusi Gapoktan.
o Tahap 2: Packing House (Pembersihan & Sortase) – Pencucian dan seleksi awal buah
berdasarkan standar berat dan tampilan fisik.
o Tahap 3: Quality Control & Grading – Sortase kedua yang lebih ketat dan proses
penimbangan akurat untuk memastikan kualitas premium.
o Tahap 4: Stuffing & Shipping – Proses pemuatan ke kontainer yang sudah terkontrol
suhunya, siap diberangkatkan menuju China, Eropa, dan Asia lainnya.
```
```
b) Pintu UMKM & Olahan (The Innovation)
```
- **Deskripsi :** "Transformasi salak segar menjadi produk bernilai tambah tinggi, dikelola
    oleh kelompok wanita tani sebagai motor ekonomi kreatif desa."
- Pintu UMKM & Olahan: (Slot untuk semua produk olaha turunan bua salak).
    Editor: Mohon sediakan layout 'Product Grid' yang dinamis. Saat ini gunakan placeholder
    dulu, data detail (list produk & harga) akan kami kirimkan dalam file terpisah:
    Kategori Produk: Makanan Ringan dan Minuman.
    Fitur Katalog: Foto produk, Nama Produk, Deskripsi Singkat, Harga, dan Tombol "Pesan
    Sekarang".


```
c) Pintu Agrowisata (The Experience)
```
- **Tagline Pilihan:** Warisan Merapi, Destinasi Edukasi Agribisnis Berkelanjutan.
- **Highlight Fasilitas:**
    - **Edukasi Budidaya :** Teknik budidaya Salak Nglumut kualitas ekspor di lahan.
    - **Wisata Petik buah :** Pengalaman panen langsung di sentra salak terbaik Indonesia.
    - **Integrated Circular Ecosystem:** Studi lapangan pengolahan limbah pertanian dan
       hilirisasi produk.

galeri titik-titik fasilitas kami

- Area Produksi: Lahan Budidaya & Petik Buah Segar, Rumah Produksi Olahan.
- Area Pertemuan & Budaya: Pendopo 1 s/d 4 (Kapasitas besar), Rumah Tradisional (Edu-
    stay).
- Area Outdoor & Nature: Kolam Outbound, Susur Sungai, Waduk & Sabo Dam (Spot
    Foto), serta Camping Ground yang sejuk.

```
Narasi Pendukung:
"Menyajikan pengalaman wisata yang memadukan keindahan alam lereng Merapi dengan
edukasi sistem pertanian modern yang ramah lingkungan."
```
**D. Argumen Pengembangan untuk Mas Chen**

1. **Dynamic Map:**
    Alamat tidak hanya teks, kalau bisa ada _embedded Google Maps_ yang interaktif di halaman
    bawah agar calon pengunjung agrowisata mudah mencari rute.
2. **Multimedia Integration:**
    Mengingat kita punya banyak liputan media (Berita Magelang, Gemilang FM), saya usul
    ada section **"Ngudi Luhur dalam Berita"** yang berisi cuplikan logo media tersebut yang
    bisa diklik menuju link jurnalnya. Ini menaikkan nilai SEO dan kredibilitas web.
3. **Backsound Suggestion:**
    Gunakan instrumen **Modern/Chill-Out**. Ada sentuhan tradisional Jawa (Suling/Saron) tapi
    dengan beat modern yang tipis. Ini memberikan kesan "Local Wisdom but Global
    Mindset". Tapi kayaknya keren murni instrument music modern sih, tapi nanti monggo
    ngikut mas chen saja baiknya gimana.




gw mau bikin ini kan lu baca dulu semau dari dokumen md itu pahami krirtsi dan brainsotroming serta jangan sampe halu