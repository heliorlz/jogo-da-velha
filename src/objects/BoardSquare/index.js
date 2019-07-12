import React from "react";

import "./style.css";
import Player from "../Player";

const BoardSquare = () => {
  return (
    <>
      <div className="boardsquare first">
        <Player />
      </div>
      <div className="boardsquare second">
        <Player />
      </div>
      <div className="boardsquare third">
        <Player />
      </div>
      <div className="boardsquare fourth">
        <Player />
      </div>
      <div className="boardsquare fifth">
        <Player />
      </div>
      <div className="boardsquare sixth">
        <Player />
      </div>
      <div className="boardsquare seventh">
        <Player />
      </div>
      <div className="boardsquare eighth">
        <Player />
      </div>
      <div className="boardsquare ninth">
        <Player />
      </div>
    </>
  );
};

export default BoardSquare;
