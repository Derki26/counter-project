import { useState, useEffect } from "react";
import "./App.css";
import SecondsCounter from "../src/components/SecondsCounter";

function App() {
  const [seconds, setCounter] = useState(0);
  const [clock, setClock] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevSeconds) => prevSeconds + 1);

      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="card">
        <div>
          <p className="secondsClass">
            <h1 className="clockClassFont">{clock}</h1>
            <SecondsCounter seconds={seconds} />
          </p>
        </div>
        
      </div>
    </>
  );
}

export default App;



/*
const [count, setCount] = useState(0);
<div className="containerButton">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        */