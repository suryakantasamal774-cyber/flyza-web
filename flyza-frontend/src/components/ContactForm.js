import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section">
      <h3>Drop Your Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message or Build Idea"></textarea>
        <input type="file" accept="image/*" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
