// Promiseler
// Asenkron yapıları senkron yapılara çevirmek için kullanılır
// Callbacklerin alternatifi
// ES6 ile geldi.

/*
1-Pending. bekleme modu
2-Fullfield (resolve). istem başarılı oldu
3-Rejected  reddedildi

*/

// let check = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Promise Başarılı");
//   } else {
//     reject("Promise Başarısız");
//   }
// });

// console.log(promise1);

// let check = true;

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promise Başarılı");
//     } else {
//       reject("Promise Başarısız");
//     }
//   });
// }

// createPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise tamamlandı");
//   });

// Promise & XMLHTTPREQUEST

// const readStudents = () => {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200)
//           resolve(JSON.parse(xhr.responseText));
//       } catch (error) {
//         reject("Sunucu hatası: " + error);
//       }
//     });
//     xhr.open("GET", "students.json");
//     xhr.send();
//   });
// };

// readStudents()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Xmlli promise bitti");
//   });

function getUsers(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject("There is a bug on json");
          }
        }
      } catch (error) {
        reject(error);
      }
    });
    xhr.open("GET", url);
    xhr.send();
  });
}

function getCommentsByID(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject("There is a error when fetching JSON", error);
          }
        }
      } catch (error) {
        console.log("There is a error while fetching data", error);
      }
    });
    xhr.open("GET", url);
    xhr.send();
  });
}

// getUsers("https://jsonplaceholder.typicode.com/users/2")
//   .then((data) => {
//     console.log("Users", data);
//     return getCommentsByID(
//       `https://jsonplaceholder.typicode.com/comments/${data.id}`,
//     );
//   })
//   .then((res) => {
//     console.log("Comments", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Bitti");
//   });

const promise1 = Promise.resolve("Birinci Promise Başarılı");
const promise2 = Promise.resolve("İkinci Promise Başarılı");
const promise3 = new Promise((resolve, reject) => {
  resolve("Promise3 Başarılı");
});
const promise4 = Promise.reject("Promise 4 hatalı");

//Promise.all -> tüm promiseleri array olarak alır eğer hepsi başarılı ise then e gider, biri bile hatalıyse catch'e gider

Promise.all([promise1, promise2, promise3, promise4])
  .then((res) => {
    for (let value of res) console.log(value);
  })
  .catch((err) => console.log(err));
