import React, { useState, useEffect } from "react";

function ClockButton(InitTime) {
  const [time, setClock] = useState({seconds: InitTime.InitTime, level: 1});

  useEffect(() => {
        const interval = setInterval(() => {
            setClock({seconds: time.seconds - 1, level: time.level})
        }, 1000);
        return () => clearInterval(interval);
      }, []);

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
