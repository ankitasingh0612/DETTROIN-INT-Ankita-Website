import React, { useState } from 'react';
import { Calendar, FileText, CheckCircle2, UserCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Admissions() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    dob: '',
    grade: 'nursery',
    phone: '',
    email: ''
  });

  // State for FAQ Accordions
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // State for Interactive Fee Calculator
  const [division, setDivision] = useState('junior');
  const [transport, setTransport] = useState('none');
  const [mealPlan, setMealPlan] = useState(false);
  const [sportsAcad, setSportsAcad] = useState(false);

  const getFeeBreakdown = () => {
    let tuition = 90000;
    if (division === 'middle') tuition = 105000;
    if (division === 'senior') tuition = 120000;
    if (division === 'international') tuition = 150000;

    let transportFee = 0;
    if (transport === 'delhi') transportFee = 18000;
    if (transport === 'ncr') transportFee = 24000;

    const mealsFee = mealPlan ? 15000 : 0;
    const sportsFee = sportsAcad ? 10000 : 0;

    return {
      tuition,
      transport: transportFee,
      meals: mealsFee,
      sports: sportsFee,
      total: tuition + transportFee + mealsFee + sportsFee
    };
  };

  const fees = getFeeBreakdown();

  const faqs = [
    {
      q: "What is the age criteria for Nursery admission for Academic Year 2026-27?",
      a: "The child should be minimum 3 years of age as of March 31, 2026. No upper age limit relaxation is allowed except as per the Directorate of Education guidelines."
    },
    {
      q: "What documents are required to be uploaded during registration?",
      a: "You need a copy of the Child's Birth Certificate, Proof of Residence (Aadhar card, electricity bill, or passport), immunization record, and the parent's ID proof."
    },
    {
      q: "Is there an entrance test for nursery and primary school admissions?",
      a: "No, there are no written entrance tests for Nursery or Prep. Admission is based on standard interactions. However, for Middle and Senior school (Grade VI upwards), a basic aptitude assessment is conducted."
    },
    {
      q: "Does Vasant Valley School provide transport facilities across Delhi-NCR?",
      a: "Yes, the school runs a fleet of air-conditioned buses covering major routes in South Delhi, Central Delhi, and parts of Gurugram. Detailed route maps are shared at the time of final admission."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setFormSubmitted(true);
    setShowToast(true);
    // Dismiss toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="admissions-page">
      {/* Custom Floating Toast Notification */}
      {showToast && (
        <div className="toast-notification animate-slide-in">
          <div className="toast-content">
            <CheckCircle2 size={20} className="toast-success-icon" />
            <div>
              <h4>Query Logged!</h4>
              <p>Admission query has been submitted successfully.</p>
            </div>
          </div>
        </div>
      )}

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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Contact Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
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
                      placeholder="e.g. parent@example.com"
                    />
                  </div>
                </div>

                <button type="submit" className="form-submit-btn">Submit Admission Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Fee Estimator Section */}
      <section className="fee-calculator-section">
        <div className="container">
          <div className="section-header text-center">
            <span>TRANSPARENT FEE STRUCTURE</span>
            <h2>Interactive Fee Estimator</h2>
            <div className="header-bar"></div>
          </div>
          <div className="calculator-box">
            <div className="calc-inputs">
              <h3>Configure Enrollment Options</h3>
              <div className="form-group">
                <label>Select School Division:</label>
                <select value={division} onChange={(e) => setDivision(e.target.value)}>
                  <option value="junior">Junior School (Prep - Grade V)</option>
                  <option value="middle">Middle School (Grade VI - VIII)</option>
                  <option value="senior">Senior School (Grade IX - XII CBSE)</option>
                  <option value="international">Cambridge IGCSE / A-Levels</option>
                </select>
              </div>
              <div className="form-group">
                <label>Transport Option:</label>
                <select value={transport} onChange={(e) => setTransport(e.target.value)}>
                  <option value="none">No School Bus Transport</option>
                  <option value="delhi">Delhi Routes (AC Bus)</option>
                  <option value="ncr">Gurgaon / NCR Routes (AC Bus)</option>
                </select>
              </div>
              <div className="checkbox-stack">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={mealPlan} 
                    onChange={(e) => setMealPlan(e.target.checked)} 
                  />
                  <span>Opt-in for Mid-day Catering & Meal Plan</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={sportsAcad} 
                    onChange={(e) => setSportsAcad(e.target.checked)} 
                  />
                  <span>Opt-in for Evening Sports Specialization Academy</span>
                </label>
              </div>
            </div>
            
            <div className="calc-results">
              <h3>Estimated Term Fee Breakdown</h3>
              <div className="fee-breakdown">
                <div className="fee-row">
                  <span>Tuition / Academic Fee:</span>
                  <strong>₹{fees.tuition.toLocaleString()}</strong>
                </div>
                <div className="fee-row">
                  <span>Transport Service:</span>
                  <strong>₹{fees.transport.toLocaleString()}</strong>
                </div>
                <div className="fee-row">
                  <span>Meal Plan:</span>
                  <strong>₹{fees.meals.toLocaleString()}</strong>
                </div>
                <div className="fee-row">
                  <span>Sports Academy:</span>
                  <strong>₹{fees.sports.toLocaleString()}</strong>
                </div>
                <div className="fee-divider"></div>
                <div className="fee-row total-row">
                  <span>Total Est. Term Fee:</span>
                  <span>₹{fees.total.toLocaleString()}</span>
                </div>
              </div>
              <p className="fee-disclaimer">* Admissions registration fee of ₹1,000 applies once during submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Collapsible FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span>COMMON QUERIES</span>
            <h2>Frequently Asked Questions</h2>
            <div className="header-bar"></div>
          </div>

          <div className="faq-accordion-wrapper">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-accordion-item ${activeFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-accordion-header">
                  <h4>{faq.q}</h4>
                  <span className="faq-arrow-icon">
                    {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </div>
                <div className="faq-accordion-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .admissions-page {
          background-color: var(--secondary-beige);
        }

        /* Floating Toast Notification CSS */
        .toast-notification {
          position: fixed;
          top: 90px;
          right: 30px;
          background-color: var(--bg-pure);
          border-left: 4px solid #3b5a41;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-radius: var(--radius-sm);
          padding: 16px 24px;
          z-index: 9999;
          min-width: 320px;
          max-width: 400px;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .toast-success-icon {
          color: #3b5a41;
          flex-shrink: 0;
        }

        .toast-content h4 {
          font-size: 1rem;
          color: var(--text-dark);
          margin-bottom: 2px;
        }

        .toast-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @keyframes slideIn {
          from { transform: translateX(110%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Header Banner styles */
        .admissions-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: #ffffff;
        }

        .admissions-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 2px;
        }

        .admissions-header h1 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          margin-top: 8px;
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .header-bar {
          width: 50px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 15px auto 0 auto;
        }

        /* Admissions Body styling */
        .admissions-body {
          padding: 80px 0;
        }

        .body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .admissions-info h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--primary-maroon);
        }

        .intro-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 35px;
        }

        /* Timeline Process styles */
        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 40px;
          position: relative;
        }

        .process-timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background-color: rgba(197, 168, 128, 0.3);
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .timeline-icon {
          width: 42px;
          height: 42px;
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(122, 28, 46, 0.2);
          z-index: 5;
          flex-shrink: 0;
        }

        .timeline-content h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 6px;
        }

        .timeline-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Age criteria card styles */
        .eligibility-box {
          background-color: var(--primary-maroon-light);
          padding: 24px 30px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .eligibility-box h3 {
          font-size: 1.25rem;
          color: var(--primary-maroon);
          margin-bottom: 12px;
        }

        .eligibility-box ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .eligibility-box li {
          font-size: 0.95rem;
          color: var(--text-dark);
          display: flex;
          justify-content: space-between;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(197, 168, 128, 0.1);
        }

        .eligibility-box li:last-child {
          border-bottom: none;
          padding-bottom: 0;
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
          border: none;
          cursor: pointer;
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
          cursor: pointer;
        }

        .btn-reset:hover {
          background-color: var(--primary-maroon);
          color: var(--text-light);
        }

        /* Fee Calculator Styling */
        .fee-calculator-section {
          padding: 85px 0;
          background-color: var(--secondary-beige);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .calculator-box {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          background-color: var(--bg-card);
          padding: 45px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-md);
          align-items: start;
        }

        .calc-inputs h3, .calc-results h3 {
          font-size: 1.45rem;
          color: var(--primary-maroon);
          margin-bottom: 24px;
          font-family: var(--font-serif);
        }

        .calc-inputs .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .checkbox-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 24px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          cursor: pointer;
        }

        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-maroon);
          cursor: pointer;
        }

        .calc-results {
          background-color: var(--bg-pure);
          padding: 35px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .fee-breakdown {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .fee-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .fee-row strong {
          color: var(--text-dark);
        }

        .fee-divider {
          height: 1px;
          background-color: rgba(197, 168, 128, 0.2);
          margin: 6px 0;
        }

        .total-row {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-maroon) !important;
        }

        .fee-disclaimer {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 20px;
          font-style: italic;
        }

        @media (max-width: 992px) {
          .calculator-box {
            grid-template-columns: 1fr;
            padding: 30px;
          }
        }

        /* FAQ Section styling */
        .faq-section {
          padding: 85px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .faq-accordion-wrapper {
          max-width: 800px;
          margin: 40px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-accordion-item {
          background-color: var(--secondary-beige);
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .faq-accordion-item:hover {
          box-shadow: var(--shadow-sm);
          border-color: var(--primary-maroon);
        }

        .faq-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          gap: 20px;
        }

        .faq-accordion-header h4 {
          font-size: 1.1rem;
          color: var(--text-dark);
          font-weight: 600;
          margin: 0;
        }

        .faq-arrow-icon {
          color: var(--primary-maroon);
          flex-shrink: 0;
        }

        .faq-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 24px;
        }

        .faq-accordion-item.active .faq-accordion-content {
          max-height: 200px;
          padding: 0 24px 20px 24px;
          border-top: 1px solid rgba(197, 168, 128, 0.1);
        }

        .faq-accordion-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 10px 0 0 0;
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
