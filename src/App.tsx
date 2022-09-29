import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import AdDesigner from "./component/AdDesigner";
import Support from "./component/Support";

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Support />
    </div>
  );
}

export default App;
