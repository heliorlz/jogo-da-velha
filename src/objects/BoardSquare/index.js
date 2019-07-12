import React from "react";

import "./style.css";
import Player from "../Player";

const BoardSquare = () => {
  return (
    <>
      <div className="boardsquare first">
        {/* passar como parametro, qual o jogador que sera exibido no momento do export */}
        <Player player="o" />
      </div>
      <div className="boardsquare second">
        <Player player="x" />
      </div>
      <div className="boardsquare third">
        <Player player="o" />
      </div>
      <div className="boardsquare fourth">
        <Player player="x" />
      </div>
      <div className="boardsquare fifth">
        <Player player="x" />
      </div>
      <div className="boardsquare sixth">
        <Player player="o" />
      </div>
      <div className="boardsquare seventh">
        <Player player="x" />
      </div>
      <div className="boardsquare eighth">
        <Player player="o" />
      </div>
      <div className="boardsquare ninth">
        <Player player="x" />
      </div>
    </>
  );
};

export default BoardSquare;
