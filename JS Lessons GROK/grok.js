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



/*let prices = [100, 200, 50, 300];

let newPrices = prices.map(function(price) {
    return price + 50;   // hər qiymətə 50 manat əlavə et
});
console.log(newPrices); */

let prices = [100, 200, 50, 300];

let newPrices = prices.map(function(price){

   return price + 50;

});
console.log(newPrices);


/*


let ages = [12, 18, 25, 15, 30, 17];

let yetkinler = ages.filter(function(age) {
    return age >= 18;
});
console.log("Yetkinlər:", yetkinler);


*/

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
    
    // 1. Əvvəlcə filter edirik (yalnız 10-dan böyükləri saxlayırıq)
    let filtered = numbers.filter(function(num) {
        return num > 10;
    });
    
    // 2. Sonra map edirik (saxladığımız rəqəmləri 2-yə vururuq)
    let doubled = filtered.map(function(num) {
        return num * 2;
    });
    
    console.log(doubled);
}

filterAndDouble([5, 8, 12, 3, 20]);