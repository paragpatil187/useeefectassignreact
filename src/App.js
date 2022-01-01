
import { useState } from 'react';
import './App.css';
import { Timer } from './timer';

function App() {
  const [show, setShow] = useState(1)
  return (
    <div className="App">
    {show?<Timer/> : null}
    <button onClick={ ()=> setShow(!show)} >{show ? "Hide" :"Show"}</button>
      
    </div>
  );
}

export default App;
