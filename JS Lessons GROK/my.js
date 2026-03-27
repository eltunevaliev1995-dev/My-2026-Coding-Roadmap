
function myProject() {

const username    = document.getElementById("username").value;
const password    = document.getElementById("password").value;
const textmessage = document.getElementById("textmessage");

   if(username === "admin" && password === "1234") {

        textmessage.innerHTML = "Welcome Admin";
        textmessage.style.color = "green";

   } else {

      textmessage.innerHTML = "You are Not Admin";
      textmessage.style.color = "red"; 
   }        

}



function reset(){

 document.getElementById("username").value = "";
 document.getElementById("password").value = "";
 document.getElementById("textmessage").innerHTML = "";

}


