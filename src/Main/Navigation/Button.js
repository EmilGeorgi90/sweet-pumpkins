import React from "react";
import "./Button.css"

const CustButton = ({ onClick, children }) => (
  <div className="search-button">
    <button onClick={onClick}>
      {children}
    </button>
  </div>
)

export default CustButton;