// App State Management
const AppState = {
    currentScreen: 'splash-screen',
    onboardingStep: 0,
    userProgress: {
        points: 150,
        streak: 3,
        storiesCompleted: 3,
        quizzesCompleted: 12,
        lectioSessions: 1
    },
    currentStory: null,
    currentPanel: 1,
    totalPanels: 5,
    quiz: {
        currentQuestion: 1,
        totalQuestions: 5,
        selectedOption: null,
        score: 0,
        timeLeft: 120
    }
};

// Local Storage Management
const Storage = {
    save: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Storage not available, using memory only');
        }
    },
    
    load: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Storage not available, using default value');
            return defaultValue;
        }
    }
};

// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        AppState.currentScreen = screenId;
    }
}

function goBack() {
    const backRoutes = {
        'stories-screen': 'home-screen',
        'story-detail-screen': 'stories-screen',
        'quiz-screen': 'story-detail-screen',
        'quiz-result-screen': 'home-screen'
    };
    
    const previousScreen = backRoutes[AppState.currentScreen];
    if (previousScreen) {
        showScreen(previousScreen);
    }
}

// Onboarding Flow
function startOnboarding() {
    showScreen('onboarding-screen');
    updateOnboardingProgress();
}

function nextOnboardingSlide() {
    const slides = document.querySelectorAll('.onboarding-slide');
    const currentSlide = slides[AppState.onboardingStep];
    
    if (AppState.onboardingStep < slides.length - 1) {
        currentSlide.classList.remove('active');
        AppState.onboardingStep++;
        slides[AppState.onboardingStep].classList.add('active');
        updateOnboardingProgress();
    } else {
        completeOnboarding();
    }
}

function skipOnboarding() {
    completeOnboarding();
}

function completeOnboarding() {
    showScreen('home-screen');
    updateUserStats();
    showToast('Bem-vindo ao Sementes da Fé! 🌟');
}

function updateOnboardingProgress() {
    const progress = ((AppState.onboardingStep + 1) / 3) * 100;
    document.getElementById('onboarding-progress').style.width = progress + '%';
}

// Home Screen Functions
function updateUserStats() {
    document.getElementById('user-points').textContent = AppState.userProgress.points;
    document.getElementById('user-streak').textContent = AppState.userProgress.streak;
}

function openStories() {
    showScreen('stories-screen');
}

function openQuizzes() {
    showToast('Em desenvolvimento! 🚧');
}

function openLectioDivina() {
    showToast('Lectio Divina em breve! 🙏');
}

function openCommunity() {
    showToast('Comunidade em desenvolvimento! 👥');
}

// Bottom Navigation
function showHome() {
    showScreen('home-screen');
    updateNavigation('home');
}

function showProgress() {
    showToast('Tela de Progresso em desenvolvimento! 📊');
    updateNavigation('progress');
}

function showProfile() {
    showToast('Perfil em desenvolvimento! 👤');
    updateNavigation('profile');
}

function showSettings() {
    showToast('Configurações em breve! ⚙️');
    updateNavigation('settings');
}

function updateNavigation(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const navItems = ['home', 'progress', 'profile', 'settings'];
    const index = navItems.indexOf(activeItem);
    if (index >= 0) {
        document.querySelectorAll('.nav-item')[index].classList.add('active');
    }
}

// Story Functions
function openStory(storyId) {
    AppState.currentStory = storyId;
    AppState.currentPanel = 1;
    
    const storyTitles = {
        1: 'A Criação',
        2: 'Noé e a Arca',
        3: 'Moisés e o Êxodo'
    };
    
    if (storyId <= 3) {
        document.getElementById('story-title').textContent = storyTitles[storyId];
        showScreen('story-detail-screen');
        updateStoryNavigation();
    } else {
        showToast('História ainda não disponível! 🔒');
    }
}

function previousPanel() {
    if (AppState.currentPanel > 1) {
        AppState.currentPanel--;
        updateStoryNavigation();
        showToast(`Painel ${AppState.currentPanel}`);
    }
}

function nextPanel() {
    if (AppState.currentPanel < AppState.totalPanels) {
        AppState.currentPanel++;
        updateStoryNavigation();
        showToast(`Painel ${AppState.currentPanel}`);
    }
}

function updateStoryNavigation() {
    const prevBtn = document.querySelector('.story-navigation .nav-btn:first-child');
    const nextBtn = document.querySelector('.story-navigation .nav-btn:last-child');
    const indicator = document.querySelector('.current-panel');
    
    prevBtn.disabled = AppState.currentPanel === 1;
    nextBtn.disabled = AppState.currentPanel === AppState.totalPanels;
    indicator.textContent = AppState.currentPanel;
}

