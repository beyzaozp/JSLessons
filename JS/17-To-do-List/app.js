//console.log(document.contentType);

// Bir şeyi yakalamak için 3 yöntem var id, class name, tag name

// ------------ getElementbyId: idye göre yakalar   ------------

//let addBtn = document.getElementById("addTodoBtn");

//console.log(addBtn);

//console.log(addBtn.id);
//console.log(addBtn.getAttribute("id"));

//console.log(addBtn.className);
//console.log(addBtn.getAttribute("class"));

//console.log(typeof addBtn.className);
//console.log(addBtn.classList[1]);

//let btnText = addBtn.textContent;
//let btnText2 = addBtn.innerHTML;

//console.log(btnText);
//console.log(btnText2);

//addBtn.textContent = "<b>To do Ekleyin</b>" // metni direk <b>To do Ekleyin</b> değiştirir
//addBtn.innerHTML = "<b>To do Ekleyin</b>" // html etiketi olarak <b></b> ekler ve text değişecekse değiştirir

// --------- getElementByClassName: class ismine göre yakalar ---------------
// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function (todo) {
//   console.log(todo.textContent);
// });

// --------- getElementsByTagName: tag ismine göre yakalar ---------------

// let item = document.getElementsByTagName("input");

// console.log(item);

/** -------------------querySelector / querySelectorAll ----------- */

// let value = document.querySelector("#to-doSearchForm");   // tekl kullanım varsa queryselector yeterli # id için . class için
// console.log(value);

// const toDoList = document.querySelectorAll('.list-group-item') // birden fazla kullanım varsa queryselectorAll
// console.log('toDoList: ', typeof toDoList);

// const liLer = Array.from(document.querySelectorAll("li:nth-child(even)"));
// liLer.forEach(function paint(i) {
//   i.style.backgroundColor = "lightgrey";
// });

//console.log(liLer);

/*--------Style--------- */

// const toDo = document.querySelectorAll(".list-group-item")[0];

// toDo.style.color = "#00883d";
// toDo.style.background = "#ffff";

/* ------HTML Elementleri Arasında Gezinmek------- */

// const toDo = document.querySelectorAll(".list-group-item")[0];
// const toDoList = document.querySelector(".list-group");
// const card = document.querySelector(".container");
// const lastChild = document.querySelector(".list-group-item:nth-child(3)");

// let value;

/* --------- Children arasında gezinmek ---------- */
// value = toDoList;
// value = toDoList.children; //HTML Collection
// value = toDoList.children[3];
// value = toDoList.children[toDoList.children.length - 1];
// value = toDoList.children[3].textContent = "Değişti";

// value = Array.from(toDoList.children); Array yapmamız lazım

// value.forEach(function print(i) {
//   console.log(i.textContent);
// });

/* --------- Parentlar arası gezinmek ---------- */

// value = toDo;
// let ul = value.parentElement; // ul'ye gider
// let cardBody = ul.parentElement; // cardBody e gider
// let cart = cardBody.parentElement; // dıştaki carta gider
//let container = cart.parentElement; // dıştaki containera gider

// console.log(value);
// console.log(ul);
// console.log(cart);
// console.log(container);

/* --------- Kardeşler arası gezinmek ---------- */

// value = toDo;
// value = toDo.nextElementSibling.nextElementSibling.nextElementSibling;

// value = lastChild;

// value = value.previousElementSibling.previousElementSibling;

// // console.log(value);

// /* -------Örnek-------- */

// const container = document.querySelectorAll(".container")[0];

// value = container;

// const toDoHeader = container.lastElementChild.firstElementChild;
// toDoHeader.style.color = "Red";

// value = toDoHeader;

//console.log(value);

/* ---------Dinamik olarak Element Oluşturma--------*/
const cardBody = document.querySelectorAll(".card-body")[1];
const ul = document.querySelector(".list-group");

const link = document.createElement("a");
link.id = "website";
link.href = "https://www.google.com";
link.target = "_blank";
link.innerHTML = "<b>Google'a git</b>";
link.className = "btn btn-dark btn-md";

const toDo5 = document.createElement("li");
toDo5.className =
  "list-group-item d-flex justify-content-between align-items-center";
toDo5.innerHTML = "Todo 5";

const x = document.createElement("a");
x.href = "#";
x.innerHTML = "x";
x.className = "delete-item";

cardBody.appendChild(link);
ul.appendChild(toDo5);
toDo5.appendChild(x);

// console.log(link);
// console.log(cardBody);
// console.log(toDo5);

/* ---------Element Silme--------*/
// remove - removechild

//const todoList = document.querySelector(".list-group");
//const todos = document.querySelectorAll(".list-group-item");
// const todo1 = document.querySelector(".list-group-item");

//---------_Kendisini kaldırma
// //todos[0].remove();
// //todos[2].remove();

// todos[todos.length - 1].remove();
// todo1.remove();

//------------------ Parent üzerinden ulaşma

// todoList.removeChild(todos[0]);
// todoList.removeChild(todoList.lastElementChild);

/* ---------------- Elementleri Değiştirmek------------ */

// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

// todoList.replaceChild(todos[1], todos[0]);  ReplaceChild kullanılır parent üzerinden gidilir

// console.log(todos[1]);

const card = document.querySelectorAll(".card")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-header";
newTitle.style.color = "red";
newTitle.innerHTML = "Title v2 super duper";

console.log(newTitle);

card.replaceChild(newTitle, card.childNodes[1]);
