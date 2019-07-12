import React from "react";

import "./App.css";

import HeaderWrapper from "./components/HeaderWrapper";
import Hashtag from "./components/Hashtag";
import Events from "./objects/Events";

const App = () => {
  return (
    <main className="app">
      <HeaderWrapper />
      <Hashtag />
      <Events />
    </main>
  );
};

export default App;
