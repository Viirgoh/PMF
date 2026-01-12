function AffordabilityCalculatorPage() {
  return (
    <div className="program-detail">
      <section
        className="program-detail-hero"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(12,47,135,0.65), rgba(12,47,135,0.4)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="program-hero-inner">
          <p className="eyebrow">Tools</p>
          <h1>Loan Affordability Calculator</h1>
          <p>
            Discover how much home you can afford based on your income, debts,
            and down payment.
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
          <div className="eyebrow">Affordability Calculator</div>
          <h2>Determine your home buying budget</h2>
          <p>
            Understanding how much home you can afford is the first step in your
            home buying journey. Our loan affordability calculator takes into
            account your income, monthly debts, down payment, and current
            mortgage rates to provide you with a realistic budget range.
          </p>
          <p>
            Lenders typically use the 28/36 rule: your housing expenses
            shouldn't exceed 28% of your gross monthly income, and your total
            debt payments shouldn't exceed 36%. However, different loan programs
            have different requirements, and we'll help you find the best fit.
          </p>
        </div>
        <div className="program-block accent">
          <h3>What you'll need:</h3>
          <ul>
            <li>Annual household income (gross)</li>
            <li>
              Monthly debt payments (car loans, student loans, credit cards)
            </li>
            <li>Estimated down payment amount</li>
            <li>Expected property taxes and insurance costs</li>
            <li>HOA fees (if applicable)</li>
            <li>Current interest rates for your loan type</li>
          </ul>
        </div>
      </section>

      <section className="program-detail-grid section">
        <div className="program-block">
          <h3>Key factors in affordability</h3>
          <p>
            Your home affordability depends on several factors: your income
            stability, existing debt obligations, credit score, down payment
            size, and the loan program you choose. FHA loans may allow higher
            debt-to-income ratios than conventional loans, potentially
            increasing your buying power.
          </p>
        </div>
        <div className="program-block">
          <h3>Beyond the purchase price</h3>
          <p>
            Remember to factor in all homeownership costs: property taxes,
            homeowners insurance, HOA fees, maintenance, and utilities. These
            expenses can add significantly to your monthly budget and should be
            considered when determining how much home you can comfortably
            afford.
          </p>
        </div>
      </section>

      <section className="program-detail-cta section">
        <h2>Get a personalized affordability analysis</h2>
        <p>
          Work with our experienced loan officers to get a detailed
          affordability assessment tailored to your unique financial situation
          and goals.
        </p>
        <div className="cta-row">
          <a href="https://pioneermortgagefunding.my1003app.com/186207/register">
            <button className="apply-btn">Get Pre-Qualified</button>
          </a>
          <a className="ghost-btn" href="tel:4072179122">
            Speak with an Expert
          </a>
        </div>
      </section>
    </div>
  );
}

export default AffordabilityCalculatorPage;
