const initialItems = [
  {
    name: 'GoodMood',
    packed: true,
    id: 1,
  },
  {
    name: 'Water',
    packed: false,
    id: 2,
  },
  {
    name: 'Snacks',
    packed: false,
    id: 3,
  },
];

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
