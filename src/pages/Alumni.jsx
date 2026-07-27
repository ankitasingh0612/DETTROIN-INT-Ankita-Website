import React, { useState } from 'react';
import { Award, Compass, MessageSquare, CheckCircle } from 'lucide-react';

export default function Alumni() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="alumni-page">
      <section className="alumni-header">
        <div className="container text-center">
          <span className="alumni-badge">GLOBAL NETWORK</span>
          <h1>Alumni Connect</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="alumni-body">
        <div className="container body-grid">
          <div className="alumni-info">
            <h2>Vasant Valley Alumni Association</h2>
            <p className="intro-text">
              Over the last three decades, Vasant Valley School graduates have spread across the globe, achieving excellence in sciences, arts, entrepreneurship, and public service. The Alumni Association keeps our alumni connected.
            </p>
            <div className="milestones">
              <div className="milestone-card">
                <h3>5,000+</h3>
                <p>Alumni Worldwide</p>
              </div>
              <div className="milestone-card">
                <h3>40+</h3>
                <p>Countries Represented</p>
              </div>
            </div>
          </div>

          <div className="alumni-form-wrapper">
            <h3>Register with Alumni Directory</h3>
            <p>Stay updated on networking events, reunions, and mentoring programs.</p>
            
            {formSubmitted ? (
              <div className="submission-success">
                <CheckCircle size={40} className="success-icon" />
                <h4>Registration Successful!</h4>
                <p>Thank you for connecting. We will verify your enrollment details and invite you to our portal shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="alumni-form">
                <div className="form-group">
                  <label htmlFor="alumName">Full Name *</label>
                  <input type="text" id="alumName" required placeholder="e.g. Aditi Rao" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="alumBatch">Passing Batch (Year) *</label>
                    <input type="number" id="alumBatch" min="1990" max="2026" required placeholder="e.g. 2018" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="alumEmail">Email Address *</label>
                    <input type="email" id="alumEmail" required placeholder="e.g. aditi@stanford.edu" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="alumProfession">Current Occupation / University *</label>
                  <input type="text" id="alumProfession" required placeholder="e.g. Stanford Medical Postdoc Researcher" />
                </div>
                <button type="submit" className="form-submit-btn">Submit Details</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .alumni-page {
          background-color: var(--secondary-beige);
        }
        .alumni-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .alumni-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .alumni-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .alumni-body {
          padding: 80px 0;
        }
        .body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }
        .alumni-info h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--primary-maroon);
        }
        .intro-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .milestones {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .milestone-card {
          background-color: var(--primary-maroon-light);
          padding: 24px;
          border-radius: var(--radius-md);
          text-align: center;
          border: 1px solid rgba(197, 168, 128, 0.15);
        }
        .milestone-card h3 {
          font-size: 2rem;
          color: var(--primary-maroon);
          margin-bottom: 4px;
        }
        .milestone-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .alumni-form-wrapper {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }
        .alumni-form-wrapper h3 {
          font-size: 1.4rem;
          margin-bottom: 4px;
        }
        .alumni-form-wrapper p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .alumni-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        input {
          padding: 10px 14px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          background-color: var(--bg-pure);
        }
        input:focus {
          outline: none;
          border-color: var(--primary-maroon);
          box-shadow: 0 0 0 3px rgba(122, 28, 46, 0.1);
        }
        .form-submit-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .form-submit-btn:hover {
          background-color: var(--primary-maroon-hover);
        }
        .submission-success {
          text-align: center;
          padding: 30px 10px;
        }
        .success-icon {
          color: #3b5a41;
          margin-bottom: 16px;
        }
        .submission-success h4 {
          color: #3b5a41;
          margin-bottom: 10px;
        }
        @media (max-width: 992px) {
          .body-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
