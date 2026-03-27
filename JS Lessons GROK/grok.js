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