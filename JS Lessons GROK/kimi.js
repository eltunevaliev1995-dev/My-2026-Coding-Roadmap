// Variables / Dəyişənlər
let currentOperand = '0';   // EN: Current number being entered / AZ: Hal-hazırda daxil edilən rəqəm
let previousOperand = '';   // EN: Previous number before operation / AZ: Əməliyyatdan əvvəlki rəqəm
let operation = null;       // EN: Selected operator (+, -, ×, ÷, %) / AZ: Seçilmiş operator
let shouldResetScreen = false; // EN: Flag to reset screen after calculation / AZ: Hesablamadan sonra ekranı sıfırlamaq üçün işarə

const currentDisplay = document.getElementById('current');   // EN: Shows current number / AZ: Cari rəqəmi göstərir
const previousDisplay = document.getElementById('previous'); // EN: Shows previous number & operator / AZ: Əvvəlki rəqəm və operatoru göstərir
const historyList = document.getElementById('historyList');  // EN: Stores calculation history / AZ: Hesablama tarixçəsini saxlayır

// UI Update / Ekranın yenilənməsi
function updateDisplay() {
    currentDisplay.textContent = currentOperand; // EN: Update current display / AZ: Cari ekranı yenilə
    if (operation != null) {
        previousDisplay.textContent = `${previousOperand} ${operation}`; // EN: Show previous + operator / AZ: Əvvəlki rəqəm + operatoru göstər
    } else {
        previousDisplay.textContent = previousOperand; // EN: Show only previous / AZ: Yalnız əvvəlkini göstər
    }
}

// Number handling / Rəqəm daxil etmə
function appendNumber(number) {
    if (shouldResetScreen) { // EN: If screen should reset, clear current / AZ: Ekran sıfırlanmalıdırsa, cari rəqəmi təmizlə
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return; // EN: Prevent multiple decimals / AZ: Birdən çox onluq nöqtəyə icazə vermə
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number; // EN: Replace 0 with new number / AZ: 0-u yeni rəqəmlə əvəz et
    } else {
        currentOperand += number; // EN: Append digit / AZ: Rəqəmi əlavə et
    }
    updateDisplay();
}

// Operator handling / Operator daxil etmə
function appendOperator(op) {
    if (operation !== null) calculate(); // EN: If operator exists, calculate first / AZ: Operator varsa, əvvəlcə hesabla
    operation = op;                      // EN: Save new operator / AZ: Yeni operatoru yadda saxla
    previousOperand = currentOperand;    // EN: Move current to previous / AZ: Cari rəqəmi əvvəlkiyə köçür
    shouldResetScreen = true;            // EN: Reset screen for next number / AZ: Növbəti rəqəm üçün ekranı sıfırla
    updateDisplay();
}

// Main calculation / Əsas hesablama
function calculate() {
    if (operation === null || shouldResetScreen) return; // EN: If no operator, stop / AZ: Operator yoxdursa, dayandır
    const prev = parseFloat(previousOperand); // EN: Convert previous to number / AZ: Əvvəlkini rəqəmə çevir
    const current = parseFloat(currentOperand); // EN: Convert current to number / AZ: Carini rəqəmə çevir
    if (isNaN(prev) || isNaN(current)) return; // EN: Stop if invalid / AZ: Əgər səhvdirsə, dayandır

    let result;
    switch (operation) {
        case '+': result = prev + current; break; // EN: Addition / AZ: Toplama
        case '-': result = prev - current; break; // EN: Subtraction / AZ: Çıxma
        case '×': result = prev * current; break; // EN: Multiplication / AZ: Vurma
        case '÷': 
            if (current === 0) { alert('Sıfıra bölmək olmaz!'); return; } // EN: Prevent division by zero / AZ: Sıfıra bölməyə icazə vermə
            result = prev / current; 
            break;
        case '%': result = prev % current; break; // EN: Modulus / AZ: Qalıq tapma
        default: return;
    }
    
    addToHistory(`${prev} ${operation} ${current}`, result); // EN: Save to history / AZ: Tarixçəyə əlavə et
    currentOperand = formatNumber(result); // EN: Format result / AZ: Nəticəni formatla
    operation = null;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

// Format number / Rəqəmi formatlama
function formatNumber(number) {
    if (!isFinite(number)) return 'Error'; // EN: Handle infinity / AZ: Sonsuzluğu idarə et
    const rounded = Math.round(number * 100000000) / 100000000; // EN: Round to 8 decimals / AZ: 8 onluğa qədər yuvarlaqla
    let stringNumber = rounded.toString();
    if (stringNumber.length > 12) stringNumber = rounded.toExponential(6); // EN: Use scientific notation if too long / AZ: Çox uzundursa, elmi yazılışdan istifadə et
    return stringNumber;
}

// Clear all / Hamısını sil
function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

// Delete last digit / Son rəqəmi sil
function deleteLast() {
    if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand[0] === '-')) {
        currentOperand = '0'; // EN: Reset to 0 / AZ: 0-a sıfırla
    } else {
        currentOperand = currentOperand.slice(0, -1); // EN: Remove last character / AZ: Son simvolu sil
    }
    updateDisplay();
}

// Add to history / Tarixçəyə əlavə et
function addToHistory(expression, result) {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `<span>${expression} =</span><span class="history-result">${formatNumber(result)}</span>`;
    historyList.insertBefore(item, historyList.firstChild); // EN: Add new history at top / AZ: Yeni tarixçəni yuxarıya əlavə et
    while (historyList.children.length > 10) historyList.removeChild(historyList.lastChild); // EN: Keep only 10 items / AZ: Yalnız 10 element saxla
}

// Keyboard Support / Klaviatura dəstəyi
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key); // EN: Digits / AZ: Rəqəmlər
    if (e.key === '.') appendNumber('.');                  // EN: Decimal point / AZ: Onluq nöqtə
    if (e.key === '+') appendOperator('+');                // EN: Plus / AZ: Toplama
    if (e.key === '-') appendOperator('-');                // EN: Minus / AZ: Çıxma
    if (e.key === '*') appendOperator('×');                // EN: Multiply / AZ: Vurma
    if (e.key === '/') appendOperator('÷');                // EN: Divide / AZ: Bölmə
    if (e.key === '%') appendOperator('%');                // EN: Modulus / AZ: Qalıq
    if (e.key === 'Enter' || e.key === '=') calculate();   // EN: Equals / AZ: Bərabər
    if (e.key === 'Escape') clearAll();                    // EN: Clear all / AZ: Hamısını sil
    if (e.key === 'Backspace') deleteLast();               // EN: Delete last digit / AZ: Son rəqəmi sil
});
