// === TOUCH FEEDBACK (Tugma bosilganda kulrang fon) ===
function addTouchFeedback() {
    document.querySelectorAll('.user-choice, .menu-btn, .modal-restart, .back-btn').forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.backgroundColor = 'rgba(255,255,255,0.4)';
        });
        btn.addEventListener('touchend', () => {
            setTimeout(() => {
                btn.style.backgroundColor = '';
            }, 300);
        });
    });
}


// === TIL LUG'ATLARI ===
const translations = {
    uz: {
        title: "Tosh, Qog'oz, Qaychi",
        startGame: "O'yinni boshlash",
        settings: "Sozlamalar",
        statistics: "Statistika",
        achievements: "Yutuqlar",
        contact: "Aloqa",
        about: "Haqida",
        back: "Orqaga",
        theme: "Mavzu",
        language: "Til",
        aiLevel: "AI Darajasi",
        rounds: "Roundlar soni",
        saveSettings: "Sozlamalarni saqlash",
        totalGames: "Jami o'yinlar",
        wins: "G'alabalar",
        losses: "Yutqazishlar",
        ties: "Durranglar",
        winRate: "G'alaba foizi",
        youWon: "Siz yutdingiz!",
        youLost: "Siz yutqazdingiz!",
        itsATie: "Durrang!",
        gameEnded: "O'yin tugadi!\nSiz: {{user}} | Computer: {{computer}}",
        settingsSaved: "Sozlamalar saqlandi!",
        rock: "Tosh",
        paper: "Qog'oz",
        scissors: "Qaychi",
        me: "Men",
        computer: "Kompyuter"
    },
    en: {
        title: "Rock, Paper, Scissors",
        startGame: "Start Game",
        settings: "Settings",
        statistics: "Statistics",
        achievements: "Achievements",
        contact: "Contact",
        about: "About",
        back: "Back",
        theme: "Theme",
        language: "Language",
        aiLevel: "AI Level",
        rounds: "Rounds to Play",
        saveSettings: "Save Settings",
        totalGames: "Total Games",
        wins: "Wins",
        losses: "Losses",
        ties: "Ties",
        winRate: "Win Rate",
        youWon: "You won!",
        youLost: "You lost!",
        itsATie: "It's a tie!",
        gameEnded: "Game Over!\nYou: {{user}} | Computer: {{computer}}",
        settingsSaved: "Settings saved!",
        rock: "Rock",
        paper: "Paper",
        scissors: "Scissors",
        me: "Me",
        computer: "Computer"
    },
    ru: {
        title: "Камень, Ножницы, Бумага",
        startGame: "Начать игру",
        settings: "Настройки",
        statistics: "Статистика",
        achievements: "Достижения",
        contact: "Контакт",
        about: "О игре",
        back: "Назад",
        theme: "Тема",
        language: "Язык",
        aiLevel: "Уровень ИИ",
        rounds: "Количество раундов",
        saveSettings: "Сохранить настройки",
        totalGames: "Всего игр",
        wins: "Победы",
        losses: "Поражения",
        ties: "Ничьи",
        winRate: "Процент побед",
        youWon: "Вы выиграли!",
        youLost: "Вы проиграли!",
        itsATie: "Ничья!",
        gameEnded: "Игра окончена!\nВы: {{user}} | Компьютер: {{computer}}",
        settingsSaved: "Настройки сохранены!",
        rock: "Камень",
        paper: "Бумага",
        scissors: "Ножницы",
        me: "Я",
        computer: "Компьютер"
    }
};


