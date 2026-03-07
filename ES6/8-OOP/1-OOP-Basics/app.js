// --------OOP

class Insan {
  // sınıf

  /*
    1-özellikler
    2-yapıcı metot 
    3 fonksiyonlar
    */
  constructor(isim, soyisim, yas, maas) {
    //yapıcı metot

    //console.log("Constructor çalıştı");
    this.isim = isim;
    this.soyisim = soyisim;
    this.yas = yas;
    this.maas = maas;
  }
  showInfo = () => {
    console.log(
      `İsim: ${this.isim}, Soyisim: ${this.soyisim}, Yaş: ${this.yas}, Maaş: ${this.maas}`,
    );
  };
}

//Nesne oluşturmak
const insan1 = new Insan("Beyza", "Özpınar", 27, 1500);
const insan2 = new Insan("Ayşe", "Yılmaz", 24, 12445);
insan1.showInfo();
insan2.showInfo();
