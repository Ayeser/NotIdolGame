import React, { useState, useEffect } from "react";

function ClockButton(InitTime) {
  const [time, setClock] = useState({seconds: InitTime.InitTime, level: 1});

  setInterval(function(){
    let newNum = time.seconds - 1;
    setClock({seconds: newNum, level:1});
  }, 1000);
    
  return (
    <div>
    <button>
    <p>Level: {time.level}</p>
    <p>{time.seconds}</p>
      <p>Click to make progress!</p>
    </button>
    </div>
  );
}

export default ClockButton;
