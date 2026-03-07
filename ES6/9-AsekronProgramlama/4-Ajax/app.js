// AJAX nedir?
// Ajax tarayıcı ve server arasındaki köprüdür

/*
    onreadystatechange: ready state değişince yapılması istenen işlemler
    ready state: 0 -> Server'a istek atıldığında serverla iletişim kuruluyor
                 1 -> Servar kuruldu
                 2 -> istek server'a ulaştı
                 3 -> istek işleniyor
                 4 -> istek bitti ve response oluştu

    status: server'ın durumu
    responseText: serverdan dönen texti almak için

*/

function prepareUrl(url, id) {
  if (id == null) {
    return url;
  } else {
    return `${url}?postId=${id}`;
  }
}

function getComments(url, id) {
  let newURL = prepareUrl(url, id);
  xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  });
  xhr.open("GET", newURL);
  xhr.send();
}
getComments("https://jsonplaceholder.typicode.com/comments", 3 );
