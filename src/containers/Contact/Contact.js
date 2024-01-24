// Contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Feel free to get in touch with us. We'd love to hear your thoughts, answer your questions,
        or help you in any way we can.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
