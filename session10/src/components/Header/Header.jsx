import { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import './header.css';
const Header = () => {

    const [value, setValue] = useState(false);
    const buttonRef = useRef(null);

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <nav>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>contacs</li>
                        </ul>
                    </nav>
                    <div className="profile">
                        <div ref={buttonRef} onClick={() => setValue(val => !val)} className="profile__icon">
                            <i className="fa-solid fa-user-tie"></i>
                        </div>
                        {<Modal value={value} setValue={setValue} buttonRef={buttonRef} />}
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;