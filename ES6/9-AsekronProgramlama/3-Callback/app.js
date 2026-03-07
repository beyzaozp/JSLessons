// ------Callbackler

//Callbackler: bir fonksiyonu başka bir başka bir fonksiyonu parametre geçerek çağırırız

function getName(callback) {
  setTimeout(() => {
    let name = "Beyza";
    callback(name);
  }, 1000);
}

function getSurname(name, callback) {
  setTimeout(() => {
    let surname = "Özpınar";
    callback(surname);
  }, 500);
}

getName((name) => {
  getSurname(name,(surname) => {
    console.log(name, surname);
  });
});
