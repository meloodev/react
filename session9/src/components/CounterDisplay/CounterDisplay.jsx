import { useState, useEffect } from 'react';
import './counterDisplay.css';

const CounterDisplay = ({ btnToggle, getDisplayValue }) => {
    const [value, setValue] = useState(0);


    useEffect(() => {
        getDisplayValue(value);
    }, [value])

    const increase = () => {
        setValue((value) => value + 1);
    }

    const decrease = () => {
        setValue((value) => value - 1);
    }

    const reset = () => {
        setValue(0);
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
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={increase}>+ increase</button>
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={decrease}>- decrease</button>
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={reset}><i className="fa-solid fa-window-restore"></i>reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterDisplay;