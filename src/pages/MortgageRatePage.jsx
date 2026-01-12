function MortgageRatePage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Current Mortgage Rates</h1>
          <p>
            Stay informed with up-to-date mortgage rate information to help you
            make the best financial decisions.
          </p>
          <div className="cta-row">
            <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
              <button className="apply-btn">Apply Now</button>
            </a>
            <a className="ghost-btn" href="tel:4072179122">
              Call (407) 217-9122
            </a>
          </div>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <div className="eyebrow">Mortgage Rates</div>
          <h2>Current market rates and trends</h2>
          <p>
            Mortgage rates fluctuate daily based on market conditions, economic
            factors, and Federal Reserve policies. Understanding current rates
            is essential for timing your home purchase or refinance. Our team
            monitors rates continuously to help you lock in at the right time.
          </p>
          <p>
            Rates vary based on loan type, credit score, down payment, and
            property location. Contact us today for a personalized rate quote
            tailored to your specific situation.
          </p>
        </div>
        <div className="program-block accent">
          <h3>Factors that affect your rate:</h3>
          <ul>
            <li>Credit score and payment history</li>
            <li>Down payment amount and loan-to-value ratio</li>
            <li>Loan type (Conventional, FHA, VA, USDA)</li>
            <li>Property type and location</li>
            <li>Debt-to-income ratio</li>
            <li>Loan term (15-year, 30-year, adjustable)</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Get your personalized rate quote</h3>
          <p>
            Ready to see what rates you qualify for? Our mortgage experts will
            analyze your unique financial situation and provide you with current
            rate options across multiple loan programs. We work with over 80+
            lenders to ensure you get the most competitive rate available.
          </p>
        </div>
        <div className="program-block">
          <h3>Rate lock protection</h3>
          <p>
            Once you find the right rate, we offer rate lock options to protect
            you from market fluctuations during your loan process. This gives
            you peace of mind knowing your rate won't increase before closing,
            even if market conditions change.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to explore your rate options?</h2>
        <p>
          Connect with our team to get a personalized rate quote based on your
          unique financial profile.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Started</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default MortgageRatePage;
