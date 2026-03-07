
// 1. Servisi başlat
const service = new CurrencyService();

// 2. UI Elemanlarını seç
const elements = {
  amount: document.querySelector("#amount"),
  firstSelect: document.querySelector("#firstCurrency"),
  secondSelect: document.querySelector("#secondCurrency"),
  result: document.querySelector("#resultText"),
  symbol: document.querySelector("#secondCurrencySymbol"),
  btn: document.querySelector("#convertBtn")
};

// 3. UI Güncelleme Fonksiyonu
const updateUI = (total, symbol) => {
  elements.result.textContent = total;
  elements.symbol.textContent = symbol;
};

// 4. Koordinatör Fonksiyon (Asıl İş Burada Döner)
const calculateExchange = async () => {
  const amount = parseFloat(elements.amount.value);
  if (isNaN(amount) || amount <= 0) return;

  const from = elements.firstSelect.value;
  const to = elements.secondSelect.value;

  // Servisten veriyi iste
  const rate = await service.getExchangeRate(from, to);
  
  if (rate) {
    const total = (amount * rate).toFixed(2);
    updateUI(total, to);
  } else {
    elements.result.textContent = "Hata!";
  }
};

// 5. Olay Dinleyiciler
elements.btn.addEventListener("click", (e) => {
  e.preventDefault();
  calculateExchange();
});

document.addEventListener("DOMContentLoaded", calculateExchange);