// Statikler
// ! Bir fonksiyon ya da özellik statikse class a özgüdür. Statikse nesneye özgüdür.

// class Matematik {
//   static topla(a, b) {
//     // eğer bir fonksiyon statikse obje üzerinden erişemezsin. Sadece sınıf üzerinden erişilebilir.
//     console.log(`a+b: ${a + b}`);
//   }

//   cikart(a, b) {
//     console.log(`a-b: ${a - b}`);
//   }

//   carp(a, b) {
//     console.log(`a*b: ${a * b}`);
//   }

//   bol(a, b) {
//     console.log(`a/b: ${a / b}`);
//   }
// }

// const islem = new Matematik();

//islem.topla(2, 4); statik bir foksiyon
// Matematik.topla(6,5); // class üzerinden erişildi.
// const arr = new Array();

// islem.cikart(5, 3);
// islem.carp(7, 6);
// islem.bol(32, 4);

class Insan {
  static languagesCount = 10;

  constructor(firstName, lastName, yas) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yas = yas;
  }

  showInfo = () => {
    console.log(this.firstName, this.lastName, this.yas);
  };
}

const insan1 = new Insan("Beyza", "Özpınar", 12000);
insan1.showInfo(); // languages count undefined geldi çünkü obje üzerinden erişmeye çalışıyoruz.

console.log(Insan.languagesCount);
