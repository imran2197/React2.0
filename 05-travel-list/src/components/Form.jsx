import React, { useState } from "react";

const qty = Array.from({ length: 20 }, (_, i) => i + 1);
const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  };
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {qty.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
