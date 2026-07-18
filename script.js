// Internationalization data
const i18n = {
    id: {
        title: '🧘 Meditasi Relaksasi',
        subtitle: 'Temukan Ketenangan dalam Setiap Napas',
        white_noise_title: '🎵 Bunyi Sekitar (White Noise)',
        sound_rain: 'Hujan Lembut',
        sound_rain_desc: 'Soft Rain',
        sound_ocean: 'Ombak Laut',
        sound_ocean_desc: 'Ocean Waves',
        sound_forest: 'Angin Hutan',
        sound_forest_desc: 'Forest Wind',
        sound_birds: 'Burung Pagi',
        sound_birds_desc: 'Morning Birds',
        sound_fire: 'Api Berderak',
        sound_fire_desc: 'Crackling Fire',
        sound_space: 'Angkasa Dalam',
        sound_space_desc: 'Deep Space',
        breathing_title: '🫁 Latihan Pernapasan (Breathing Exercises)',
        breathing_478: '4-7-8 Breathing',
        breathing_box: 'Box Breathing',
        breathing_simple: 'Simple Calm',
        breathing_478_desc: 'Inhale 4s → Hold 7s → Exhale 8s',
        breathing_box_desc: 'Inhale 4s → Hold 4s → Exhale 4s → Hold 4s',
        breathing_simple_desc: 'Inhale 4s → Exhale 4s',
        affirmations_title: '💚 Afirmasi Hari Ini (Today\'s Affirmations)',
        affirmation_1: 'Saya tenang dan menguasai emosi saya',
        affirmation_2: 'Saya cukup, dan saya melakukan yang terbaik',
        affirmation_3: 'Tantangan membantu saya tumbuh lebih kuat',
        affirmation_4: 'Saya berhak mendapat istirahat dan kebaikan',
        affirmation_5: 'Saya memilih kedamaian daripada khawatir sekarang',
        play: '▶ Mainkan',
        start_exercise: '🧘 Mulai Latihan',
        breathing_in: 'Tarik Napas',
        breathing_out: 'Hembuskan',
        breathing_hold: 'Tahan',
        cycle: 'Siklus',
        practice_session: 'Sesi Latihan',
        stop: 'Hentikan',
        breathe_in: 'Tarik Napas',
    },
    en: {
        title: '🧘 Meditation & Relaxation',
        subtitle: 'Find Calm in Every Breath',
        white_noise_title: '🎵 Ambient Sounds (White Noise)',
        sound_rain: 'Soft Rain',
        sound_rain_desc: 'Gentle rainfall',
        sound_ocean: 'Ocean Waves',
        sound_ocean_desc: 'Peaceful waves',
        sound_forest: 'Forest Wind',
        sound_forest_desc: 'Rustling leaves',
        sound_birds: 'Morning Birds',
        sound_birds_desc: 'Chirping birds',
        sound_fire: 'Crackling Fire',
        sound_fire_desc: 'Campfire sounds',
        sound_space: 'Deep Space',
        sound_space_desc: 'Cosmic ambience',
        breathing_title: '🫁 Breathing Exercises',
        breathing_478: '4-7-8 Breathing',
        breathing_box: 'Box Breathing',
        breathing_simple: 'Simple Calm',
        breathing_478_desc: 'Inhale 4s → Hold 7s → Exhale 8s',
        breathing_box_desc: 'Inhale 4s → Hold 4s → Exhale 4s → Hold 4s',
        breathing_simple_desc: 'Inhale 4s → Exhale 4s',
        affirmations_title: '💚 Today\'s Affirmations',
        affirmation_1: 'I am calm and in control of my emotions',
        affirmation_2: 'I am enough, and I\'m doing my best',
        affirmation_3: 'Challenges help me grow stronger',
        affirmation_4: 'I deserve rest and kindness',
        affirmation_5: 'I choose peace over worry right now',
        play: '▶ Play',
        start_exercise: '🧘 Start Practice',
        breathing_in: 'Breathe In',
        breathing_out: 'Breathe Out',
        breathing_hold: 'Hold',
        cycle: 'Cycle',
        practice_session: 'Practice Session',
        stop: 'Stop',
        breathe_in: 'Breathe In',
    },
    zh: {
        title: '🧘 冥想放松',
        subtitle: '在每一次呼吸中找到宁静',
        white_noise_title: '🎵 环境声音（白噪音）',
        sound_rain: '细雨',
        sound_rain_desc: '温柔的雨声',
        sound_ocean: '海浪',
        sound_ocean_desc: '平静的波浪',
        sound_forest: '森林之风',
        sound_forest_desc: '树叶沙沙声',
        sound_birds: '晨鸟',
        sound_birds_desc: '鸟鸣声',
        sound_fire: '篝火',
        sound_fire_desc: '篝火劈啪声',
        sound_space: '深空',
        sound_space_desc: '宇宙氛围',
        breathing_title: '🫁 呼吸练习',
        breathing_478: '4-7-8 呼吸法',
        breathing_box: '方形呼吸',
        breathing_simple: '简单平静',
        breathing_478_desc: '吸气 4 秒 → 屏住 7 秒 → 呼气 8 秒',
        breathing_box_desc: '吸气 4 秒 → 屏住 4 秒 → 呼气 4 秒 → 屏住 4 秒',
        breathing_simple_desc: '吸气 4 秒 → 呼气 4 秒',
        affirmations_title: '💚 今日肯定句',
        affirmation_1: '我平静且能控制自己的情绪',
        affirmation_2: '我足够好，我在尽力而为',
        affirmation_3: '挑战让我变得更强大',
        affirmation_4: '我应该得到休息和善待',
        affirmation_5: '我现在选择平和而非忧虑',
        play: '▶ 播放',
        start_exercise: '🧘 开始练习',
        breathing_in: '吸气',
        breathing_out: '呼气',
        breathing_hold: '屏住',
        cycle: '循环',
        practice_session: '练习课程',
        stop: '停止',
        breathe_in: '吸气',
    }
};

