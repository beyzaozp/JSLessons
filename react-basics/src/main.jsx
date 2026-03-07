/* eslint-disable react/prop-types */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Header </h1>;
}

const ProductList = () => {
  const items = [
    {
      image: "234",
      title: "Ürün 1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      price: 8000,
      isActive: false,
    },
    {
      image: "234",
      title: "Ürün 2",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      price: 8000,
      isActive: true,
    },
    {
      image: "23",
      title: "Ürün 3",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      price: 3000,
      isActive: false,
    },
    {
      image: "34",
      title: "Ürün 4",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      price: 12000,
      isActive: true,
    },
  ];
  // const items = [];
  return (
    <>
      <h2>Product List</h2>
      {items.length > 0 ? (
        <div id="product-list">
          {items.map((item, key) => (
            <Product key={key} propsObj={item} />
          ))}
        </div>
      ) : (
        <div id="product-list">Satışta Ürün Yoktur.</div>
      )}
    </>
  );
};

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {isOpen ? (
        <div>
          <p>Akşam {openHour}&apos;a kadar sipariş verebilirsiniz.</p>
        </div>
      ) : (
        <div>
          <p>Sistemiz {openHour}&apos;da açılacaktır.</p>
        </div>
      )}
    </footer>
  );
}

function Product({ propsObj }) {
  if (!propsObj.isActive) return null;
  return (
    <div>
      <img src={`https://picsum.photos/id/${propsObj.image}/200/300`} alt="" />
      <h2>{propsObj.title}</h2>
      <p>{propsObj.description}</p>
      <span>{`${propsObj.price}TL`}</span>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
