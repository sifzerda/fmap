import '../App.css';
import { useState } from 'react';

function ContactForm() {
    const [input, setInput] = useState({
        name: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            name: '',
            message: '',
        });
        setSubmitted(true);
    };

    return (
     <div className="container my-1-9">
        <h2 className='login-title'>Leave a Message</h2>
        {submitted ? (
          <div className="confirmation-message">
            <p>Thank you for your message!</p>
          </div>
        ) : (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="label-z">Name:</label>
                <input
                    type="text"
                    placeholder="Name or contact reference..."
                    id="name"
                    name="name"
                    value={input.name}
                    className="input-z"
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="label-z">Message:</label>
                <textarea
                    id="message"
                    placeholder="Enter your message here"
                    name="message"
                    value={input.message}
                    className="input-t"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="button-container-z">
            <button className='submit-button-z' type="submit">Submit</button>
        </div>
        </form>
)}
        </div>
    );
}

export default ContactForm;
