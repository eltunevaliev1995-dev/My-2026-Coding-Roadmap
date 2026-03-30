/*



// 1. let (ən çox istifadə olunur, dəyişə bilir)


// let name = "Eltun"; // string (mətn)
let age  = 31; // number (rəqəm)

// 2. const (dəyişməz, ən təhlükəsiz)
const birthYear = 1995;

// 3. var (köhnə yol, indi az istifadə olunur)
var oldWay = "köhnə"


let isStudent = true; // boolean (doğru/yanlış)
let skills = ["Js","React"] // array (siyahı)
let person = {name: "Eltun", age: 31} // object (obyekt)
let nothing = null; // null
let notDefined; // undefined

let name = "Jonson";
let ageOne = 32;
let country = "Georgia";

console.log(`My name is ${name} I am ${ageOne} and I live in ${country}`);


let number1 = 10;
let number2 = 7;

console.log("Plus:" , number1 + number2);
console.log("Minus:" , number1 - number2);
console.log("cal:" , number1 * number2);


let  isHappy = true;
let  hasJob = false;


console.log("I am happy " + isHappy);
console.log("I have job " + hasJob);


let iLearn    = "HTML,JS,CSS";

let andILearn = "English Language";


console.log(`I am learn ${iLearn} and ${andILearn}`);


// Ən sadə formada
function salamVer(){

   console.log("Hello Elton");
          
}

// Çağırmaq üçün
salamVer();

function tellMeHello(name){

   console.log(`Hello ${name}`);
}

tellMeHello("Jane");
tellMeHello("John");


function plus(a, b){

   return a + b;       
}

console.log(plus(7, 5));


function printName(name){

   console.log(`My name is ${name}`);
}

printName("Elton");

function calculateSum(x, y){

 return x + y;

}
 
console.log(calculateSum(5,7));


function checkAge(age){

   if(age > 18)  {

     return "He is not young boy";

   } else {

     return "He is child";
   }      
}


console.log(checkAge(20));
console.log(checkAge(5));


function greetUser(name, city){

  console.log(`Welcome ${name} to ${city}`);      
}


greetUser("Eltun","Tbilisi");



let ageTwo = 31;

let nameSurname = "Elton";

if(ageTwo === 31 && nameSurname === "Elton"){


   console.log(`Yes it is true`);


} else {

   console.log(`It is false`);
}



let score = 80;

if(score >= 70) {

   console.log("You are pro clever boy");

} else if (score > 80) {

   console.log("You are clever girl");

} else if (score < 50) {

   console.log("You are lazy boy");

} else {

   console.log("They are not true");
}


function checkNumber(num){

   if(num > 0) {

      console.log(num + " musbetdir ededdir");

   } else if (num < 0) {

      console.log(num + " menfidir ededdir");

   } else {
    
      console.log("sifirdir");
   }
}

checkNumber(5);
checkNumber(-1);
checkNumber(0);


function checkTemperature(temp) {
    if (temp > 30) {
        console.log("Çox isti, suya gir");
    } else if (temp >= 20 && temp <= 30) {   // 20-30 arası
        console.log("Normal hava");
    } else if (temp >= 10 && temp <= 19) {   // 10-19 arası
        console.log("Soyuq, palto geyin");
    } else if (temp < 10) {
        console.log("Çox soyuq, evdə qal");
    } else {
        console.log("Temperatur daxil et");
    }
}

checkTemperature(35);
checkTemperature(26);
checkTemperature(20);
checkTemperature(8);
checkTemperature(15);   // əlavə test


let temperature = 28;

if(temperature >= 20 && temperature <= 30){

   console.log("Normal Hava");

} else {

   console.log("Normal Deyil");
}



function canEnterClub(age, hasInvitation){

    if(age >= 18 || hasInvitation){

      console.log("Xos Geldiniz!");

    } else {

      console.log("Giris Qadagandir!");
    }
}


canEnterClub(18, true);
canEnterClub(17, false);
canEnterClub(22, false);


function isEven(number){

   if(number % 2 === 0){

      console.log(`${number} bu reqem cutdur`);

   } else {

      console.log(`${number} bu reqem tekdir`);
   }
}


isEven(16);
isEven(5);



function checkLogin(username, password){

   if(username === "Eltun" && password === "js123"){

       console.log(`Welcome ${username}`);

   } else {
      
      console.log("It is not true");
   }
}


checkLogin("Eltun","js123");
checkLogin("Ramal","js125");


let fruits = ['Alma', 'Banan', 'Portagal'];

console.log(fruits[0]);
console.log(fruits.length);


let numbers = [10, 20, 30, 40, 50];

console.log("Massiv" , numbers);
console.log("Element sayi", numbers.length);
console.log("Birinci Element" , numbers[0]);
console.log("Son Element", numbers[numbers.length -1]);


let colors = ['Qirmizi', 'Yasil', 'Mavi'];
colors.push("Sari"); // Sona Elave edir.
colors.unshift("Qara"); // Basa Elave Edir.

console.log(colors);


let ages = [15, 22, 17, 30, 19];

ages.forEach(function(age){

   if(age >= 18 ) {
      
    console.log(age + " Old");

   } else {

      console.log(age +  " Young");
   }

});


function mySkills() {
    let skills = ["HTML", "CSS", "JS"];   // array yaradırıq
    
    skills.push("React");                  // React əlavə edirik
    
    // Hər elementi ayrı-ayrılıqda çap edirik
    skills.forEach(function(skill) {
        console.log(`Mən ${skill} bilirəm`);
    });
}

mySkills();   // funksiyanı çağırırıq


function cars(){

   let carsModel = ['BMW', 'Opel', 'Mercedes'];

   carsModel.push("Nissan");

   carsModel.forEach(function(car){
    
      console.log(`Masinlarin hamisi yenidir ${car}`);

   });
}

cars();


function lang(){

  let diller = ['Azerbaycan', 'Turk ', 'Gurcu'];

  diller.push('Ingilis Dili');

  diller.forEach(function(dil){
   
     console.log(`Men ${dil} dilini bilirem`);

  });

}

lang();


let numbersOne = [10, 20, 30, 40];

for(let i = 0; i < numbersOne.length; i++ ){
  
   console.log(numbersOne[i]);

}
    


let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [20, 40, 60, 80]


let adults = [15, 22, 17, 30].filter(function(age){

   return age >= 18;

});

console.log(adults);


let fruitsS = ['Alma', 'Banan', 'Portagal', 'Uzum'];

for(let i = 0; i < fruitsS.length; i ++){

   console.log((i + 1) + ". " + fruitsS[i]);
}



let prices = [100, 200, 50, 300];

let newPrices = prices.map(function(price) {
    return price + 50;   // hər qiymətə 50 manat əlavə et
});
console.log(newPrices); 

let prices = [100, 200, 50, 300];

let newPrices = prices.map(function(price){

   return price + 50;

});
console.log(newPrices);





let ages = [12, 18, 25, 15, 30, 17];

let yetkinler = ages.filter(function(age) {
    return age >= 18;
});
console.log("Yetkinlər:", yetkinler);




let agesTwo = [12, 18, 25, 15, 30, 17];

let yetkinler = agesTwo.filter(function(age){
  
   return age >= 18;

});

console.log("Yetkinler:", yetkinler);



let numberFre = [5,8,12,3,20];

let numberOneTwo = numberFre.map(function(number){


   return number * 2;

});

console.log(numberOneTwo);


let agesFree = [5, 8, 12, 3, 20];

let oneNumber = agesFree.filter(function(age){

   return age > 10;

});

console.log(oneNumber);



function filterAndDouble(numbers) {
    
    let filtered = numbers.filter(function(num) {
        return num > 10;
    });
    
    let doubled = filtered.map(function(num) {
        return num * 2;
    });
    
    console.log(doubled);
}

filterAndDouble([5, 8, 12, 3, 20]);

let user = {
    name: "Eltun",           // string
    age: 25,                 // number
    city: "Tbilisi",         // string
    isStudent: true,         // boolean
    skills: ["HTML", "JS"]   // array də ola bilər
};

console.log(user.name);      // Eltun
console.log(user.age);       // 25
console.log(user.skills);    // ["HTML", "JS"]



let user = {

   name: "Elton",
   surname: "Valiev",
   age: 31,
   country: "Georgia",
   isStudent: false,
   skills: ["HTML,CSS,JS"]

}


console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user.country);
console.log(user.isStudent);
console.log(user.skills);




let car = {
    brand: "BMW",
    model: "X5",
    year: 2023,
    color: "qara"
};

console.log("Marka:", car.brand);
console.log("İl:", car.year);




let car = {

   brand: "BMW",
   model: "X5",
   year:  2023,
   color: "Black"

}


console.log(`Masinin Markasi ${car.brand}`);
console.log(car.model);
console.log(car.year);
console.log(car.color);


let person = {
    name: "Eltun",
    age: 25,
    city: "Tbilisi"
};

// yeni məlumat əlavə et
person.job = "Junior Developer";
person.skills = ["HTML", "CSS", "JS"];

console.log(person);




let persons = {

   name: "Julia",
   age:  18,
   country: "Ukraine"
}


persons.job = "Model";
persons.skills = "Loving";


console.log(persons);





let students = [
    { name: "Eltun", age: 25, score: 85 },
    { name: "Ayxan", age: 22, score: 92 },
    { name: "Leyla", age: 24, score: 78 }
];

students.forEach(function(student) {
    console.log(`${student.name} - balı: ${student.score}`);
});





let students = [

   {name: "Jane",  age: 18, score: 90},
   {name: "Julia", age: 20, score: 100},
   {name: "John" , age: 33, score: 50 }

];


students.forEach(function(student){

   console.log(`${student.name},  ${student.age} age ${student.score} score`);

});




function showUserInfo(user) {
    console.log("Ad: " + user.name);
    console.log("Yaş: " + user.age);
    console.log("Şəhər: " + user.city);
    console.log("İş: " + user.job);
}


let userEltun = {
    name: "Eltun",
    age: 25,
    city: "Tbilisi",
    job: "Frontend Developer"
};


showUserInfo(userEltun);


function userInfo(users){

   console.log(`Name:    ${users.name}`);
   console.log(`Surname: ${users.surname}`);
   console.log(`Age: ${users.age}`);
   console.log(`Country: ${users.country}`);
}


let userInformation = {

   name: "Elton",
   surname: "Valiev",
   age: 31,
   country: "Georgia"

}


userInfo(userInformation);



let users = [
    { id: 1, name: "Eltun", age: 25, city: "Tbilisi" },
    { id: 2, name: "Ayxan", age: 22, city: "Baku" },
    { id: 3, name: "Leyla", age: 24, city: "Gəncə" }
];




let users = [

   { id: 1, name: "John Doe",     age: 31, city: "Tbilisi"},
   { id: 2, name: "Elton Valiev", age: 20, city: "Istanbul"},
   { id: 3, name: "Okan Velizade",age: 18, city: "Berlin"  },

];


users.forEach(function(userinfo){

   console.log(`${userinfo.name}, ${userinfo.age}, ${userinfo.city} `);

});







let products = [
    { name: "Telefon", price: 1200, inStock: true },
    { name: "Klaviatura", price: 80, inStock: false },
    { name: "Qulaqlıq", price: 150, inStock: true }
];

products.forEach(function(product) {
    console.log(product.name + " - " + product.price + " AZN");
});



let products = [

   { name: "Phone",    price: 1200, inStock: true},
   { name: "Keyboard", price: 500,  inStock: false},
   { name: "AirPods",  price: 150,  inStock: true}

];

products.forEach(function(product){

   console.log(`${product.name}, ${product.price}, ${product.inStock}`);
});




let studentsS = [
    { name: "Eltun", score: 85 },
    { name: "Ayxan", score: 92 },
    { name: "Leyla", score: 78 }
];


let highScore = students.filter(function(student) {
    return student.score >= 80;
});

console.log(highScore);





let proStudents = [


   { name: "Ayxan", score: 100},
   { name: "Adil",  score: 900},
   { name: "Firuze",score: 60}

];


let highScoreS = proStudents.filter(function(student){

   return student.score >= 80;

});


console.log(highScoreS);


/*


Tapşırıq 3 (Ən vacib!)
Funksiya yaz: showExpensiveProducts(products, minPrice)

Parametrlər: products (array of objects) və minPrice (rəqəm)
Yalnız qiyməti minPrice-dan böyük və ya bərabər olan məhsulları filter et
Hər məhsulu belə çap et: "Telefon - 1200 AZN" */



