// English: Function definition named 'calculate' 
// Azərbaycanca: 'calculate' adlı funksiyanın başlanğıcı
function calculate() {
 
    // English: Define variables - get values from inputs 
   // Azərbaycanca: Dəyişənləri təyin edirik - inputlardan dəyərləri götürürük
   let price = parseFloat(document.getElementById("price").value);
   // English: Convert product price to decimal number 
  // Azərbaycanca: Məhsul qiymətini onluq rəqəmə çevirir


  // English: Convert product quantity to integer 
  // Azərbaycanca: Məhsul sayını tam ədədə çevirir
  let quantity = parseInt(document.getElementById("quantity").value);


  // English: Get discount code and remove extra spaces 
 // Azərbaycanca: Endirim kodunu götürür və artıq boşluqları silir
 let discount = document.getElementById("discount").value.trim();

 let result  = document.getElementById("result");


 // English: Perform calculation - multiply price by quantity 
// Azərbaycanca: Hesablama aparırıq - qiyməti say ilə vururuq
let total = price * quantity; // Multiplication - Vurma


// English: Apply discount codes 
// Azərbaycanca: Endirim kodlarını yoxlayırıq
if(discount === "SALE10"){

  // English: If code is SALE10, subtract 10% from total
  // Azərbaycanca: Əgər kod SALE10-dursa, ümumi məbləğin 10%-i çıxılır
  total = total - (total * 0.10); // Subtraction + Percentage - Çıxma + Faiz
  


} else if (discount === "HALF") {

   // English: If code is HALF, divide total by 2
  // Azərbaycanca: Əgər kod HALF-dırsa, ümumi məbləğ 2-yə bölünür
 total = total / 2;// Division - Bölmə
}

// English: Complex conditions - check different cases 
// Azərbaycanca: Mürəkkəb şərtlər - müxtəlif halları yoxlayırıq
let message = "";

// English: If total > 200 → free shipping 
// Azərbaycanca: Əgər ümumi məbləğ > 200 → pulsuz çatdırılma
if(total > 200) {

   message = "🎉 Big spender! You get free shipping! (Böyük alış-veriş! Pulsuz çatdırılma)";
 
// English: If total > 100 → discount applied 
// Azərbaycanca: Əgər ümumi məbləğ > 100 → endirim qazandınız
} else if (total > 100) {

  message = "✅ You received a discount! (Endirim qazandınız)";


// English: If total = 0 → no purchase made 
// Azərbaycanca: Əgər ümumi məbləğ = 0 → alış-veriş edilməyib
} else if(total === 0) {
  
  message = "⚠️ No purchase made! (Alış-veriş edilmədi)";     



// English: Otherwise → no discount 
// Azərbaycanca: Əks halda → endirim yoxdur
} else {

  
 message = "❌ No discount applied. (Endirim yoxdur)";         


}

// English: Concatenation - add final total to message 
// Azərbaycanca: Mətn və rəqəmləri birləşdirmək - yekun məbləği mesaja əlavə edir
message += " | Final Total: $" + total;


// English: Boolean check - true/false condition 
// Azərbaycanca: Boolean yoxlaması - doğru/yalnış şərt
let eligible = (total >=50) // true/false
if(eligible) {

    // English: If total ≥ 50 → eligible for bonus gift 
    // Azərbaycanca: Əgər ümumi məbləğ ≥ 50 → bonus hədiyyə uyğundur    
    message += " | Eligible for bonus gift! (Bonus hədiyyə üçün uyğundur)";

// English: If total < 50 → not eligible 
// Azərbaycanca: Əgər ümumi məbləğ < 50 → bonus hədiyyə yoxdur    
} else {
 
   message += " | Not eligible for bonus gift. (Bonus hədiyyə üçün uyğun deyil)";     

}


// English: Display result in HTML element with id 'result' 
// Azərbaycanca: Nəticəni HTML-də 'result' id-li elementdə göstərir
document.getElementById("result").innerHTML = message;


}


function reset() {
  // English: Reset function clears all inputs and result
  // Azərbaycanca: Reset funksiyası bütün inputları və nəticəni təmizləyir

  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("result").innerText = "";
}
