import { useState } from "react";

const items = [
  { id: 1, title: "Yumurta", quantity: 10, completed: true },
  { id: 2, title: "Süt", quantity: 2, completed: true },
  { id: 3, title: "Bal", quantity: 1, completed: true },
  { id: 4, title: "Ekmek", quantity: 3, completed: false },
  { id: 5, title: "Zeytin", quantity: 1, completed: true },
];
function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <List />
      <Summary />
    </div>
  );
}

function Header() {
  return <h1>🛒 Shopping List </h1>;
}

function Form() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleFormSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      title,
      quantity,
      completed: false,
    };
    setTitle("");
    setQuantity(0);
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Ürün Adı Giriniz..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 10 }, (v, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul className="">
        {items.map((i, index) => (
          <Item key={index} item={i} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="">
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {item.quantity + " "}
        {item.title}
      </span>
      <button>X</button>
    </li>
  );
}

function Summary() {
  return (
    <footer className="summary">Sepetinizde 10 tane ürün bulunmaktadır.</footer>
  );
}
export default App;
