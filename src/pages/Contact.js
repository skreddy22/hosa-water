import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
