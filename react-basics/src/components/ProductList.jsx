import Product from "./Product";
import { items } from "../data/data";

export default function ProductList() {
  // const items = [];
  return (
    <>
      {items.length > 0 ? (
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"
          id="product-list"
        >
          {items.map((item, key) => (
            <div key={key}>
              <Product propsObj={item} />
            </div>
          ))}
        </div>
      ) : (
        <div id="product-list">Satışta Ürün Yoktur.</div>
      )}
    </>
  );
}
