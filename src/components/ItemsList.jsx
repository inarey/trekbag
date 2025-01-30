const initialItems = [
  { id: 1, name: 'iPhone charger', completed: true },
  { id: 2, name: 'Eye Mask', completed: false },
  { id: 3, name: 'Neck Pillow', completed: false }
]

export default function ItemsList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.id} item={item} />   
      })}
    </ul>
  )
}

function Item ({item}) {
  return (
    <li className="item"> 
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  )
}