// White noise URLs — real field recordings, CC0 licensed (Freesound.org)
// rain: gentle balcony drizzle (idomusics) | ocean: zen ocean waves (INNORECORDS)
// forest: leaves rustling in wind gusts (arpeggio1980) | birds: quiet garden morning birdsong (WhisperingEarth)
// fireplace: crackling wood fire (samarobryn) | space: deep cosmic drone (LookIMadeAThing)
const whiteNoiseUrls = {
    rain: 'https://cdn.freesound.org/previews/518/518863_3490256-hq.mp3',
    ocean: 'https://cdn.freesound.org/previews/456/456899_9518146-hq.mp3',
    forest: 'https://cdn.freesound.org/previews/523/523389_2010973-hq.mp3',
    birds: 'https://cdn.freesound.org/previews/798/798842_17200815-hq.mp3',
    fireplace: 'https://cdn.freesound.org/previews/414/414767_4955305-hq.mp3',
    space: 'https://cdn.freesound.org/previews/534/534018_3968707-hq.mp3'
};

let currentLanguage = 'id';
let currentAudio = null;
let currentBreathingExercise = null;
let isBreathingInProgress = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeEventListeners();
});

// Language functions
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'id';
    setLanguage(savedLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
    updateActiveLanguageButton();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[currentLanguage][key]) {
            element.textContent = i18n[currentLanguage][key];
        }
    });
}

function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Event listeners
function initializeEventListeners() {
    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // White noise players
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const soundType = btn.getAttribute('data-sound');
            playWhiteNoise(soundType, btn);
        });
    });

    // Breathing exercise tabs
    document.querySelectorAll('.breathing-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchBreathingExercise(btn.getAttribute('data-exercise'));
        });
    });

    // Start breathing exercise buttons
    document.querySelectorAll('.start-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exercise = btn.getAttribute('data-exercise');
            startBreathingExercise(exercise);
        });
    });

    // Modal close button
    document.querySelector('.close-modal').addEventListener('click', closeBreathingModal);
    document.querySelector('.stop-practice-btn').addEventListener('click', closeBreathingModal);

    // Close modal on outside click
    document.getElementById('breathing-modal').addEventListener('click', (e) => {
        if (e.target.id === 'breathing-modal') {
            closeBreathingModal();
        }
    });
}

// White noise functions
function playWhiteNoise(soundType, buttonElement) {
    const audioPlayer = document.getElementById('audio-player');
    const allPlayButtons = document.querySelectorAll('.play-btn');

    // Stop all sounds and reset buttons
    allPlayButtons.forEach(btn => {
        btn.classList.remove('playing');
        btn.innerHTML = `<span data-i18n="play">${i18n[currentLanguage].play}</span>`;
    });

    // If clicking the same sound, toggle it off
    if (currentAudio === soundType && !audioPlayer.paused) {
        audioPlayer.pause();
        currentAudio = null;
        return;
    }

    // Play new sound
    if (whiteNoiseUrls[soundType]) {
        audioPlayer.src = whiteNoiseUrls[soundType];
        audioPlayer.loop = true;
        audioPlayer.play().catch(err => {
            console.log('Audio playback error:', err);
            showMessage('Unable to load audio. Please check your connection.');
        });
        currentAudio = soundType;
        buttonElement.classList.add('playing');
        buttonElement.innerHTML = `<span>${i18n[currentLanguage].play.replace('▶', '⏸')}</span>`;
        updateProgressBar(buttonElement);
    }
}

