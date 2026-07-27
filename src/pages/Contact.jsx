import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'admissions',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="contact-page">
      {/* Custom Floating Toast Notification */}
      {showToast && (
        <div className="toast-notification animate-slide-in">
          <div className="toast-content">
            <CheckCircle size={20} className="toast-success-icon" />
            <div>
              <h4>Message Sent!</h4>
              <p>Your inquiry has been successfully sent.</p>
            </div>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <section className="contact-header">
        <div className="container text-center">
          <span className="contact-badge">GET IN TOUCH</span>
          <h1>Contact Us</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="contact-body">
        <div className="container body-grid">
          {/* Left Side: Contact Cards */}
          <div className="contact-details">
            <h2>Let's Start a Conversation</h2>
            <p className="intro-text">
              Have questions about our admissions, curriculum, or activities? Drop us a line or visit our campus. We are happy to help you.
            </p>

            <div className="cards-wrapper">
              <div className="info-card">
                <MapPin size={24} className="info-icon" />
                <div>
                  <h4>Campus Address</h4>
                  <p>Vasant Kunj, Sector C, Pocket 7, New Delhi, India 110070</p>
                </div>
              </div>

              <div className="info-card">
                <Phone size={24} className="info-icon" />
                <div>
                  <h4>Call Office</h4>
                  <p>+91-11-26892787, +91-11-26896547</p>
                  <p className="sub-text">Mon - Fri: 8:00 AM to 3:00 PM</p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={24} className="info-icon" />
                <div>
                  <h4>Email Queries</h4>
                  <p>vasantvalley@vasantvalley.org</p>
                </div>
              </div>
            </div>

            {/* Embedded maps mock frame */}
            <div className="map-wrapper">
              <div className="map-banner">
                <MapPin size={16} style={{ color: 'var(--accent-gold)' }} /> Campus Location Map (Vasant Kunj)
              </div>
              <iframe 
                title="Vasant Valley School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7725916053896!2d77.14207907579177!3d28.516518175729766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e0f0bf71239%3A0xb3debb98d6eb1006!2sVasant%20Valley%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="220" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <p>Fill out the form below and the appropriate department will respond to your inquiry.</p>

            {submitted ? (
              <div className="success-panel">
                <CheckCircle size={48} className="success-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you, <strong>{form.name}</strong>. Your message regarding <strong>{form.subject}</strong> has been sent successfully. We will reply to <strong>{form.email}</strong> shortly.</p>
                <button className="reset-btn" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priyan Singh"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. priyan.singh@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Department *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="admissions">Admissions Helpline</option>
                    <option value="general">General Administration</option>
                    <option value="careers">Careers & Jobs</option>
                    <option value="portal">Student Portal Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your query..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
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
        .contact-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1596495573176-229267abb63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: #ffffff;
        }

        .contact-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 2px;
        }

        .contact-header h1 {
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

        /* Contact Body Layout */
        .contact-body {
          padding: 80px 0;
        }

        .body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .contact-details h2 {
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

        .cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 35px;
        }

        .info-card {
          background-color: var(--bg-card);
          padding: 20px 24px;
          border-radius: var(--radius-md);
          display: flex;
          gap: 16px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .info-icon {
          color: var(--primary-maroon);
          flex-shrink: 0;
        }

        .info-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .info-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .info-card .sub-text {
          font-size: 0.8rem;
          color: var(--accent-gold-dark);
          margin-top: 4px;
          font-weight: 600;
        }

        /* Map styling */
        .map-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.2);
        }

        .map-banner {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 10px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Contact Form styling */
        .contact-form-wrapper {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .contact-form-wrapper h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }

        .contact-form-wrapper p {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        input, select, textarea {
          padding: 10px 14px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-sans);
          background-color: var(--bg-pure);
          transition: var(--transition-fast);
          border-style: solid;
        }

        textarea {
          resize: vertical;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-maroon);
          box-shadow: 0 0 0 3px rgba(122, 28, 46, 0.1);
        }

        .submit-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          box-shadow: var(--shadow-sm);
          border: none;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: var(--primary-maroon-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* Success screen styling */
        .success-panel {
          text-align: center;
          padding: 40px 10px;
        }

        .success-icon {
          color: #3b5a41;
          margin-bottom: 20px;
          display: inline-block;
        }

        .success-panel h4 {
          font-size: 1.6rem;
          color: #3b5a41;
          margin-bottom: 12px;
        }

        .success-panel p {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .reset-btn {
          background-color: var(--secondary-beige);
          color: var(--primary-maroon);
          border: 1px solid var(--primary-maroon);
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          cursor: pointer;
        }

        .reset-btn:hover {
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
          .contact-form-wrapper {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
