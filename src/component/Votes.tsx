import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [vanilla, setVanilla] = useState(0);
  const [choclate, setChoclate] = useState(0);
  const [strawberry, setStrawberry] = useState(0);

  function vanillaCountUp() {
    setVanilla((prev) => prev + 1);
  }

  function vanillaCountDown() {
    setVanilla((prev) => prev - 1);
  }
  function choclateCountUp() {
    setChoclate((prev) => prev + 1);
  }

  function choclateCountDown() {
    setChoclate((prev) => prev - 1);
  }

  function strawberryCountUp() {
    setStrawberry((prev) => prev + 1);
  }

  function strawberryCountDown() {
    setStrawberry((prev) => prev - 1);
  }

  return (
    <>
      <div className="Votes">
        <h1>Votes!!!</h1>
        <button className="button" onClick={choclateCountUp}>
          Choclate
        </button>
        <button className="button" onClick={strawberryCountUp}>
          Strawberry
        </button>
        <button className="button" onClick={vanillaCountUp}>
          Vanilla
        </button>
      </div>
    </>
  );
};

export default Votes;