function addToFavorites() {
    showToast('História adicionada aos favoritos! ❤️');
    
    // Animate heart icon
    const heartBtn = document.querySelector('.action-btn.secondary i');
    heartBtn.style.color = '#ff6b6b';
    heartBtn.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        heartBtn.style.transform = 'scale(1)';
    }, 300);
}

// Quiz Functions
function startQuiz() {
    resetQuiz();
    showScreen('quiz-screen');
    startQuizTimer();
    loadQuestion();
}

function resetQuiz() {
    AppState.quiz = {
        currentQuestion: 1,
        totalQuestions: 5,
        selectedOption: null,
        score: 0,
        timeLeft: 120
    };
}

function startQuizTimer() {
    const timer = setInterval(() => {
        AppState.quiz.timeLeft--;
        updateTimerDisplay();
        
        if (AppState.quiz.timeLeft <= 0) {
            clearInterval(timer);
            showToast('Tempo esgotado! ⏰');
            showQuizResult();
        }
    }, 1000);
    
    // Store timer reference for cleanup
    AppState.quizTimer = timer;
}

function updateTimerDisplay() {
    const minutes = Math.floor(AppState.quiz.timeLeft / 60);
    const seconds = AppState.quiz.timeLeft % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = display;
}

function loadQuestion() {
    const questions = [
        {
            text: "Quem enviou Moisés para libertar o povo de Israel?",
            options: ["O Faraó", "Deus", "Arão", "O povo de Israel"],
            correct: "B"
        },
        {
            text: "Quantas pragas Deus enviou sobre o Egito?",
            options: ["8", "10", "12", "7"],
            correct: "B"
        },
        {
            text: "Como o povo de Israel atravessou o Mar Vermelho?",
            options: ["De barco", "Nadando", "O mar se abriu", "Por uma ponte"],
            correct: "C"
        },
        {
            text: "O que Deus deu a Moisés no Monte Sinai?",
            options: ["Uma vara", "Os Dez Mandamentos", "Comida", "Água"],
            correct: "B"
        },
        {
            text: "Por quantos anos o povo vagou no deserto?",
            options: ["30 anos", "50 anos", "40 anos", "20 anos"],
            correct: "C"
        }
    ];
    
    const currentQ = questions[AppState.quiz.currentQuestion - 1];
    document.getElementById('question-text').textContent = currentQ.text;
    document.getElementById('current-question').textContent = AppState.quiz.currentQuestion;
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        option.querySelector('.option-letter').textContent = letter;
        option.querySelector('.option-text').textContent = currentQ.options[index];
        option.classList.remove('selected');
        option.setAttribute('data-letter', letter);
    });
    
    AppState.quiz.selectedOption = null;
    document.querySelector('.confirm-btn').disabled = true;
    
    updateQuizProgress();
}

function selectOption(element, letter) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    element.classList.add('selected');
    AppState.quiz.selectedOption = letter;
    
    // Enable confirm button
    document.querySelector('.confirm-btn').disabled = false;
}

function confirmAnswer() {
    const correctAnswers = ["B", "B", "C", "B", "C"];
    const isCorrect = AppState.quiz.selectedOption === correctAnswers[AppState.quiz.currentQuestion - 1];
    
    if (isCorrect) {
        AppState.quiz.score++;
        showToast('Resposta correta! ✅');
        AppState.userProgress.points += 20;
    } else {
        showToast('Resposta incorreta! ❌');
    }
    
    setTimeout(() => {
        if (AppState.quiz.currentQuestion < AppState.quiz.totalQuestions) {
            AppState.quiz.currentQuestion++;
            loadQuestion();
        } else {
            clearInterval(AppState.quizTimer);
            showQuizResult();
        }
    }, 1500);
}

function updateQuizProgress() {
    const progress = (AppState.quiz.currentQuestion / AppState.quiz.totalQuestions) * 100;
    document.getElementById('quiz-progress').style.width = progress + '%';
}

function showQuizResult() {
    const percentage = Math.round((AppState.quiz.score / AppState.quiz.totalQuestions) * 100);
    const pointsEarned = AppState.quiz.score * 20;
    
    // Update result display
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = 
        `${AppState.quiz.score}/${AppState.quiz.totalQuestions}`;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = `${percentage}%`;
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = `+${pointsEarned}`;
    
    // Update user progress
    AppState.userProgress.points += pointsEarned;
    AppState.userProgress.quizzesCompleted++;
    
    // Save progress
    Storage.save('userProgress', AppState.userProgress);
    
    showScreen('quiz-result-screen');
    
    // Check for achievements
    if (percentage >= 80) {
        setTimeout(() => {
            showToast('🏆 Conquista desbloqueada: Estudioso das Escrituras!');
        }, 1000);
    }
}

