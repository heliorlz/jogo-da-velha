import React from "react";

import "./style.css";
import Mark from "../Mark";

const BoardSquare = () => {
  return (
    <>
      <div className="boardsquare first">
        <Mark />
      </div>
      <div className="boardsquare second">
        <Mark />
      </div>
      <div className="boardsquare third">
        <Mark />
      </div>
      <div className="boardsquare fourth">
        <Mark />
      </div>
      <div className="boardsquare fifth">
        <Mark />
      </div>
      <div className="boardsquare sixth">
        <Mark />
      </div>
      <div className="boardsquare seventh">
        <Mark />
      </div>
      <div className="boardsquare eighth">
        <Mark />
      </div>
      <div className="boardsquare ninth">
        <Mark />
      </div>
    </>
  );
};

export default BoardSquare;
