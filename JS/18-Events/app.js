"use strict";
// --------|Eventler|---------

//addEventListener()

// const clearAllBtn = document.querySelector("#clearAllBtn");
// clearAllBtn.addEventListener("click", function () {
//   document.querySelectorAll(".card-header")[1].textContent = "Zıkkım";
//   console.log(clearAllBtn);
// });
// function changeTitle(e) {

//   console.log(e);

//   document.querySelectorAll(".card-header")[1].textContent = "Zıkkım";
// }

// clearAllBtn.addEventListener("click", changeTitle);

// -----_Mouse Eventleri --------

// DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave

// document.addEventListener("DOMContentLoaded", run); //sayfa yüklendiğinde

// function run() {
//   alert("Sayfa yüklendi");
// }

// window.addEventListener("load", run)

// function run(){
//     alert("Sayfa yüklendi")
// }

// const cardTitle = document.querySelectorAll(".card-header")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("click", run); // tek tıkla
// cardTitle.addEventListener("dblclick", run); // çift tıkla
// cardBody.addEventListener("mouseover", run); // mousela üzerine gelince içindeki elementlerinde üzerine gelince çalışır
//cardBody.addEventListener("mouseout", run); // mousela üzerine gelip çıkınca

// cardBody.addEventListener("mouseenter", run); // sadece ilgili elementin üzerine gelince çalışır
// cardBody.addEventListener("mouseleave", run); // sadece ilgili elementin üzerine gelince çalışır

// function run(e) {
//   console.log(e.type);
//   console.log(e.target);
// }

//-------------- Klavye Events ---------

// keypress : harf ve sayılara basınca tetiklenir
// keydown : tüm tuşlarda çalışır
// keyup : tuştan elini kaldırdığında çalışır

// document.addEventListener("keypress", run);
// document.addEventListener("keydown", run);
// document.addEventListener("keyup", run);

// function run(e) {
//   console.log(e.key); //  basılan tuşu yazar
//   console.log(e.keyCode); // basılan tuşun ASCII karşılığı
//   console.log(e.which); // e.keyle aynı basılan tuşu yazar
// }

// document.addEventListener("contextmenu", run);
// function run(e) {
//   e.preventDefault();
// }

// const cardTitle = document.querySelectorAll(".card-header")[0];

// const searchInput = document.querySelector("#todoInput");

// searchInput.addEventListener("keydown", run);

// function run(e) {
//   cardTitle.textContent = e.target.value;
// }

// ----------input eventları---------

//focus inputun içine girince
//blur inputun içinden çıkınca
//copy
//paste
//cut
//select

const input = document.querySelector("#todoInput");

input.addEventListener("focus", run);
input.addEventListener("blur", run);
input.addEventListener("copy", run);
input.addEventListener("paste", run);
input.addEventListener("cut", run);
input.addEventListener("select", run);

function run(e) {
  console.log(e.type);
}