// Utility Functions
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: 'Sementes da Fé - Quiz Concluído!',
            text: `Acabei de completar um quiz no Sementes da Fé e consegui ${AppState.quiz.score}/${AppState.quiz.totalQuestions} acertos! 🌟`,
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback for browsers without Web Share API
        const text = `Acabei de completar um quiz no Sementes da Fé e consegui ${AppState.quiz.score}/${AppState.quiz.totalQuestions} acertos! 🌟`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            showToast('Resultado copiado para a área de transferência! 📋');
        } else {
            showToast('Compartilhamento não disponível neste navegador 📱');
        }
    }
}

function backToHome() {
    showScreen('home-screen');
    updateUserStats();
    updateNavigation('home');
}

// Toast Notification System
function showToast(message, duration = 3000) {
    const toast = document.getElementById('notification-toast');
    const messageElement = document.getElementById('toast-message');
    
    messageElement.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Touch and Gesture Handling
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Only process horizontal swipes that are significant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (AppState.currentScreen === 'story-detail-screen') {
            if (diffX > 0) {
                // Swipe left - next panel
                nextPanel();
            } else {
                // Swipe right - previous panel
                previousPanel();
            }
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (AppState.currentScreen === 'story-detail-screen') {
                previousPanel();
            }
            break;
        case 'ArrowRight':
            if (AppState.currentScreen === 'story-detail-screen') {
                nextPanel();
            }
            break;
        case 'Enter':
            if (AppState.currentScreen === 'quiz-screen') {
                const confirmBtn = document.querySelector('.confirm-btn');
                if (!confirmBtn.disabled) {
                    confirmAnswer();
                }
            }
            break;
        case 'Escape':
            goBack();
            break;
    }
});

// Haptic Feedback (if supported)
function triggerHaptic(type = 'light') {
    if (navigator.vibrate) {
        const patterns = {
            light: 10,
            medium: 50,
            heavy: 100
        };
        navigator.vibrate(patterns[type] || 10);
    }
}

// Achievement System
const Achievements = {
    list: [
        {
            id: 'first_story',
            name: 'Primeira Semente',
            description: 'Complete sua primeira história',
            points: 50,
            icon: 'fas fa-seedling',
            condition: () => AppState.userProgress.storiesCompleted >= 1
        },
        {
            id: 'quiz_master',
            name: 'Mestre das Escrituras',
            description: 'Complete 10 quizzes',
            points: 100,
            icon: 'fas fa-graduation-cap',
            condition: () => AppState.userProgress.quizzesCompleted >= 10
        },
        {
            id: 'streak_week',
            name: 'Fiel da Semana',
            description: 'Mantenha uma sequência de 7 dias',
            points: 75,
            icon: 'fas fa-fire',
            condition: () => AppState.userProgress.streak >= 7
        },
        {
            id: 'point_collector',
            name: 'Colecionador de Pontos',
            description: 'Acumule 500 pontos',
            points: 25,
            icon: 'fas fa-star',
            condition: () => AppState.userProgress.points >= 500
        }
    ],
    
    check: function() {
        const unlocked = Storage.load('unlockedAchievements', []);
        
        this.list.forEach(achievement => {
            if (!unlocked.includes(achievement.id) && achievement.condition()) {
                this.unlock(achievement);
                unlocked.push(achievement.id);
            }
        });
        
        Storage.save('unlockedAchievements', unlocked);
    },
    
    unlock: function(achievement) {
        AppState.userProgress.points += achievement.points;
        showToast(`🏆 ${achievement.name} desbloqueada! +${achievement.points} pontos`);
        triggerHaptic('medium');
    }
};

// Daily Challenge System
const DailyChallenges = {
    current: null,
    
    generate: function() {
        const challenges = [
            {
                id: 'kindness_act',
                title: 'Atos de Bondade',
                description: 'Pratique um ato de bondade hoje',
                points: 30,
                icon: 'fas fa-heart'
            },
            {
                id: 'prayer_time',
                title: 'Momento de Oração',
                description: 'Dedique 10 minutos à oração',
                points: 25,
                icon: 'fas fa-praying-hands'
            },
            {
                id: 'scripture_reading',
                title: 'Leitura Sagrada',
                description: 'Leia um capítulo da Bíblia',
                points: 35,
                icon: 'fas fa-book-open'
            },
            {
                id: 'help_someone',
                title: 'Ajudar o Próximo',
                description: 'Ajude alguém necessitado hoje',
                points: 40,
                icon: 'fas fa-hands-helping'
            }
        ];
        
        const randomIndex = Math.floor(Math.random() * challenges.length);
        this.current = challenges[randomIndex];
        return this.current;
    },
    
    complete: function() {
        if (this.current) {
            AppState.userProgress.points += this.current.points;
            showToast(`Desafio concluído! +${this.current.points} pontos 🎉`);
            Storage.save('userProgress', AppState.userProgress);
            updateUserStats();
            
            // Generate new challenge for tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            Storage.save('nextChallengeDate', tomorrow.toISOString());
        }
    }
};

