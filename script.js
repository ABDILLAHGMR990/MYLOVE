document.addEventListener('DOMContentLoaded', () => {

    // ========================================================
    // 1. PEMUTAR MUSIK SPOTIFY & PIRINGAN HITAM VINYL
    // ========================================================
    const music = document.getElementById('music');
    const btnPlayPause = document.getElementById('btnPlayPause');
    const playIcon = document.getElementById('playIcon');
    const progressBarFill = document.getElementById('progressBarFill');
    const progressBarContainer = document.getElementById('progressBarContainer');
    const currentTimeEl = document.getElementById('currentTime');
    const totalDurationEl = document.getElementById('totalDuration');
    const equalizer = document.getElementById('equalizer');
    const spotifyLike = document.getElementById('spotifyLike');
    const btnLoop = document.getElementById('btnLoop');
    
    // Turntable Vinyl Elements
    const turntableBtn = document.getElementById('turntableBtn');
    const turntableStatus = document.getElementById('turntableStatus');

    let isPlaying = false;

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    function toggleAudio() {
        if (!music) return;

        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                if (playIcon) playIcon.textContent = '❚❚';
                if (equalizer) equalizer.classList.add('active');
                if (turntableBtn) turntableBtn.classList.add('is-playing');
                if (turntableStatus) turntableStatus.textContent = '❚❚ Sedang Memutar Musik Cinta Kita...';
            }).catch(err => {
                console.log("Autoplay dicegah browser, butuh klik:", err);
            });
        } else {
            music.pause();
            isPlaying = false;
            if (playIcon) playIcon.textContent = '▶';
            if (equalizer) equalizer.classList.remove('active');
            if (turntableBtn) turntableBtn.classList.remove('is-playing');
            if (turntableStatus) turntableStatus.textContent = '▶ Sentuh Piringan Untuk Memutar Lagu';
        }
    }

    if (btnPlayPause) btnPlayPause.addEventListener('click', toggleAudio);
    if (turntableBtn) turntableBtn.addEventListener('click', toggleAudio);

    // Sync timeline dan lirik lagu
    if (music) {
        music.addEventListener('timeupdate', () => {
            if (music.duration && progressBarFill && currentTimeEl) {
                const progressPercent = (music.currentTime / music.duration) * 100;
                progressBarFill.style.width = `${progressPercent}%`;
                currentTimeEl.textContent = formatTime(music.currentTime);
            }
            updateLyrics(music.currentTime);
        });

        music.addEventListener('loadedmetadata', () => {
            if (totalDurationEl) totalDurationEl.textContent = formatTime(music.duration);
        });

        music.addEventListener('ended', () => {
            if (!music.loop) {
                isPlaying = false;
                if (playIcon) playIcon.textContent = '▶';
                if (equalizer) equalizer.classList.remove('active');
                if (turntableBtn) turntableBtn.classList.remove('is-playing');
                if (turntableStatus) turntableStatus.textContent = '▶ Lagu Selesai • Sentuh Untuk Ulangi';
            }
        });
    }

    if (progressBarContainer && music) {
        progressBarContainer.addEventListener('click', (e) => {
            const rect = progressBarContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            if (music.duration) {
                music.currentTime = (clickX / rect.width) * music.duration;
            }
        });
    }

    if (spotifyLike) {
        spotifyLike.addEventListener('click', () => {
            spotifyLike.classList.toggle('liked');
        });
    }

    if (btnLoop && music) {
        btnLoop.addEventListener('click', () => {
            music.loop = !music.loop;
            btnLoop.style.color = music.loop ? '#1DB954' : '#b3b3b3';
        });
    }


    // ========================================================
    // 2. SPOTIFY LIVE LYRICS KARAOKE SYNC
    // ========================================================
    const lyricLines = document.querySelectorAll('.lyric-line');

    function updateLyrics(time) {
        let activeIndex = -1;
        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            if (time >= lineTime) {
                activeIndex = index;
            }
        });

        lyricLines.forEach((line, index) => {
            if (index === activeIndex) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }

    lyricLines.forEach(line => {
        line.addEventListener('click', () => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            if (music && music.duration) {
                music.currentTime = lineTime;
                if (!isPlaying) toggleAudio();
            }
        });
    });


    // ========================================================
    // 3. EFEK TYPING (TEKS BERGANTI OTOMATIS)
    // ========================================================
    const typingEl = document.getElementById('typing');
    const texts = [
        "Piringan hitam ini berputar untuk orang paling berharga.",
        "Terima kasih sudah mewarnai setiap nada dalam hidupku...",
        "Aku mencintaimu, kemarin, hari ini, dan selamanya. ❤️"
    ];

    let tIndex = 0, cIndex = 0, isDel = false;

    function handleTyping() {
        if (!typingEl) return;
        const current = texts[tIndex];

        if (isDel) {
            typingEl.textContent = current.substring(0, cIndex - 1);
            cIndex--;
        } else {
            typingEl.textContent = current.substring(0, cIndex + 1);
            cIndex++;
        }

        let speed = isDel ? 30 : 70;
        if (!isDel && cIndex === current.length) {
            speed = 2200;
            isDel = true;
        } else if (isDel && cIndex === 0) {
            isDel = false;
            tIndex = (tIndex + 1) % texts.length;
            speed = 400;
        }

        setTimeout(handleTyping, speed);
    }
    handleTyping();


    // ========================================================
    // 4. KARTU GOSOK INTERAKTIF (SCRATCH CARD)
    // ========================================================
    const scratchCanvas = document.getElementById('scratchCanvas');
    if (scratchCanvas) {
        const sCtx = scratchCanvas.getContext('2d');
        let isDrawing = false;

        // Isi lapisan abu-abu penutup
        sCtx.fillStyle = '#b0b0b0';
        sCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        
        // Tulis teks petunjuk di lapisan abu-abu
        sCtx.font = 'bold 15px sans-serif';
        sCtx.fillStyle = '#555';
        sCtx.textAlign = 'center';
        sCtx.fillText('★ GOSOK DI SINI DENGAN JARI / KURSOR ★', scratchCanvas.width / 2, scratchCanvas.height / 2 + 5);

        function scratch(e) {
            if (!isDrawing) return;
            const rect = scratchCanvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            sCtx.globalCompositeOperation = 'destination-out';
            sCtx.beginPath();
            sCtx.arc(x, y, 22, 0, Math.PI * 2);
            sCtx.fill();
        }

        scratchCanvas.addEventListener('mousedown', () => isDrawing = true);
        window.addEventListener('mouseup', () => isDrawing = false);
        scratchCanvas.addEventListener('mousemove', scratch);

        scratchCanvas.addEventListener('touchstart', () => isDrawing = true);
        window.addEventListener('touchend', () => isDrawing = false);
        scratchCanvas.addEventListener('touchmove', scratch);
    }


    // ========================================================
    // 5. MODAL UNIVERSAL: SURAT "OPEN WHEN..." & POLAROID
    // ========================================================
    const universalModal = document.getElementById('universalModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    const openWhenLetters = {
        kangen: {
            title: "Buka Saat Kamu Kangen ❤️",
            text: "Kalau kamu lagi kangen dan aku nggak ada di sampingmu sekarang, ingat ini ya: Aku juga pasti lagi mikirin kamu. Coba putar lagu kita, tutup matamu, dan bayangkan aku lagi memelukmu erat-erat. Jarak cuma angka, tapi hatiku selalu bersamamu."
        },
        sedih: {
            title: "Buka Saat Kamu Sedih / Lelah 🌧️",
            text: "Hei, kamu sudah berjuang hebat hari ini. Tarik napas dalam-dalam... Nggak apa-apa kalau hari ini terasa berat, kamu nggak harus selalu kuat. Kamu punya aku yang selalu siap mendengarkan keluh kesahmu tanpa menghakimi. Kamu orang terhebat!"
        },
        tidur: {
            title: "Buka Saat Kamu Susah Tidur 🌙",
            text: "Letakkan HP-mu setelah membaca ini ya. Jangan overthinking tentang hari esok, karena hari esok punya ceritanya sendiri. Istirahatkan pikiran dan tubuh cantikmu. Selamat tidur, mimpi indah tentang kita. Aku sayang kamu!"
        },
        marah: {
            title: "Buka Saat Kita Lagi Berselisih 🤍",
            text: "Kalau saat ini kita lagi saling diam atau berbeda pendapat, aku minta maaf ya. Ingat, masalah kita yang harus diselesaikan bersama, bukan hubungan kita yang diakhiri. Cintaku ke kamu jauh lebih besar daripada ego atau amarah sesaat."
        }
    };

    function showModalContent(html) {
        if (!universalModal || !modalBody) return;
        modalBody.innerHTML = html;
        universalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        if (!universalModal) return;
        universalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (universalModal) {
        universalModal.addEventListener('click', (e) => {
            if (e.target === universalModal) hideModal();
        });
    }

    // Event Klik "Open When..."
    const whenCards = document.querySelectorAll('.when-card');
    whenCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            const data = openWhenLetters[topic];
            if (data) {
                showModalContent(`
                    <h2 style="font-family:'Playfair Display',serif; font-size:1.8rem; margin-bottom:14px; color:#a40e34;">${data.title}</h2>
                    <p style="font-size:1.05rem; line-height:1.8; color:#38302c;">${data.text}</p>
                    <div style="margin-top:24px; text-align:right; font-family:'Caveat',cursive; font-size:1.4rem; color:#800f2f;">— Selalu Ada Untukmu ❤️</div>
                `);
            }
        });
    });

    // Event Klik Polaroid Lightbox
    const polaroidCards = document.querySelectorAll('.polaroid-card');
    polaroidCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            const title = card.getAttribute('data-title') || "Kenangan Indah";
            const desc = card.getAttribute('data-desc') || "";

            showModalContent(`
                <div style="border-radius:10px; overflow:hidden; max-height:360px; margin-bottom:18px;">
                    <img src="${img.src}" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
                <h3 style="font-family:'Playfair Display',serif; font-size:1.6rem; margin-bottom:8px; color:#1a1412;">${title}</h3>
                <p style="font-size:1rem; line-height:1.6; color:#555;">${desc}</p>
            `);
        });
    });


    // ========================================================
    // 6. AMBIENT SPARKLES CANVAS
    // ========================================================
    const canvas = document.getElementById('ambientCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class Dot {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 1;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = Math.random() > 0.5 ? '255, 77, 109' : '29, 185, 84';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 35; i++) particles.push(new Dot());

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(loop);
        }
        loop();
    }
});