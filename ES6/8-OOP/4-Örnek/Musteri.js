class Musteri extends MigrosBase {
  discountAmount = 20;
  constructor(firstName, lastName, haveMoneycard, products) {
    super(firstName, lastName, haveMoneycard, products);
  }

  calculatePrice() {
    if (this.checkProducts(this.products)) {
        div
    }
  }

  checkProducts(products) {
    if (products != null && products.length > 0) return true;
    else return false;
  }
}
