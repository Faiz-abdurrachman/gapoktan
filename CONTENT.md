# Isi Konten Semua Halaman
# Gapoktan Ngudi Luhur — untuk Redesign

> Dokumen ini berisi **seluruh teks, data, gambar, dan elemen interaktif** dari setiap halaman.
> Gunakan ini sebagai acuan saat merancang ulang layout tanpa khawatir kehilangan konten dari klien.

---

## GLOBAL — Elemen yang Muncul di Semua Halaman

### Navbar
| Elemen | Teks | Link |
|---|---|---|
| Logo | "Ngudi Luhur •" | `/` atau `index.html` |
| Nav item 1 | "Ekspor" | `ekspor.html` |
| Nav item 2 | "UMKM" | `umkm.html` |
| Nav item 3 | "Agrowisata" | `agrowisata.html` |
| CTA button (desktop) | Berbeda per halaman (lihat di bawah) | Berbeda per halaman |
| Menu mobile item 1 | "Beranda" | `index.html` |
| Menu mobile item 2 | "Giat Ekspor" | `ekspor.html` |
| Menu mobile item 3 | "UMKM & Olahan" | `umkm.html` |
| Menu mobile item 4 | "Agrowisata" | `agrowisata.html` |
| CTA mobile | Berbeda per halaman | Berbeda per halaman |

**CTA navbar per halaman:**
| Halaman | Teks CTA | Link |
|---|---|---|
| Beranda | "Hubungi Kami" | `wa.me/6281234567890` |
| Ekspor | "Hubungi Manager Ekspor" + "WhatsApp" | `wa.me/6281234567891` |
| UMKM | "Hubungi KWT" + "WhatsApp" | `wa.me/6281234567892` |
| Agrowisata | "Reservasi Kunjungan" + "Form Booking" | `#booking` (anchor) |

---

### Footer (sama di semua halaman)

**Kolom 1 — Brand**
- Logo: "Ngudi Luhur •"
- Tagline baris 1: "Pusat Agribisnis Salak Nglumut Premium"
- Tagline baris 2: "Srumbung, Kabupaten Magelang, Jawa Tengah"

**Kolom 2 — Navigasi**
- Heading: "NAVIGASI"
- Link: Beranda / Giat Ekspor / UMKM & Olahan / Agrowisata

**Kolom 3 — Kontak & Lokasi**
- Heading: "KONTAK & LOKASI"
- Alamat: "99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Magelang 56483"
- Link Maps: "Buka di Google Maps" → `maps.app.goo.gl/XdoRZrutTGQzJPHN9`
- Link WA: "WhatsApp Gapoktan" → `wa.me/6281234567890`
  *(di halaman lain ada WA spesifik: Tim Ekspor / KWT / Agrowisata)*

**Copyright bar:**
- "© [tahun] Gapoktan Ngudi Luhur · Srumbung, Magelang"
- Tahun otomatis dari JavaScript

---
---

## HALAMAN 1 — `index.html` (Beranda)

**`<title>`**: Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut Premium
**`<meta description>`**: Gapoktan Ngudi Luhur adalah sentra agribisnis salak terbaik Indonesia di lereng Merapi.

---

### [S1] HERO

| Elemen | Konten |
|---|---|
| Label pill | "ASLI NGLUMUT" |
| Heading H1 | "Pusat Agribisnis Salak Nglumut Premium" |
| Body text | "Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+ hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia & Eropa setiap minggunya." |
| CTA button | "Lebih Detail" → `ekspor.html` |
| Background visual | Foto/ilustrasi kebun salak (file: `assets/images/section1.png`) via CSS background |
| Background warna | Off-white / krem `#F6F5F1` |

---

### [S2] CAPAIAN & DAMPAK (Impact Numbers)

**Header section:**
| Elemen | Konten |
|---|---|
| Label pill | "DAMPAK & CAPAIAN" (warna putih) |
| Heading H2 | "Angka yang Berbicara Lebih Keras dari Kata-kata" |
| Teks kecil (kanan atas) | "Sejak 2017 →" |
| Background | Hitam gelap `#141414` |

**4 Kartu Statistik (counter animasi dari 0):**

| Label | Angka | Keterangan | Suffix |
|---|---|---|---|
| GLOBAL | 800 | + Hektar Lahan | `+` setelah angka |
| CHINA | 700 | ± Ton Ekspor | `±` sebelum angka |
| VOLUME | 50 | 30–50 Ton / Minggu | counter ke 50, label menampilkan range lengkap |
| PASAR | 4 | + Negara Tujuan | `+` setelah angka |

*Angka bergerak dari 0 ke target saat section masuk viewport.*

---

### [S3] TENTANG KAMI

