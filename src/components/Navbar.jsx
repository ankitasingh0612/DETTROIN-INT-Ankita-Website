import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronDown, Calendar, Award, PhoneCall } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="announcement-bar">
        <div>
          <span>📢 <strong>Admissions Open 2026-27:</strong> Class Nursery to XI. </span>
          <button 
            onClick={() => handleNavClick('admissions')}
            style={{ 
              color: 'var(--accent-gold)', 
              fontWeight: 600, 
              marginLeft: '8px',
              textDecoration: 'underline',
              display: 'inline'
            }}
          >
            Apply Now &rarr;
          </button>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <PhoneCall size={14} /> +91-11-26892787
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo / Brand */}
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            <GraduationCap size={36} className="logo-icon" />
            <div className="logo-text">
              <span className="logo-title">VASANT VALLEY</span>
              <span className="logo-subtitle">EXCELLENCE IN DEED</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="navbar-cta-btn"
              onClick={() => handleNavClick('admissions')}
            >
              Inquire Today
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="mobile-cta-btn"
              onClick={() => {
                handleNavClick('admissions');
                setIsOpen(false);
              }}
            >
              Apply Online
            </button>
          </div>
        </div>
      </header>

      {/* Embedded CSS for Navbar */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(253, 251, 247, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
          z-index: 999;
          transition: var(--transition-smooth);
        }

        .navbar-scrolled {
          background-color: rgba(122, 28, 46, 0.98);
          border-bottom: 1px solid rgba(197, 168, 128, 0.3);
          box-shadow: var(--shadow-md);
        }

        .navbar-scrolled .logo-title {
          color: var(--text-light);
        }

        .navbar-scrolled .logo-subtitle {
          color: var(--accent-gold);
        }

        .navbar-scrolled .logo-icon {
          color: var(--accent-gold);
        }

        .navbar-scrolled .nav-link-btn {
          color: rgba(255, 255, 255, 0.85);
        }

        .navbar-scrolled .nav-link-btn:hover {
          color: var(--text-light);
        }

        .navbar-scrolled .nav-link-btn.active {
          color: var(--accent-gold);
          border-bottom-color: var(--accent-gold);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-icon {
          color: var(--primary-maroon);
          transition: var(--transition-smooth);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-maroon);
          letter-spacing: 1px;
          transition: var(--transition-smooth);
        }

        .logo-subtitle {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 2px;
          transition: var(--transition-smooth);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link-btn {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark);
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: var(--transition-fast);
        }

        .nav-link-btn:hover {
          color: var(--primary-maroon);
        }

        .nav-link-btn.active {
          color: var(--primary-maroon);
          font-weight: 600;
          border-bottom: 2px solid var(--primary-maroon);
        }

        .navbar-cta-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: var(--shadow-sm);
        }

        .navbar-cta-btn:hover {
          background-color: var(--primary-maroon-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .navbar-scrolled .navbar-cta-btn {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
        }

        .navbar-scrolled .navbar-cta-btn:hover {
          background-color: var(--text-light);
        }

        .mobile-toggle {
          display: none;
          color: var(--primary-maroon);
        }

        .navbar-scrolled .mobile-toggle {
          color: var(--text-light);
        }

        /* Mobile Drawer */
        .mobile-nav-menu {
          position: fixed;
          top: 108px;
          left: 0;
          right: 0;
          background-color: var(--secondary-beige);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out;
          box-shadow: var(--shadow-lg);
        }

        .mobile-nav-menu.open {
          max-height: 400px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-dark);
          text-align: left;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-link.active {
          color: var(--primary-maroon);
          font-weight: 700;
        }

        .mobile-cta-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 1rem;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
