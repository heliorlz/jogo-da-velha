import React from "react";

import "./App.css";

import HeaderWrapper from "./components/HeaderWrapper";
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <HeaderWrapper />
      <Hashtag />
    </main>
  );
};

export default App;
