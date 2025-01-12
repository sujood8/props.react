import React from "react";

function ColorBlock({ color }) {
  const blockStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: color || "gray", // Default to gray if no color is provided
  };

  return <div style={blockStyle}></div>;
}

export default ColorBlock;