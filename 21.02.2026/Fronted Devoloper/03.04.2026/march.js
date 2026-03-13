// 1. Elementləri id-lərinə görə seçirik (Selecting elements by ID)
const incomeInput = document.getElementById("incomeInput"); // AZ: Gəlir input sahəsini seçir | EN: Selects income input field
const expenseInput = document.getElementById("expenseInput");  // AZ: Xərc input sahəsini seçir | EN: Selects expense input field
const calculateBtn = document.getElementById("calculateBtn"); // AZ: Hesablama düyməsini seçir | EN: Selects the calculate button
const resultBox = document.getElementById("resultBox"); // AZ: Nəticə qutusunu seçir | EN: Selects the result display box
const resetBtn = document.querySelector("#resetBtn"); // AZ: Nəticə qutusunu seçir | EN: Selects the result display box

// 2. Hesablama düyməsinə basıldıqda (When calculate button is clicked)
calculateBtn.addEventListener("click" , function() {

     // Rəqəmləri alırıq və rəqəmə çeviririk (Parsing input values to numbers)
     let income = parseFloat(incomeInput.value);
     let expence = parseFloat(expenseInput.value);

    // Yoxlama (Validation)
    if(isNaN(income) || isNaN(expence)) {


        resultBox.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Please enter valid numbers!"; 
        resultBox.style.color = "orange"; 
        return; 
        // AZ: Əgər dəyərlər rəqəm deyilsə, xəbərdarlıq göstərir və funksiyanı dayandırır
        // EN: If values are not numbers, shows warning and stops function
    }


   // Hesablama (Calculation)
   let balance = income - expence;
   // AZ: Balansı hesablayır (gəlir − xərc)
  // EN: Calculates balance (income − expense)


  // Nəticəni göstəririk (Updating the UI with result)
  if(balance >= 0){

          
    resultBox.innerHTML = `
            <strong>Result:</strong> ${balance.toFixed(2)} USD <br>
            <small>You are doing great! <i class="fas fa-smile"></i></small>
        `;
        resultBox.style.color = "#2ecc71"; // AZ: Yaşıl rəng → müsbət balans | EN: Green color → positive balance

  }  else {
        resultBox.innerHTML = `
            <strong>Result:</strong> ${balance.toFixed(2)} USD <br>
            <small>Be careful with your spending! <i class="fas fa-frown"></i></small>
        `;
        resultBox.style.color = "#e74c3c"; // AZ: Qırmızı rəng → mənfi balans | EN: Red color → negative balance
    }

});


// 3. Silmək düyməsi üçün funksiya (Clear function for Reset button)
resetBtn.addEventListener("click", function() {
    incomeInput.value = "";   // AZ: Gəlir inputunu sıfırlayır | EN: Clears income input
    expenseInput.value = "";  // AZ: Xərc inputunu sıfırlayır | EN: Clears expense input
    resultBox.innerHTML = "Info Reset"; // AZ: Nəticə qutusunu sıfırlayır | EN: Resets result box
    resultBox.style.color = "#555";     // AZ: Rəngi neytral edir | EN: Sets neutral color
});