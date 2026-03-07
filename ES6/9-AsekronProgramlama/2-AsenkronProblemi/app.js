// Asenkron Problemleri

//http istekleri

const users = [
  { id: 5, name: "Beyza Post 1" },
  { id: 5, name: "Beyza Post 2" },
  { id: 5, name: "Beyza Post 3" },
  { id: 6, name: "Asu Post 1" },
  { id: 6, name: "Asu Post 2" },
  { id: 7, name: "Asu Post 1" },
  { id: 7, name: "Asu Post 2" },
];

//userid
//post

// senkrona çevireceğiz
// call back , promiseler veya async&await kullanılır
function getUserID(callback) {
  setTimeout(() => {
    //Servisten cevap alındı
    let userID = 5;
    callback(userID);
  }, 1000);
}

function getPostsbyUserId(userID) {
  //Gerçek hayatta bir apiye istek atılır
  console.log(userID);
  setTimeout(() => {
    users.forEach((user) => {
      if (user.id === userID) {
        console.log(user.name);
      }
    });
  }, 500);
}
getUserID(getPostsbyUserId);
