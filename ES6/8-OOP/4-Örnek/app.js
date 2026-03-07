class Product {
    constructor(id, prodName, price) {
        this.id = id;
        this.prodName = prodName;
        this.price = price;
    }
}

class Customer {
    constructor(hasVipCard) {
        this.hasVipCard = hasVipCard;
        this.discountRate = 0.20;
    }
}

class Basket {
    constructor(customer) {
        this.items = [];
        this.customer = customer;
    }

    addItem(product) {
        this.items.push(product);
        this.saveToStorage();
    }

    // Verileri SessionStorage'a kaydet
    saveToStorage() {
        sessionStorage.setItem("basketItems", JSON.stringify(this.items));
        sessionStorage.setItem("isVip", JSON.stringify(this.customer.hasVipCard));
    }

    // Verileri SessionStorage'dan yükle
    loadFromStorage() {
        const storedItems = sessionStorage.getItem("basketItems");
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    }

    calculateTotal() {
        const subTotal = this.items.reduce((sum, item) => sum + item.price, 0);
        const finalTotal = this.customer.hasVipCard ? subTotal * (1 - this.customer.discountRate) : subTotal;
        return { subTotal, finalTotal, isVip: this.customer.hasVipCard };
    }
}

class MarketUI {
    constructor(productList) {
        // VIP Durumunu önce Storage'dan kontrol et, yoksa sor
        const storedVip = sessionStorage.getItem("isVip");
        const isVip = storedVip !== null ? JSON.parse(storedVip) : confirm("VIP Kartınız var mı?");
        
        this.customer = new Customer(isVip);
        this.basket = new Basket(this.customer);
        this.productList = productList.map((p, index) => new Product(index, p.prodName, p.price));

        this.els = {
            grid: document.querySelector("#product-grid"),
            basketList: document.querySelector("#basket-list"),
            totalPrice: document.querySelector("#total-price"),
            discountInfo: document.querySelector("#discount-info"),
            marketTitle: document.querySelector("#market-title")
        };
    }

    init() {
        this.basket.loadFromStorage(); // Sayfa açılınca sepeti doldur
        this.renderProducts();
        this.renderVipStatus();
        this.updateBasketUI(); // Varsa eski ürünleri ekrana bas
    }

    renderVipStatus() {
        if (this.customer.hasVipCard) {
            this.els.marketTitle.innerHTML += ' <span class="badge bg-warning text-dark" style="font-size: 0.5em">VIP</span>';
        }
    }

    renderProducts() {
        this.productList.forEach(product => {
            const col = document.createElement("div");
            col.className = "col-6 col-md-4 col-lg-3";
            col.innerHTML = `
                <button class="btn btn-outline-primary w-100 product-btn shadow-sm">
                    <span class="product-name d-block text-dark fw-bold">${product.prodName}</span>
                    <span class="price-tag text-success fw-bold">${product.price.toFixed(2)} TL</span>
                </button>
            `;
            col.querySelector('button').addEventListener("click", () => this.handleAddToBasket(product));
            this.els.grid.appendChild(col);
        });
    }

    handleAddToBasket(product) {
        this.basket.addItem(product);
        this.updateBasketUI();
    }

    updateBasketUI() {
        const totals = this.basket.calculateTotal();
        this.els.basketList.innerHTML = "";

        if (this.basket.items.length === 0) {
            this.els.basketList.innerHTML = '<li class="list-group-item text-muted text-center py-4">Sepetiniz boş.</li>';
        } else {
            this.basket.items.forEach(item => {
                const li = document.createElement("li");
                li.className = "list-group-item d-flex justify-content-between align-items-center bg-transparent border-0 border-bottom px-0";
                li.innerHTML = `<span>${item.prodName}</span> <span class="fw-bold">${item.price.toFixed(2)} TL</span>`;
                this.els.basketList.appendChild(li);
            });
        }

        this.els.discountInfo.innerHTML = (totals.isVip && this.basket.items.length > 0) 
            ? `<small class="text-danger fw-bold">%20 VIP İndirimi Uygulandı!</small>` 
            : "";
        
        this.els.totalPrice.innerText = `${totals.finalTotal.toFixed(2)} TL`;
    }
}

// Ürün Listesi ve Başlatma
const rawProducts = [
    { price: 34.50, prodName: "Süt (1L)" }, { price: 18.25, prodName: "Ekmek" },
    { price: 145.00, prodName: "Süzme Peynir" }, { price: 210.00, prodName: "Dana Kıyma" },
    { price: 85.00, prodName: "Yumurta (15li)" }, { price: 42.00, prodName: "Makarna" },
    { price: 320.00, prodName: "Zeytinyağı" }, { price: 65.00, prodName: "Domates" },
    { price: 24.50, prodName: "Kuru Soğan" }, { price: 110.00, prodName: "Siyah Çay" },
    { price: 185.00, prodName: "Türk Kahvesi" }, { price: 48.00, prodName: "Yoğurt" },
    { price: 75.00, prodName: "Tereyağı" }, { price: 130.00, prodName: "Baldo Pirinç" },
    { price: 55.00, prodName: "Mercimek" }, { price: 32.00, prodName: "Ayçiçek Yağı" },
    { price: 19.50, prodName: "Maden Suyu" }, { price: 160.00, prodName: "Deterjan" },
    { price: 45.00, prodName: "Sünger" }, { price: 95.00, prodName: "Tuvalet Kağıdı" }
];

const app = new MarketUI(rawProducts);
app.init();