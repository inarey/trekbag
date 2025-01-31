import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./components/lib/constants";


function App() {
  const [items, setItems] = useState(initialItems)

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemsList items={items}/>
        <Sidebar setItems={setItems}/>
      </main>

      <Footer />
    </>
  )
}

export default App
