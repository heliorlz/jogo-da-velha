import React from "react";

import "./style.css";
import PlayerO from "./../../img/player-o.png";

const Player = () => {
  return (
    <>
      <button className="player">
        <img src={PlayerO} alt="Jogador Circulo" />
      </button>
    </>
  );
};

export default Player;
