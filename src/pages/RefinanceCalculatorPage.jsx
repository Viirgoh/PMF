function RefinanceCalculatorPage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Refinance Calculator</h1>
          <p>
            Evaluate whether refinancing makes sense for your situation and see
            your potential savings.
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
          <div className="eyebrow">Refinance Calculator</div>
          <h2>Calculate your refinancing benefits</h2>
          <p>
            Refinancing your mortgage can help you lower your monthly payment,
            reduce your interest rate, shorten your loan term, or tap into your
            home's equity. Our refinance calculator helps you compare your
            current loan to potential new terms to see if refinancing makes
            financial sense.
          </p>
          <p>
            To determine if refinancing is right for you, we'll analyze your
            current mortgage balance, interest rate, remaining term, and compare
            it against current market rates and new loan options. We'll also
            factor in closing costs to calculate your break-even point.
          </p>
        </div>
        <div className="program-block accent">
          <h3>When to consider refinancing:</h3>
          <ul>
            <li>Interest rates have dropped significantly since you bought</li>
            <li>Your credit score has improved substantially</li>
            <li>
              You want to shorten your loan term (e.g., 30-year to 15-year)
            </li>
            <li>
              You need to access home equity for renovations or debt
              consolidation
            </li>
            <li>
              You want to switch from an adjustable-rate to a fixed-rate
              mortgage
            </li>
            <li>You want to remove PMI (Private Mortgage Insurance)</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Types of refinancing</h3>
          <p>
            <strong>Rate-and-term refinance:</strong> Replace your current
            mortgage with a new one featuring a lower interest rate or different
            term length. This is ideal for reducing monthly payments or paying
            off your home faster.
          </p>
          <p>
            <strong>Cash-out refinance:</strong> Borrow more than you owe and
            receive the difference in cash. Use this option to fund home
            improvements, consolidate high-interest debt, or cover major
            expenses.
          </p>
        </div>
        <div className="program-block">
          <h3>Break-even analysis</h3>
          <p>
            Refinancing comes with closing costs, typically 2-5% of the loan
            amount. Our calculator helps you determine how long it will take to
            recoup these costs through monthly savings. If you plan to stay in
            your home beyond the break-even point, refinancing could be a smart
            financial move.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Ready to explore refinancing options?</h2>
        <p>
          Our mortgage experts will analyze your current loan and show you
          exactly how much you could save with a refinance tailored to your
          financial goals.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Start Your Refinance</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Get a Refinance Quote
          </a>
        </div>
      </section>
    </div>
  );
}

export default RefinanceCalculatorPage;
