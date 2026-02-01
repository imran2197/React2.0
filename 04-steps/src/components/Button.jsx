import React from "react";

const Button = ({ style, onClickHandler, isDisabled, children }) => {
  return (
    <div>
      <button style={style} onClick={onClickHandler} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
