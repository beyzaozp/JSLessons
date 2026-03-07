/* Var - Let - Const  */

/* var/let/const  degiskenIsmi = deger;

let sayi=10;
*/

// var : function scope  (RAM'de çok fazla yer kaplar)
// let/const : block scope

// function selamVer() {
//   var selam = "Merhaba";
//   if (true) {
//     var b = 10;
//     console.log(b);
//   }
//   console.log(b, ": bu b");
//   console.log(selam);
// }

// selamVer();

// function selamVer2() {
//   var selam = "Selamlar";
//   if (true) {
//     let b = 10;
//     console.log(b);
//   }
//   console.log(b,": bu b");// çalışmıyor çünkü block Scope
//   console.log(selam);
// }

// selamVer2();

// var a = 5;
// var a = 10;

// console.log(a); // 10

// if(true){
//     let a = 3;
//     let a = 12; let ve const da 1 kere kullanabilirsin redeclare edemezsin
// }
// console.log(a);

// let ve const farkı

// const a = 15;
// a = 23; / constlara değer ataması yapınca tekrar değiştiremezsin

// console.log(a);

// let a =12;
// a=23; let i tekrar değiştirebilirsin

// console.log(a);