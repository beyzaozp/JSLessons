import Item from "./Item";
export default function List({ items, onItemDelete, onItemUpdate }) {
  return (
    <>
      {items.length > 0 ? (
        <div className="list">
          <ul className="">
            {items.map((i, index) => (
              <Item
                key={index}
                item={i}
                onItemDelete={onItemDelete}
                onItemUpdate={onItemUpdate}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="list">Sepetinizde Ürün Yoktur.</div>
      )}
    </>
  );
}
