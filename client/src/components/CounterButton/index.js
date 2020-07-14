import React, { useState, useEffect } from "react";
import "./style.css";

function CounterButton(Number) {
  const [counter, setCounter] = useState({x: 0, y: 10, z: Number.Number, level: 1});
useEffect(() => {
})

  function buttonClick(event) {
if (counter.x + counter.z > counter.y) {
  levelUp();
} else {
    setCounter({x: counter.x + counter.z, y: counter.y, z: counter.z, level: counter.level});
    event.preventDefault();
};

function levelUp(event) {
  setCounter({x: 0, y: counter.y * 2, z: counter.z, level: counter.level + 1})
  console.log("Leveled up!");
}


  }
  return (
    <div>
    <button onClick={buttonClick}>
    <p>Level: {counter.level}</p>
    <p>{counter.x} / {counter.y}</p>
      <p>Click to make progress!</p>
    </button>
    </div>
  );
}

export default CounterButton;
