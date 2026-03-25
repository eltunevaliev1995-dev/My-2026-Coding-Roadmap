/*  1. MƏLUMAT  */
let transactions = JSON.parse(localStorage.getItem("myTransactions")) || [];
// localStorage — Brauzer yaddaşı, səhifəni bağlasan da məlumatlar qalır
// localStorage.getItem("myTransactions") — "myTransactions" adlı məlumatı oxu
// JSON.parse(...) — Yaddaşda mətn kimi saxlanır, massivə çevir
// || [] — Yaddaşda heçnə yoxdursa boş massiv işlət


let currentType  = "income";
// İstifadəçinin seçdiyi tip — "income" gəlir, "expense" xərc
// Standart olaraq "income" seçili gəlir


/*  2. HTML ELEMENTLƏRİ */
const addBtn         = document.getElementById("add-btn"); // "Əlavə Et" düyməsi
const descInput      = document.getElementById("desc");   // Təsvir input sahəsi
const amountInput    = document.getElementById("amount");   // Məbləğ input sahəsi
const historyList    = document.getElementById("history-list");  // Əməliyyatların siyahısı <ul>
const balanceDisplay = document.getElementById("total-balance"); // Balans rəqəmi
const incomeDisplay  = document.getElementById("total-income");  // Ümumi gəlir
const expenseDisplay = document.getElementById("total-expense");  // Ümumi xərc
const historyCount   = document.getElementById("history-count"); // "0 əməliyyat" yazısı
const emptyState     = document.getElementById("empty-state"); // Siyahı boş olanda göstərilən blok
const toast          = document.getElementById("toast"); // Bildiriş qabı
const toastMsg       = document.getElementById("toast-msg"); // Bildiriş mətni
// document.getElementById() — HTML-dəki id="..." olan elementi tapır
// const — dəyişən, sonradan dəyişdirilmir

// 3. SƏHIFƏ AÇILDIĞINDA

updateUI();
// Səhifə açılarkən çalışır
// Yaddaşda məlumat varsa ekrana çıxarır

// 4 .DÜYMƏ KLİKİ

addBtn.addEventListener("click", function(){

// addEventListener — "Bu elementə kliklənəndə bu kodu çalıştır"
// "click" — klik hadisəsi
// function() — klik baş verəndə işə düşən kod

const text = descInput.value.trim();
// .value — istifadəçinin yazdığı mətn
// .trim() — əvvəl və arxadakı boşluqları sil: "  Market  " → "Market"

const cash = parseFloat(amountInput.value);
 // parseFloat() — mətni onluq ədədə çevir: "15.50" → 15.50
// Olmasa "15.50" mətni ilə rəqəm əməliyyatı edə bilmərik


if(text === "" || isNaN(cash) || cash <= 0){

    // text === "" — təsvir boşdurmu?
   // isNaN() — "Is Not a Number?" rəqəm deyilmi?
  // cash <= 0 — sıfır ya mənfidirmi?
  showToast("❌ Zəhmət olmasa düzgün doldurun!");
  return;
  // return — funksiyanı dayandır, aşağıya getmə
}

const finalAmount = currentType === "expense" ? -Math.abs(cash) : Math.abs(cash);
// Üçlü operator: şərt ? doğrudursa : yanlışdırsa
// Xərcdirsə → mənfi say (-15.00) — hesabdan çıxır
// Gəlirdirsə → müsbət say (+15.00) — hesaba əlavə olunur
// Math.abs() — mütləq qiymət, mənfi ədədi müsbətə çevirir


const now = new Date();
// new Date() — indiki vaxtı götür (il, ay, gün, saat, dəqiqə)

const dateStr = now.toLocaleDateString("az-Az",{

  day:"numeric", month: "short", hour:"2-digit", minute: "2-digit"
  // toLocaleDateString() — tarixi oxunaqlı mətnə çevir
  // "az-AZ" — Azərbaycan formatı
  // Nəticə: "21 Mar, 14:30" kimi

});

transactions.push({

   // .push() — massivin sonuna yeni element əlavə et
   name:   text,  // Təsvir: "Market"
   amount: finalAmount, // Məbləğ: -15.00 ya +1000.00
   type:   currentType, // Tip: "income" ya "expense"
   date:   dateStr,  // Tarix: "21 Mar, 14:30"
   id:     Date.now() // Unikal id: 1711234567890 — silmək üçün lazımdır
  // Date.now() — 1970-dan bu yana keçən millisaniyə, hər dəfə fərqlidir

});


saveAndRender();
// Yaddaşa yaz + ekranı yenilə

descInput.value = "";  // Təsvir inputunu təmizlə
amountInput.value = ""; // Məbləğ inputunu təmizlə
descInput.focus();  // .focus() — kursoru təsvir inputuna gətir, növbəti girişi sürətli olsun

showToast("✅ Əməliyyat əlavə edildi!");
// Bildiriş göstər

});


