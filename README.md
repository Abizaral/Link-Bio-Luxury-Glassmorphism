# Link-Bio-Luxury-Glassmorphism

Sebuah halaman landing page personal (Link-in-Bio) dengan desain Luxury Glassmorphism. Dibangun menggunakan HTML5, CSS3, dan Vanilla JavaScript murni tanpa framework berat, difokuskan pada performa, estetika modern, dan interaksi pengguna yang imersif.
✨ Fitur Utama

# Project ini dilengkapi dengan fitur-fitur visual high-end untuk memberikan kesan profesional:

    💎 Advanced Glassmorphism UI: Efek kaca buram (backdrop-filter) yang realistis dengan border halus dan bayangan yang mendalam.

    particles.js (Custom Canvas): Background animasi partikel titik-titik yang bergerak dan memantul secara dinamis menggunakan HTML5 Canvas (bukan library eksternal).

    glowing Ambient Lights: Efek cahaya gradasi di latar belakang yang bergerak (float) untuk menciptakan nuansa atmosferik.

    3D Tilt Interaction: Kartu utama mengikuti gerakan mouse pengguna (efek 3D) untuk pengalaman interaktif yang nyata.

    Dynamic Typewriter Effect: Animasi pengetikan teks pada bagian role (e.g., "Fullstack Developer", "Content Creator") yang berganti secara otomatis.

    Ripple Avatar Animation: Efek gelombang/sinyal pada foto profil yang memberikan kesan "hidup".

    Smart Preloader: Layar loading elegan yang memastikan semua aset termuat sebelum konten utama muncul.

    Interactive Hover Effects: Efek kilap (glossy shine) dan animasi ikon saat kursor diarahkan ke tombol link.

# 🛠️ Teknologi yang Digunakan

    HTML5: Struktur semantik dan SEO friendly.

    CSS3: Variabel CSS (:root), Flexbox, CSS Grid, Keyframes Animation, dan Media Queries.

    JavaScript (ES6+): Logika animasi Canvas, manipulasi DOM, dan event listener.

    FontAwesome 6: Ikon vektor untuk sosial media.

    Google Fonts: Tipografi modern menggunakan font Plus Jakarta Sans.

# 🚀 Cara Instalasi & Penggunaan
    Cara 1: Menjalankan di Lokal (PC/Laptop)

    Download atau Clone repositori ini (pastikan 3 file utama ada: index.html, style.css, script.js).

    Buka folder project.

    Klik dua kali pada file index.html untuk membuka di browser.

        Saran: Gunakan ekstensi "Live Server" di VS Code untuk pengalaman terbaik.

Cara 2: Hosting Online (Gratis)

Anda bisa mengonlinekan website ini menggunakan GitHub Pages, Vercel, atau Netlify.

    Upload folder project ke GitHub.

    Hubungkan repositori GitHub Anda ke Vercel/Netlify.

    Website Anda akan langsung aktif (contoh: devkaizen.vercel.app).

# ⚙️ Panduan Kustomisasi

Anda dapat mengubah konten sesuai kebutuhan Anda dengan mengedit file berikut:
1. Mengganti Foto Profil & Nama

Buka index.html:
HTML

<img src="URL_FOTO_ANDA_DISINI" alt="Nama Anda" class="avatar-img">

<h1 class="profile-name">Nama Anda</h1>

2. Mengubah Teks Typewriter (Jabatan/Role)

Buka script.js dan edit bagian roles:
JavaScript

const roles = [
    "Fullstack Developer", // Ubah teks ini
    "UI/UX Enthusiast",    // Ubah teks ini
    "Content Creator"      // Tambah atau kurangi sesuai kebutuhan
];

3. Mengubah Link Sosial Media

Buka index.html, cari bagian links-group dan ubah href:
HTML

<a href="LINK_DISCORD_ANDA" ... > ... </a>
<a href="LINK_TIKTOK_ANDA" ... > ... </a>

4. Mengganti Warna Tema

Buka style.css dan ubah variabel di :root:
CSS

:root {
    --bg-dark: #050505;        /* Warna Background */
    --accent-primary: #3b82f6; /* Warna Aksen Utama */
}

# 📂 Struktur Folder

/
├── index.html   # Struktur utama halaman
├── style.css    # Desain, animasi, dan glassmorphism
└── script.js    # Logika partikel, typewriter, dan tilt effect

🤝 Credits

    Design Concept: Dev Kaizen

    Icons: FontAwesome

    Fonts: Google Fonts

© 2024 Dev Kaizen. Dibuat dengan presisi dan detail.
