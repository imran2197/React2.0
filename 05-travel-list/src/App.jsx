import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  const handleAddItems = (item) => {
    setItems((currState) => [...currState, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) {
      setItems([]);
    }
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
