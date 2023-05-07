import React from "react";

function CardBtn(props) {
  const { img, title, color } = props;
  return (
    <div className="cardBtn">
      <div style={{ backgroundColor: color }}>{img}</div>
      <p>{title}</p>
    </div>
  );
}

export default CardBtn;
