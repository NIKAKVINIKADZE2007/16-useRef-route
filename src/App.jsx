import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // let normalvar = 0;

  const refVar = useRef(0);

  const [click, setClick] = useState(0);

  const handleClick = () => {
    // setClick((prev) => prev + 1);
    refVar.current += 1;
    console.log(refVar.current);
  };
  return (
    <>
      <div>
        <p>Button Click {click} times</p>
        <p>Normal variable:{refVar.current} </p>
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  );
}

export default App;
