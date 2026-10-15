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
    const turntableBtn = document.getElementById('turntableBtn');
    const turntableStatus = document.getElementById('turntableStatus');
    const btnUploadMusic = document.getElementById('btnUploadMusic');
    const audioFileInput = document.getElementById('audioFileInput');

    let isPlaying = false;

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    // Deteksi jika file music.mp3 belum ada
    if (music) {
        music.addEventListener('error', () => {
            if (turntableStatus) {
                turntableStatus.innerHTML = `⚠️ File belum terbaca. <a href="#" id="uploadLink" style="color:#ff85a1; text-decoration:underline;">Pilih lagu dari HP/Laptop</a>`;
                const uploadLink = document.getElementById('uploadLink');
                if (uploadLink && audioFileInput) {
                    uploadLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        audioFileInput.click();
                    });
                }
            }
        });
    }

    // Tombol Pilih Lagu Langsung
    if (btnUploadMusic && audioFileInput) {
        btnUploadMusic.addEventListener('click', () => audioFileInput.click());
    }

    if (audioFileInput) {
        audioFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                music.src = URL.createObjectURL(file);
                const songTitle = document.querySelector('.song-title');
                if (songTitle) songTitle.textContent = file.name.replace(/\.[^/.]+$/, "");

                music.play().then(() => {
                    isPlaying = true;
                    if (playIcon) playIcon.textContent = '❚❚';
                    if (equalizer) equalizer.classList.add('active');
                    if (turntableBtn) turntableBtn.classList.add('is-playing');
                    if (turntableStatus) turntableStatus.textContent = '❚❚ Sedang Memutar Musik Cinta...';
                }).catch(err => console.log(err));
            }
        });
    }

    function toggleAudio() {
        if (!music) return;

        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                if (playIcon) playIcon.textContent = '❚❚';
                if (equalizer) equalizer.classList.add('active');
                if (turntableBtn) turntableBtn.classList.add('is-playing');
                if (turntableStatus) turntableStatus.textContent = '❚❚ Sedang Memutar Musik Cinta...';
            }).catch(err => {
                console.log("Autoplay dicegah:", err);
                if (audioFileInput) audioFileInput.click();
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
        spotifyLike.addEventListener('click', () => spotifyLike.classList.toggle('liked'));
    }

    if (btnLoop && music) {
        btnLoop.addEventListener('click', () => {
            music.loop = !music.loop;
            btnLoop.style.color = music.loop ? '#ff4d6d' : '#b3b3b3';
        });
    }


    // ========================================================
    // 2. FITUR BARU: GEMBOK CINTA & PELUKAN VIRTUAL (GETAR HP)
    // ========================================================
    const loveLockBtn = document.getElementById('loveLockBtn');
    const lockIcon = document.getElementById('lockIcon');
    const lockTitle = document.getElementById('lockTitle');
    const lockDesc = document.getElementById('lockDesc');

    if (loveLockBtn) {
        loveLockBtn.addEventListener('click', () => {
            loveLockBtn.classList.add('locked');
            lockIcon.textContent = '🔒';
            lockTitle.textContent = 'Terkunci Selamanya!';
            lockDesc.textContent = 'Kunci dibuang ke dasar samudra ❤️';
            triggerHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
            
            // Getar HP haptik
            if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
        });
    }

    const hugBtn = document.getElementById('hugBtn');
    if (hugBtn) {
        hugBtn.addEventListener('click', () => {
            // Getar HP terasa seperti pelukan hangat
            if (navigator.vibrate) navigator.vibrate([150, 80, 200]);

            showModalContent(`
                <div style="text-align:center; padding: 10px;">
                    <div style="font-size: 3.5rem; margin-bottom: 12px; animation: heartPulse 1.2s infinite;">🤗❤️</div>
                    <h2 style="font-family:'Playfair Display',serif; font-size:1.8rem; margin-bottom:12px; color:#800f2f;">Pelukan Hangat Terkirim!</h2>
                    <p style="font-size:1.05rem; line-height:1.7; color:#38302c;">
                        Pejamkan matamu sebentar... Bayangkan aku sedang memelukmu erat-erat saat ini. 
                        Terima kasih sudah selalu ada untukku. Jangan pernah merasa sendiri ya, hatiku selalu bersamamu!
                    </p>
                </div>
            `);
        });
    }


    // ========================================================
    // 3. SENTUH LAYAR DI HP MUNCUL HATI (TAP TO LOVE)
    // ========================================================
    window.addEventListener('pointerdown', (e) => {
        // Jangan muncul jika klik tombol kontrol audio
        if (e.target.closest('button') || e.target.closest('input')) return;

        const heart = document.createElement('div');
        heart.textContent = ['❤️', '💖', '🌸', '✨', '🤍'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        heart.style.fontSize = '1.4rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transform = 'translate(-50%, -50%) scale(0.6)';
        heart.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translate(-50%, -80px) scale(1.3)`;
            heart.style.opacity = '0';
        }, 20);

        setTimeout(() => heart.remove(), 850);
    });


    // ========================================================
    // 4. SPOTIFY LIVE LYRICS KARAOKE SYNC
    // ========================================================
    const lyricLines = document.querySelectorAll('.lyric-line');

    function updateLyrics(time) {
        let activeIndex = -1;
        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            if (time >= lineTime) activeIndex = index;
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
    // 5. EFEK TYPING (TEKS BERGANTI OTOMATIS)
    // ========================================================
    const typingEl = document.getElementById('typing');
    const texts = [
        "Piringan hitam ini berputar khusus untuk orang tersayang.",
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
    // 6. KARTU GOSOK INTERAKTIF (HP TOUCH FRIENDLY)
    // ========================================================
    const scratchCanvas = document.getElementById('scratchCanvas');
    if (scratchCanvas) {
        const sCtx = scratchCanvas.getContext('2d');
        let isDrawing = false;

        sCtx.fillStyle = '#bfa5b0';
        sCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        
        sCtx.font = 'bold 14px sans-serif';
        sCtx.fillStyle = '#4a2535';
        sCtx.textAlign = 'center';
        sCtx.fillText('★ GOSOK DI SINI DENGAN JARI ★', scratchCanvas.width / 2, scratchCanvas.height / 2 + 5);

        function scratch(e) {
            if (!isDrawing) return;
            const rect = scratchCanvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            sCtx.globalCompositeOperation = 'destination-out';
            sCtx.beginPath();
            sCtx.arc(x, y, 20, 0, Math.PI * 2);
            sCtx.fill();
        }

        scratchCanvas.addEventListener('mousedown', () => isDrawing = true);
        window.addEventListener('mouseup', () => isDrawing = false);
        scratchCanvas.addEventListener('mousemove', scratch);

        // Khusus HP Touchscreen (Prevent Screen Scroll saat digosok)
        scratchCanvas.addEventListener('touchstart', (e) => {
            isDrawing = true;
            scratch(e);
        }, { passive: false });
        window.addEventListener('touchend', () => isDrawing = false);
        scratchCanvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            scratch(e);
        }, { passive: false });
    }


    // ========================================================
    // 7. MODAL UNIVERSAL & OPEN WHEN LETTERS
    // ========================================================
    const universalModal = document.getElementById('universalModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    const openWhenLetters = {
        kangen: {
            title: "Buka Saat Kamu Kangen ❤️",
            text: "Kalau kamu lagi kangen dan aku belum bisa nemenin kamu, ingat ini ya: Aku juga pasti lagi mikirin kamu. Coba putar lagu kita, tutup matamu, dan bayangkan aku lagi memelukmu erat-erat. Jarak cuma angka, tapi hatiku selalu bersamamu."
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
            text: "Kalau saat ini kita lagi saling diam atau berbeda pendapat, aku minta maaf ya. Ingat, masalah kita yang harus diselesaikan bersama, bukan hubungan kita yang diakhiri. Cintaku ke kamu jauh lebih besar daripada ego sesaat."
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

    const whenCards = document.querySelectorAll('.when-card');
    whenCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            const data = openWhenLetters[topic];
            if (data) {
                showModalContent(`
                    <h2 style="font-family:'Playfair Display',serif; font-size:1.6rem; margin-bottom:12px; color:#a4133c;">${data.title}</h2>
                    <p style="font-size:1rem; line-height:1.75; color:#38302c;">${data.text}</p>
                    <div style="margin-top:20px; text-align:right; font-family:'Caveat',cursive; font-size:1.4rem; color:#800f2f;">— Selalu Ada Untukmu ❤️</div>
                `);
            }
        });
    });

    const polaroidCards = document.querySelectorAll('.polaroid-card');
    polaroidCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            const title = card.getAttribute('data-title') || "Kenangan Indah";
            const desc = card.getAttribute('data-desc') || "";

            showModalContent(`
                <div style="border-radius:10px; overflow:hidden; max-height:320px; margin-bottom:14px;">
                    <img src="${img.src}" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
                <h3 style="font-family:'Playfair Display',serif; font-size:1.5rem; margin-bottom:6px; color:#1a1412;">${title}</h3>
                <p style="font-size:0.95rem; line-height:1.6; color:#555;">${desc}</p>
            `);
        });
    });


    // ========================================================
    // 8. CANVAS KELOPAK MAWAR JATUH
    // ========================================================
    const canvas = document.getElementById('ambientCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let petals = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class RosePetal {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.size = Math.random() * 7 + 5;
                this.speedY = Math.random() * 1.1 + 0.7;
                this.speedX = Math.random() * 0.8 - 0.4;
                this.angle = Math.random() * 360;
                this.spin = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.color = Math.random() > 0.4 ? 'rgba(255, 77, 109, ' : 'rgba(255, 133, 161, ';
            }

            update() {
                this.y += this.speedY;
                this.x += Math.sin(this.y * 0.01) * 0.7;
                this.angle += this.spin;

                if (this.y > canvas.height + 20) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.angle * Math.PI) / 180);
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.opacity + ')';
                ctx.fill();
                ctx.restore();
            }
        }

        const petalCount = window.innerWidth < 600 ? 25 : 40;
        for (let i = 0; i < petalCount; i++) petals.push(new RosePetal());

        function animatePetals() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petals.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animatePetals);
        }
        animatePetals();
    }

    function triggerHeartExplosion(x, y) {
        for (let i = 0; i < 20; i++) {
            const h = document.createElement('div');
            h.textContent = ['❤️', '✨', '🔒', '💖'][Math.floor(Math.random() * 4)];
            h.style.position = 'fixed';
            h.style.left = `${x}px`;
            h.style.top = `${y}px`;
            h.style.fontSize = '1.3rem';
            h.style.pointerEvents = 'none';
            h.style.zIndex = '9999';
            h.style.transition = 'all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)';

            document.body.appendChild(h);

            const destX = (Math.random() - 0.5) * 160;
            const destY = (Math.random() - 0.5) * 160 - 30;

            setTimeout(() => {
                h.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
                h.style.opacity = '0';
            }, 20);

            setTimeout(() => h.remove(), 950);
        }
    }
});
