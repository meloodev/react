import { useState } from 'react';
import './counter.css';



const Counter = () => {
    const [value, setValue] = useState(0);

    const inc = () => {
        setValue(prev => prev + 1)
    }

    const dec = () => {
        if (value > 0) {
            setValue(prev => prev - 1)
        }
    }

    const reset = () => {
        setValue(0)
    }
    return (
        <div className="box">
            <h3>dinamic Counter</h3>
            <span className='box__value'>{value}</span>
            <div className="box__btns">
                <button className="inc" onClick={inc}>increase</button>
                <button className={`dec ${value === 0 ? 'disabled' : ''}`} disabled={value === 0} onClick={dec}>decrease</button>
                <button className="reset" onClick={reset}>reset</button>
            </div>
            <div className="message">
                {value === 0 && <span>The counter cannot be less than 0</span>}
            </div>
        </div>
    )
}

export default Counter;