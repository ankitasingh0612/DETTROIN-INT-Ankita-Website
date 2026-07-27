import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Brand Description */}
        <div className="footer-brand">
          <div className="footer-logo">
            <GraduationCap size={32} className="footer-logo-icon" />
            <h3>VASANT VALLEY</h3>
          </div>
          <p className="footer-desc">
            Established in 1990, Vasant Valley School is a co-educational day school dedicated to providing academic excellence and fostering character, integrity, and creative thought.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="Youtube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => navigateTo('home')}>Home</button></li>
            <li><button onClick={() => navigateTo('about')}>About Us</button></li>
            <li><button onClick={() => navigateTo('academics')}>Academics</button></li>
            <li><button onClick={() => navigateTo('admissions')}>Admissions</button></li>
            <li><button onClick={() => navigateTo('contact')}>Contact Us</button></li>
          </ul>
        </div>

        {/* Portals/Admissions */}
        <div className="footer-links">
          <h4>Useful Resources</h4>
          <ul>
            <li><a href="#rules">School Rules</a></li>
            <li><a href="#newsletter">Monthly Newsletter</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#calendar">Academic Calendar</a></li>
            <li><a href="#gallery">Photo Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Vasant Kunj, Sector C, Pocket 7, New Delhi, India 110070</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91-11-26892787 / 26896547</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>vasantvalley@vasantvalley.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Vasant Valley School. Redesigned for Dettroin Internship Challenge.</p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #1e1215; /* Dark background with subtle maroon hue */
          color: rgba(255, 255, 255, 0.7);
          padding: 60px 0 0 0;
          border-top: 3px solid var(--accent-gold);
          font-size: 0.9rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-light);
        }

        .footer-logo h3 {
          font-family: var(--font-serif);
          color: var(--text-light);
          font-size: 1.3rem;
          letter-spacing: 1px;
        }

        .footer-logo-icon {
          color: var(--accent-gold);
        }

        .footer-desc {
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .social-links a {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--accent-gold);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: var(--transition-smooth);
        }

        .social-links a:hover {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
          transform: translateY(-3px);
        }

        .footer-links h4, .footer-contact h4 {
          font-family: var(--font-sans);
          color: var(--text-light);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          position: relative;
        }

        .footer-links h4::after, .footer-contact h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 30px;
          height: 2px;
          background-color: var(--accent-gold);
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links button {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          text-align: left;
          padding: 0;
        }

        .footer-links button:hover, .footer-links a:hover {
          color: var(--accent-gold);
          padding-left: 4px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: var(--transition-fast);
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-bottom {
          background-color: #150a0c;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.8rem;
        }

        .bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .scroll-top-btn {
          color: var(--accent-gold);
          font-size: 0.8rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .scroll-top-btn:hover {
          color: var(--text-light);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .bottom-container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
