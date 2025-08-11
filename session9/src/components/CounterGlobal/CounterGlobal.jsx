import './counterGlobal.css';

const CounterGlobal = ({ btnToggleFunc, reset, value, display, btnToggle }) => {
    return (
        <div className="three">
            <h2 className="three__title">Global management</h2>
            <div className="three__chb">
                <input type="checkbox" id='chb' onChange={btnToggleFunc} />
                <label htmlFor="chb">Disabling all buttons</label>
            </div>
            <button disabled={btnToggle} onClick={reset} className={`three__btn ${btnToggle ? 'off' : ''}`}>
                <i className="fa-solid fa-window-restore"></i>
                Reset all counters
            </button>

            <p className='three__sum'>Sum of all controlled counters: <span>{(value + display)}</span></p>
        </div>
    )
}

export default CounterGlobal;