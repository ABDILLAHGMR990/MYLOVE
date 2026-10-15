:root {
    --rose-main: #ff4d6d;
    --rose-glow: rgba(255, 77, 109, 0.55);
    --rose-soft: #ff85a1;
    --rose-deep: #a4133c;
    --gold-accent: #f4c27a;
    --gold-glow: rgba(244, 194, 122, 0.45);
    --dark-wine: #0e050b;
    --dark-surface: rgba(32, 12, 24, 0.88);
    --paper-romantic: #fff8f5;
    --paper-text: #2c1a21;
    --text-pure: #ffffff;
    --text-muted: #d4b5c4;
    --border-rose: rgba(255, 133, 161, 0.22);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: var(--dark-wine);
    color: var(--text-pure);
    font-family: 'Plus Jakarta Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    padding-bottom: 110px;
    position: relative;
    touch-action: manipulation;
}

/* Canvas Kelopak Mawar Jatuh */
#ambientCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1;
}

/* Ambient Candlelight Glow */
.glow-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 0;
    pointer-events: none;
    opacity: 0.35;
    animation: romanticDrift 22s infinite alternate ease-in-out;
}

.orb-1 {
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, var(--rose-main) 0%, transparent 70%);
    top: -80px;
    left: -80px;
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--gold-accent) 0%, transparent 70%);
    bottom: 50px;
    right: -100px;
    animation-delay: -11s;
}

@keyframes romanticDrift {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(90px, 80px) scale(1.15); }
}

.main-wrapper {
    position: relative;
    z-index: 2;
    max-width: 980px;
    margin: 0 auto;
    padding: 24px 16px 50px;
}

/* ========================================================
   HERO & TURNTABLE
   ======================================================== */
.hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 0 40px;
}

.spotify-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    background: rgba(255, 77, 109, 0.14);
    border: 1px solid rgba(255, 133, 161, 0.4);
    border-radius: 50px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--rose-soft);
    margin-bottom: 18px;
}

.spotify-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--rose-main);
    box-shadow: 0 0 12px var(--rose-main);
    animation: heartPulse 1.6s infinite;
}

@keyframes heartPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.4; }
}

.main-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5.5vw, 3.6rem);
    line-height: 1.25;
    font-weight: 600;
    margin-bottom: 12px;
}

.main-title span {
    background: linear-gradient(135deg, #ffccd5, var(--rose-main), var(--gold-accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--rose-main);
    font-style: italic;
}

.typing-text {
    font-size: 1rem;
    color: var(--text-muted);
    min-height: 30px;
    margin-bottom: 25px;
    font-weight: 300;
}

.typing-text::after {
    content: ' ❤️';
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* REALISTIC VINYL TURNTABLE */
.turntable-container {
    position: relative;
    margin: 15px auto 25px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
}

.record-player-box {
    position: relative;
    width: 320px;
    height: 235px;
    display: flex;
    align-items: center;
}

.vinyl-sleeve {
    position: absolute;
    left: 0;
    width: 215px;
    height: 215px;
    background: #1e0915;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.75), 0 0 20px rgba(255, 77, 109, 0.2);
    z-index: 5;
    border: 1.5px solid rgba(244, 194, 122, 0.4);
}

.sleeve-art {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.sleeve-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%);
    pointer-events: none;
}

.sleeve-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(164, 19, 60, 0.85);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    padding: 3px 8px;
    border-radius: 20px;
    font-size: 0.62rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
}

.vinyl-disc {
    position: absolute;
    left: 80px;
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background: radial-gradient(circle, #381324 0%, #1a0812 40%, #0a0307 100%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), inset 0 0 10px rgba(255, 133, 161, 0.2);
    z-index: 2;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    justify-content: center;
}

.vinyl-groove {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 133, 161, 0.08);
}
.groove-1 { width: 175px; height: 175px; }
.groove-2 { width: 140px; height: 140px; }
.groove-3 { width: 105px; height: 105px; }

.vinyl-label {
    position: relative;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--gold-accent);
}

.vinyl-label img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.center-spindle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #000;
    border: 2px solid var(--gold-accent);
}

.tonearm-assembly {
    position: absolute;
    top: -15px;
    right: -10px;
    width: 65px;
    height: 130px;
    z-index: 10;
    transform-origin: 32px 18px;
    transform: rotate(-35deg);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.tonearm-base {
    position: absolute;
    top: 8px;
    left: 18px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--gold-accent), #8c5b1b);
    box-shadow: 0 4px 10px rgba(0,0,0,0.6);
}