// Notification System
const Notifications = {
    permission: 'default',
    
    requestPermission: async function() {
        if ('Notification' in window) {
            this.permission = await Notification.requestPermission();
            return this.permission === 'granted';
        }
        return false;
    },
    
    scheduleDaily: function() {
        if (this.permission === 'granted') {
            // Schedule daily reminder notification
            setTimeout(() => {
                new Notification('Sementes da Fé 🌟', {
                    body: 'Que tal nutrir sua fé hoje? Venha descobrir novas histórias!',
                    icon: '/icon-192.png',
                    badge: '/badge-72.png'
                });
            }, 24 * 60 * 60 * 1000); // 24 hours
        }
    },
    
    show: function(title, body, options = {}) {
        if (this.permission === 'granted') {
            return new Notification(title, {
                body,
                icon: '/icon-192.png',
                badge: '/badge-72.png',
                ...options
            });
        }
    }
};

// Data Analytics (Privacy-Friendly)
const Analytics = {
    events: [],
    
    track: function(event, data = {}) {
        const eventData = {
            event,
            timestamp: new Date().toISOString(),
            ...data
        };
        
        this.events.push(eventData);
        
        // Keep only last 100 events to manage memory
        if (this.events.length > 100) {
            this.events = this.events.slice(-100);
        }
        
        // Save to local storage for persistence
        Storage.save('analytics', this.events);
    },
    
    getStats: function() {
        const events = this.events;
        return {
            totalEvents: events.length,
            storiesViewed: events.filter(e => e.event === 'story_viewed').length,
            quizzesCompleted: events.filter(e => e.event === 'quiz_completed').length,
            timeSpent: this.calculateTimeSpent()
        };
    },
    
    calculateTimeSpent: function() {
        const sessions = this.events.filter(e => e.event === 'session_start');
        const sessionEnds = this.events.filter(e => e.event === 'session_end');
        
        let totalTime = 0;
        sessions.forEach((start, index) => {
            const end = sessionEnds[index];
            if (end) {
                totalTime += new Date(end.timestamp) - new Date(start.timestamp);
            }
        });
        
        return Math.round(totalTime / 1000 / 60); // Return minutes
    }
};

// Performance Monitoring
const Performance = {
    startTime: Date.now(),
    
    measureLoadTime: function() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            Analytics.track('performance_load', { loadTime });
        }
    },
    
    measureInteraction: function(action) {
        const interactionTime = Date.now() - this.startTime;
        Analytics.track('performance_interaction', { action, time: interactionTime });
    }
};

// Initialize App
function initializeApp() {
    console.log('🌟 Sementes da Fé - Inicializando...');
    
    // Load saved progress
    const savedProgress = Storage.load('userProgress');
    if (savedProgress) {
        Object.assign(AppState.userProgress, savedProgress);
    }
    
    // Initialize analytics
    const savedAnalytics = Storage.load('analytics', []);
    Analytics.events = savedAnalytics;
    Analytics.track('session_start');
    
    // Check for achievements
    Achievements.check();
    
    // Generate daily challenge
    DailyChallenges.generate();
    
    // Request notification permission after user interaction
    setTimeout(() => {
        Notifications.requestPermission();
    }, 5000);
    
    // Measure performance
    Performance.measureLoadTime();
    
    // Add event listeners for user interactions
    document.addEventListener('click', function(e) {
        Performance.measureInteraction('click');
        triggerHaptic('light');
    });
    
    // Handle page visibility for session tracking
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            Analytics.track('session_pause');
        } else {
            Analytics.track('session_resume');
        }
    });
    
    // Handle page unload
    window.addEventListener('beforeunload', function() {
        Analytics.track('session_end');
        Storage.save('userProgress', AppState.userProgress);
    });
    
    console.log('✅ App inicializada com sucesso!');
}

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registrado com sucesso');
            })
            .catch(function(error) {
                console.log('❌ Falha ao registrar Service Worker:', error);
            });
    });
}

// Auto-save progress every 30 seconds
setInterval(() => {
    Storage.save('userProgress', AppState.userProgress);
}, 30000);

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Expose global functions for debugging (only in development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.SementesDaFeDebug = {
        AppState,
        Analytics,
        Storage,
        Achievements,
        resetProgress: () => {
            Storage.save('userProgress', {
                points: 0,
                streak: 0,
                storiesCompleted: 0,
                quizzesCompleted: 0,
                lectioSessions: 0
            });
            location.reload();
        },
        addPoints: (points) => {
            AppState.userProgress.points += points;
            updateUserStats();
            Storage.save('userProgress', AppState.userProgress);
        }
    };
    console.log('🔧 Debug tools available at window.SementesDaFeDebug');
}