| Elemen | Konten |
|---|---|
| Label pill | "TENTANG KAMI" |
| Heading H2 | "Integrasi Lokal, Standar Global." |
| Paragraf 1 (tebal) | "Berlokasi di kawasan vulkanik subur lereng barat Gunung Merapi dengan ketinggian strategis (MDPL) yang optimal, Gapoktan Ngudi Luhur merupakan pengelola sentra salak terbaik di Indonesia. Sejak 2017, kami membangun ekosistem pertanian terintegrasi yang memberdayakan ratusan petani lokal di atas lahan seluas lebih dari 800 hektar." |
| Paragraf 2 | "Kami fokus pada produksi Salak Nglumut Kualitas Premium yang memiliki daya saing tinggi di pasar internasional. Dengan sistem manajemen hulu-ke-hilir yang terstandarisasi, kami telah sukses mengekspor ratusan ton komoditas setiap tahunnya ke berbagai negara di Asia dan Eropa." |
| Paragraf 3 | "Sebagai binaan dari program Desa Sejahtera Astra (DSA), kami berkomitmen menjadi unit percontohan nasional dalam hilirisasi produk pertanian — mulai dari buah segar untuk pasar ekspor, pengembangan produk turunan UMKM, hingga integrasi Agrowisata berbasis komunitas." |
| CTA button | "Lihat Alur Ekspor" → `ekspor.html` |
| Foto | `images/hero/DSC04999.webp` (kebun salak berlatar Merapi) |

---

### [S4] VISI & MISI

**Layout:** Card glassmorphism di atas foto background gelap.
**Foto background:** `images/hero/DSC04983.webp` dengan overlay hijau gelap.

| Elemen | Konten |
|---|---|
| Label pill | "VISI KAMI" |
| Heading card | "Dibangun di Atas Nilai, Digerakkan Komunitas" |
| Teks Visi | "Terwujudnya ekosistem pertanian salak di Kabupaten Magelang yang berkelanjutan dan berdaya saing global melalui sinergi petani, sektor swasta, dan pemerintah." |
| Label Misi 1 | "Misi" |
| Teks Misi 1 | "Meningkatkan kesejahteraan petani di Desa Kaliurang dan Kecamatan Srumbung secara luas." |
| Label Misi 2 | "Misi" |
| Teks Misi 2 | "Memperkuat posisi Kabupaten Magelang sebagai sentra hortikultura unggulan nasional." |
| Label Misi 3 | "Misi" |
| Teks Misi 3 | "Memperluas rantai pasok ekspor komoditas lokal ke pasar dunia." |

---

### [S5] TIGA PILAR UTAMA

| Elemen | Konten |
|---|---|
| Label pill | "EKOSISTEM KAMI" |
| Heading H2 | "Tiga Pilar Utama" |

**3 kartu portal (foto portrait 4:5, klik ke subhalaman):**

| Foto | Label | Judul | Deskripsi | Link |
|---|---|---|---|---|
| `images/hero/section1.webp` | "POKTAN" | "Giat Ekspor" | "Kualitas Ekspor Global" | `ekspor.html` |
| `images/umkm/product_1.webp` | "KWT" | "UMKM & Olahan" | "Inovasi Hasil Tani" | `umkm.html` |
| `images/hero/DSC05001.webp` | "KARANG TARUNA" | "Agrowisata" | "Pengalaman & Edukasi" | `agrowisata.html` |

---

### [S5.5] LIVING THE MOVEMENT

| Elemen | Konten |
|---|---|
| Label pill | "DOKUMENTASI KEGIATAN" |
| Heading H2 | "Living the Movement" |
| Body text | "Dari kebun ke kontainer, dari dapur KWT ke meja buyer — setiap hari Ngudi Luhur bergerak nyata." |

**5 foto mosaic (1 besar kiri + 4 kecil kanan):**

| Foto | Kategori | Caption |
|---|---|---|
| `images/hero/DSC04978.webp` | Aktivitas Ekspor | "Proses Packing House" |
| `images/hero/DSC04975.webp` | Aktivitas Ekspor | "Tim di Lapangan" |
| `images/hero/DSC04986.webp` | Pemberdayaan | "KWT Ngudi Luhur" |
| `images/hero/DSC05002.webp` | Kunjungan Mitra | "Dokumentasi Kemitraan" |
| `images/hero/DSC04999.webp` | Pemberdayaan | "Kebun Salak Nglumut" |

---

### [S6] LIPUTAN MEDIA

| Elemen | Konten |
|---|---|
| Label pill | "LIPUTAN MEDIA" |
| Heading H2 | "Kabar dari Ngudi Luhur" |

**3 kartu berita (klik ke artikel):**

| Foto | Media | Judul Artikel | Link |
|---|---|---|---|
| `assets/images/1.jpeg` | Berita Magelang | "Ekspor Salak Nglumut Tembus Pasar China, Petani Berjaya" | `beritamagelang.id` *(URL artikel belum ada)* |
| `assets/images/2.jpeg` | Gemilang FM | "Inovasi Olahan Salak: KWT Ngudi Luhur Produksi Kurma Salak" | `gemilangfm.com` *(URL artikel belum ada)* |
| `assets/images/3.jpeg` | Media Nasional | "Agrowisata Salak Nglumut Jadi Destinasi Edukasi Unggulan" | `#` *(placeholder)* |

