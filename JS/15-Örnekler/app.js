// 153 370 407 armstrong sayısı?

// 153 1*1*1 + 5*5*5 +3*3*3

// let a = prompt("Sayı Gir");

// function armstrong1(sayi) {
//   let toplam = 0;
//   for (let i = 0; i < sayi.length; i++) {
//     let x = Number(sayi.charAt(i));
//     let kuvvet = x ** sayi.length;
//     console.log(`${x} sayısının ${sayi.length}. kuvveti: ${kuvvet}`);
//     toplam += kuvvet;
//     console.log(toplam);
//   }
//   if (toplam == sayi) console.log("armnstrong sayısıdır", sayi);
//   else console.log("armstrong sayısı değildir", sayi);
// }

// armstrong1(a);

// Mükemmel Sayı Uygulaması

// 6    -   28  - 496

// let num = Number(prompt("Sayı giriniz: "));

// function mukemmelSayi(sayi) {
//   let toplam = 0;
//   for (let i = 1; i <= sayi / 2; i++) {
//     if (sayi % i === 0) toplam += i;
//   }
//   toplam += sayi;
//   if (toplam === sayi * 2) alert(`${sayi} Mükemmel sayıdır.`);
//   else alert(`${sayi} Mükemmel sayı değildir.`);
// }

// mukemmelSayi(num);

// Decimal to binary

// function decimalToBinary(sayi) {
//   let a = ""; // Kalanları burada biriktireceğiz
//   while (sayi > 0) {
//     let kalan = sayi % 2; // 1. Kalanı bul (0 veya 1)
//     a = kalan + a;        // 2. Kalanı sonucun BAŞINA ekle
//     3. Sayıyı 2'ye böl ve tam kısmını al (yeni sayımız bu olacak)
//     sayi = Math.floor(sayi / 2);
//   }
//   return a;
// }

// console.log("Sonuç:", decimalToBinary(13.5));

//Binary to Decimal

// function converter(binary) {
//   let stringBinary = String(binary).split("").reverse();
//   let decimal = 0;

//   for (let i = 0; i < stringBinary.length; i++) {
//     if (Number(stringBinary[i]) == 1) {
//       decimal += 2 ** i;
//       console.log(decimal);
//     }
//   }
//   console.log("sonuc", decimal);
// }
// converter(11011);
