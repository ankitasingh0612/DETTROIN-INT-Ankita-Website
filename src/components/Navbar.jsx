import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, PhoneCall, ChevronRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, setLoginOpen, setAcademicsTab, darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  // Full official Vasant Valley side navigation list
  const officialMenuLinks = [
    { label: 'Home', action: 'home' },
    { label: 'Vision & Philosophy', action: 'about' },
    { label: 'The Learning Experience', action: 'learning-experience' },
    { label: 'International Curriculum', action: 'academics' },
    { label: 'Special Education Needs', action: 'academics' },
    { label: 'Programmes', sub: ['Intra-School', 'Inter-School'], action: 'academics' },
    { label: 'Infrastructure', action: 'infrastructure' },
    { label: 'A Day in School', action: 'day-in-school' },
    { label: 'Announcements', action: 'announcements' },
    { label: 'News & Events', action: 'news-events' },
    { label: 'FAQs', action: 'admissions' },
    { label: 'Admissions', action: 'admissions' },
    { label: 'Login', action: 'login' },
    { label: 'About Us', action: 'about' },
    { label: 'School Profile', action: 'school-profile' },
    { label: 'College Placements', action: 'college-placements' },
    { label: 'Alumni Connect', action: 'alumni' },
    { label: 'Careers', action: 'careers' },
    { label: 'Contact Us', action: 'contact' },
    { label: 'Vasant Valley Centre for Excellence in Education', action: 'cee' },
    { label: 'Gurgaon Campus', action: 'gurgaon-campus' }
  ];

  const handleNavClick = (id, tabName = null) => {
    if (id === 'login') {
      setCurrentPage('login');
      setIsOpen(false);
      setDrawerOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (tabName) {
      localStorage.setItem('academics_tab', tabName);
    }
    setCurrentPage(id);
    setIsOpen(false);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    if (!query) return;
    const lowerQuery = query.toLowerCase().trim();
    
    if (lowerQuery.includes('admission') || lowerQuery.includes('fee') || lowerQuery.includes('apply')) {
      handleNavClick('admissions');
    } else if (lowerQuery.includes('about') || lowerQuery.includes('philosophy') || lowerQuery.includes('vision') || lowerQuery.includes('mission')) {
      handleNavClick('about');
    } else if (lowerQuery.includes('academic') || lowerQuery.includes('curriculum') || lowerQuery.includes('class') || lowerQuery.includes('program')) {
      handleNavClick('academics');
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('map') || lowerQuery.includes('address') || lowerQuery.includes('phone')) {
      handleNavClick('contact');
    } else if (lowerQuery.includes('learning') || lowerQuery.includes('experience') || lowerQuery.includes('process')) {
      handleNavClick('learning-experience');
    } else if (lowerQuery.includes('infra') || lowerQuery.includes('facility') || lowerQuery.includes('campus') || lowerQuery.includes('lab') || lowerQuery.includes('library')) {
      handleNavClick('infrastructure');
    } else if (lowerQuery.includes('day') || lowerQuery.includes('routine') || lowerQuery.includes('time') || lowerQuery.includes('schedule')) {
      handleNavClick('day-in-school');
    } else if (lowerQuery.includes('announcement') || lowerQuery.includes('circular') || lowerQuery.includes('notice')) {
      handleNavClick('announcements');
    } else if (lowerQuery.includes('news') || lowerQuery.includes('event') || lowerQuery.includes('debate') || lowerQuery.includes('robotics')) {
      handleNavClick('news-events');
    } else if (lowerQuery.includes('alumni') || lowerQuery.includes('stanford') || lowerQuery.includes('college') || lowerQuery.includes('placement')) {
      handleNavClick('alumni');
    } else if (lowerQuery.includes('career') || lowerQuery.includes('job') || lowerQuery.includes('vacancy') || lowerQuery.includes('work')) {
      handleNavClick('careers');
    } else if (lowerQuery.includes('cee') || lowerQuery.includes('centre') || lowerQuery.includes('teacher')) {
      handleNavClick('cee');
    } else if (lowerQuery.includes('profile') || lowerQuery.includes('cbse') || lowerQuery.includes('fact')) {
      handleNavClick('school-profile');
    } else if (lowerQuery.includes('gurgaon') || lowerQuery.includes('gurugram')) {
      handleNavClick('gurgaon-campus');
    } else {
      alert(`No results found for "${query}". Try searching for 'admissions', 'academics', 'sports', 'alumni', or 'careers'!`);
    }
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
              display: 'inline',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit'
            }}
          >
            Apply Now &rarr;
          </button>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span className="phone-nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <PhoneCall size={14} /> +91-11-26892787
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Menu Drawer Toggle Button */}
          <button 
            className="drawer-toggle-btn" 
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Sidebar Menu"
          >
            <Menu size={24} />
            <span className="drawer-btn-label">MENU</span>
          </button>

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

          {/* Search and Log In actions */}
          <div className="navbar-right-actions">
            <div className="nav-search-bar">
              <input 
                type="text" 
                placeholder="Search..." 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
            <button 
              className="theme-toggle-btn"
              onClick={() => {
                const nextMode = !darkMode;
                setDarkMode(nextMode);
                localStorage.setItem('dark_mode', nextMode);
              }}
              aria-label="Toggle Dark Theme"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                transition: 'var(--transition-fast)'
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="nav-official-login-btn"
              onClick={() => handleNavClick('login')}
            >
              &rarr; LOG IN
            </button>
          </div>

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

      {/* Slide-over Menu Drawer Backdrop */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}></div>
      )}

      {/* Slide-over Side Drawer Menu */}
      <div className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <GraduationCap size={28} />
            <div>
              <h3>VASANT VALLEY</h3>
              <p>EXCELLENCE IN DEED</p>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={() => setDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-menu-list">
          {officialMenuLinks.map((link, idx) => (
            <div key={idx} className="drawer-menu-item-group">
              <button 
                className="drawer-menu-link" 
                onClick={() => handleNavClick(
                  link.action,
                  link.label === 'International Curriculum' ? 'international' :
                  link.label === 'Special Education Needs' ? 'sen' :
                  link.label === 'Programmes' ? 'programmes' : null
                )}
              >
                <span>{link.label}</span>
                <ChevronRight size={14} className="drawer-arrow" />
              </button>
              {link.sub && (
                <div className="drawer-submenu-list">
                  {link.sub.map((s, sIdx) => (
                    <button 
                      key={sIdx} 
                      className="drawer-submenu-link"
                      onClick={() => handleNavClick(link.action, 'programmes')}
                    >
                      — {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for Navbar & Side Drawer */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(253, 251, 247, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 2px solid var(--accent-gold);
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

        .navbar-scrolled .drawer-toggle-btn {
          color: var(--text-light);
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

        /* Drawer Toggle Button styling */
        .drawer-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-maroon);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .navbar-right-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-search-bar input {
          border: none;
          border-bottom: 2px solid var(--accent-gold);
          background: transparent;
          color: var(--text-dark);
          padding: 4px 8px;
          font-size: 0.9rem;
          width: 140px;
          outline: none;
          transition: var(--transition-smooth);
        }

        .navbar-scrolled .nav-search-bar input {
          border-bottom-color: var(--accent-gold);
          color: var(--text-light);
        }

        .nav-search-bar input:focus {
          width: 180px;
          border-bottom-color: var(--primary-maroon);
        }

        .navbar-scrolled .nav-search-bar input:focus {
          border-bottom-color: var(--text-light);
        }

        .nav-official-login-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 8px 16px;
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          border: none;
          letter-spacing: 0.5px;
          transition: var(--transition-fast);
        }

        .nav-official-login-btn:hover {
          background-color: var(--primary-maroon-hover);
        }

        .navbar-scrolled .nav-official-login-btn {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
        }

        .navbar-scrolled .nav-official-login-btn:hover {
          background-color: var(--text-light);
        }

        .drawer-toggle-btn:hover {
          background-color: rgba(122, 28, 46, 0.08);
        }

        .drawer-btn-label {
          letter-spacing: 1px;
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
          background: none;
          border: none;
          cursor: pointer;
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
          border: none;
          cursor: pointer;
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
          cursor: pointer;
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
          background: none;
          border: none;
          cursor: pointer;
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
          border: none;
          cursor: pointer;
        }

        /* Slide-over Side Drawer Styling */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1050;
          backdrop-filter: blur(4px);
        }

        .side-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 380px;
          max-width: 85vw;
          background-color: var(--secondary-beige);
          z-index: 1100;
          box-shadow: 10px 0 40px rgba(0, 0, 0, 0.15);
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(197, 168, 128, 0.3);
        }

        .side-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 24px;
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #F0EDE6;
        }

        .drawer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--primary-maroon);
        }

        .drawer-logo h3 {
          font-size: 1.15rem;
          font-family: var(--font-serif);
          font-weight: 700;
          line-height: 1.1;
        }

        .drawer-logo p {
          font-size: 0.65rem;
          letter-spacing: 1.5px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .drawer-close-btn {
          color: var(--primary-maroon);
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
        }

        .drawer-close-btn:hover {
          background-color: rgba(122, 28, 46, 0.08);
        }

        .drawer-menu-list {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
        }

        .drawer-menu-item-group {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .drawer-menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 28px;
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1rem;
          text-align: left;
          width: 100%;
          cursor: pointer;
          background: none;
          border: none;
          transition: var(--transition-fast);
        }

        .drawer-menu-link:hover {
          background-color: rgba(122, 28, 46, 0.04);
          color: var(--primary-maroon);
          padding-left: 32px;
        }

        .drawer-arrow {
          color: rgba(122, 28, 46, 0.4);
          transition: var(--transition-fast);
        }

        .drawer-menu-link:hover .drawer-arrow {
          color: var(--primary-maroon);
          transform: translateX(4px);
        }

        .drawer-submenu-list {
          padding: 4px 0 10px 40px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background-color: rgba(0, 0, 0, 0.02);
        }

        .drawer-submenu-link {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: left;
          padding: 4px 0;
          background: none;
          border: none;
          cursor: pointer;
        }

        .drawer-submenu-link:hover {
          color: var(--primary-maroon);
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
