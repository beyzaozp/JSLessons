export default function Item({ item, onItemDelete, onItemUpdate }) {
  return (
    <li className="">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onItemUpdate(item.id)}
      />
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {item.quantity + " "}
        {item.title}
      </span>
      <button onClick={() => onItemDelete(item.id)}>X</button>
    </li>
  );
}
