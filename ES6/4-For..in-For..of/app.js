let names = ["Ali", "Veli", "Ayşe", "Fatma"];

names.forEach((e) => {
  console.log(e);
});

//For .. in dizi üzerinde dönerken indexi verir
for (let element in names) {
  console.log(element, names[element]);
}

//For .. of dizi üzerinde dönerken veriyi döner
for (const element of names) {
  console.log(element, names.indexOf(element));
}
