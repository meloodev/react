import { useState } from 'react';
import Logger from './components/Logger';

const ToggleWrapper = () => {
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>Toggle</button>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
      <p>Counter: {counter}</p>

      {show && <Logger counter={counter} />}
    </div>
  );
};

export default ToggleWrapper;