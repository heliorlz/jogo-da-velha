import React from "react";

import "./style.css";
import BoardSquare from "../../objects/BoardSquare";

const Card = () => {
  return (
    <article className="card">
      <BoardSquare />
    </article>
  );
};

export default Card;
