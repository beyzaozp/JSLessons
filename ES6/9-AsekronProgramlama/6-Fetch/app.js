// Fetch

//callback -> promise
// ajax(xmlhttprequest)  -> fetch(api)

// function getStudents(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return console.log(data);
//     });
// }

// getStudents("students.json");

// function getComments(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getComments("https://jsonplaceholder.typicode.com/posts/1/comments")

function saveData() {
  fetch("students.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "id": 5,
      "firstName": "Zıkkımın",
      "lastName": "Kökü",
    }),
  });
}
saveData()
