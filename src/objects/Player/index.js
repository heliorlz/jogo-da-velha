import React from "react";

import "./style.css";
import playerO from "./../../img/player-o.png";
import playerX from "./../../img/player-x.png";

// recebendo como parametro, o player passado na criacao do object Player
// podemos extrair do props, apenas o player
const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  // let player;

  // if (player === "x") {
  //   player = playerX;
  // } else if (player === "o") {
  //   player = playerO;
  // }
  return (
    <>
      <button className="player">
        <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
      </button>
    </>
  );
};

export default Player;
