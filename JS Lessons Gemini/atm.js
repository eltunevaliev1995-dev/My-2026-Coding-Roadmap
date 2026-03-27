// 1. MƏLUMAT


let  balance  = 2450.00;
let  pinInput = "";
let  history  = [];
const CORRECT_PIN = "1234";


// 2. PIN KLAVIATURASI
function pressKey(num) {

  if(pinInput.length >= 4) return;
  
  pinInput += num;
  updateDots();

}



function updateDots() {

   for(let i = 0; i < 4; i++) {
    
      const dot = document.getElementById("dot-" + i);

      if(i < pinInput.length ) {

         dot.classList.add("filled");

      } else {

         dot.classList.remove("filled");
 
      }  

   }      
}


function clearPin() {

   pinInput = pinInput.slice(0, -1);
   updateDots();       
}


function confirmPin(){

   if(pinInput === CORRECT_PIN) {

      goTo("page-menu");
      updateBalance();   
      pinInput = "";
      updateDots();

   } else {

      pinInput = "";
      updateDots();
      flashScreen();  
   }     
}


function flashScreen(){

   const screen = document.getElementById("screen");
   screen.style.border = "2px solid  #e94560";
   setTimeout(function (){
 
     screen.style.border = "2px solid #1a3a20"     

   }, 500);
}



// 3. SƏHİFƏ KEÇİDİ



function goTo(pageId){

  const pages = document.querySelectorAll(".screen-page");
  pages.forEach(function (p) {
  
    p.classList.remove("active");     
 
  });     
  document.getElementById(pageId).classList.add("active");

}


// 4. BALANS

function updateBalance(){

  const el = document.getElementById("bal-display");
  el.innerText = balance.toFixed(2) + "₼";  

}



// 5. SÜRƏTLİ MƏBLƏĞ
function setAmount(val) {

  document.getElementById("withdraw-amount").value = val;        

}



function setDepAmount(val) {

   document.getElementById("deposit-amount").value = val; 
          
}



// 6. ÇIXARIŞ 

function doWithdraw(){

  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  
  if(isNaN(amount) || amount <= 0) {

    showResult("✗", "XƏTA", "Düzgün məbləğ daxil edin");
    return;   
  }

  if(amount > balance){

     showResult("✗", "XƏTA", "Balansınız kifayət deyil");
     return;

  }


  balance -= amount;
  addHistory("Çıxarış", -amount);
  updateBalance();
  document.getElementById("withdraw-amount").value = "";
  showResult("✓", "UĞURLU", amount.toFixed(2) + " ₼ verildi");

}


// 7. YATIRIM
function doDeposit(){

  const amount = parseFloat(document.getElementById("deposit-amount").value);
  
  if(isNaN(amount) || amount <= 0){
    
    showResult("✗", "XƏTA", "Düzgün məbləğ daxil edin");
    return;

  }


  balance += amount;
  addHistory("Yatırım", +amount);
  updateBalance();
  document.getElementById("deposit-amount").value = "";
  showResult("✓", "UĞURLU", amount.toFixed(2) + " ₼ yatırıldı");

}


// 8. KÖÇÜRMƏ
function doTransfer(){

   const card   =  document.getElementById("transfer-card").value.trim();
   const amount =  parseFloat(document.getElementById("transfer-amount").value);
   
   if(card === "" || isNaN(amount) || amount <= 0){

       showResult("✗", "XƏTA", "Bütün sahələri doldurun");
       return;    
   }


   if(amount > balance){

     showResult("✗", "XƏTA", "Balansınız kifayət deyil");
     return;     
   }


   balance -= amount;
   addHistory("Köçürmə", -amount);
   updateBalance();
   document.getElementById("transfer-card").value   = "";
   document.getElementById("transfer-amount").value = "";
   showResult("✓", "UĞURLU", amount.toFixed(2) + " ₼ köçürüldü");
}


// 9. NƏTİCƏ SƏHİFƏSİ
function showResult(icon, title, msg){

  document.getElementById("result-icon").innerText  = icon;
  document.getElementById("result-title").innerText = title;
  document.getElementById("result-msg").innerText = msg;
  
  
  const iconEl = document.getElementById("result-icon");
  if(icon === "✓"){

    iconEl.style.color = "#00ff88";
    iconEl.style.textShadow = "0 0 20px #00ff88";

  } else {

    iconEl.style.color = "#e94560";
    iconEl.style.textShadow = "0 0 20px #e94560";      
  }
  goTo("page-result");
}


//  10. TARİX
function addHistory(label,amount){

   const now = new Date();       
   const dateStr = now.toLocaleDateString("az-Az",{
     
     day: "numeric",   month: "short",
     hour: "2-digit",  minute: "2-digit"

   });


   history.unshift({label, amount, date: dateStr});
   renderHistory();

}


function renderHistory(){

   const ul = document.getElementById("history-ul");
   
   if(history.length === 0) {

      ul.innerHTML = '<li class="no-history">Hələ heç bir əməliyyat yoxdur</li>';
      return;    
   }


   ul.innerHTML = "";

   history.forEach(function (item){

      const li = document.createElement("li");
      li.className = "history-item";
      
      const isPlus = item.amount > 0

      li.innerHTML = `
       
         <span class="h-label">${item.label}</span>
         <span class="h-amount ${isPlus ? "plus" : "minus"}">
            ${isPlus ? "+" : ""}${item.amount.toFixed(2)} ₼
         </span>
         <span class="h-date">${item.date}</span
      `;

   ul.appendChild(li);
   });
}