import { initialItems } from "./lib/constants";


export default function ItemsList() {
  return (
    <div>
      <ul>
        {initialItems.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}



function Item({ item }) {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' />
        {item.name}
      </label>
    </li>
  );
}
