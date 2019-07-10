import React from "react";

import MarkCircle from "./../../img/Circle.png";
import MarkX from "./../../img/X.png";

const Mark = () => {
  return (
    <>
      <img src={MarkCircle} alt="Marca da jogada" />
      <img src={MarkX} alt="Marca da jogada" />
    </>
  );
};

export default Mark;
