import { useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import Sidebar from './components/Sidebar';
import { initialItems } from './components/lib/constants';

function App() {
  const [items, setItems] = useState(initialItems);

  // adding a new item
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  // removing all items
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  // reset to initial
  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  // mark all as complete
  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, completed: true }));
    setItems(newItems);
  };

  // mark all as incomplete
  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, completed: false }));
    setItems(newItems);
  };
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemsList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
