import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({setItems}) {
  return (
    <div className="sidebar">
      <AddItemForm setItem={setItems}/>

      <ButtonGroup /> 
    </div>
  )
}