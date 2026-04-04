// ===================================
//  SÖZ LÜĞƏTI (A1 SƏVIYYƏSI)
// ===================================

const vocabulary = [
    { de: 'Hallo', az: 'Salam', article: '' },
    { de: 'Guten Morgen', az: 'Sabahınız xeyir', article: '' },
    { de: 'Guten Tag', az: 'Gününüz xeyir', article: '' },
    { de: 'Guten Abend', az: 'Axşamınız xeyir', article: '' },
    { de: 'Gute Nacht', az: 'Gecəniz xeyirə qalsın', article: '' },
    { de: 'Auf Wiedersehen', az: 'Sizinlə vidalaşırıq', article: '' },
    { de: 'Tschüss', az: 'Sağol', article: '' },
    { de: 'Danke', az: 'Təşəkkür edirəm', article: '' },
    { de: 'Bitte', az: 'Xahiş edirəm / Buyurun', article: '' },
    { de: 'Ja', az: 'Bəli', article: '' },
    { de: 'Nein', az: 'Xeyr', article: '' },
    { de: 'der Mann', az: 'kişi', article: 'der' },
    { de: 'die Frau', az: 'qadın', article: 'die' },
    { de: 'das Kind', az: 'uşaq', article: 'das' },
    { de: 'das Haus', az: 'ev', article: 'das' },
    { de: 'die Stadt', az: 'şəhər', article: 'die' },
    { de: 'das Auto', az: 'maşın', article: 'das' },
    { de: 'der Tisch', az: 'masa', article: 'der' },
    { de: 'die Tür', az: 'qapı', article: 'die' },
    { de: 'das Buch', az: 'kitab', article: 'das' },
    { de: 'Wasser', az: 'su', article: 'das' },
    { de: 'Brot', az: 'çörək', article: 'das' },
    { de: 'Milch', az: 'süd', article: 'die' },
    { de: 'Kaffee', az: 'qəhvə', article: 'der' },
    { de: 'Tee', az: 'çay', article: 'der' },
    { de: 'Apfel', az: 'alma', article: 'der' },
    { de: 'Banane', az: 'banan', article: 'die' },
    { de: 'ich', az: 'mən', article: '' },
    { de: 'du', az: 'sən', article: '' },
    { de: 'er', az: 'o (kişi)', article: '' },
    { de: 'sie', az: 'o (qadın) / onlar', article: '' },
    { de: 'wir', az: 'biz', article: '' },
    { de: 'ihr', az: 'siz (cəm)', article: '' },
    { de: 'Sie', az: 'Siz (rəsmi)', article: '' },
    { de: 'haben', az: 'olmaq', article: '' },
    { de: 'sein', az: 'olmaq (fəil)', article: '' },
    { de: 'machen', az: 'etmək', article: '' },
    { de: 'gehen', az: 'getmək', article: '' },
    { de: 'kommen', az: 'gəlmək', article: '' },
    { de: 'essen', az: 'yemək', article: '' },
    { de: 'trinken', az: 'içmək', article: '' },
    { de: 'schlafen', az: 'yatmaq', article: '' },
    { de: 'arbeiten', az: 'işləmək', article: '' },
    { de: 'lernen', az: 'öyrənmək', article: '' },
    { de: 'spielen', az: 'oynamaq', article: '' }
];

// ===================================
//  DƏYIŞƏNLƏR
// ===================================

let currentMode = '';
let currentQuestion = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let streak = 0;
let totalLearned = new Set();
let dailyProgress = 0;
const DAILY_GOAL = 10;

// ===================================
//  OYUN FUNKSIYALARI
// ===================================

function startGame(mode) {
    currentMode = mode;
    currentIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    // Sual yarad
    createQuestions();
    
    // UI dəyiş
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    // İlk sualı göstər
    showQuestion();
    updateProgress();
}

function createQuestions() {
    // Təsadüfi 10 söz seç
    const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
    questions = shuffled.slice(0, DAILY_GOAL);
}

function showQuestion() {
    if (currentIndex >= questions.length) {
        showResults();
        return;
    }
    
    currentQuestion = questions[currentIndex];
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    feedback.style.display = 'none';
    
    // Rejimə görə sual göstər
    switch(currentMode) {
        case 'translate':
            showTranslateQuestion();
            break;
        case 'listen':
            showListenQuestion();
            break;
        case 'match':
            showMatchQuestion();
            break;
    }
    
    updateProgress();
}

function showTranslateQuestion() {
    document.getElementById('questionType').textContent = 'Tərcümə edin:';
    document.getElementById('questionWord').textContent = currentQuestion.de;
    document.getElementById('speakBtn').style.display = 'inline-block';
    document.getElementById('answers').style.display = 'grid';
    document.getElementById('inputAnswer').style.display = 'none';
    
    // 4 təsadüfi cavab variantı (1 doğru + 3 səhv)
    const options = generateOptions(currentQuestion);
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = options.map(opt => `
        <button onclick="checkAnswer('${opt.az}')" class="answer-btn" data-answer="${opt.az}">
            ${opt.az}
        </button>
    `).join('');
}

function showListenQuestion() {
    document.getElementById('questionType').textContent = 'Eşitdiyinizi yazın:';
    document.getElementById('questionWord').textContent = '🔊';
    document.getElementById('speakBtn').style.display = 'none';
    document.getElementById('answers').style.display = 'none';
    document.getElementById('inputAnswer').style.display = 'flex';
    
    // Input-u təmizlə
    document.getElementById('textInput').value = '';
    
    // Avtomatik oxu
    setTimeout(() => speakWord(), 500);
}

