import React, { useRef, useState } from "react";
import "./contactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ncweida",
        "template_d5zyck5",
        form.current,
        "rr9dxnXOskRUPFyUA"
      )
      .then(
        (result) => {
          e.target.reset();
          setSent(true);
          setTimeout(() => setSent(false), 2000);
        },
        (error) => {}
      );
  };

  return (
    <section id="contact" className="contact-link">
      <h1 className="heading">Contact Form</h1>
      <h2 className="sub-heading">
        Want to talk ? Need any more information ? Contact me now.
      </h2>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <br />

          <label>Message</label>
          <textarea name="message" placeholder="Enter your message"></textarea>
          <br />
          <input type="submit" value="Submit" />
          {sent && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              Successfully sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
