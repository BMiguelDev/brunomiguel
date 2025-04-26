//import { useEffect, useState } from 'react';
import styles from './Contact.module.scss';

// const LOCAL_STORAGE_KEY_INPUT_NAME = "PortefolioApp.inputName";
// const LOCAL_STORAGE_KEY_INPUT_EMAIL = "PortefolioApp.inputEmail";
// const LOCAL_STORAGE_KEY_INPUT_SUBJECT = "PortefolioApp.inputSubject";
// const LOCAL_STORAGE_KEY_INPUT_MESSAGE = "PortefolioApp.inputMessage";

export default function Contact() {

    // Code for handling contact form
    /*
    const [formInputs, setFormInputs] = useState({
        name: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INPUT_NAME)) || "",
        email: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INPUT_EMAIL)) || "",
        subject: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INPUT_SUBJECT)) || "",
        message: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INPUT_MESSAGE)) || ""
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_INPUT_NAME, JSON.stringify(formInputs.name));
    }, [formInputs.name])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_INPUT_EMAIL, JSON.stringify(formInputs.email));
    }, [formInputs.email])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_INPUT_SUBJECT, JSON.stringify(formInputs.subject));
    }, [formInputs.subject])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_INPUT_MESSAGE, JSON.stringify(formInputs.message));
    }, [formInputs.message])

    function handleFormInputsChange(event) {
        const { name, value } = event.target;
        setFormInputs(prevFormInputs => ({ ...prevFormInputs, [name]: value }));
    }

    function handleFormInputsSubmit(event) {
        // Send email?
        event.preventDefault();
        console.log("send email with info");
    }
    */

    return (
        <main className={styles.contact_container}>
            <div className={styles.contact_main_title}>
                <h2>Contact</h2>
            </div>
            <div className={styles.contact_content_container}>
                <div className={styles.contact_description}>
                    <p>I'm constantly seeking new challenges and innovative projects.</p>
                    <p>My inbox is open for opportunities and collaborations.</p>
                    <a href="mailto:bmiguelpro@outlook.com">
                        <p>Say Hello</p>
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                </div>
                <div className={styles.contact_alternatives}>
                    <p>You can also find me here!</p>
                    <div className={styles.contact_alternatives_anchors}>
                        <a href="https://www.linkedin.com/in/miguel--bruno/" target="_blank" rel="noreferrer">
                            <p>LinkedIn</p>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/BMiguelDev" target="_blank" rel="noreferrer">
                            <p>Github</p>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                {/*
                <div className={styles.contact_description}>
                    <p>Get in touch using the form below or send me an email at</p>
                    <a href="mailto:bmiguelpro@outlook.com">bmiguelpro@outlook.com</a>
                </div>
                */}

                {/*
                <form className={styles.contact_form} onSubmit={handleFormInputsSubmit}>
                    <div className={styles.contact_form_row}>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formInputs.name}
                            onChange={handleFormInputsChange}
                            placeholder="Your Name"
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            value={formInputs.email}
                            onChange={handleFormInputsChange}
                            placeholder="Your Email" />
                    </div>
                    <div className={styles.contact_form_row}>
                        <input
                            required
                            type="text"
                            name="subject"
                            value={formInputs.subject}
                            onChange={handleFormInputsChange}
                            placeholder="Subject"
                        />
                    </div>
                    <div className={styles.contact_form_row}>
                        <textarea
                            required
                            cols="15"
                            rows="10"
                            name="message"
                            value={formInputs.message}
                            onChange={handleFormInputsChange}
                            placeholder="Message"
                        />
                    </div>
                    <button type="submit" href="" className={styles.contact_form_submit_btn}>
                        <span className={styles.btn_text}>Send</span>
                        <span className={styles.btn_icon}><i className="fa-solid fa-arrow-up"></i></span>
                    </button>
                </form>
                */}
            </div>
        </main>
    )
}