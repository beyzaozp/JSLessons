// ---------- Setler array çeşididir. bir değeri bir kez tanımlanabiliyor. Key value mantığıyla çalışmaz

const set1 = new Set();

set1.add(true);
set1.add(3.14);
set1.add("Beyza");
set1.add("Beyza"); //aynı değer birden fazla eklense bile size'ı değiştirmez eklemez size hep 6
set1.add("Beyza");
set1.add("Beyza");
set1.add(6);
set1.add({ username: "beyza", pasword: 1234 });
set1.add([1, 2, 3, 4]);

//size
//console.log(set1.size);

//delete
set1.delete(6);
//console.log(set1.size);

//has. değer var mı yok mu ona bakmak için kullanılır.
//console.log(set1.has("Beyza"));

// for of
// for (let value of set1) {
//   console.log(value);
// }

set1.forEach((value) => {
    console.log(value);
});



