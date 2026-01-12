function BuyingHomePage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Buying a Home Guide</h1>
          <p>
            Your complete resource for navigating the home buying process from
            start to finish.
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
          <div className="eyebrow">Home Buying Process</div>
          <h2>Your step-by-step guide to homeownership</h2>
          <p>
            Buying a home is one of the most significant financial decisions
            you'll make. Whether you're a first-time buyer or a seasoned
            homeowner, understanding each step of the process helps you make
            informed decisions and avoid common pitfalls.
          </p>
          <p>
            From getting pre-approved to closing day, we'll guide you through
            every stage of your home buying journey. Our team is committed to
            making the process as smooth and stress-free as possible.
          </p>
        </div>
        <div className="program-block accent">
          <h3>The home buying timeline:</h3>
          <ul>
            <li>
              <strong>Pre-Approval:</strong> Get pre-qualified to understand
              your budget
            </li>
            <li>
              <strong>Home Search:</strong> Find properties that meet your needs
              and budget
            </li>
            <li>
              <strong>Make an Offer:</strong> Submit a competitive offer with
              your agent
            </li>
            <li>
              <strong>Under Contract:</strong> Complete inspections and finalize
              financing
            </li>
            <li>
              <strong>Closing:</strong> Sign documents and receive your keys!
            </li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Getting pre-approved</h3>
          <p>
            Before you start house hunting, get pre-approved for a mortgage.
            This shows sellers you're a serious buyer and gives you a clear
            budget. The pre-approval process involves submitting financial
            documentation and having your credit reviewed. You'll receive a
            pre-approval letter stating how much you can borrow.
          </p>
          <p>
            Pre-approval is different from pre-qualification. Pre-qualification
            is an estimate based on self-reported information, while
            pre-approval involves verification of your finances and carries more
            weight with sellers.
          </p>
        </div>
        <div className="program-block">
          <h3>Finding the right home</h3>
          <p>
            Work with a trusted real estate agent who knows your local market.
            Consider location, school districts, commute times, and neighborhood
            amenities. Don't just focus on the house itself—think about resale
            value and long-term appreciation potential.
          </p>
          <p>
            Attend open houses, schedule private showings, and take your time.
            It's important to find a home that meets both your current needs and
            future goals. Don't feel pressured to settle—the right home is worth
            the wait.
          </p>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Making an offer and negotiating</h3>
          <p>
            When you find the right home, your agent will help you prepare a
            competitive offer based on comparable sales, market conditions, and
            the property's condition. Your offer should include contingencies
            for financing, inspection, and appraisal to protect your interests.
          </p>
          <p>
            Be prepared for counteroffers and negotiations. In competitive
            markets, you may need to act quickly and make your best offer
            upfront. Your agent will guide you through the negotiation process
            to help you secure the home at a fair price.
          </p>
        </div>
        <div className="program-block">
          <h3>Closing on your home</h3>
          <p>
            Once your offer is accepted, you'll enter the closing process. This
            includes a home inspection, appraisal, final loan approval, and
            title search. You'll review and sign closing documents, pay closing
            costs, and receive the keys to your new home.
          </p>
          <p>
            The closing process typically takes 30-45 days but can be faster or
            slower depending on your situation. Stay in close contact with your
            lender and agent to ensure everything stays on track for a smooth
            closing.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to start your home buying journey?</h2>
        <p>
          Our experienced team is here to guide you through every step of the
          home buying process. Let's get started on finding your dream home!
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Pre-Approved</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default BuyingHomePage;
