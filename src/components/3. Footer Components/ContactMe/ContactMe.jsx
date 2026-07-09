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
        <div className="terminal-window">
          <div className="terminal-header">
            <span>bash</span>
          </div>

          <div className="hero-terminal">
            <div className="terminal-line">
              <span className="prompt">guest@laira:~$ </span>
              <span className="cmd">compose</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">&gt; Email:</span>
            </div>

            <input
              className="terminal-textarea"
              type="email"
              name="user_email"
              placeholder="your@email.com"
            />

            <div className="terminal-line">
              <span className="prompt">&gt; Message:</span>
            </div>

            <textarea
              className="terminal-textarea"
              name="message"
              placeholder="Type your message..."
            />

            <button className="btn">
              <span className="prompt">guest@laira:~$ </span>
              <span className="cmd">send</span> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