Teks CTA setiap kartu: **"Baca selengkapnya →"**

---

### [S7] CTA PENUTUP + MAPS

| Elemen | Konten |
|---|---|
| Heading H2 | "Siap Bermitra atau Berkunjung?" |
| Tombol | "Hubungi via WhatsApp" → `wa.me/6281234567890` |
| Google Maps | Embed iframe koordinat Srumbung, Magelang (tinggi 400px) |
| Background | Hitam gelap |

---
---

## HALAMAN 2 — `ekspor.html` (Giat Ekspor)

**`<title>`**: Ekspor Salak Nglumut Premium — Gapoktan Ngudi Luhur Srumbung Magelang
**`<meta description>`**: Pemasok salak Nglumut premium berkualitas ekspor dari Srumbung, Magelang. Pengiriman 30–50 ton/minggu ke China, Eropa & Asia. Bermitra dengan Sunpride & DSA Astra.

---

### [E1] HERO

| Elemen | Konten |
|---|---|
| Label pill | "GIAT EKSPOR · Poktan Ngudi Luhur" |
| Heading H1 | "Dari Lereng Merapi ke Pasar Dunia." |
| Body text | "Salak Nglumut premium berkualitas ekspor — dikirim 30 hingga 50 ton setiap minggu ke China, Kamboja, Eropa, dan Timor Leste. Terstandarisasi, terkontrol, terpercaya." |
| CTA button | "Hubungi Tim Ekspor" (ikon WhatsApp) → `wa.me/6281234567891` |
| Foto background | `images/hero/DSC04963 (1).webp` |
| Overlay | Gradient hijau gelap kiri ke kanan |

---

### [E2] KEPERCAYAAN & LEGALITAS

**Header:**
| Elemen | Konten |
|---|---|
| Label pill | "KEPERCAYAAN & LEGALITAS" |
| Heading H2 | "Dipercaya oleh Mitra Kelas Nasional" |
| Body text | "Produk kami telah melewati kurasi ketat dan diterima oleh mitra distribusi nasional terkemuka, menjadikan Gapoktan Ngudi Luhur salah satu pemasok salak premium paling dipercaya di Indonesia." |

**2 kartu mitra:**

| Ikon | Nama | Deskripsi |
|---|---|---|
| `fa-seedling` | PT Sewu Segar Nusantara | "Mitra distribusi nasional — **Sunpride**. Salah satu perusahaan agribisnis buah segar terbesar di Indonesia." |
| `fa-award` | Desa Sejahtera Astra | "Program pemberdayaan petani unggulan dari **PT Astra International**. Ngudi Luhur menjadi unit percontohan nasional." |

**Sub-heading sertifikasi:**
- Heading: "Terstandarisasi & Tersertifikasi"
- Body: "Seluruh produk ekspor kami telah memenuhi persyaratan badan karantina pertanian dan standar internasional yang berlaku."

**4 kartu sertifikasi:**

| Ikon | Judul | Keterangan |
|---|---|---|
| `fa-file-shield` | Karantina Pertanian | "Lolos pemeriksaan BBKP/BKIPM" |
| `fa-leaf` | Sertifikasi Organik | "300 hektar lahan tersertifikasi" |
| `fa-boxes-stacked` | Standar Grading Ekspor | "Grade A/B sesuai permintaan buyer" |
| `fa-temperature-low` | Reefer Container | "Pengiriman suhu terkontrol" |

*⚠ Nama sertifikasi spesifik belum dikonfirmasi klien — masih placeholder.*

---

### [E3] ALUR OPERASIONAL

| Elemen | Konten |
|---|---|
| Label pill | "ALUR OPERASIONAL" |
| Heading H2 | "Dari Pohon hingga Kontainer" |
| Body text | "Setiap tahap dikendalikan dengan standar ketat untuk memastikan kualitas premium sampai ke tangan pembeli internasional." |
| Background | Hitam gelap |

**4 kartu tahap (grid 2×2):**

| No | Judul | Deskripsi |
|---|---|---|
| 01 | Collecting House | "Hasil panen dari 5 Poktan binaan dikumpulkan ke pusat distribusi Gapoktan. Pencatatan berat dan asal kebun dilakukan secara sistematis sebelum masuk proses selanjutnya." |
| 02 | Packing House | "Buah dicuci bersih dan diseleksi berdasarkan standar berat dan tampilan fisik. Buah non-ekspor dipisahkan untuk pasar lokal atau produk olahan KWT." |
| 03 | Quality Control & Grading | "Sortase kedua yang lebih ketat dengan penimbangan akurat. Setiap buah diperiksa ulang untuk memastikan konsistensi kualitas premium sesuai standar buyer internasional." |
| 04 | Stuffing & Shipping | "Buah dimuat ke kontainer bersuhu terkontrol yang menjaga kesegaran selama pengiriman. Siap diberangkatkan menuju China, Eropa, Kamboja, dan pasar Asia lainnya." |

