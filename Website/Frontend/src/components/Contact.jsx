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
        <input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}" />
        <input type="text" placeholder="Address" />
        <textarea rows="3" placeholder="Your Message" />
        <button
          className="buy-btn"
          onClick={() => {
            alert("Message sent! ✅");
            window.location.reload();
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
export default Contact;
