function QuotePanel() {
  return (
    <div className="quote-panel">
      <div className="eyebrow" style={{ color: '#7e8ab8' }}>
        Find Your Financing Options for Home Purchases &amp; Re-Financing
      </div>
      <h2>Get a Personalized Quote Today</h2>
      <form className="quote-form">
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-name">Name</label>
            <input id="q-name" placeholder="Name" />
          </div>
          <div className="field">
            <label htmlFor="q-last">Last Name</label>
            <input id="q-last" placeholder="Last Name" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-email">Email</label>
          <input id="q-email" placeholder="Email" />
        </div>
        <div className="form-grid form-grid-2">
          <div className="field">
            <label htmlFor="q-loan">Type Of Loan</label>
            <select id="q-loan" defaultValue="">
              <option value="" disabled>
                Select One
              </option>
              <option>Purchase</option>
              <option>Refinance</option>
              <option>Investment / DSCR</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="q-credit">Credit History</label>
            <select id="q-credit" defaultValue="">
              <option value="" disabled>
                Select One
              </option>
              <option>Excellent (720+)</option>
              <option>Good (680-719)</option>
              <option>Fair (640-679)</option>
              <option>Building credit</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-value">Property Value</label>
          <select id="q-value" defaultValue="">
            <option value="" disabled>
              Select One
            </option>
            <option>$300,000 - $500,000</option>
            <option>$500,001 - $750,000</option>
            <option>$750,001 - $1,000,000</option>
            <option>$1,000,001+</option>
          </select>
        </div>
        <button className="apply-btn full" type="button">
          Send
        </button>
      </form>
    </div>
  )
}

export default QuotePanel
