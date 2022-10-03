import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import AdDesigner from "./component/AdDesigner";
import Support from "./component/Support";
import Votes from "./component/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainDiv">
        <AdDesigner />
        <Support />
        <Votes />
      </div>
    </div>
  );
}

export default App;