.tonearm-rod {
    position: absolute;
    top: 22px;
    left: 31px;
    width: 4px;
    height: 90px;
    background: linear-gradient(to right, #ffd185, #b8860b);
    border-radius: 2px;
}

.tonearm-head {
    position: absolute;
    bottom: 10px;
    left: 23px;
    width: 18px;
    height: 12px;
    background: var(--rose-deep);
    border: 1px solid var(--gold-accent);
    border-radius: 3px;
    transform: rotate(20deg);
}

.turntable-container.is-playing .vinyl-disc {
    transform: translateX(35px);
}

.turntable-container.is-playing .vinyl-disc .vinyl-label,
.turntable-container.is-playing .vinyl-disc {
    animation: rotateVinyl 6s linear infinite;
}

.turntable-container.is-playing .tonearm-assembly {
    transform: rotate(7deg);
}

@keyframes rotateVinyl {
    0% { transform: translateX(35px) rotate(0deg); }
    100% { transform: translateX(35px) rotate(360deg); }
}

.turntable-hint {
    margin-top: 14px;
    font-size: 0.85rem;
    color: var(--rose-soft);
    font-weight: 600;
}

/* FITUR BARU: GEMBOK CINTA & TOMBOL PELUKAN */
.quick-love-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 20px;
    width: 100%;
}

.love-lock-card {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 77, 109, 0.12);
    border: 1px solid rgba(244, 194, 122, 0.4);
    padding: 10px 18px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.love-lock-card:hover, .love-lock-card.locked {
    background: rgba(164, 19, 60, 0.35);
    border-color: var(--gold-accent);
    box-shadow: 0 0 20px rgba(244, 194, 122, 0.3);
}

.lock-icon {
    font-size: 1.4rem;
}

.lock-text {
    text-align: left;
    display: flex;
    flex-direction: column;
}

.lock-text strong {
    font-size: 0.88rem;
    color: #fff;
}

.lock-text span {
    font-size: 0.72rem;
    color: var(--rose-soft);
}

.hug-btn {
    background: linear-gradient(135deg, var(--rose-main), var(--rose-deep));
    border: none;
    color: #fff;
    padding: 12px 22px;
    border-radius: 50px;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 6px 20px var(--rose-glow);
    transition: transform 0.2s, box-shadow 0.2s;
}

.hug-btn:active {
    transform: scale(0.96);
}

/* ========================================================
   SPOTIFY LIVE LYRICS CARD
   ======================================================== */
.lyrics-section {
    margin: 35px auto 50px;
    max-width: 680px;
}

.lyrics-card {
    background: var(--dark-surface);
    border: 1px solid var(--border-rose);
    border-radius: 22px;
    padding: 24px 20px;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
}

.lyrics-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 10px;
}

.lyrics-tag {
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--gold-accent);
}

.lyrics-track-name {
    font-size: 0.78rem;
    color: var(--rose-soft);
}

.lyrics-body {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.lyric-line {
    font-size: 1.05rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.32);
    line-height: 1.5;
    transition: all 0.3s ease;
    cursor: pointer;
}

.lyric-line.active {
    color: #ffffff;
    font-size: 1.2rem;
    text-shadow: 0 0 18px rgba(255, 77, 109, 0.7), 0 0 10px #fff;
    transform: translateX(4px);
}

/* ========================================================
   KARTU GOSOK HADIAH CINTA
   ======================================================== */
.scratch-section {
    text-align: center;
    margin: 50px 0;
}

.section-tag {
    font-size: 0.72rem;
    letter-spacing: 3px;
    font-weight: 700;
    color: var(--gold-accent);
    margin-bottom: 6px;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 6px;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 0.88rem;
    margin-bottom: 24px;
}

.scratch-container {
    position: relative;
    width: 100%;
    max-width: 340px;
    height: 190px;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
    border: 2px dashed rgba(244, 194, 122, 0.6);
}

.scratch-reward {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #fff0f3, #ffe5ec);
    color: #590d22;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.reward-icon {
    font-size: 2rem;
    margin-bottom: 4px;
}

.scratch-reward h3 {
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 4px;
    color: #800f2f;
}

.scratch-reward p {
    font-size: 0.82rem;
    line-height: 1.4;
    color: #590d22;
    margin-bottom: 8px;
}

