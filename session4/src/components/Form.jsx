import { useState } from 'react'
import DarkMode from './darkMode/DarkMode'
import './form.css';

const Form = () => {

    const [value, setValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        gender: 'male',
        chb: false,
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setValue((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }


    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            value.name.trim() !== '' &&
            validateEmail(value.email) &&
            value.subject.trim() !== '' &&
            value.message.trim().length >= 10 &&
            (value.gender === 'male' || value.gender === 'female') &&
            value.chb === true
        ) {
            console.log(value);
        }
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form__header">
                    Get in <span>touch</span>
                </h2>
                <p className="form__descr">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare
                    non id blandit netus.</p>

                <div className="form__name item">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Name"
                        id="name"
                        name="name"
                        value={value.name}
                        onChange={handleChange}
                        required />
                    <span className="form__name-msg"></span>
                </div>
                <div className="form__email item">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Email"
                        id="email"
                        name="email"
                        value={value.email}
                        onChange={handleChange}
                        required />
                    <span className="form__email-msg"></span>
                </div>
                <div className="form__subject item">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Subject"
                        id="subject" name="subject"
                        value={value.subject}
                        onChange={handleChange}
                        required />
                    <span className="form__email-msg"></span>
                </div>

                <div className="form__text item">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Message your text"
                        id="message"
                        value={value.message}
                        onChange={handleChange}
                        required></textarea>
                    <span className="form__text-msg">{(value.message.length < 10 && value.message.length > 0) ? 'The text must be longer than 10 characters.' : ''}</span>
                    <span className="form__text-count">{value.message.length > 0 ? value.message.length : ''}</span>
                </div>

                <div className="form__gender item">
                    <div className="form__gender-male gender">
                        <input type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={value.gender === 'male'}
                            onChange={handleChange} />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="form__gender-female gender">
                        <input type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={value.gender === 'female'}
                            onChange={handleChange} />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div className="form__agreement">
                    <input type="checkbox"
                        id="chb" name="chb"
                        checked={value.chb}
                        onChange={handleChange} required />
                    <label htmlFor="chb">I agree to the terms</label>
                </div>

                <div className="form__send">
                    <button type="submit">send</button>
                </div>

            </form>

            <DarkMode />
        </>
    )
}

export default Form;