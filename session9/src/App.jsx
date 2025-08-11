import { useState } from 'react';
import CounterControls from './components/CounterControls/CounterControls';
import CounterDisplay from './components/CounterDisplay/CounterControls';
import CounterGlobal from './components/CounterGlobal/CounterGlobal';
import './App.css'


function App() {

  const [value, serValue] = useState(0);

  const increase = () => {
    serValue((value) => value + 1);
  }

  const decrease = () => {
    serValue((value) => value - 1);
  }

  const reset = () => {
    serValue(0);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Shared Counter Controller</h1>
        <div className="wrapper__inner">
          <CounterGlobal />
          <CounterControls value={value} increase={increase} decrease={decrease} reset={reset} />
          <CounterDisplay />
         
        </div>
      </div>
    </div>
  )
}

export default App


