import React, { useRef, useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { emailConfig } from '../../../your_info';

const ContactMe = () => {
  const form = useRef();

  const [isMessageSent, setMessageSent] = useState(false);
  const [output, setOutput] = useState([]);

  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, userID } = emailConfig;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);

        e.target.reset();
        setEmail("");

        setOutput(["[*] Connecting..."]);

        setTimeout(() => {
          setOutput([
            "[*] Connecting...",
            "[*] Sending message..."
          ]);
        }, 750);

        setTimeout(() => {
          setOutput([
            "[*] Connecting...",
            "[*] Sending message...",
            "[+] Message sent successfully."
          ]);
        }, 1000);

        setTimeout(() => {
          setOutput([]);
        }, 4000);
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
                <span className="prompt desktop-prompt">msf6 &gt; </span>
                <span className="cmd-cf desktop-prompt">use auxiliary/contact/email</span>
              </div>

              <div className="terminal-line">
                <span className="prompt desktop-prompt">
                  auxiliary(contact/email) &gt; 
                </span>
                <span className="prompt mobile-prompt">msf6 &gt; </span>
                <span className="cmd-cf">set EMAIL</span>
                 
              </div>

              <div className="terminal-line">
                <span className="cmd-cf desktop-prompt">EMAIL =&gt; </span>
                <input
                  className="terminal-input"
                  type="email"
                  name="user_email"
                  placeholder="Enter your@email.com..."
                  required
                />
              </div>

              <div className="terminal-line">
                <span className="prompt desktop-prompt">
                  auxiliary(contact/email) &gt; 
                </span>
                
                <span className="prompt mobile-prompt">msf6 &gt; </span>
                <span className="cmd-cf">set MESSAGE</span>
              </div>
              <div className="terminal-line">
                <span className="cmd-cf desktop-prompt">MESSAGE =&gt; </span>
                <textarea
                  className="terminal-textarea"
                  name="message"
                  placeholder="Type message..."
                  required
                />
              </div>

              <div className="terminal-line">
                <button type="submit" className="btn-cf">
                  <span className="prompt desktop-prompt">auxiliary(contact/email) &gt;</span>
                  <span className="prompt mobile-prompt">msf6 &gt;</span>
                  <span className="cmd-cf"> run</span>
                </button>
              </div>

              {output.map((line, index) => (
                <div key={index} className="terminal-line">
                  <span className={line.startsWith("[+]") ? "cmd-cf" : "prompt"}>
                    {line}
                  </span>
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