function showMatchQuestion() {
    document.getElementById('questionType').textContent = 'Uyğun gələn cütlüyü tapın:';
    document.getElementById('questionWord').textContent = currentQuestion.de;
    document.getElementById('speakBtn').style.display = 'inline-block';
    document.getElementById('answers').style.display = 'grid';
    document.getElementById('inputAnswer').style.display = 'none';
    
    // 4 variant
    const options = generateOptions(currentQuestion);
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = options.map(opt => `
        <button onclick="checkAnswer('${opt.az}')" class="answer-btn" data-answer="${opt.az}">
            ${opt.az}
        </button>
    `).join('');
}

function generateOptions(correct) {
    const options = [correct];
    const others = vocabulary.filter(w => w.az !== correct.az);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);
    options.push(...shuffled);
    return options.sort(() => Math.random() - 0.5);
}

// ===================================
//  CAVAB YOXLAMA
// ===================================

function checkAnswer(selectedAnswer) {
    const isCorrect = selectedAnswer === currentQuestion.az;
    handleAnswer(isCorrect, selectedAnswer);
}

function checkTextAnswer() {
    const input = document.getElementById('textInput');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = currentQuestion.de.toLowerCase();
    
    // Yaxın cavabları da qəbul et
    const isCorrect = userAnswer === correctAnswer || 
                     levenshteinDistance(userAnswer, correctAnswer) <= 2;
    
    handleAnswer(isCorrect, userAnswer);
}

function handleAnswer(isCorrect, answer) {
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Düymələri deaktiv et
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    if (isCorrect) {
        // Doğru cavab
        feedback.className = 'feedback correct';
        feedback.innerHTML = `
            <div class="feedback-icon">✅</div>
            <div>Doğru! +10 xal</div>
        `;
        
        // Doğru düyməni yaşıl et
        buttons.forEach(btn => {
            if (btn.dataset.answer === currentQuestion.az) {
                btn.classList.add('correct');
            }
        });
        
        score += 10;
        correctAnswers++;
        streak++;
        totalLearned.add(currentQuestion.de);
        
        // Səsli təsdiq
        speak('Richtig!', 'de');
        
    } else {
        // Səhv cavab
        feedback.className = 'feedback wrong';
        feedback.innerHTML = `
            <div class="feedback-icon">❌</div>
            <div>Səhv! Doğru cavab: ${currentQuestion.az}</div>
        `;
        
        // Səhv düyməni qırmızı et
        buttons.forEach(btn => {
            if (btn.dataset.answer === answer) {
                btn.classList.add('wrong');
            }
            if (btn.dataset.answer === currentQuestion.az) {
                btn.classList.add('correct');
            }
        });
        
        wrongAnswers++;
        streak = 0;
        
        // Səsli xəbərdarlıq
        speak('Falsch!', 'de');
    }
    
    feedback.style.display = 'block';
    dailyProgress++;
    
    // Statistikaları yenilə
    updateStats();
    
    // Növbəti suala keç
    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1500);
}

// ===================================
//  SƏS FUNKSIYALARI
// ===================================

function speakWord() {
    if (!currentQuestion) return;
    speak(currentQuestion.de, 'de');
}

function speak(text, lang) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'de' ? 'de-DE' : 'az-AZ';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// ===================================
//  NƏTICƏLƏR
// ===================================

function showResults() {
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    document.getElementById('earnedPoints').textContent = score;
    
    // Sözləri yadda saxla
    saveProgress();
    updateDictionary();
}

function resetGame() {
    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'none';
    
    dailyProgress = 0;
    updateProgress();
}

// ===================================
//  STATISTIKA VƏ YADDAŞ
// ===================================

function updateStats() {
    document.getElementById('streak').textContent = streak;
    document.getElementById('totalScore').textContent = 
        parseInt(localStorage.getItem('totalScore') || 0) + score;
    document.getElementById('learnedWords').textContent = totalLearned.size;
}

function updateProgress() {
    const percent = (dailyProgress / DAILY_GOAL) * 100;
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressText').textContent = `${dailyProgress}/${DAILY_GOAL}`;
}

function updateDictionary() {
    const wordList = document.getElementById('wordList');
    
    if (totalLearned.size === 0) {
        wordList.innerHTML = '<p class="empty-dict">Hələ heç bir söz öyrənməmisiniz</p>';
        return;
    }
    
    const learnedWords = vocabulary.filter(w => totalLearned.has(w.de));
    
    wordList.innerHTML = learnedWords.map(w => `
        <div class="word-tag">
            <span class="de">${w.article ? w.article + ' ' : ''}${w.de}</span>
            <span>-</span>
            <span class="az">${w.az}</span>
        </div>
    `).join('');
}

function saveProgress() {
    const saved = JSON.parse(localStorage.getItem('learnedWords') || '[]');
    const combined = [...new Set([...saved, ...Array.from(totalLearned)])];
    localStorage.setItem('learnedWords', JSON.stringify(combined));
    
    const currentTotal = parseInt(localStorage.getItem('totalScore') || 0);
    localStorage.setItem('totalScore', currentTotal + score);
}

function loadProgress() {
    const saved = JSON.parse(localStorage.getItem('learnedWords') || '[]');
    saved.forEach(word => totalLearned.add(word));
    
    document.getElementById('totalScore').textContent = 
        localStorage.getItem('totalScore') || 0;
    document.getElementById('learnedWords').textContent = totalLearned.size;
    
    updateDictionary();
}

// ===================================
//  KÖMƏKÇI FUNKSIYA (Levenshtein məsafəsi)
// ===================================

function levenshteinDistance(a, b) {
    const matrix = [];
    
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
}

// ===================================
//  BAŞLATMA
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateProgress();
    
    // Enter düyməsi ilə yoxlama
    document.getElementById('textInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkTextAnswer();
    });
});