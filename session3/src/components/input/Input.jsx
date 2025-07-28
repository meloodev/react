import './input.css';

const Input = () => {
    return (
        <div className="input__box">
            <h3>interactive text with toggle switch</h3>
            <div className="box__input">
                <label htmlFor="inp">Enter text:</label>
                <input id='inp' type="text" />
            </div>
            <div className="box__btn">
                <button>hide text</button>
                <span>
                    simbols: <span className="text__counter">0</span>
                </span>
            </div>
            <blockquote>
                <p>your text:</p>
                <p className='input__text'>hellow how are you</p>
            </blockquote>
        </div>
    )
}

export default Input;