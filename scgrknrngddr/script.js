const QS = (s) => document.querySelector(s);
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let isAnimating = false;

// Audio Configuration
const bgMusic = new Audio('GlassMode.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.4;
let isMusicStarted = false;
let isMuted = false;

const unmuteSvg = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
const muteSvg = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;

// Start music on first interaction anywhere
document.addEventListener('click', () => {
    if (!isMusicStarted && !isMuted) {
        bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
        isMusicStarted = true;
    }
}, { once: true });

function toggleMute(e) {
    if (e) e.stopPropagation();
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    QS('#mute-btn').innerHTML = isMuted ? muteSvg : unmuteSvg;

    if (!isMusicStarted && !isMuted) {
        bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
        isMusicStarted = true;
    }
}

function typeWriterSubtitle() {
    const text = "Çətin seçimlərə hazırsan?";
    let i = 0;
    const subtitleEl = QS('.subtitle');
    if (!subtitleEl) return;
    subtitleEl.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            subtitleEl.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    setTimeout(type, 800); // Small delay before typing
}

function createParticles() {
    const container = QS('#particles-container');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${5 + Math.random() * 8}s`;
        container.appendChild(particle);
    }
}

function init() {
    const container = QS('#category-container');
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'category-card';
        div.innerHTML = `<span class="cat-icon">${cat.icon}</span><span>${cat.name}</span>`;
        div.onclick = () => startGame(cat.id);
        container.appendChild(div);
    });

    QS('#back-btn').onclick = goHome;
    
    // Start retro effects
    typeWriterSubtitle();
    createParticles();
}

function startGame(categoryId) {
    currentCategory = categoryId;
    currentQuestions = [...(questions[categoryId] || questions['gundelik'])];
    currentQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    if (currentQuestions.length === 0) {
        alert("Bu kateqoriyada sual yoxdur!");
        return;
    }

    QS('#home-screen').classList.remove('active');
    QS('#game-screen').classList.add('active');

    loadQuestion();
}

function goHome() {
    QS('#game-screen').classList.remove('active');
    QS('#home-screen').classList.add('active');
}

function loadQuestion() {
    isAnimating = false;
    const q = currentQuestions[currentQuestionIndex];
    QS('#text-left').innerText = q.left;
    QS('#text-right').innerText = q.right;

    QS('#option-left').className = 'option left-option';
    QS('#option-right').className = 'option right-option';
    
    QS('#perc-left').innerText = '0%';
    QS('#perc-right').innerText = '0%';
    QS('#fill-left').style.width = '0%';
    QS('#fill-right').style.width = '0%';
    QS('.game-board').classList.remove('fading');
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

async function selectOption(side) {
    console.log("Clicked:", side);

    if (isAnimating) return;
    isAnimating = true;

    const optLeft = QS('#option-left');
    const optRight = QS('#option-right');

    const q = currentQuestions[currentQuestionIndex];

    const questionId = `${currentCategory}_${q.left}_${q.right}`
        .replace(/\s+/g, "_")
        .replace(/[^\wəƏğĞüÜşŞıİöÖçÇ_]/g, "");

    optLeft.classList.add(side === 'left' ? 'selected' : 'dimmed', 'show-results');
    optRight.classList.add(side === 'right' ? 'selected' : 'dimmed', 'show-results');

    let votes;

    try {
        votes = await Promise.race([
            window.saveVote(questionId, side),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Firebase timeout")), 8000)
            )
        ]);
    } catch (error) {
        console.error("Vote could not be saved:", error);

        // Temporary fallback so the game does not freeze
        votes = {
            left: side === "left" ? 1 : 0,
            right: side === "right" ? 1 : 0
        };
    }

    const leftVotes = votes.left || 0;
    const rightVotes = votes.right || 0;
    const totalVotes = leftVotes + rightVotes;

    const pLeft = totalVotes === 0 ? 0 : Math.round((leftVotes / totalVotes) * 100);
    const pRight = totalVotes === 0 ? 0 : 100 - pLeft;

    animateValue(QS('#perc-left'), 0, pLeft, 1000);
    animateValue(QS('#perc-right'), 0, pRight, 1000);

    setTimeout(() => {
        QS('#fill-left').style.width = pLeft + '%';
        QS('#fill-right').style.width = pRight + '%';
    }, 50);

    setTimeout(() => {
        QS('.game-board').classList.add('fading');
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex >= currentQuestions.length) {
                currentQuestions.sort(() => Math.random() - 0.5);
                currentQuestionIndex = 0;
            }
            loadQuestion();
        }, 800);
    }, 2500);
}

window.onload = init;
