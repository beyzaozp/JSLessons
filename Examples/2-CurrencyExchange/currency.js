class CurrencyService {
  constructor() {
    this.apiKey = "cc0c78a9ade99d441bae54a3";
    this.baseUrl = "https://v6.exchangerate-api.com/v6";
  }

  // Sadece ham veriyi getirir, UI ile ilgilenmez (Single Responsibility)
  async getExchangeRate(from, to) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.apiKey}/latest/${from}`);
      const data = await response.json();
      if (data.result !== "success") throw new Error("API Hatası");
      return data.conversion_rates[to];
    } catch (error) {
      console.error("Servis Hatası:", error);
      return null;
    }
  }
}