/* function showExpensiveProducts(products, minPrice) {
    
    let expensive = products.filter(function(product) {
        return product.price >= minPrice;   // >= işarəsi ilə bərabər də daxil olur
    });

    // Filter olunmuş məhsulları gözəl şəkildə göstəririk
    expensive.forEach(function(product) {
        console.log(product.name + " - " + product.price + " AZN");
    });
}

// Test üçün məlumatlar
let products = [
    { name: "Phone", price: 1200 },
    { name: "Airpods", price: 500 },
    { name: "KeyBoard", price: 400 },
    { name: "Mouse", price: 80 }
];

// Funksiyanı çağırırıq
showExpensiveProducts(products, 400); */


// "Adım" adlı qutuya "Eltun" yazırıq
/* localStorage.setItem("adim", "Eltun");

let myName = localStorage.getItem("adim");
console.log("Mənim adım " + myName);

localStorage.setItem("surname", " Valiev");

let myInfo = localStorage.getItem("surname");

console.log("My surname" + myInfo);*/



/*
let name = localStorage.getItem("myName");
let city = localStorage.getItem("myCity");
let age = localStorage.getItem("myAge");

console.log("Adım: " + name);
console.log("Şəhərim: " + city);
console.log("Yaşım: " + age);

*/


/* localStorage.setItem("myName", "Elton");
localStorage.setItem("myCity", "Tbilisi");
localStorage.setItem("myAge", "20");


let name = localStorage.getItem("myName");
let age = localStorage.getItem("myAge");
let city = localStorage.getItem("myCity");


console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`My city ${city}`);


localStorage.setItem("Adim", "Elton");
localStorage.setItem("Seherim", "Tbilisi");
localStorage.setItem("Yasim", "20");


function saveMyInfo() {

   let ad = localStorage.getItem("Adim");
   let seher = localStorage.getItem("Seherim");
   let yas = localStorage.getItem("Yasim")


   console.log(`My name is ${ad}`);
   console.log(`My city is ${seher}`);
   console.log(`I am ${yas} years old`);
}


saveMyInfo();



function saveMyInfo() {
    
    // Əvvəlcə sehrli qutuya məlumatları qoyuruq
    localStorage.setItem("Adim", "Eltun");
    localStorage.setItem("Seherim", "Tbilisi");
    localStorage.setItem("Yasim", "25");

    // İndi qutudan oxuyuruq
    let ad = localStorage.getItem("Adim");
    let seher = localStorage.getItem("Seherim");
    let yas = localStorage.getItem("Yasim");

    console.log(`My name is ${ad}`);
    console.log(`My city is ${seher}`);
    console.log(`I am ${yas} years old`);
}

// Funksiyanı çağırırıq
saveMyInfo();
localStorage.clear();

// 1. Qutuya 3 ədəd kağız qoyuruq
localStorage.setItem("Adim", "Eltun");
localStorage.setItem("Seherim", "Tbilisi");
localStorage.setItem("Yasim", "25");

console.log("=== QUTU DOLUDUR ===");

// 2. Qutudan oxuyuruq
console.log("Adım:", localStorage.getItem("Adim"));
console.log("Şəhərim:", localStorage.getItem("Seherim"));
console.log("Yaşım:", localStorage.getItem("Yasim"));

// 3. İndi qutunu tam təmizləyirik
localStorage.clear();

console.log("=== QUTU TƏMİZLƏNDİ ===");

// 4. Yenidən oxumağa çalışırıq (indi boş olmalıdır)
console.log("Adım:", localStorage.getItem("Adim"));        // null olacaq
console.log("Şəhərim:", localStorage.getItem("Seherim"));  // null olacaq
console.log("Yaşım:", localStorage.getItem("Yasim"));      // null olacaq */

