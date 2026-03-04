console.log("Hello Etlon: JS works");
//alert("Welcome!");


let age  = 30; // Your Age (Deyise Biler);

const name = "Elton"; // Your Name  (Sabit Qalir);

console.log(`Name is ${name} and my age ${age}`);



// 1. Defining the variables
let num1  = 15;
let num2 = 10;

const nameL = "Elton";

// 2. Performing the calculation
let sum = num1 + num2;

// 3. Displaying the result
console.log(`Sum is ${sum}`);
console.log(`User:${nameL}`);

// 4. Boolean check
let isLearning =  true;

console.log(`Elton is Islearning ${isLearning}`);


let sumOne = 5;
let simTwo = "5";
let sumTotal = sumOne + simTwo;



console.log(`This error code ${sumTotal}`);


let price = 50; //Price
let quantity = 3; // QuanTity
let productName = "Laptop Bag";

// Multiplication operation (*)
let totalPrice = price * quantity;

// Concatenating texts and numbers (Concatenation);
console.log(`Product Name ${productName}`);
console.log(`Unit Price ${price}`);
console.log(`Total  ${totalPrice} $`)

// Bonus: Subtraction (-) and Division (/)
let discount = 10;

let finalPrice = totalPrice - discount;

console.log(`Price after discount: ${finalPrice}`);


let userAge = 15;


if(userAge >= 18) {
   
   console.log(`Access granted. You are an adult ${userAge}`); // Permission granted

 
} else {
   
   console.log(`Access denied. You are too young. ${userAge}`); // Permission denied

}


let score = 85;

if(score >= 90) {
   
   console.log(`Grade:A ${score}`);

} else if (score >= 80) {
    
  console.log(`Grade B: ${score}`);

} else {

   console.log(`Grade: Failed. Try again! ${score}`);
}

// Məntiqi Operatorlar (Logical Operators):
// && (AND) - Hər iki şərt doğru olmalıdır
// || (OR)  - Ən azı bir şərt doğru olmalıdır

/*



let hasTicket = true;
let hasMoney = false;

if(hasTicket || hasMoney) {

  console.log("You can enter the cinema."); // Girişə icazə var, çünki bileti var (OR)
}


if(hasTicket == true && hasMoney == true) {
  
    console.log(`This correct `); 

} else  {

   console.log(`This is not correct`);
}




*/


let ageNew = 22;
let hasTicket = false;
let hasMoney = 50;

// Complex condition (Nested or Combined Logic)
if(ageNew >= 18 && (hasTicket === true || hasMoney >= 50)) {

  console.log(`Welcome to the club, Elton! Enjoy the music.`)

} else if(ageNew < 18) {

   console.log(`Sorry, you are too young for this place.`)   

} else {
   
   console.log(`You have the age, but you need a ticket or more money.`);     
}


let ecommerce  = 110;

let promCode = true;

if(ecommerce > 100 && promCode === true) {

   console.log(
 `Since you spent more than $100, you have received a discount from us!
  `)

} else { 

    console.log(`Unfortunately, you could not receive a discount from us!
`);  
}