---

### [E4] JANGKAUAN EKSPOR

| Elemen | Konten |
|---|---|
| Label pill | "JANGKAUAN EKSPOR" |
| Heading H2 | "Menjangkau Pasar di 4 Penjuru Dunia" |
| Body text | "Dengan pengiriman rutin 30–50 ton per minggu, produk kami telah menjangkau pasar Asia dan Eropa — dan terus berkembang." |

**Kartu kiri — "Pasar Aktif Saat Ini" (oranye):**

| Kode | Negara | Keterangan |
|---|---|---|
| CN | China | ±700 Ton (Jan–Okt 2025) |
| KH | Kamboja | Pengiriman rutin |
| EU | Eropa | Standar premium |
| TL | Timor Leste | Pasar berkembang |

**Kartu kanan — "Target Pasar Baru" (hijau):**

| Kode | Negara | Keterangan |
|---|---|---|
| VN | Vietnam | Ekspansi 2025–2026 |
| SA | Arab Saudi | Pasar Timur Tengah |
| US | USA | Pasar premium diaspora |
| JP | Jepang | Standar kualitas tinggi |

**Highlight box (tengah bawah):**
- Sub-label: "Volume ekspor"
- Angka besar: "±700 Ton"
- Keterangan: "diekspor ke China saja · Januari–Oktober 2025"

---

### [E5] GALERI EKSPOR

| Elemen | Konten |
|---|---|
| Label pill | "DOKUMENTASI" |
| Heading H2 | "High Quality Control, Setiap Tahap" |

**Layout mosaic (3:2 desktop, 2 baris):**
| Posisi | Foto | Alt text |
|---|---|---|
| Utama (kiri besar) | `images/hero/DSC04978.webp` | "Proses packing house salak ekspor Gapoktan Ngudi Luhur Srumbung Magelang" |
| Grid kanan 1 | `images/hero/DSC04975.webp` | "Tim Poktan Ngudi Luhur di lahan salak Nglumut" |
| Grid kanan 2 | `images/hero/DSC04986.webp` | "Quality control salak Nglumut sebelum ekspor" |
| Grid kanan 3 | `images/hero/DSC05001.webp` | "Kebun salak Nglumut Srumbung berlatar Gunung Merapi" |
| Grid kanan 4 | `images/hero/DSC04983.webp` | "Proses grading salak premium Gapoktan Ngudi Luhur" |

---

### [E6] CTA PENUTUP

| Elemen | Konten |
|---|---|
| Label pill | "KERJASAMA" |
| Heading H2 | "Tertarik Bermitra bersama Kami?" |
| Body text | "Kami terbuka untuk kerjasama dengan eksportir, distributor, buyer internasional, dan investor yang ingin mengembangkan rantai pasok salak premium bersama komunitas petani Srumbung, Magelang." |
| Tombol | "Hubungi Tim Ekspor via WhatsApp" (ikon WA) → `wa.me/6281234567891` |
| Background | Hitam gelap |

---
---

## HALAMAN 3 — `umkm.html` (UMKM & Olahan)

**`<title>`**: Produk Olahan Salak Premium — UMKM Ngudi Luhur Magelang
**`<meta description>`**: Produk olahan salak Nglumut premium dari KWT Ngudi Luhur Magelang. Kripik salak, dodol, sirup, bakpia, hingga kopi biji salak inovatif. Pesan via WhatsApp!

---

### [U1] HERO

| Elemen | Konten |
|---|---|
| Label pill | "UMKM & OLAHAN · Kelompok Wanita Tani" |
| Heading H1 | "Dari Tangan Ibu, Lahir Produk Berkelas." |
| Body text | "Kelompok Wanita Tani Ngudi Luhur mengubah salak segar pilihan menjadi produk olahan bernilai tinggi — dari camilan premium hingga minuman inovatif yang belum pernah ada sebelumnya." |
| CTA button | "Lihat Semua Produk" (ikon tas belanja) → anchor `#katalog` |
| Foto background | *[foto hero UMKM — tidak ada di folder, perlu foto tersendiri]* |

---

### [U2] KWT INTRO / STORYTELLING

| Elemen | Konten |
|---|---|
| Label pill | "TENTANG KWT KAMI" |
| Heading H2 | "Motor Ekonomi Kreatif Desa" |
| Paragraf 1 | "Di balik setiap produk olahan Ngudi Luhur, ada tangan-tangan terampil ibu-ibu Kelompok Wanita Tani (KWT) yang bekerja dengan penuh dedikasi. Mereka bukan sekadar pengolah — mereka adalah wirausahawan desa yang mengubah komoditas pertanian menjadi produk bernilai tambah tinggi." |
| Paragraf 2 | "Dengan dukungan program Desa Sejahtera Astra, KWT Ngudi Luhur terus berinovasi — menciptakan produk-produk unik dari salak Nglumut yang tidak hanya laris di pasar lokal, tetapi berpotensi menembus pasar nasional." |
| Blockquote | "Transformasi salak segar menjadi produk bernilai tinggi, dikelola oleh kelompok wanita tani sebagai motor ekonomi kreatif desa." |
| Foto | `images/umkm/product_3.webp` (foto kopi biji salak, dipakai sebagai ilustrasi KWT) |

