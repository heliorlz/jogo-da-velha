import React from "react";

import "./style.css";

import NavWrapper from "../../objects/NavWrapper";
import LogoCollabCode from "../../objects/LogoCollabCode";

const HeaderWrapper = () => {
  return (
    <header className="header-wrapper">
      <>
        <LogoCollabCode />
        <NavWrapper />
      </>
    </header>
  );
};

export default HeaderWrapper;