.reward-code {
    font-size: 0.72rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--rose-main), var(--rose-deep));
    color: #fff;
    padding: 3px 10px;
    border-radius: 12px;
}

#scratchCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
    z-index: 2;
}

/* ========================================================
   STRUK CINTA
   ======================================================== */
.receipt-section {
    display: flex;
    justify-content: center;
    margin: 50px 0;
}

.receipt-paper {
    background-color: var(--paper-romantic);
    color: var(--paper-text);
    width: 100%;
    max-width: 330px;
    padding: 28px 20px;
    font-family: 'VT323', monospace;
    font-size: 1.2rem;
    line-height: 1.3;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    position: relative;
    border-radius: 6px;
    border-top: 3px solid var(--rose-main);
}

.receipt-header h2 {
    font-size: 1.9rem;
    letter-spacing: 2px;
    color: #800f2f;
}

.receipt-header p {
    font-size: 0.9rem;
    color: #7d6b73;
}

.receipt-divider {
    overflow: hidden;
    white-space: nowrap;
    color: #b59fa8;
    margin: 5px 0;
}

.receipt-meta {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: #590d22;
}

.receipt-items {
    margin: 10px 0;
}

.receipt-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.receipt-total {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.grand-total {
    font-weight: 700;
    font-size: 1.35rem;
    color: #a4133c;
}

.receipt-barcode {
    text-align: center;
    margin-top: 14px;
}

.barcode-lines {
    height: 38px;
    background: repeating-linear-gradient(
        to right,
        #2c1a21 0px, #2c1a21 2px,
        transparent 2px, transparent 4px,
        #2c1a21 4px, #2c1a21 7px,
        transparent 7px, transparent 9px
    );
    margin: 6px 0;
}

.receipt-barcode p {
    font-size: 0.9rem;
    letter-spacing: 1px;
    color: #590d22;
}

/* ========================================================
   OPEN WHEN... ENVELOPES
   ======================================================== */
.open-when-section {
    text-align: center;
    margin: 55px 0;
}

.envelope-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-top: 25px;
}

.when-card {
    background: linear-gradient(135deg, rgba(46, 17, 34, 0.9), rgba(24, 8, 18, 0.9));
    border: 1px solid var(--border-rose);
    border-radius: 16px;
    padding: 20px 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.when-card:hover {
    transform: translateY(-5px);
    border-color: var(--rose-main);
}

.when-stamp {
    font-size: 2rem;
    margin-bottom: 8px;
}

.when-card h3 {
    font-size: 0.92rem;
    margin-bottom: 4px;
    color: #fff;
}

.when-card p {
    font-size: 0.75rem;
    color: var(--rose-soft);
    font-weight: 600;
}

/* ========================================================
   POLAROID SCRAPBOOK
   ======================================================== */
.scrapbook-section {
    text-align: center;
    margin: 60px 0 40px;
}

.polaroid-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px;
    padding: 10px;
}

.polaroid-card {
    background-color: var(--paper-romantic);
    width: 240px;
    padding: 12px 12px 18px;
    border-radius: 6px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    cursor: pointer;
    transition: transform 0.4s ease;
    user-select: none;
    -webkit-user-select: none;
}

.tape-strip {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height: 20px;
    background: rgba(255, 215, 185, 0.7);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    z-index: 2;
    clip-path: polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%);
}

.tilt-1 { transform: rotate(-2.5deg); }
.tilt-2 { transform: rotate(3deg); }
.tilt-3 { transform: rotate(-1.5deg); }
.tilt-4 { transform: rotate(2deg); }
.tilt-5 { transform: rotate(-1deg); }

.polaroid-card:hover {
    transform: scale(1.05) rotate(0deg) translateY(-5px);
    z-index: 10;
}

.polaroid-inner {
    width: 100%;
    height: 230px;
    background-color: #222;
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 10px;
}

.polaroid-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.polaroid-caption p {
    font-family: 'Caveat', cursive;
    font-size: 1.35rem;
    color: var(--paper-text);
    line-height: 1.2;
    margin-bottom: 2px;
}

.polaroid-caption span {
    font-size: 0.68rem;
    color: #9c838d;
    font-weight: 600;
}

/* ========================================================
   UNIVERSAL MODAL
   ======================================================== */
.universal-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(14, 5, 11, 0.92);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
}

