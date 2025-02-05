export default function ItemsList({ items, handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} />;
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem }) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' /> {item.name}
      </label>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
