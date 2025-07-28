import { useState } from 'react'
import './input.css';

const Input = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(true);

    const inputChanges = (e) => {
        const target = e.target.value;
        setValue(target);
    }

    const toggleBtn = () => {
        setVisible((prev) => !prev)
    }

    const displayedTxt = !visible
        ? `Text is hidden (symbols: ${value.length})`
        : value;

    return (
        <div className="input__box">
            <h3>Interactive text with toggle switch</h3>
            <div className="box__input">
                <label htmlFor="inp">Enter text:</label>
                <input onChange={inputChanges} value={value} id='inp' type="text" />
            </div>
            <div className="box__btn">
                <button onClick={toggleBtn}>
                    {visible ? 'Hide text' : 'Show Text'}
                </button>
                <span>
                    symbols: <span className="text__counter">{value.length}</span>
                </span>
            </div>
            <blockquote>
                <p>Your text:</p>
                <p className='input__text'>{displayedTxt}</p>
            </blockquote>
        </div>
    )
}

export default Input;