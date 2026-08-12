function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h2>🛒 About Patil Store</h2>
        <p>Your One-Stop Shop for the Best Deals</p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <span className="about-icon">🎯</span>
          <h4>Our Mission</h4>
          <p>
            To provide the best quality products at affordable prices to every
            customer.
          </p>
        </div>
        <div className="about-card">
          <span className="about-icon">🚚</span>
          <h4>Fast Delivery</h4>
          <p>
            We ensure quick and safe delivery of all your orders right at your
            doorstep.
          </p>
        </div>
        <div className="about-card">
          <span className="about-icon">🔒</span>
          <h4>Secure Payment</h4>
          <p>
            100% secure and encrypted payment gateway for safe transactions.
          </p>
        </div>
        <div className="about-card">
          <span className="about-icon">↩️</span>
          <h4>Easy Returns</h4>
          <p>Hassle-free 7-day return policy on all products.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
