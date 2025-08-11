import { useState, useEffect } from 'react';
import CounterControls from './components/CounterControls/CounterControls';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import CounterGlobal from './components/CounterGlobal/CounterGlobal';
import './App.css'


function App() {

  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(0);
  const [btnToggle, setBtnToggle] = useState(false);


  const getDisplayValue = (val) => {
    setDisplay(val);
  }

  const increase = () => {
    setValue((value) => value + 1);
  }

  const decrease = () => {
    setValue((value) => value - 1);
  }

  const reset = () => {
    setValue(0);
  }

  const btnActive = () => {
    setBtnToggle((prev) => !prev)
  }


  return (
    <div className="wrapper">
      <div className="container">
        <h1>Shared Counter Controller</h1>
        <div className="wrapper__inner">
          <CounterGlobal btnToggle={btnToggle} btnToggleFunc={btnActive} reset={reset} value={value} display={display} />
          <CounterControls btnToggle={btnToggle} value={value} increase={increase} decrease={decrease} reset={reset} />
          <CounterDisplay btnToggle={btnToggle} getDisplayValue={getDisplayValue} />

        </div>
      </div>
    </div>
  )
}

export default App


