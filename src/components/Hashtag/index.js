import React from "react";

import "./style.css";
import Card from "../../objects/Card";
import Player from "../../objects/Player";

const Hashtag = () => {
  return (
    <>
      {/* passar como parametro, qual o jogador que sera exibido no momento do export */}
      {/* object Player sendo passado como parametro (children) no object Card */}
      <Card>
        <ul className="hashtag">
          <li className="item">
            <Player player="o" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="o" />
          </li>

          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="o" />
          </li>

          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="o" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Hashtag;
