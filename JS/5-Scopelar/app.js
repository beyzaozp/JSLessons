/*----------- Var - Let - Const   -----------*/

/* Scope Kavramı

-> Global Scope: Her yerden erişilebilir
-> Function Scope: sadece ilgili yerden erişilebilir
-> Block Scope: fonksiyon içindeki fonksiyonlar block oluyor içindeki değişkenler block scope

*/

// var a = 5;

// if(true){
//     console.log(a);
// }

// function method1(){
//     console.log("değer:",a);
// }

// method1();

// function method2() {
//   var sayi2 = 10;
//   console.log(sayi2);
// }
//console.log("değer", sayi2);not defined hatası

// method2();
var a = 10; // global scope
function method3() {
  var a = 10;// function scope
  if (true) {
    var a = 5;// block scope 
    console.log("a değeri", a);
  }
}

method3();
