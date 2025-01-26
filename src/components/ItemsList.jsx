export default function ItemsList() {
  return (
    <ul>
      <Item item="item 1" />
      <Item item="item 2" />
      <Item item="item 3" />
    </ul>
  )
}

function Item () {
  return (
    <li className="item"> 
      <label>
        <input type="checkbox" />
      </label>
    </li>
  )
}