---

### [U3] KATALOG PRODUK

| Elemen | Konten |
|---|---|
| Label pill | "PRODUK KAMI" |
| Heading H2 | "Olahan Salak Terbaik dari Dapur KWT" |
| Body text | "Setiap produk dibuat dari bahan baku Salak Nglumut pilihan — segar, organik, dan diproses dengan standar higienitas tinggi." |
| Filter tab 1 | "Semua" (aktif default) |
| Filter tab 2 | "Makanan Ringan" |
| Filter tab 3 | "Minuman" |

**8 Produk (render otomatis via JavaScript):**

| ID | Nama | Kategori | Harga | Deskripsi | Foto |
|---|---|---|---|---|---|
| 1 | Kripik Salak Premium | makanan | Rp 25.000 | "Camilan renyah dari salak Nglumut pilihan dengan proses vacuum frying." | `product_1.webp` |
| 2 | Dodol Salak Asli | makanan | Rp 20.000 | "Manis legit dengan aroma salak yang kuat, diolah secara tradisional." | `product_2.webp` |
| 3 | Kopi Biji Salak | minuman | Rp 45.000 | "Inovasi minuman menyehatkan tanpa kafein dari biji salak pilihan." | `product_3.webp` |
| 4 | Sirup Salak Nglumut | minuman | Rp 35.000 | "Segar dan alami, tanpa pemanis buatan. Cocok untuk hidangan pesta." | `product_4.webp` |
| 5 | Bakpia Salak | makanan | Rp 30.000 | "Khas Jogja-Magelang dengan isian salak yang lumer di mulut." | `product_5.webp` |
| 6 | Manisan Salak | makanan | Rp 15.000 | "Buah salak segar dalam rendaman sirup yang manis dan menyegarkan." | `product_6.webp` |
| 7 | Selai Salak | makanan | Rp 20.000 | "Olesan manis dari salak Nglumut pilihan — sempurna untuk sarapan dan camilan keluarga." | `product_7.webp` |
| 8 | Kurma Salak | makanan | Rp 25.000 | "Inovasi olahan salak yang menyerupai kurma — manis, bergizi, dan satu-satunya dari dapur KWT Ngudi Luhur." | `product_8.webp` |

**Setiap kartu produk berisi:**
- Foto produk (atas)
- Nama produk
- Harga
- Deskripsi singkat
- Tombol: "Pesan via WhatsApp" (ikon WA) → `wa.me/6281234567891?text=Halo KWT Ngudi Luhur, saya ingin pesan [Nama Produk]`

---

### [U4] PRODUK UNGGULAN — KOPI BIJI SALAK

| Elemen | Konten |
|---|---|
| Label pill | "⭐ PRODUK INOVATIF UNGGULAN" |
| Heading H2 | "Kopi Biji Salak" |
| Sub-heading italic | "Inovasi Rasa dari Lereng Merapi" |
| Paragraf 1 | "Siapa sangka biji salak — yang selama ini terbuang sebagai limbah — bisa menjadi secangkir kopi yang aromatik dan memikat? KWT Ngudi Luhur berhasil mengolah biji Salak Nglumut menjadi kopi biji salak: produk inovatif yang bernilai tinggi, ramah lingkungan, dan benar-benar belum ada duanya." |
| Paragraf 2 (aksen hijau) | "Dari limbah, lahir keistimewaan." |
| CTA button | "Pesan Kopi Biji Salak" (ikon cangkir kopi) → `wa.me/6281234567892?text=...` |
| Background | Foto gelap dengan overlay |

---

### [U5] CARA PEMESANAN

| Elemen | Konten |
|---|---|
| Label pill | "CARA PESAN" |
| Heading H2 | "Mudah, Cepat, Langsung ke Tangan Anda" |

**3 langkah (grid 3 kolom, teks tengah):**

| No | Judul | Deskripsi |
|---|---|---|
| 1 | Pilih Produk | "Telusuri katalog dan temukan produk yang Anda inginkan." |
| 2 | Klik "Pesan Sekarang" | "Anda akan diarahkan ke WhatsApp dengan pesan otomatis yang sudah terisi." |
| 3 | Konfirmasi & Kirim | "Tim kami konfirmasi ketersediaan dan detail pengiriman dalam waktu singkat." |

**Catatan bawah:**
- "Melayani pemesanan seluruh Indonesia · Pengiriman via JNE, J&T, dan SiCepat"

---

### [U6] CTA PENUTUP

