//Map --> key value
//Mapler bir arr çeşitidir

//let arr = [1, 2, 3, 4];

const map1 = new Map();

//------SET.  key ve value istediğimiz veri tipinde olabilir
map1.set("deger1", "Ali");
map1.set("deger2", "Veli");
map1.set("deger3", "Ayşe");
map1.set("deger4", "Fatma");

let value = map1.get("deger3");

//console.log(value);

//-----Size num döner
value = map1.size;
//console.log(value);

// -----DELETE silme true false döner
//map1.delete("deger2");

//console.log(map1);

// -----HAS değer var mı? true false döner

//console.log(map1.has("deger3"));

//----For of ile map üzerinde dönme

// for (let [key, value] of map1) { //destructing
//   console.log(key, value);
// }

// let keysofMap1 = Array.from(map1.keys());
// keysofMap1.forEach((element) => {
//   console.log(element, map1.get(element));
// });

// for (let value of map1.values()) {
//   console.log(value);
// }

//--------Mapten Array'e çevirme

// const arr = Array.from(map1);

// arr.forEach((value) => {
//   console.log(value[0], value[1]);
// });

// -------Arrayden Map'e Çevirme

// const arr1 = [
//   [34, "İstanbul"],
//   [35, "İzmir"],
//   [1, "Adana"],
//   [6, "Ankara"],
// ];
// const map2 = new Map(arr1);
// console.log(map2);

//----------
const map2 = new Map();
map2.set(34, "İstanbul");
map2.set(35, "İzmir");
map2.set(2, "Adana");
map2.set(6, "Ankara");

//map2.set([1,2,3], "Kastamonu");
//console.log(map2.get([1,2,3])); //undefined verir

let key = [1, 2, 3];
map2.set(key, "Kastamonu");
//console.log(map2.get(key));// kastamonuyu verir




