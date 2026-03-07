// Beden kitle indexi hesaplama

// let weight = Number(prompt("Kilonuz(kg): "));
// let height = Number(prompt("Boyunuz(m):"));
// height **= 2;

// function VKI(weight, height) {
//   let vki = weight / height;
//   console.log(vki);
//   if (vki <= 18.5) console.log("ideal kilonun çok altında");
//   else if (vki <= 24.9) console.log("ideal kiloda");
//   else if (vki <= 29.9) console.log("ideal kilonun üstünde");
//   else if (vki <= 39.9) console.log("Obez");
//   else console.log("Aşırı Obez");
// }
// VKI(weight, height);

// Benzin İstasyonu

/**
 *
 *
 */

async function Prices(yakitTipi, litre) {
  // 1. Eşleştirme Sözlüğü (If-else yerine daha profesyonel)
  const config = {
    benzin: {
      endpoint: "turkeyGasoline?district=kucukcekmece&city=istanbul",
      ek: "in",
      key: "benzin",
    },
    mazot: {
      endpoint: "turkeyDiesel?district=kucukcekmece&city=istanbul",
      ek: "un",
      key: "dizel",
    },
    lpg: { endpoint: "turkeyLpg?city=ankara", ek: "nin", key: "lpg" },
  };

  const secilen = config[yakitTipi];

  if (!secilen) {
    alert("Lütfen sadece benzin, mazot veya lpg giriniz.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.collectapi.com/gasPrice/${secilen.endpoint}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "apikey 0WrdR4eC2TyFK6ZVefxlwS:0VfpY2UnRhDZMAzLBUhAgc",
        },
      },
    );

    const data = await response.json();

    // 2. Veriye Ulaşım (Genelde result[0].price formatındadır)
    if (data.success && data.result.length > 0) {
      let guncelFiyat = Number(
        String(data.result[0][secilen.key]).replace(",", "."),
      );
      const toplamTutar = (guncelFiyat * litre).toFixed(2);
      console.log(Number(toplamTutar));

      alert(
        `Aldığınız ${yakitTipi}${secilen.ek} ${litre} litresi ${toplamTutar} TL tutmuştur.`,
      );
    }
  } catch (error) {
    console.error("Hata detayı:", error);
    alert("Veri çekilirken bir hata oluştu.");
  }
}

// Kullanıcıdan veri alırken temizlik yapalım
const tip = prompt("Yakıt türü (benzin, lpg, mazot):").toLowerCase().trim();
const miktar = Number(prompt("Kaç litre?"));

if (isNaN(miktar)) {
  alert("Lütfen geçerli bir sayı gir!");
} else {
  Prices(tip, miktar);
}
