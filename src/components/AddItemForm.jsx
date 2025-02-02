import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({handleAddItem}) {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef()

  const handleSubmit = (event) => {
      event.preventDefault()

      // basic validation
      if (!itemText) {
        alert("Please enter an item")
        inputRef.current.focus()
        return
      }
      
      handleAddItem(itemText)
      setItemText("")
    } 
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input ref={inputRef} type="text" value={itemText} onChange={(event) => {
        setItemText(event.target.value)  
      }}autoFocus />
      <Button>Add to List</Button>
    </form>
  )
}