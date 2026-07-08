import React, { useRef, useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { emailConfig } from '../../../your_info';

const ContactMe = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, userID } = emailConfig;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='ContactMe'>
      <div className='section-container'>

        
        <div className='form-container wow fadeInRight' data-wow-delay='.4s'>
          <div className='contact-form-wrapper d-flex justify-content-center'>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
              <h2 className='title'>Contact Me</h2>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email..."
                />

                <textarea
                  name="message"
                  placeholder="Type your message here..."
                />
              </div>
              <div className='submit-button-wrapper' data-wow-delay='.6s'>
                {!isMessageSent ? (
                  <button type='submit' className='submit-button'>
                    Send
                  </button>
                ) : (
                  <div className='success-message'>
                    <h4>Message Sent.</h4>
                    <p>Thank you for contacting me.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
