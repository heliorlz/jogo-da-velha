import React from "react";

import "./style.css";

import Sobre from "../Sobre";
import MenuHamburguer from "../MenuHamburguer";

const NavWrapper = () => {
  return (
    <div className="nav-wrapper">
      <Sobre />
      <MenuHamburguer />
    </div>
  );
};

export default NavWrapper;
