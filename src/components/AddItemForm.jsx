import { useState } from "react";
import Button from "./Button";

export default function AddItemForm({setItems}) {
  const [itemText, setItemText] = useState("")
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      const newItem = {
        id: new Date().getTime(),
        name: itemText,
        completed: false
      }
      setItems((prev) => [...prev, newItem])
    } }>
      <h2>Add an Item</h2>
      <input type="text" value={itemText} onChange={(event) => {
        setItemText(event.target.value)
      }}/>
      <Button>Add to List</Button>
    </form>
  )
}