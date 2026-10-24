import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './DonateSection.css';

const DonateSection = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [10, 25, 50, 100];

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const handleDonate = () => {
    // Integration ready for Stripe/PayPal
    const finalAmount = amount || customAmount;
    alert(`Thank you for your willingness to donate $${finalAmount}! This would integrate with a payment gateway.`);
  };

  return (
    <section id="donate" className="donate-section section">
      <div className="container donate-container">
        <div className="donate-content">
          <h2>Help us protect girls and empower women</h2>
          <p>
            Your contribution directly funds education, outreach programs, and advocacy necessary to end Female Genital Mutilation. Together, we can build a safer future.
          </p>
        </div>
        
        <div className="donate-box">
          <div className="donate-amounts">
            {amounts.map((amt) => (
              <button
                key={amt}
                className={`amount-btn ${amount === amt ? 'active' : ''}`}
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount('');
                }}
              >
                ${amt}
              </button>
            ))}
          </div>
          
          <div className="custom-amount">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              min="1"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleCustomChange}
              className="custom-input"
            />
          </div>
          
          <button className="btn-donate donate-submit" onClick={handleDonate}>
            <Heart size={20} className="donate-icon" /> Donate Now
          </button>
          
          <p className="secure-text">Secure donation via Stripe/PayPal</p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
