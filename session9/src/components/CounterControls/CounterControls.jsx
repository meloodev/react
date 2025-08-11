import './counterControls.css';

const CounterControls = ({ value, increase, decrease, reset, btnToggle }) => {
    return (
        <div className="one">
            <h2 className="one__title">Controlled Counter</h2>
            <h4 className="one__subtitle">The state is managed by the parent</h4>
            <div className="one__header">
                <h3 className="one__header-title">Value:</h3>
                <span>{value}</span>
            </div>
            <div className="one__controls">
                <h2 className="one__controls-title">Controls</h2>
                <div className="one__controls-inner">
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={increase}>+ increase</button>
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={decrease}>- decrease</button>
                    <button disabled={btnToggle} className={btnToggle ? 'off' : ''} onClick={reset}><i className="fa-solid fa-window-restore"></i>reset</button>
                </div>
            </div>
        </div>

    )
}

export default CounterControls;