function updateProgressBar(buttonElement) {
    const audioPlayer = document.getElementById('audio-player');
    const card = buttonElement.closest('.noise-card');
    const progressBar = card.querySelector('.progress-bar');

    const updateProgress = () => {
        if (audioPlayer.duration) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = progress + '%';
        }
        if (!audioPlayer.paused) {
            requestAnimationFrame(updateProgress);
        }
    };

    updateProgress();
}

// Breathing exercise functions
function switchBreathingExercise(exercise) {
    currentBreathingExercise = exercise;

    // Update tab buttons
    document.querySelectorAll('.breathing-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-exercise') === exercise) {
            btn.classList.add('active');
        }
    });

    // Update visible content
    document.querySelectorAll('.breathing-exercise').forEach(ex => {
        ex.classList.remove('active');
        if (ex.getAttribute('data-exercise') === exercise) {
            ex.classList.add('active');
        }
    });
}

function startBreathingExercise(exercise) {
    if (isBreathingInProgress) return;
    isBreathingInProgress = true;

    const modal = document.getElementById('breathing-modal');
    modal.classList.remove('hidden');

    const exercises = {
        '4-7-8': [
            { phase: 'Breathe In', duration: 4, phaseType: 'in' },
            { phase: 'Hold', duration: 7, phaseType: 'hold' },
            { phase: 'Exhale', duration: 8, phaseType: 'out' }
        ],
        'box': [
            { phase: 'Breathe In', duration: 4, phaseType: 'in' },
            { phase: 'Hold', duration: 4, phaseType: 'hold' },
            { phase: 'Exhale', duration: 4, phaseType: 'out' },
            { phase: 'Hold', duration: 4, phaseType: 'hold' }
        ],
        'simple': [
            { phase: 'Breathe In', duration: 4, phaseType: 'in' },
            { phase: 'Exhale', duration: 4, phaseType: 'out' }
        ]
    };

    const phases = exercises[exercise];
    let cycleCount = 0;
    const maxCycles = 5;

    function runCycle() {
        if (cycleCount >= maxCycles || !isBreathingInProgress) {
            closeBreathingModal();
            return;
        }

        cycleCount++;
        updateCycleCount(cycleCount, maxCycles);

        let phaseIndex = 0;

        function runPhase() {
            if (phaseIndex >= phases.length || !isBreathingInProgress) {
                runCycle();
                return;
            }

            const phase = phases[phaseIndex];
            let secondsLeft = phase.duration;
            const phaseElement = document.querySelector('.instruction-phase');
            const timeElement = document.querySelector('.instruction-time');

            phaseElement.textContent = i18n[currentLanguage][`breathing_${phase.phaseType}`] || phase.phase;

            const interval = setInterval(() => {
                if (!isBreathingInProgress) {
                    clearInterval(interval);
                    return;
                }

                timeElement.textContent = secondsLeft;
                secondsLeft--;

                if (secondsLeft < 0) {
                    clearInterval(interval);
                    phaseIndex++;
                    runPhase();
                }
            }, 1000);
        }

        runPhase();
    }

    runCycle();
}

function updateCycleCount(current, max) {
    const cycleElement = document.querySelector('.cycle-count');
    cycleElement.textContent = `${i18n[currentLanguage].cycle}: ${current}/${max}`;
}

function closeBreathingModal() {
    isBreathingInProgress = false;
    const modal = document.getElementById('breathing-modal');
    modal.classList.add('hidden');
}

function showMessage(message) {
    console.log(message);
    alert(message);
}

// Audio player setup
const audioPlayer = document.getElementById('audio-player');
audioPlayer.addEventListener('ended', () => {
    const btn = document.querySelector('.play-btn.playing');
    if (btn) {
        btn.classList.remove('playing');
        btn.innerHTML = `<span data-i18n="play">${i18n[currentLanguage].play}</span>`;
    }
    currentAudio = null;
});
