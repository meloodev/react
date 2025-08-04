import { useState, useEffect } from 'react';
import './darkMode.css';


const DarkMode = () => {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('formMode');
        if (!saved) return;

        const { theme } = JSON.parse(saved);
        if (theme === 'dark') {
            setDark(true);
            document.body.classList.add('dark');
        }
    }, []);

    const theme = () => {
        setDark(prev => {
            const newValue = !prev;

            if (newValue) {
                saveTheme('dark');
                document.body.classList.add('dark');
            } else {
                localStorage.removeItem('formMode');
                document.body.classList.remove('dark');
            }

            return newValue;
        });
    };

    const saveTheme = (mode) => {
        const currentSettings = JSON.parse(localStorage.getItem('formMode')) || {};
        currentSettings.theme = mode;
        localStorage.setItem('formMode', JSON.stringify(currentSettings));
    }





    return (
        <div className="tumb_two">
            <label className="wrap_two">
                <input className="inp2" type="checkbox" checked={dark} onChange={theme} />
                <span className="btn2"></span>
            </label>
        </div>
    )
}
export default DarkMode;