[descInput,amountInput].forEach(function(input){

// [] — massiv, hər iki inputu bir yerdə saxlayırıq
// .forEach() — hər element üçün eyni kodu çalıştır
// Hər iki inputa ayrıca yazmamaq üçün

input.addEventListener("keydown", function(e){

  // "keydown" — klaviaturada hər hansı düyməyə basılanda
  if(e.key === "Enter") addBtn.click();
   // e.key — hansı düymə basıldı?
  // Enter basıldısa → "Əlavə Et" düyməsinə klik et

});

});


// 5. TİP SEÇİMİ
function setType(type){

// HTML-dəki onclick="setType('income')" bunu çağırır
// type parametri: "income" ya "expense"

currentType = type;
// Qlobal dəyişəni yenilə

const incomeBtn  = document.getElementById("btn-income");
const expenseBtn = document.getElementById("btn-expense");
// Hər iki düyməni tap

incomeBtn.className  = "type-btn";
expenseBtn.className = "type-btn";
// Hər ikisini əvvəlcə sıfırla — aktiv class-ları sil

if(type === "income"){

  incomeBtn.className = "type-btn active-income";
  // Gəlir seçilibsə → yaşıl stil tətbiq et

} else {

  expenseBtn.className = "type-btn active-expense";
  // Xərc seçilibsə → qırmızı stil tətbiq et
}
}

// 6. UI YENİLƏMƏ
function updateUI() {
// Köhnə siyahını tamamilə sil — sonra yenidən dolduracağıq

historyList.innerHTML = "";
// Köhnə siyahını tamamilə sil — sonra yenidən dolduracağıq

let total   = 0;  // Ümumi balans
let income  = 0;  // Yalnız gəlirlər cəmi
let expense = 0;  // Yalnız xərclər cəmi

if(transactions.length === 0) {

   emptyState.style.display = "block";
   // Siyahı boşdursa "heç nə yoxdur" yazısını göstər

} else {

  emptyState.style.display = "none";
  // Siyahıda məlumat varsa onu gizlət
}

for(let i = 0; i < transactions.length; i++){

   // FOR döngüsü — massivdəki hər əməliyyatı tək-tək emal et
  // i = 0 → birinci elementdən başla
  // i < transactions.length → massiv bitənə qədər davam et
  // i++ → hər addımda i-ni 1 artır

  const item = transactions[i];
  // transactions[0] → birinci, transactions[1] → ikinci...

  const isPositive = item.amount > 0;
 // Məbləğ müsbətdirmi? true = gəlir, false = xərc

 const li = document.createElement("li");
 // Yeni <li> HTML elementi yarat — hələ ekranda yoxdur

 li.className = "history-item";
// CSS stilini tətbiq et

li.innerHTML = `
 
 <div class="item-icon ${isPositive ? "plus-icon" : "minus-icon"}">

      <i class="fas ${isPositive ? "fa-arrow-up" : "fa-arrow-down"}"></i>
 
 </div>
 <div class="item-info">

     <div class="item-name">${item.name}</div>
     <div class="item-date">${item.date}</div>
 
 </div>
 <div class="item-right">

    <span class="item-amount ${isPositive ? "plus" : "minus"}">
    ${isPositive ? "+" : " "}${item.amount.toFixed(2)} ₼
    </span>

    <button class="del-btn" onclick="deleteItem(${item.id})" >

      <i class="fas fa-times"></i>
    
    </button>
 </div>
`;
  // Template literal (`) — arxa tik ilə yazılır
 // ${...} — dəyişənin dəyərini buraya yaz
 // isPositive ? "plus-icon" : "minus-icon" — gəlirdirsə yaşıl, xərcdirsə qırmızı ikon
// item.amount.toFixed(2) — 15.5 → "15.50" (2 onluq rəqəm)
// deleteItem(${item.id}) — silmə düyməsinə bu əməliyyatın id-sini ver


historyList.appendChild(li);
// <li> elementini <ul> siyahısına əlavə et — indi ekranda görünür

total += item.amount;
// += qısa yazı: total = total + item.amount

if(item.amount > 0) {
 
  income += item.amount;
  // Müsbətdirsə gəlirə əlavə et

} else {

  expense += Math.abs(item.amount);
   // Mənfidirsə xərcə əlavə et
  // Math.abs() — mənfi rəqəmi müsbətə çevir: -15 → 15
}

}

balanceDisplay.innerText = total.toFixed(2) + " ₼";
// Balansı ekranda göstər: "1500.00 ₼"

balanceDisplay.style.color = total < 0 ? "#ff4f7b" : "#ffffff"
// Balans mənfidirsə qırmızı, müsbətdirsə ağ rəng

incomeDisplay.innerText = income.toFixed(2)  + " ₼";
// Gəliri ekranda göstər

expenseDisplay.innerText = expense.toFixed(2) + " ₼";
// Xərci ekranda göstər

historyCount.innerText = transactions.length + " əməliyyat";
// "5 əməliyyat" kimi göstər


}

