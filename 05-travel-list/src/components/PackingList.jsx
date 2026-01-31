import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy == "input") {
    sortedItems = items;
  }
  if (sortBy == "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy == "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((list) => (
          <Item
            key={list.id}
            item={list}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {items.length > 0 && <button onClick={onClearList}>Clear List</button>}
      </div>
    </div>
  );
};

export default PackingList;