.universal-modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-box {
    background: var(--paper-romantic);
    color: var(--paper-text);
    width: 100%;
    max-width: 480px;
    padding: 30px 22px;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    position: relative;
    transform: translateY(20px) scale(0.92);
    transition: all 0.35s ease;
    border: 1px solid rgba(255, 133, 161, 0.3);
    max-height: 85vh;
    overflow-y: auto;
}

.universal-modal.active .modal-box {
    transform: translateY(0) scale(1);
}

.modal-close {
    position: absolute;
    top: 12px;
    right: 14px;
    font-size: 1.8rem;
    background: none;
    border: none;
    color: #8c727c;
    cursor: pointer;
    line-height: 1;
}

/* ========================================================
   SPOTIFY DOCKED PLAYER (MOBILE-FIRST)
   ======================================================== */
.spotify-dock {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(22, 8, 17, 0.96);
    border-top: 1px solid var(--border-rose);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    padding: 10px 16px;
    z-index: 900;
    box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.7);
}

.spotify-dock-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.spotify-track-info {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 160px;
}

.album-thumb {
    width: 44px;
    height: 44px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid var(--border-rose);
}

.album-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.song-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px;
}

.song-artist {
    font-size: 0.7rem;
    color: var(--rose-soft);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px;
}

.spotify-like-btn {
    background: none;
    border: none;
    color: #7a636e;
    cursor: pointer;
    padding: 4px;
    transition: transform 0.2s, color 0.2s;
}

.spotify-like-btn.liked {
    color: var(--rose-main);
    transform: scale(1.15);
}

.spotify-controls-wrap {
    flex: 1;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.spotify-buttons {
    display: flex;
    align-items: center;
    gap: 14px;
}

.ctrl-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 0.95rem;
}

.play-main-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--rose-main), var(--rose-deep));
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px var(--rose-glow);
}

.playback-bar {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
}

.time-display {
    font-size: 0.68rem;
    color: var(--text-muted);
    min-width: 28px;
}

.progress-bar-container {
    flex: 1;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
}

.progress-bar-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(to right, var(--rose-soft), var(--rose-main));
    border-radius: 4px;
}

.spotify-extra-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 140px;
    justify-content: flex-end;
}

.equalizer-bars {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 16px;
}

.equalizer-bars span {
    width: 3px;
    background-color: var(--rose-main);
    border-radius: 2px;
    height: 3px;
}

.equalizer-bars.active span:nth-child(1) { animation: eqBounce 0.8s infinite ease-in-out alternate; }
.equalizer-bars.active span:nth-child(2) { animation: eqBounce 1.2s infinite ease-in-out alternate 0.2s; }
.equalizer-bars.active span:nth-child(3) { animation: eqBounce 0.9s infinite ease-in-out alternate 0.4s; }
.equalizer-bars.active span:nth-child(4) { animation: eqBounce 1.1s infinite ease-in-out alternate 0.1s; }

@keyframes eqBounce {
    0% { height: 3px; }
    100% { height: 16px; }
}

.spotify-tag-logo {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--rose-soft);
}

.site-footer {
    text-align: center;
    padding: 18px;
    font-size: 0.78rem;
    color: var(--text-muted);
}

/* ========================================================
   RESPONSIF KHUSUS HP (SCREEN <= 600px)
   ======================================================== */
@media (max-width: 600px) {
    .record-player-box {
        width: 280px;
        height: 200px;
    }
    .vinyl-sleeve {
        width: 180px;
        height: 180px;
    }
    .vinyl-disc {
        left: 65px;
        width: 175px;
        height: 175px;
    }
    .groove-1 { width: 145px; height: 145px; }
    .groove-2 { width: 115px; height: 115px; }
    .groove-3 { width: 85px; height: 85px; }
    .vinyl-label { width: 62px; height: 62px; }
    
    .tonearm-assembly {
        transform: scale(0.85);
        right: -15px;
        top: -15px;
    }
    
    .turntable-container.is-playing .vinyl-disc {
        transform: translateX(28px);
    }
    @keyframes rotateVinyl {
        0% { transform: translateX(28px) rotate(0deg); }
        100% { transform: translateX(28px) rotate(360deg); }
    }

    .spotify-extra-wrap {
        display: none;
    }
    .song-artist {
        display: none;
    }
    .spotify-track-info {
        min-width: auto;
    }
    .polaroid-card {
        width: 100%;
        max-width: 270px;
    }
}
