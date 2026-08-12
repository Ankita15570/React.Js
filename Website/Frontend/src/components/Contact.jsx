function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h2>📞 Contact Us</h2>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message" />
        <button className="buy-btn" onClick={() => alert("Message sent! ✅")}>Send Message</button>
      </div>
    </div>
  );
}
export default Contact;
