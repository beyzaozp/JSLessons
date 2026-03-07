/* İstenenler:
    Todo Giriniz kısmına yazılınca to do listesine eklensin
    Todo listesinin arama kısmına yazınca çalışsın
    Sayfa yenilenince to do listesi aynı kalsın (localstorage)
    Tüm todoları sil butonu todo listesini temizlesin
    Sil butonu silme işleminden sonra bir alert çıkarsın cardın içine 
*/

const form = document.querySelector("#to-doAddForm");
const inputTodo = document.querySelector("#todoInput");
const todoList = document.querySelector(".list-group");
const clearTodosBtn = document.querySelector("#clearAllBtn");
const searchInput = document.querySelector("#filterInput");
const firstCardBody = document.querySelectorAll(".card-body")[0];

// Uygulama Başlatıcı
runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded);
  todoList.addEventListener("click", removeTodo);
  clearTodosBtn.addEventListener("click", clearAllTodos);
  searchInput.addEventListener("keyup", filterTodos); // keydown yerine keyup daha sağlıklıdır
}

// --- CORE FUNCTIONS ---

function addTodo(e) {
  const newTodo = inputTodo.value.trim();

  if (!newTodo) {
    showAlert("warning", "Lütfen bir değer giriniz!");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "Başarıyla eklendi!");
  }
  e.preventDefault();
}

function removeTodo(e) {
  if (e.target.classList.contains("delete-item")) {
    const todoItem = e.target.parentElement;
    const todoText = todoItem.textContent.replace("x", "").trim();

    // UI'dan sil
    todoItem.remove();
    // Storage'dan sil
    removeTodoFromStorage(todoText);

    showAlert("success", "Todo başarıyla silindi.");
  }
}

function clearAllTodos() {
  if (confirm("Tüm todoları silmek istediğinize emin misiniz?")) {
    todoList.innerHTML = ""; // UI Temizle
    localStorage.removeItem("todos"); // Storage Temizle
    showAlert("success", "Tüm liste temizlendi.");
  }
}

// --- UI FUNCTIONS ---

function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `${newTodo} <a href="#" class="delete-item">x</a>`;
  todoList.appendChild(li);
  inputTodo.value = "";
}

function showAlert(type, message) {
  const div = document.createElement("div");
  div.className = `alert alert-${type} mt-2`;
  div.textContent = message;
  firstCardBody.appendChild(div);

  setTimeout(() => div.remove(), 2500);
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    // Modern yöntem: display toggle
    item.setAttribute(
      "style",
      text.includes(filterValue)
        ? "display: flex !important"
        : "display: none !important",
    );
  });
}

// --- STORAGE FUNCTIONS (Modüler & Tekrarsız) ---

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();
  todos = todos.filter((todo) => todo !== deleteTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function pageLoaded() {
  let todos = getTodosFromStorage();
  todos.forEach((todo) => addTodoToUI(todo));
}