/*  



let todos = [];

// Tapşırıq əlavə et
function addTodo(task) {
    todos.push({ id: Date.now(), text: task });
    saveToStorage();
    console.log("Tapşırıq əlavə edildi: " + task);
}

// Bütün tapşırıqları göstər
function showTodos() {
    console.log("===== Mənim Tapşırıqlarım =====");
    todos.forEach(todo => {
        console.log("- " + todo.text);
    });
}

// localStorage-a saxla
function saveToStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorage-dan oxu
function loadFromStorage() {
    let saved = localStorage.getItem("todos");
    if (saved) {
        todos = JSON.parse(saved);
    }
}

// İlk dəfə yüklə
loadFromStorage();

addTodo("JavaScript öyrən");
addTodo("Portfolio layihəsi et");
showTodos();



*/

// Boş siyahı yaradırıq
let todos = [];

// 1. Tapşırıq əlavə etmək funksiyası
function addTodo(task) {
    todos.push(task);
    console.log("✅ Tapşırıq əlavə edildi: " + task);
}

// 2. Bütün tapşırıqları göstərmək funksiyası
function showTodos() {
    console.log("===== Mənim Tapşırıqlarım =====");
    if (todos.length === 0) {
        console.log("Hələ heç bir tapşırıq yoxdur 😊");
    } else {
        todos.forEach(function(todo, index) {
            console.log((index + 1) + ". " + todo);
        });
    }
}


addTodo("JavaScript öyrən");
addTodo("Portfolio saytı qur");
addTodo("Cox oyrenmek lazimdir");
showTodos();






