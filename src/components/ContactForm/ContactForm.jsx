import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-box">

        <h2 className="contact-title">Send us a Message</h2>
        <p className="contact-sub">We respond within a few hours</p>

        <form
          action="https://mail.google.com/mail/"
          method="GET"
          target="_blank"
          className="contact-form"
        >
          {/* Required Gmail Params */}
          <input type="hidden" name="view" value="cm" />
          <input type="hidden" name="fs" value="1" />
          <input
            type="hidden"
            name="to"
            value="deeppicinfotech@gmail.com"
          />

          {/* Visible Inputs */}
          <div className="input-group">
            <input type="text" name="name" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea name="body" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="cta-send-btn">
            Send Message ✉️
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