function deleteItem(id) {
// id — silinəcək əməliyyatın unikal nömrəsi

  const items = document.querySelectorAll(".history-item");
  // querySelectorAll() — səhifədəki bütün ".history-item" elementlərini tap

  items.forEach(function (item) {
  // Hər elementi tək-tək yoxla

    const btn = item.querySelector(".del-btn");
    // Bu elementin içindəki silmə düyməsini tap

    if (btn && btn.getAttribute("onclick") === `deleteItem(${id})`) {
    // getAttribute("onclick") — düymənin onclick dəyərini oxu
    // Uyğun gəlirsə bu elementin silmə animasiyasını işlət

      item.classList.add("removing");
      // "removing" class-ı əlavə et → CSS slideOut animasiyası işə düşür

      setTimeout(function () {
      // setTimeout — gecikdirmə: 300ms sonra iç kodu çalıştır
      // Animasiya bitsin, sonra əsl silmə olsun

        transactions = transactions.filter(function (t) {
          return t.id !== id;
          // .filter() — şərtə uyğun olanları saxla, qalanları sil
          // "id-si fərqli olanları saxla" = seçilən əməliyyatı çıxart
        });

        saveAndRender();
        // Yaddaşı yenilə + ekranı yenilə

        showToast("🗑️ Silindi!");
        // Bildiriş göstər

      }, 300);
      // 300 millisaniyə = 0.3 saniyə gözlə
    }
  });
}


// 8. YADDAŞA YAZ + YENİLƏ

function saveAndRender(){

  localStorage.setItem("myTransactions", JSON.stringify(transactions));
  // localStorage.setItem(açar, dəyər) — yaddaşa yaz
  // JSON.stringify() — massivi mətnə çevir
  // [{name:"Market"}] → '[{"name":"Market"}]'

  updateUI();
  // Ekranı yenidən çək
}

// 9. TOAST BİLDİRİŞİ

let toastTimer;
// Əvvəlki toast sayacı — yenidən gəldikdə ləğv etmək üçün

function showToast(message) {
// message — göstəriləcək mətn: "✅ Əlavə edildi!" kimi

clearTimeout(toastTimer);
 // Əgər toast artıq gözləyirsə köhnə sayacı ləğv et
// Olmasa 2 toast üst-üstə düşər


toastMsg.innerText = message;
  // Bildiriş mətnini yaz

toast.classList.add("show");
// "show" class-ı → CSS toast-ı yuxarı çıxarır (görünür olur)

toastTimer = setTimeout(function () {
 
 toast.classList.remove("show");
// 2.5 saniyə sonra "show" class-ını sil → toast aşağı enir, gizlənir

}, 2500);
// 2500 millisaniyə = 2.5 saniyə

}
