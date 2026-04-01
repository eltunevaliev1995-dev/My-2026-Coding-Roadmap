// 1. Elementləri HTML-dən tapırıq (The Element - das Element)
const input = document.getElementById("todo-input");
const list  =  document.getElementById("todo-list");
const log   = document.getElementById("log-message");

// 2. Əsas massivimiz (The Array - das Array)
let todos = JSON.parse(localStorage.getItem("vizual_todos")) || [];

// 3. Səhifə yüklənəndə köhnə məlumatları göstər
render();

// 4. ƏLAVƏ ETMƏ FUNKSİYASI (The Push - das Hinzufügen)
function handleAdd(){

   const text = input.value.trim(); // Boşluqları təmizlə
   if(text === "") return; // Boşdursa dayandır
   
   // Yeni obyekt yaradırıq
   const newTodo = {
    
     id: Date.now(), // Millisaniyə ilə unikal ID 
     text: text


   };

   // MASSİVƏ PUSH EDİRİK
   todos.push(newTodo);

   // Loq mesajında göstər
   log.innerHTML = `Pushe: "${text}" (ID: ${newTodo.id})`;
   saveAndRender();
   input.value = ""; // İnputu təmizlə

}


// 5. SİLMƏ FUNKSİYASI (The Deletion - die Löschung)
function deleteTodo(id){

 // Silinəcək məlumatı massivdə tapırıq (Görmək üçün)
 const itemToDelete = todos.find(t => t.id === id);

 // MASSİVDƏN FİLTER EDİB SİLİRİK
// (Yəni: Bu ID-dən başqa hamısını saxla)

todos = todos.filter(todo => todo.id !== id);


// Loq mesajında nəyin silindiyini göstər
log.innerHTML = `Delete: "${itemToDelete.text}" (ID: ${id})`;
log.style.color = "red";

saveAndRender();

}


// 6. YADDAŞA YAZ VƏ EKRANI YENİLƏ
function saveAndRender(){

   localStorage.setItem("vizual_todos" , JSON.stringify(todos));
   render();



}


// 7. EKRANA ÇIXARMA (The Rendering - die Darstellung)
function render(){

  list.innerHTML = ""; // Köhnə siyahını sil
  
  
  todos.forEach((todo, index) => {
   
     const li = document.createElement("li");
     li.innerHTML = `<span><b>${index + 1}.</b> ${todo.text}<small style="color:gray">
     (ID: ${todo.id})</small></span>
     <button class="del-btn" onclick="deleteTodo(${todo.id})">Sil</button>
     `;
     list.appendChild(li);
  });
}