// === TILNI QO'LLASH ===
function applyLanguage(lang) {
    const texts = translations[lang] || translations['uz'];

    // Asosiy menyudagi tugmalar
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(btn => {
        const page = btn.getAttribute('data-page');
        switch(page) {
            case 'gameScreen': btn.innerHTML = `<i class="fa-solid fa-gamepad"></i> ${texts.startGame}`; break;
            case 'settings': btn.innerHTML = `<i class="fa-solid fa-gear"></i> ${texts.settings}`; break;
            case 'statistics': btn.innerHTML = `<i class="fa-solid fa-chart-simple"></i> ${texts.statistics}`; break;
            case 'achievements': btn.innerHTML = `<i class="fa-solid fa-award"></i> ${texts.achievements}`; break;
            case 'contact': btn.innerHTML = `<i class="fa-solid fa-phone"></i> ${texts.contact}`; break;
            case 'about': btn.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${texts.about}`; break;
        }
    });

    // Orqaga tugmasi
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${texts.back}`;
    });

    // Settings sahifasi — label matnlari
    const settingLabels = document.querySelectorAll('.setting-group label');
    if (settingLabels[0]) settingLabels[0].textContent = texts.theme;
    if (settingLabels[1]) settingLabels[1].textContent = texts.language;
    if (settingLabels[2]) settingLabels[2].textContent = texts.aiLevel;
    if (settingLabels[3]) settingLabels[3].textContent = texts.rounds;

    // Save Settings tugmasi
    const saveBtn = document.getElementById('saveSettings');
    if (saveBtn) saveBtn.textContent = texts.saveSettings;

    // Statistika sahifasi
    const statItems = document.querySelectorAll('.stat-item div:first-child');
    if (statItems[0]) statItems[0].textContent = texts.totalGames;
    if (statItems[1]) statItems[1].textContent = texts.wins;
    if (statItems[2]) statItems[2].textContent = texts.losses;
    if (statItems[3]) statItems[3].textContent = texts.ties;
    if (statItems[4]) statItems[4].textContent = texts.winRate;

    // O'yin ekranidagi matnlar
    const choiceButtons = document.querySelectorAll('.user-choice');
    choiceButtons.forEach(btn => {
        const choice = btn.getAttribute('data-choice');
        switch(choice) {
            case 'rock': btn.innerHTML = `<i class="fa-solid fa-hand-rock"></i><br>${texts.rock}`; break;
            case 'paper': btn.innerHTML = `<i class="fa-solid fa-hand-paper"></i><br>${texts.paper}`; break;
            case 'scissors': btn.innerHTML = `<i class="fa-solid fa-hand-scissors"></i><br>${texts.scissors}`; break;
        }
    });

    // Scoreboard
    const scoreLabels = document.querySelectorAll('.score div:first-child');
    if (scoreLabels[0]) scoreLabels[0].textContent = texts.me;
    if (scoreLabels[1]) scoreLabels[1].textContent = texts.computer;

    // Sahifa sarlavhalari
    document.title = texts.title;
    const welcomeTitle = document.getElementById('welcomeTitle');
    if (welcomeTitle) welcomeTitle.textContent = texts.title;

    const settingsTitle = document.getElementById('settingsTitle');
    if (settingsTitle) settingsTitle.textContent = texts.settings;

    const statisticsTitle = document.getElementById('statisticsTitle');
    if (statisticsTitle) statisticsTitle.textContent = texts.statistics;

    const achievementsTitle = document.getElementById('achievementsTitle');
    if (achievementsTitle) achievementsTitle.textContent = texts.achievements;

    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) contactTitle.innerHTML = `<i class="fa-solid fa-phone"></i> ${texts.contact}`;

    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle) aboutTitle.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${texts.about}`;
}

document.addEventListener('DOMContentLoaded', () => {

    // === DOM ELEMENTLARI ===
    const welcomeScreen = document.getElementById('welcomeScreen');
    const gameScreen = document.getElementById('gameScreen');
    const contactScreen = document.getElementById('contact');
    const aboutScreen = document.getElementById('about');
    const settingsScreen = document.getElementById('settings');
    const statisticsScreen = document.getElementById('statistics');
    const achievementsScreen = document.getElementById('achievements');
    const friendsScreen = document.getElementById('friends');

    const computerChoiceEl = document.getElementById('computerChoice');
    const userChoices = document.querySelectorAll('.user-choice');
    const modalOverlay = document.getElementById('resultModal');
    const modalContent = document.getElementById('modalContent');
    const modalMessage = document.getElementById('modalMessage');
    const modalIcon = document.getElementById('modalIcon');
    const restartBtn = document.getElementById('restartBtn');

    const userScoreEl = document.getElementById('userScore');
    const computerScoreEl = document.getElementById('computerScore');

    // === O'YIN HOLATLARI ===
    let userScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    let totalRounds = 3;
    let gameActive = true;

    // === TEMANI QO'LLASH ===
    function applyTheme(theme) {
        document.body.className = theme;
    }

    // === STATISTIKANI YUKLASH ===
    function loadStats() {
        const stats = JSON.parse(localStorage.getItem('rpsStats')) || {
            totalGames: 0,
            wins: 0,
            losses: 0,
            ties: 0
        };

        const totalGamesEl = document.getElementById('totalGames');
        const totalWinsEl = document.getElementById('totalWins');
        const totalLossesEl = document.getElementById('totalLosses');
        const totalTiesEl = document.getElementById('totalTies');
        const winRateEl = document.getElementById('winRate');

        if (totalGamesEl) totalGamesEl.textContent = stats.totalGames;
        if (totalWinsEl) totalWinsEl.textContent = stats.wins;
        if (totalLossesEl) totalLossesEl.textContent = stats.losses;
        if (totalTiesEl) totalTiesEl.textContent = stats.ties;

        const winRate = stats.totalGames > 0 ? Math.round((stats.wins / stats.totalGames) * 100) : 0;
        if (winRateEl) winRateEl.textContent = winRate + '%';
    }

    // === YUTUQLARNI TEKSHIRISH ===
    function checkAchievements() {
        const stats = JSON.parse(localStorage.getItem('rpsStats')) || { wins: 0, totalGames: 0, ties: 0 };
        const achievements = {
            'ach-5wins': stats.wins >= 5,
            'ach-10games': stats.totalGames >= 10,
            'ach-3ties': stats.ties >= 3
        };

        Object.keys(achievements).forEach(key => {
            const el = document.getElementById(key);
            if (el) {
                const status = el.querySelector('.ach-status');
                if (achievements[key]) {
                    el.classList.add('unlocked');
                    status.textContent = '✅';
                } else {
                    el.classList.remove('unlocked');
                    status.textContent = '❌';
                }
            }
        });
    }

    // === YAKUNIY NATIJANI SAQLASH ===
    function saveFinalGameResult() {
        let stats = JSON.parse(localStorage.getItem('rpsStats')) || {
            totalGames: 0,
            wins: 0,
            losses: 0,
            ties: 0
        };

        stats.totalGames++;

        if (userScore > computerScore) {
            stats.wins++;
        } else if (computerScore > userScore) {
            stats.losses++;
        } else {
            stats.ties++;
        }

        localStorage.setItem('rpsStats', JSON.stringify(stats));
        loadStats();
        checkAchievements();
    }

    // === O'YINNI ROUNDS TUGAGANDA TO'XTATISH ===
    function resetGameAfterRounds() {
        userScore = 0;
        computerScore = 0;
        currentRound = 0;
        userScoreEl.textContent = '0';
        computerScoreEl.textContent = '0';
        computerChoiceEl.innerHTML = '?';
        gameActive = true;
        modalOverlay.classList.remove('active');
    }

    // === SOZLAMALARNI YUKLASH ===
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('rpsSettings')) || {
            theme: 'gradient',
            language: 'uz',
            aiLevel: 'easy',
            rounds: 3
        };

        const themeSelect = document.getElementById('themeSelect');
        const languageSelect = document.getElementById('languageSelect');
        const aiLevel = document.getElementById('aiLevel');
        const roundsSelect = document.getElementById('roundsSelect');

        if (themeSelect) themeSelect.value = settings.theme;
        if (languageSelect) languageSelect.value = settings.language;
        if (aiLevel) aiLevel.value = settings.aiLevel;
        if (roundsSelect) roundsSelect.value = settings.rounds;

        applyTheme(settings.theme);
        applyLanguage(settings.language);
        totalRounds = parseInt(settings.rounds) || 3;
    }

    // === SOZLAMALARNI SAQLASH ===
    const saveSettingsBtn = document.getElementById('saveSettings');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            const themeSelect = document.getElementById('themeSelect');
            const languageSelect = document.getElementById('languageSelect');
            const aiLevel = document.getElementById('aiLevel');
            const roundsSelect = document.getElementById('roundsSelect');

            const settings = {
                theme: themeSelect?.value || 'gradient',
                language: languageSelect?.value || 'uz',
                aiLevel: aiLevel?.value || 'easy',
                rounds: parseInt(roundsSelect?.value) || 3
            };

            localStorage.setItem('rpsSettings', JSON.stringify(settings));
            applyTheme(settings.theme);
            applyLanguage(settings.language);
            totalRounds = settings.rounds;

            const currentLang = settings.language;
            alert(translations[currentLang]?.settingsSaved || '✅ Settings saved!');
        });
    }

    // === TOUCH FEEDBACK ===
    addTouchFeedback();

    // === DASTLABKI YUKLASH ===
    loadSettings();
    loadStats();
    checkAchievements();

    // === SAHIFAGA O'TISH ===
    function showPage(pageId) {
        document.querySelectorAll('.screen').forEach(screen => {
            if (screen.id !== pageId) {
                screen.classList.remove('active');
                setTimeout(() => {
                    screen.classList.add('hidden');
                }, 600);
            }
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            setTimeout(() => {
                targetPage.classList.add('active');
            }, 50);
        }

        if (pageId === 'statistics') {
            loadStats();
        } else if (pageId === 'achievements') {
            checkAchievements();
        }
    }

    // === ORQAGA QAYTISH ===
    window.goBack = function() {
        showPage('welcomeScreen');
    };

    // === MENYU TUGMALARI ===
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            showPage(page);
        });
    });

    // === FOYDALANUVCHI TANLOVI ===
    userChoices.forEach(button => {
        button.addEventListener('click', () => {
            if (!gameActive) return;

            const userChoice = button.getAttribute('data-choice');
            const computerChoice = getComputerChoice();

            computerChoiceEl.classList.add('spinning-3d');
            setTimeout(() => {
                computerChoiceEl.classList.remove('spinning-3d');
                computerChoiceEl.innerHTML = getEmoji(computerChoice);

                const result = determineWinner(userChoice, computerChoice);
                showResult(result, userChoice, computerChoice);
            }, 800);
        });
    });

    // === MODAL ICHIDAGI RESTART ===
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            computerChoiceEl.innerHTML = '?';
        });
    }

    // === KOMPYUTER TANLOVI ===
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * 3)];
    }

    // === G'OLIBNI ANIQLASH ===
    function determineWinner(user, computer) {
        if (user === computer) return 'tie';
        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            userScore++;
            userScoreEl.textContent = userScore;
            return 'win';
        } else {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            return 'lose';
        }
    }

    // === NATIJA MODALINI KO'RSATISH ===
    function showResult(result, user, computer) {
        if (!gameActive) return;

        currentRound++;

        let message = "";
        let iconClass = "";

        const lang = JSON.parse(localStorage.getItem('rpsSettings'))?.language || 'uz';
        const texts = translations[lang];

        if (result === 'win') {
            message = texts.youWon;
            iconClass = "fas fa-trophy";
            modalContent.className = "modal-content win";
        } else if (result === 'lose') {
            message = texts.youLost;
            iconClass = "fas fa-frown";
            modalContent.className = "modal-content lose";
        } else {
            message = texts.itsATie;
            iconClass = "fas fa-handshake";
            modalContent.className = "modal-content tie";
        }

        modalMessage.textContent = message;
        modalIcon.className = iconClass;

        setTimeout(() => {
            if (navigator.vibrate) {
                navigator.vibrate(150);
            }
            modalOverlay.classList.remove('hidden');
            modalOverlay.classList.add('active');
        }, 400);

        if (currentRound >= totalRounds) {
            gameActive = false;
            setTimeout(() => {
                let gameEndMessage = texts.gameEnded;
                gameEndMessage = gameEndMessage.replace('{{user}}', userScore).replace('{{computer}}', computerScore);
                alert(gameEndMessage);
                saveFinalGameResult();
                resetGameAfterRounds();
            }, 1000);
        }
    }

    // === EMOJI (FONT AWESOME ICONS) QAYTARISH ===
    function getEmoji(choice) {
        switch(choice) {
            case 'rock': return '<i class="fa-solid fa-hand-rock"></i>';
            case 'paper': return '<i class="fa-solid fa-hand-paper"></i>';
            case 'scissors': return '<i class="fa-solid fa-hand-scissors"></i>';
            default: return '?';
        }
    }

    // === DASTLABKI HOLAT: WELCOME SCREEN ===
    welcomeScreen.classList.add('active');
});