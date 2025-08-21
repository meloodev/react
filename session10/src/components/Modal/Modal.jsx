import { useRef, useEffect } from 'react';
import './modal.css';
const Modal = ({ value, setValue, buttonRef }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
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


    { console.log(value) }
    return (
        <ul className={`modal__menu ${value ? 'show' : ''}`} ref={menuRef}>
            <li>1st menu item</li>
            <li className="disabled">☺ 2nd menu item (disabled)</li>
            <li className="disabled">3rd menu item (disabled)</li>
            <li>a danger item</li>
        </ul>
    )
}

export default Modal;