| Elemen | Konten |
|---|---|
| Heading H2 | "Siap Membawa Pulang Cita Rasa Merapi?" |
| Body text | "Dapatkan produk olahan salak premium langsung dari dapur KWT Ngudi Luhur. Segar, higienis, dan penuh kasih tangan petani Srumbung." |
| Tombol | "Pesan via WhatsApp Sekarang" (ikon WA) → `wa.me/6281234567892` |
| Background | Hitam gelap |

---
---

## HALAMAN 4 — `agrowisata.html` (Agrowisata)

**`<title>`**: Agrowisata Srumbung Magelang — Wisata Edukasi & Petik Salak Lereng Merapi
**`<meta description>`**: Agrowisata edukatif di lereng Merapi, Srumbung, Magelang. Petik salak langsung, edukasi budidaya, camping, studi banding pertanian. Cocok untuk keluarga & instansi.

---

### [A1] HERO

| Elemen | Konten |
|---|---|
| Label pill | "AGROWISATA · Karang Taruna Ngudi Luhur" |
| Heading H1 | "Warisan Merapi, Destinasi Edukasi Agribisnis Berkelanjutan." |
| Body text | "Menyajikan pengalaman wisata yang memadukan keindahan alam lereng Merapi dengan edukasi sistem pertanian modern yang ramah lingkungan. Untuk pelajar, keluarga, komunitas, hingga instansi." |
| CTA button 1 (outline) | "Lihat Paket Wisata" (ikon pohon) → anchor `#paket` |
| CTA button 2 (solid) | "Booking Kunjungan" (ikon kalender) → anchor `#booking` |
| Foto background | `images/hero/DSC04999.webp` |
| Overlay | Gradient hijau tua kiri ke kanan |

---

### [A2] INTRO NARASI

| Elemen | Konten |
|---|---|
| Label pill | "TENTANG AGROWISATA KAMI" |
| Heading H2 | "Lebih dari Sekadar Wisata" |
| Paragraf 1 | "Di Agrowisata Ngudi Luhur, pengunjung tidak hanya melihat — mereka merasakan langsung bagaimana salak Nglumut terbaik di Indonesia ditanam, dirawat, dipanen, dan diolah menjadi produk bernilai tinggi." |
| Paragraf 2 | "Dengan latar Gunung Merapi yang megah dan udara pegunungan yang segar, setiap kunjungan menjadi pengalaman yang membekas — baik untuk wisatawan keluarga maupun tim dari instansi yang ingin melakukan studi banding agribisnis modern." |
| Paragraf 3 | "Dikelola sepenuhnya oleh Karang Taruna setempat, agrowisata ini adalah bukti nyata bahwa pemuda desa mampu menjadi penggerak ekonomi pariwisata berkelanjutan." |
| Foto | `images/hero/DSC04999.webp` |

---

### [A3] PAKET KUNJUNGAN

| Elemen | Konten |
|---|---|
| Label pill | "PAKET KUNJUNGAN" |
| Heading H2 | "Pilih Pengalaman yang Tepat untuk Anda" |
| Background | Hitam gelap |

**Paket 1 — Edukasi Budidaya (Sekolah & Kampus)**
| Elemen | Konten |
|---|---|
| Ikon | `fa-wheat-awn` |
| Sub-label | "Sekolah & Kampus" |
| Judul | "Paket Edukasi Budidaya" |
| Deskripsi | "Belajar teknik budidaya Salak Nglumut kualitas ekspor, tur packing house, edukasi circular economy dan pengolahan limbah pertanian." |
| List item 1 | "Tur lahan budidaya" |
| List item 2 | "Packing house & QC tour" |
| List item 3 | "Sesi tanya jawab petani" |
| List item 4 | "Circular economy" |
| CTA | "Booking Paket →" → `#booking` |

**Paket 2 — Wisata Petik Buah (Keluarga & Komunitas)**
| Elemen | Konten |
|---|---|
| Ikon | `fa-apple-whole` |
| Sub-label | "Keluarga & Komunitas" |
| Judul | "Wisata Petik Buah" |
| Deskripsi | "Pengalaman petik buah langsung di sentra salak terbaik Indonesia. Sesi foto di hamparan kebun berlatar Merapi yang ikonik." |
| List item 1 | "Petik salak langsung" |
| List item 2 | "Edukasi varietas Nglumut" |
| List item 3 | "Foto kebun berlatar Merapi" |
| List item 4 | "Kunjungan rumah produksi" |
| CTA | "Booking Paket →" → `#booking` |

**Paket 3 — Studi Banding B2B (Instansi & BUMN)** *(kartu highlighted warna oranye)*
| Elemen | Konten |
|---|---|
| Ikon | `fa-building-columns` |
| Sub-label | "Instansi & BUMN" |
| Judul | "Studi Banding (B2B)" |
| Deskripsi | "Presentasi resmi profil Gapoktan, tur lapangan lengkap, diskusi interaktif bersama pengelola, dan fasilitas pendopo kapasitas besar." |
| List item 1 | "Presentasi profil resmi" |
| List item 2 | "Tur lapangan lengkap" |
| List item 3 | "Sesi diskusi formal" |
| List item 4 | "Dokumentasi kunjungan" |
| CTA | "Ajukan Kunjungan →" → `#booking` |

