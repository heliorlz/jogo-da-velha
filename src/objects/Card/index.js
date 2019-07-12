import React from "react";

import "./style.css";

const Card = ({ children }) => {
  // recebendo como parametro children equivalente ao player
  return <article className="card">{children}</article>;
};

export default Card;
