// Tapşırıqlar siyahısı (başlanğıcda boş array)
let tasks = [];

// Cari filter (hamısı, gözləyən, tamamlanan)
let currentFilter = 'all';


//  ƏSAS FUNKSIYALAR

// Səhifə yüklənəndə işləyən funksiya
function init(){

 // LocalStorage-dan əvvəlki tapşırıqları oxu
 loadTasks();

 // Enter düyməsinə basanda tapşırıq əlavə et
 document.getElementById('taskInput').addEventListener('keypress', function(e){

    if (e.key  === 'Enter'){

        addTask();
    }

 });

// İlk render
renderTasks();
updateStats();

}


// Yeni tapşırıq əlavə et
function addTask(){

// Input elementlərini tap
const input = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');

// Dəyərləri al
const text = input.value.trim();
const priority = prioritySelect.value;

// Boşdursa xəbərdarlıq et
if(text === ''){
 
    input.classList.add('error')
    setTimeout(() => input.classList.remove('error'), 3000);
    return;

}

// Yeni tapşırıq obyekti yarat
const newTask = {

    id: Date.now(), // Unikal ID (vaxt əsasında)
    text: text,  // Mətn
    priority: priority, // Prioritet
    completed: false,  // Tamamlanma vəziyyəti
    createdAt: new Date() // Yaradılma tarixi

};

// Siyahıya əlavə et (əvvələ)
tasks.unshift(newTask);


// Input-u təmizlə
input.value = '';


// Yadda saxla və göstər
saveTasks();
renderTasks();
updateStats();

}


// Tapşırığı sil
function deleteTask(id){

// ID-yə görə tap və sil
tasks = tasks.filter(tasks => tasks.id !== id);

// Yadda saxla və göstər
saveTasks();
renderTasks();
updateStats();

}


// Tamamlanma vəziyyətini dəyiş
function toggleComplete(id) {

// Tapşırığı tap
const task = tasks.find(t => t.id === id);

if(task){
 
// Vəziyyəti dəyiş (true -> false, false -> true)
task.completed = !task.completed;

// Yadda saxla və göstər
saveTasks();
renderTasks();
updateStats();

}

}


// Bütün tapşırıqları sil
function clearAll(){
 
 // Təsdiq soruş
 if(tasks.length === 0) return;

 const confirmDelete = confirm('Bütün tapşırıqları silmək istədiyinizə əminsiniz?');

 if(confirmDelete) {

    tasks = [];
    saveTasks();
    renderTasks();
    updateStats();
 }

}


// Filter tətbiq et
function filterTasks(filterType){

  currentFilter =  filterType;

  // Düymələri yenilə
  document.querySelector('.filter-btn').forEach(btn => {

    btn.classList.reomo('active');

  });
  document.getElementById('filter' + filterType.charAt(0).toUpperCase() +
  filterType.slice(1)).classList.add('active');

 // Siyahını yenilə
 renderTasks();

}


// KÖMƏKÇİ FUNKSIYALAR

// Siyahını ekrana çək (render et)
function renderTasks()  {

    const list = document.getElementById('taskList');
    const emptyMessage = document.getElementById('emptyMessage');
    const clearBtn = document.getElementById('clearBtn');

    // Filterə görə tapşırıqları seç
    let filteredTasks = tasks;

    if(currentFilter === 'pending') {

       filteredTasks = task.filter(t => !t.completed);

    } else if (currentFilter === 'completed'){

        filteredTasks = tasks.filter(t => t.completed);
    }


    // Boşdursa mesaj göstər
    if(filteredTasks.length === 0){

        list.innerHTML = '';
        emptyMessage.style.display = 'block';
        clearBtn.style.display = tasks.length > 0? 'block' : 'none';
        return;
    }

    // Boş deyilsə siyahı göstər
    emptyMessage.style.display = 'none';
    clearBtn.style.display = 'block';

    // HTML yarat
    list.innerHTML = filteredTasks.map(task => {

        // Prioritet adını Azərbaycan dilində göstər
        const priorityNames = {

           'high': 'Yüksək',
           'medium': 'Orta',
           'low': 'Aşağı'
        };

        return `<li class="task-item priority-${task.priority} ${task.completed ?
          'completed' : ''}">
          <input type="checkbox"
          class="task-checkbox"
          ${task.completed ? 'checked' : ''}
          onchange ="toggleComplete(${task.id})"
          >
          <span class="task-text">${escapeHtml(task.text)}</span>
          <span class="priority-badge ${task.priority}">${priorityNames[task.priority]}</span>
          <button class="delete-btn" onclick="deleteTask(${task.id})">Sil</button>
          
          </li>`;
           }).join('');

        
}


// Statistikaları yenilə
function updateStats() {

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;

}


// LocalStorage-a yadda saxla
function  saveTasks(){

// Tapşırıqları JSON formatında yadda saxla
localStorage.setItem('myTasks', JSON.stringify(tasks));

}

// LocalStorage-dan oxu
function loadTasks() {

    const saved = localStorage.getItem('myTasks');
    if(saved) {

        tasks = JSON.parse(saved);
    }
}

// Təhlükəsizlik üçün HTML-i təmizlə (XSS qoruması)
function escapeHtml(text) {

    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


document.addEventListener('DOMContentLoaded', init);