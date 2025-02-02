import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./components/lib/constants";


function App() {
  const [items, setItems] = useState(initialItems)

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      completed: false
    }

    const newItems = [...items, newItem]
    setItems(newItems)
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemsList items={items}/>
        <Sidebar handleAddItem={handleAddItem}/>
      </main>

      <Footer />
    </>
  )
}

export default App
