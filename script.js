/**
 * Dev Kaizen Official Scripts
 * Features: Canvas Particles, 3D Tilt, Typewriter, Preloader
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TYPEWRITER EFFECT CONFIGURATION ---
    const roles = [
        "Fullstack Developer",
        "UI/UX Enthusiast",
        "Content Creator",
        "Tech Reviewer"
    ];
    
    const typeSpeed = 100; // Kecepatan mengetik
    const deleteSpeed = 50; // Kecepatan menghapus
    const pauseTime = 2000; // Jeda sebelum menghapus
    
    const textElement = document.getElementById('typewriter');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            typeDelay = pauseTime; // Tunggu sebelum menghapus
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // Pindah ke kata berikutnya
            typeDelay = 500; // Jeda sebelum mengetik kata baru
        }

        setTimeout(typeWriter, typeDelay);
    }

    // Start Typewriter
    typeWriter();


    // --- 2. CANVAS PARTICLE SYSTEM (Background) ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particlesArray;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2; // Ukuran partikel kecil dan elegan
            this.speedX = (Math.random() * 0.5) - 0.25;
            this.speedY = (Math.random() * 0.5) - 0.25;
            this.opacity = Math.random() * 0.5;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce effect if hits screen edge
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 9000; // Kepadatan partikel
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    // Handle Resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // Start Particles
    initParticles();
    animateParticles();


    // --- 3. ADVANCED 3D TILT EFFECT (Logic Manual) ---
    const card = document.getElementById('tilt-card');
    const glassCard = document.querySelector('.glass-card');

    function handleTilt(e) {
        if (window.innerWidth < 768) return; // Disable on mobile

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Hitung rotasi (makin jauh dari tengah, makin miring)
        const rotateX = ((mouseY - cardCenterY) / cardRect.height) * -15; // Max 15deg
        const rotateY = ((mouseX - cardCenterX) / cardRect.width) * 15;

        // Terapkan transformasi
        glassCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetTilt() {
        glassCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }

    // Event Listeners untuk Tilt
    document.addEventListener('mousemove', handleTilt);
    document.addEventListener('mouseleave', resetTilt);


    // --- 4. PRELOADER & ENTRANCE ANIMATION ---
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        const mainContainer = document.querySelector('.main-container');

        // Hide loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            
            // Show content with nice fade in
            mainContainer.style.opacity = '1';
            mainContainer.style.transform = 'translateY(0)';
        }, 500);
    });

    console.log("Dev Kaizen System: Online & Animated");
});