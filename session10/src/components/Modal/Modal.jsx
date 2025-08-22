import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router';
import './modal.css';
const Modal = ({ setValue, buttonRef }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {

            if (menuRef.current && e.target.closest('.disabled')) {
                return;
            }

            if (
                // menuRef.current &&
                // !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setValue(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [setValue, buttonRef]);


    // { console.log(value) }
    return (
        <ul className={`modal__menu`} ref={menuRef}>
            <li>1st menu item</li>
            <li className="disabled">☺ 2nd menu item (disabled)</li>
            <li className="disabled">3rd menu item (disabled)</li>
            <li><NavLink to="/user/asda">Profile</NavLink></li>
            <li>a danger item</li>
        </ul>
    )
}

export default Modal;