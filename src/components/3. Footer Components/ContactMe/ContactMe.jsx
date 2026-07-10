import React, { useRef, useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { emailConfig } from '../../../your_info';

const ContactMe = () => {
  const form = useRef();

  const [isMessageSent, setMessageSent] = useState(false);

  const [email, setEmail] = useState("");
  const [output, setOutput] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, userID } = emailConfig;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);

        setMessageSent(true);
        e.target.reset();
        setEmail("");
      })
      .catch((error) => {
        console.log(error.text);
      });
};

  return (
    <section id="ContactMe">
      <div className="section-container">

        <div className="name-container wow fadeInLeft" data-wow-delay=".4s">
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
                <span className="prompt">msf6 &gt; </span>
                <span className="cmd-cf">use auxiliary/contact/email</span>
              </div>

              <div className="terminal-line">
                <span className="prompt">
                  auxiliary(contact/email) &gt; set EMAIL
                </span>
              </div>

              <div className="terminal-line">
                <span className={email ? "cmd-cf" : "placeholder"}>
                  EMAIL =&gt; {email || "your@email.com"}
                </span>
              </div>

              <input
                className="terminal-input"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here..."
                required
              />

              <div className="terminal-line">
                <span className="prompt">
                  auxiliary(contact/email) &gt; set MESSAGE
                </span>
              </div>

              <textarea
                className="terminal-textarea"
                name="message"
                placeholder="Type your message..."
                required
              />

              <div className="terminal-line">
                {!isMessageSent ? (
                  <button type="submit" className="btn-cf">
                    <span className="prompt">auxiliary(contact/email) &gt;</span>
                    <span className="cmd-cf"> run</span>
                  </button>
                ) : (
                  <span className="cmd-cf">
                    [+] Message sent successfully.
                  </span>
                )}
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactMe;