---

### [A4] GALERI FASILITAS

| Elemen | Konten |
|---|---|
| Label pill | "FASILITAS" |
| Heading H2 | "Lengkap untuk Semua Jenis Kunjungan" |
| Body text | "Dari sesi formal di pendopo kapasitas besar, menginap di rumah tradisional Jawa, hingga petualangan outdoor di alam lereng Merapi." |

**5 foto galeri mosaic (1 besar + 4 kecil):**

| Foto | Area | Caption |
|---|---|---|
| `images/hero/DSC05002.webp` (besar) | Area Pertemuan | "Pendopo 1–4 · Kapasitas Besar" |
| `images/hero/DSC05001.webp` | Area Produksi | "Lahan Budidaya & Petik Buah" |
| `images/hero/DSC04986.webp` | Area Budaya | "Rumah Tradisional (Edustay)" |
| `images/hero/DSC04975.webp` | Area Outdoor | "Kolam Outbound · Susur Sungai" |
| `images/hero/DSC04983.webp` | Spot Foto | "Sabo Dam · Camping Ground" |

*Hover: caption slide naik dari bawah*

---

### [A5] PETA & RUTE

| Elemen | Konten |
|---|---|
| Label pill | "LOKASI KAMI" |
| Heading H2 | "Mudah Ditemukan, Layak Dikunjungi" |
| Body text | "Berlokasi di lereng barat Gunung Merapi, Kecamatan Srumbung — sekitar 30 menit dari Kota Magelang dan 1 jam dari Yogyakarta." |
| Google Maps embed | Koordinat Srumbung, Magelang (tinggi 450px) |
| Teks alamat | "99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Kabupaten Magelang 56483" |
| Tombol | "Buka di Google Maps" (ikon peta) → `maps.app.goo.gl/XdoRZrutTGQzJPHN9` |

---

### [A6] FORM BOOKING

**Header kiri:**
| Elemen | Konten |
|---|---|
| Label pill | "BOOKING" |
| Heading H2 | "Rencanakan Kunjungan Anda" |
| Body text | "Isi form di bawah untuk mengajukan reservasi. Tim Karang Taruna kami akan menghubungi Anda dalam 1×24 jam." |
| Teks alternatif | "Atau langsung hubungi via WhatsApp →" |
| Tombol WA | "Chat WhatsApp" → `wa.me/6281234567893` |
| Background | Hitam gelap |

**Form kanan (card putih):**

| Field | Tipe | Label | Placeholder / Opsi |
|---|---|---|---|
| Nama/Instansi | text | "Nama / Instansi *" | "Nama lengkap atau nama instansi" |
| Tanggal | date | "Tanggal Rencana *" | — |
| Jumlah Orang | number | "Jumlah Orang *" | default: 10, min: 1 |
| Jenis Kunjungan | select | "Jenis Kunjungan *" | Pilih paket... / Paket Edukasi Budidaya / Wisata Petik Buah / Studi Banding / Kunjungan Dinas / Lainnya |
| Nomor WA | tel | "Nomor WhatsApp *" | "08xxxxxxxxxx" |
| Pesan | textarea | "Keperluan / Pesan Tambahan" | "Ceritakan tujuan kunjungan atau kebutuhan khusus..." |
| Submit | button | "Ajukan Booking" (ikon kalender-check) | — |

*Submit → JavaScript generate pesan WA → buka WhatsApp Karang Taruna*

---
---

## RINGKASAN ASET GAMBAR

### Folder `images/hero/`
| File | Digunakan di |
|---|---|
| `DSC04963 (1).webp` | Hero ekspor.html (background penuh) |
| `DSC04975.webp` | Galeri ekspor, galeri agrowisata, Living the Movement |
| `DSC04978.webp` | Galeri ekspor (foto utama), Living the Movement (foto utama) |
| `DSC04983.webp` | Background visi/misi beranda, galeri ekspor, galeri agrowisata |
| `DSC04986.webp` | Galeri ekspor, galeri agrowisata, Living the Movement |
| `DSC04999.webp` | Foto Tentang Kami beranda, Hero agrowisata (bg), Intro agrowisata, Living the Movement |
| `DSC05001.webp` | Portal agrowisata beranda, galeri ekspor, galeri agrowisata |
| `DSC05002.webp` | Galeri agrowisata (foto utama), Living the Movement |
| `section1.webp` | Portal ekspor beranda |

