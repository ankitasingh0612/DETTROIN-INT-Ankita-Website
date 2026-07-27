import React, { useState } from 'react';
import { Calendar, FileText, CheckCircle2, UserCheck, HelpCircle } from 'lucide-react';

export default function Admissions() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    dob: '',
    grade: 'nursery',
    phone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setFormSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="admissions-page">
      {/* Header Banner */}
      <section className="admissions-header">
        <div className="container text-center">
          <span className="admissions-badge">APPLICATION PROCESS</span>
          <h1>Join Our Community</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Main Content Info & Form */}
      <section className="admissions-body">
        <div className="container body-grid">
          {/* Left: Criteria & Schedule */}
          <div className="admissions-info">
            <h2>Admission Guidelines & Criteria (2026-27)</h2>
            <p className="intro-text">
              We look forward to welcoming new families to Vasant Valley School. The admission guidelines are based on guidelines issued by the Directorate of Education.
            </p>

            <div className="process-timeline">
              <div className="timeline-item">
                <div className="timeline-icon"><Calendar size={18} /></div>
                <div className="timeline-content">
                  <h4>Step 1: Online Query Submission</h4>
                  <p>Fill out the online admission inquiry form. Registered email will receive a link to the complete registration portal.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><FileText size={18} /></div>
                <div className="timeline-content">
                  <h4>Step 2: Submission of Documents</h4>
                  <p>Upload Birth Certificate, Proof of Residence, immunization history, and previous report cards (if applicable).</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><UserCheck size={18} /></div>
                <div className="timeline-content">
                  <h4>Step 3: Verification & Interaction</h4>
                  <p>Document verification and a friendly interactive session for candidate evaluation.</p>
                </div>
              </div>
            </div>

            <div className="eligibility-box">
              <h3>Age Eligibility Criteria</h3>
              <ul>
                <li><strong>Nursery:</strong> Minimum 3 years as of March 31, 2026</li>
                <li><strong>KG/Prep:</strong> Minimum 4 years as of March 31, 2026</li>
                <li><strong>Class I:</strong> Minimum 5 years as of March 31, 2026</li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="admission-form-wrapper">
            <h3>Admission Inquiry Form</h3>
            <p>Please enter details to receive registration schedule notifications.</p>

            {formSubmitted ? (
              <div className="submission-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Thank You!</h4>
                <p>Your query has been logged. An admission counselor will contact you via email at <strong>{formData.email}</strong> within 48 business hours.</p>
                <button className="btn-reset" onClick={() => setFormSubmitted(false)}>Submit another query</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissions-form">
                <div className="form-group">
                  <label htmlFor="parentName">Parent / Guardian Name *</label>
                  <input 
                    type="text" 
                    id="parentName" 
                    name="parentName" 
                    required 
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childName">Child's Full Name *</label>
                  <input 
                    type="text" 
                    id="childName" 
                    name="childName" 
                    required 
                    value={formData.childName}
                    onChange={handleInputChange}
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth *</label>
                    <input 
                      type="date" 
                      id="dob" 
                      name="dob" 
                      required 
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="grade">Grade Applied For *</label>
                    <select 
                      id="grade" 
                      name="grade" 
                      value={formData.grade}
                      onChange={handleInputChange}
                    >
                      <option value="nursery">Nursery</option>
                      <option value="kg">Prep / KG</option>
                      <option value="class1">Grade I</option>
                      <option value="middle">Grade VI-VIII</option>
                      <option value="senior">Grade IX / XI</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sharma.rahul@example.com"
                  />
                </div>

                <button type="submit" className="form-submit-btn">Submit Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .admissions-page {
          background-color: var(--secondary-beige);
        }

        .admissions-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }

        .admissions-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
          margin-top: 8px;
        }

        .admissions-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }

        .admissions-body {
          padding: 80px 0;
        }

        .body-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
        }

        .admissions-info h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .intro-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .timeline-item {
          display: flex;
          gap: 16px;
        }

        .timeline-icon {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .timeline-content h4 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: var(--text-dark);
        }

        .timeline-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .eligibility-box {
          background-color: var(--bg-pure);
          padding: 30px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.2);
          box-shadow: var(--shadow-sm);
        }

        .eligibility-box h3 {
          font-size: 1.3rem;
          margin-bottom: 16px;
        }

        .eligibility-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .eligibility-box li {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .eligibility-box strong {
          color: var(--primary-maroon);
        }

        /* Inquiry Form Wrapper */
        .admission-form-wrapper {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
          height: fit-content;
        }

        .admission-form-wrapper h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }

        .admission-form-wrapper p {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 24px;
        }

        .admissions-form {
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

        input, select {
          padding: 10px 14px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-sans);
          background-color: var(--bg-pure);
          transition: var(--transition-fast);
        }

        input:focus, select:focus {
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
          font-size: 1rem;
          margin-top: 10px;
          box-shadow: var(--shadow-sm);
        }

        .form-submit-btn:hover {
          background-color: var(--primary-maroon-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* Success Panel */
        .submission-success {
          text-align: center;
          padding: 40px 10px;
        }

        .success-icon {
          color: #3b5a41;
          margin-bottom: 20px;
          display: inline-block;
        }

        .submission-success h4 {
          font-size: 1.6rem;
          color: #3b5a41;
          margin-bottom: 12px;
        }

        .submission-success p {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .btn-reset {
          background-color: var(--secondary-beige);
          color: var(--primary-maroon);
          border: 1px solid var(--primary-maroon);
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .btn-reset:hover {
          background-color: var(--primary-maroon);
          color: var(--text-light);
        }

        @media (max-width: 992px) {
          .body-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .admission-form-wrapper {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
