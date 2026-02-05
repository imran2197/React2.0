import React from "react";
import Button from "./Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const isSelected = selectedFriend?.id == friend.id;
  const handleSelectedFriend = () => {
    onSelection(friend);
  };
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button onClick={handleSelectedFriend}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
