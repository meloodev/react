import { useState } from 'react'
import DarkMode from './darkMode/DarkMode'
import { z } from 'zod'
import './form.css';



const formSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .refine(val => /^[A-Za-z\s]+$/.test(val), {
            message: 'Only letters and spaces allowed'
        }),
    email: z.string().email('Invalid email address')
        .refine(val => val.endsWith('@mail.ru'), {
            message: 'test2'
        }),
    subject: z.string().min(2, 'Subject is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    gender: z.enum(['male', 'female']),
    chb: z.literal(true),
});


const Form = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        gender: 'male',
        chb: false,
    })

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        try {
            const fieldSchema = formSchema.pick({ [name]: true });
            fieldSchema.parse({ [name]: value });
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors(prev => ({
                    ...prev,
                    [name]: err.flatten().fieldErrors[name]
                }));
            }
        }
    };

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        const newValue = type === 'checkbox' ? checked : value;
        setValues((prev) => ({
            ...prev,
            [name]: newValue
        }))

        validateField(name, newValue);

    }






    function handleSubmit(e) {
        e.preventDefault();
        const result = formSchema.safeParse(values);

        if (result.success) {
            console.log('Success:', result.data);
            setErrors({});
            // setValue({
            //     name: '',
            //     email: '',
            //     subject: '',
            //     message: '',
            //     gender: 'male',
            //     chb: false,
            // });
        } else {
            setErrors(result.error.flatten().fieldErrors);
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
                        value={values.name}
                        onChange={handleChange}
                    />
                    <span className="form__name-msg">{errors.name?.[0]}</span>
                </div>
                <div className="form__email item">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <span className="form__email-msg">{errors.email?.[0]}</span>
                </div>
                <div className="form__subject item">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="Subject"
                        id="subject" name="subject"
                        value={values.subject}
                        onChange={handleChange}
                    />
                    <span className="form__email-msg">{errors.subject?.[0]}</span>
                </div>

                <div className="form__text item">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Message your text"
                        id="message"
                        value={values.message}
                        onChange={handleChange}
                    ></textarea>
                    <span className="form__text-msg">{errors.message?.[0]}</span>
                    <span className="form__text-count">{values.message.length > 0 ? values.message.length : ''}</span>
                </div>

                <div className="form__gender item">
                    <div className="form__gender-male gender">
                        <input type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={values.gender === 'male'}
                            onChange={handleChange} />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="form__gender-female gender">
                        <input type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={values.gender === 'female'}
                            onChange={handleChange} />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div className="form__agreement">
                    <div className="form__agreement-inner">
                        <input type="checkbox"
                            id="chb" name="chb"
                            checked={values.chb}
                            onChange={handleChange} />
                        <label htmlFor="chb">I agree to the terms</label>
                    </div>
                    <span className="form__agreement-msg">{errors.subject?.[0]}</span>
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