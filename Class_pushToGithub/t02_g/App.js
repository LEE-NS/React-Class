import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num, numCalc] = useState(0)
  const increase = () => {
    numCalc(num + 1);   
  };
  const decrease = () => {
    numCalc(num - 1);
  };

  return (
    <div>
     <div>{num}</div>
     <button onClick={increase}>+1</button>
     <button onClick={decrease}>-1</button>
    </div>
  ); 
};

export default App;
