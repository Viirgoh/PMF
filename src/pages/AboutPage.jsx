function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-overlay" />
        <div className="about-copy">
          <div className="eyebrow">About Us</div>
          <h1>Our mission, values, and motto</h1>
          <p>For decades, we’ve been passionate about achieving better results for our clients.</p>
        </div>
      </section>

      <section className="mission-cards section">
        <div className="mission-grid">
          <div className="mission-card">
            <img src="https://lendinginflorida.com/wp-content/uploads/2023/07/graphics-new.png" alt="" />
            <h3>Our Vision</h3>
            <p>
              Pioneer’s vision is to be your #1 mortgage broker nationwide. Our agents are committed to educate
              and communicate with every single client with two goals in mind: To show every client we care and
              to earn their trust.
            </p>
          </div>
          <div className="mission-card">
            <img src="https://lendinginflorida.com/wp-content/uploads/2023/07/lending-Icons.png" alt="" />
            <h3>Our Mission</h3>
            <p>
              Pioneer’s mission is to become the mortgage industry standard by elevating customer relationships
              and service. Our corporate platform is built on high morals and ethics, honor and integrity.
            </p>
          </div>
          <div className="mission-card photo-card">
            <img
              src="https://lendinginflorida.com/wp-content/uploads/2020/04/real-estate-agency-couple-looking-at-a-model-of-th-MR4CFJA1.jpg"
              alt="Happy family"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
