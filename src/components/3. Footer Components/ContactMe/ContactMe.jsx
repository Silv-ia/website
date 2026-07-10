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
        <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
          <div className="section-title">
            <h2>Contact Form</h2>
          </div>
        </div>
        <div className="terminal-window-cf">
          <div className="terminal-header">
            <span className='bash'>bash</span>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="hero-terminal">
              <div className="terminal-line">
                <span className="prompt">guest@laira:~$ </span>
                <span className="cmd-cf">compose</span>
              </div>
              <div className="terminal-line">
                <span className="prompt"> Email:</span>
              </div>

              <span className="prompt">$ </span>
              <input
                className="terminal-input"
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
              />

              <div className="terminal-line">
                <span className="prompt"> Message:</span>
              </div>

              <span className="prompt">$ </span>
              <textarea
                className="terminal-textarea"
                name="message"
                placeholder="Type your message..."
                required
              />

              <div className="terminal-line">
                <span className="prompt"> Send:</span>
              </div>
              <button type="submit" className="btn-cf">
                <span className="prompt">guest@laira:~$ </span>
                <span className="cmd-cf">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
