/*
    Javascript senkron çalışan bir programlama dilidir. Peşpeşe

------Javascript bazı yerlerde asenkron çalışır
    1-Timing
    2-Event(Olaylar)
    3-Http isteklerinde

------ Callback - Promise- Async&await
    asenkron yapıları senkrona çeviriyoruz.
*/

// console.log(1);
// console.log(2);
// console.log(3);

//Asenkron
// setTimeout(() => {}, timeout);
// XMLHttpRequest
// fetch
// DOM

console.log("Beyza");

setTimeout(() => {
    console.log("Süre doldu çalıştı");
}, 1000);

setTimeout(()=>{
    console.log("500ms bekledi çalıştı");
},500)

console.log("Özpınar");
