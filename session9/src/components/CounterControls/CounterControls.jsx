import './counterControls.css';

const CounterControls = ({ value, increase, decrease, reset }) => {
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
                    <button onClick={increase}>+ increase</button>
                    <button onClick={decrease}>- decrease</button>
                    <button onClick={reset}><i className="fa-solid fa-window-restore"></i>reset</button>
                </div>
            </div>
        </div>

    )
}

export default CounterControls;