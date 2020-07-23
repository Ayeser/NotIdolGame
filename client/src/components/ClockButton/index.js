import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';


function ClockButton(InitTime) {
  const [time, setClock] = useState({seconds: InitTime.InitTime, level: 1});

  function startTimer() {
    let newNum = 1000
    setInterval(function(){
      newNum = newNum - 1;
      console.log(newNum);
  // ReactDOM.render("Hello", document.getElementById('timer'));
    }, 1000);
  }
    
  return (
    <div>
    <button onClick={() => startTimer()}>
    <p>Level: {time.level}</p>
    <scan>Click to start</scan>
      <p>Click to make progress!</p>
    </button>
    </div>
  );
}

export default ClockButton;
