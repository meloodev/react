import { useState } from 'react';
import './counterDisplay.css';

const CounterDisplay = () => {
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
        <div className="two">
            <h2 className="two__title">Uncontrolled Counter</h2>
            <h4 className="two__subtitle">The state is managed inside the component</h4>
            <div className="two__header">
                <h3 className="two__header-title">Value:</h3>
                <span>{value}</span>
            </div>
            <div className="two__controls">
                <h2 className="two__controls-title">Controls</h2>
                <div className="two__controls-inner">
                    <button onClick={increase}>+ increase</button>
                    <button onClick={decrease}>- decrease</button>
                    <button onClick={reset}><i className="fa-solid fa-window-restore"></i>reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterDisplay;