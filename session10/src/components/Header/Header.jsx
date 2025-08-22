import { useState, useRef } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router';
import Modal from '../Modal/Modal';
import './header.css';
const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [value, setValue] = useState(false);
    const buttonRef = useRef(null);

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <nav>
                        <ul>
                            <li
                                className={location.pathname === '/' ? 'active' : ''}
                                onClick={() => navigate('/')}>home
                            </li>
                            <li
                                className={location.pathname === '/about' ? 'active' : ''}
                                onClick={() => navigate('/about')}>about
                            </li>
                            <li> <NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''}>contacts</NavLink></li>
                        </ul>
                    </nav>
                    <div className="profile">
                        <div ref={buttonRef} onClick={() => setValue(val => !val)} className="profile__icon">
                            <i className="fa-solid fa-user-tie"></i>
                        </div>
                        {value && <Modal setValue={setValue} buttonRef={buttonRef} />}
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;