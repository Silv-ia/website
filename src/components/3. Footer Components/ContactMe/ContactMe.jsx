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

  const [email, setEmail] = useState("");

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
            <span className="bash">msfconsole</span>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-terminal">
              <div className="terminal-line">
                <span className="prompt">msf &gt;</span>
                <span className="cmd-cf">use auxiliary/contact/email</span>
              </div>

              <div className="terminal-line">
                  <span className="prompt">
                      auxiliary(contact/email) &gt; set EMAIL
                  </span>
              </div>

              <div className="terminal-line">
                  <span className="cmd-cf">
                      EMAIL =&gt; {email || "your@email.com"}
                  </span>
              </div>

              <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="terminal-input"
                  type="email"
                  name="user_email"
                  placeholder="Type here..."
                  required
              />


              <div className="terminal-input-line">
                <span className="prompt">auxiliary(contact/email) &gt; set MESSAGE</span>
                <textarea
                  className="terminal-textarea"
                  name="message"
                  placeholder="Type your message..."
                  required
                />
              </div>

              <div className="terminal-line">
                <button type="submit" className="btn-cf">
                  <span className="prompt">auxiliary(contact/email) &gt;</span>
                  <span className="cmd-cf"> run</span>
                </button>
              </div>

              {output.map((line, index) => (
                  <div key={index} className="terminal-line">
                      <span>{line}</span>
                  </div>
              ))}
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
