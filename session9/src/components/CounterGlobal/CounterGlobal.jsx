import './counterGlobal.css';

const CounterGlobal = () => {
    return (
        <div className="three">
            <h2 className="three__title">Global management</h2>
            <div className="three__chb">
                <input type="checkbox" id='chb' />
                <label htmlFor="chb">Disabling all buttons</label>
            </div>
            <button className="three__btn">
                <i className="fa-solid fa-window-restore"></i>
                Reset all counters
            </button>
        </div>
    )
}

export default CounterGlobal;