### Folder `images/umkm/`
| File | Digunakan di |
|---|---|
| `product_1.webp` | Portal UMKM beranda, kartu produk #1 (Kripik Salak) |
| `product_2.webp` | Kartu produk #2 (Dodol Salak) |
| `product_3.webp` | Foto KWT intro, kartu produk #3 (Kopi Biji Salak) |
| `product_4.webp` | Kartu produk #4 (Sirup Salak) |
| `product_5.webp` | Kartu produk #5 (Bakpia Salak) |
| `product_6.webp` | Kartu produk #6 (Manisan Salak) |
| `product_7.webp` | Kartu produk #7 (Selai Salak) |
| `product_8.webp` | Kartu produk #8 (Kurma Salak) |
| `product_9.webp` s/d `product_20.webp` | Tersedia, belum dipakai |

### Folder `assets/images/`
| File | Digunakan di |
|---|---|
| `section1.png` | Background hero beranda (via CSS `::after`) |
| `1.jpeg` | Kartu berita media #1 (Berita Magelang) |
| `2.jpeg` | Kartu berita media #2 (Gemilang FM) |
| `3.jpeg` | Kartu berita media #3 (placeholder) |

---

## CATATAN UNTUK REDESIGN

1. **Konten teks tidak perlu diubah** — semua copy sudah sesuai brief dari klien.
2. **Nomor WA masih placeholder** — ganti sebelum launch: `628123456789X`.
3. **Link berita masih `#`** — URL asli belum ada dari klien.
4. **Foto produk tersedia banyak** — `product_9.webp` hingga `product_20.webp` bisa dipakai untuk variasi visual jika dibutuhkan.
5. **Semua interaksi tetap dihandle JS** — saat redesign, pastikan elemen-elemen dengan ID berikut tetap ada:
   - `#product-grid` (umkm.html — target render produk)
   - `#booking-form` (agrowisata.html — form booking)
   - `#counter-grid` (index.html — counter animasi)
   - `#navbar` (semua halaman — target scroll observer)
   - `#hamburger` (semua halaman — toggle mobile menu)
   - `#mobile-menu` (semua halaman — mobile nav)
   - `#menu-overlay` (semua halaman — overlay klik tutup)

---

## GAP vs BRIEF — Catatan Ketidaksesuaian

Ini daftar lengkap perbedaan antara brief klien dan implementasi saat ini, beserta statusnya.

| # | Poin di Brief | Implementasi Saat Ini | Status |
|---|---|---|---|
| 1 | "ketinggian strategis **(MDPL)** yang optimal" | ✅ Sudah diperbaiki — `(MDPL)` sudah ada di `index.html` | Selesai |
| 2 | Impact stat: "Rata-rata Pengiriman **30–50** Ton/Minggu" | Counter menampilkan `50` dengan label "**30–50** Ton / Minggu" — angka counter ke 50, label lengkap sudah benar | Selesai |
| 3 | Impact stat: "Pengalaman Ekspor: Terjalin sejak 2017" | Ditampilkan sebagai teks kecil "Sejak 2017 →" di header section, **bukan** kartu counter tersendiri. Angka 2017 tidak bisa di-counter dari 0 secara bermakna | Keputusan desain — bukan error |
| 4 | Tombol katalog UMKM: **"Pesan Sekarang"** | Tombol bunyinya "Pesan via WhatsApp" — lebih informatif ke user tapi beda dari brief | ⚠ Minor — bisa diubah jika klien minta |
| 5 | Visi & Misi: "Tampilkan dengan **ikon yang elegan/clean**" | Menggunakan label pill teks "Misi", bukan ikon FA | ⚠ Belum sesuai — idealnya tiap misi punya ikon FA |
| 6 | Filter UMKM: "Kategori Produk: **Makanan Ringan** dan Minuman" | ✅ Sudah diperbaiki — filter tab sekarang "Makanan Ringan" | Selesai |
| 7 | Agrowisata Area Produksi: "Lahan Budidaya & Petik Buah Segar, **Rumah Produksi Olahan**" | Galeri hanya menampilkan "Lahan Budidaya & Petik Buah" — Rumah Produksi Olahan tidak ada foto/gallery tersendiri | ⚠ Menunggu foto dari klien |
| 8 | Agrowisata Area Outdoor: "**Waduk** & Sabo Dam (Spot Foto)" | ✅ Sudah diperbaiki — caption sekarang "Waduk & Sabo Dam · Camping Ground" | Selesai |
| 9 | Sertifikasi ekspor: List dikosongkan di brief ("- - -") | Diisi dengan 4 sertifikasi generik (Karantina, Organik, Grading, Reefer Container) | ⏳ Menunggu data sertifikasi asli dari klien |
| 10 | Living the Movement: "**slide** foto/video" | Implementasi static mosaic grid (bukan slideshow/carousel) | Keputusan teknis — slideshow dihindari karena menambah bobot halaman |
| 11 | D3: **Backsound** musik Modern/Chill-Out + sentuhan Jawa | Tidak diimplementasikan | ⏳ Opsional, menunggu keputusan klien |
| 12 | D1: Link Maps: `maps.app.goo.gl/XdoRZrutTGQzJPHN` | Website pakai `...JPHN9` (ada angka 9 di akhir) | ⚠ Perlu dikonfirmasi URL mana yang benar |
