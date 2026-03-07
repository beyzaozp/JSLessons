// ? Async Await yapısı

// async function hello() { // bir promise döner
//   console.log("Hello world!");
// }

// console.log(hello());

// document.querySelector("#button").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((posts) => {
//       fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`)
//       .then((response)=> response.json())
//       .then((comments)=> console.log(comments))
//     });
// });

document.querySelector("#button").addEventListener("click", async () => {
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
    )
  ).json();

  console.log(comments);
});
