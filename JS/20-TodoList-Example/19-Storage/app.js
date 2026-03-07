//Storage verileri saklamak için kullanılan saklama alanı

//Local Storage : tarıyıcı ve pcyi kapatsanızda silinmez
//Session Storage : değeri tarayıcıyı kapatınca silinir

// localstorage ve sessionstorage windowun içindedir.
// console.log(window.localStorage);
// console.log(window.sessionStorage);

// sessionStorage.setItem("350", "Beyza");
// sessionStorage.setItem("351", "Münire");
// sessionStorage.setItem("216", "Özpınar");
// sessionStorage.setItem("352", 37);

// sessionStorage.removeItem("351");
// sessionStorage.getItem("351"); //null döner
// console.log('sessionStorage.getItem("351");: ', sessionStorage.getItem("351"));

// Hepsini silme
// sessionStorage.clear();

// const value = sessionStorage.getItem("352"); // string olarak döner num olarak eklesek de
// console.log(value);

// const names = ["Ali", "Veli", "Ahmet", "Ayşe"];
// sessionStorage.setItem("names", names); // string şeklinde ekler Ali,Veli,Ahmet,Ayşe
// sessionStorage.setItem("names2", JSON.stringify(names)); // json şeklinde ekler Ali,Veli,Ahmet,Ayşe

// let item = JSON.parse(sessionStorage.getItem("names2"));
// console.log(item);

// --------Local Stroge-------------

//Değer ekleme
localStorage.setItem("motion1", "Sağa dön");
localStorage.setItem("motion2", "Sola dön");
localStorage.setItem("motion3", "Arkaya dön");
localStorage.setItem("motion4", "Öne dön");

//Değer almak

let value = localStorage.getItem("motion1");
console.log(value);

// Değer almak
localStorage.removeItem("motion2");
console.log(localStorage);

// Hepsini silme
// localStorage.clear();
// console.log(localStorage);

let motions = ["hareket1", "hareket2", "hareket3", "hareket4"];
localStorage.setItem("motions", JSON.stringify(motions));

console.log(localStorage);

value = JSON.parse(localStorage.getItem("motions"));
console.log(value);
