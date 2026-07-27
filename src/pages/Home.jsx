import React from 'react';
import { ArrowRight, Star, Heart, Award, ShieldCheck, ChevronRight, BookOpen, Clock, CalendarRange } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <span className="hero-badge">Est. 1990 | New Delhi</span>
          <h1 className="hero-title">Nurturing Leaders, Inspiring Excellence</h1>
          <p className="hero-subtitle">
            Welcome to Vasant Valley School. Where rigorous academics meet holistic character development to build a progressive global future.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigateTo('admissions')}>
              Admissions Open 2026-27 <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn-secondary" onClick={() => navigateTo('about')}>
              Discover Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* Motto & Core Philosophy Banner */}
      <section className="motto-banner-section">
        <div className="container motto-grid">
          <div className="motto-text-box">
            <span className="motto-tag">OUR MOTTO</span>
            <h2>"Shreshtha Tamaya Karmane"</h2>
            <p className="motto-english">Excellence in Deed</p>
          </div>
          <div className="motto-desc-box">
            <p>
              We believe in the beauty of striving for the best. Education at Vasant Valley is not just about scoring grades; it's about refining values, exploring creative thinking, and expressing integrity through every action.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics / Highlights */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>1:9</h3>
            <p>Teacher-Student Ratio</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Board Examination Success</p>
          </div>
          <div className="stat-card">
            <h3>35+</h3>
            <p>Co-curricular Activities Offered</p>
          </div>
          <div className="stat-card">
            <h3>Est. 1990</h3>
            <p>Over 3 Decades of Academic Legacy</p>
          </div>
        </div>
      </section>

      {/* Highlights / Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <span>WHY VASANT VALLEY?</span>
            <h2>Educational Framework Built for Tomorrow</h2>
            <div className="header-bar"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper">
                <BookOpen size={28} />
              </div>
              <h3>Progressive Academics</h3>
              <p>An innovative CBSE curriculum integrated with project-based, interactive learning that nurtures analytical minds and creative problem solvers.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <Heart size={28} />
              </div>
              <h3>Holistic Care & Guidance</h3>
              <p>Counseling support, personal development tracks, and peer mentorship to ensure the psychological, social, and emotional well-being of every student.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <Award size={28} />
              </div>
              <h3>Co-Curricular Eminence</h3>
              <p>Expert coaching in sports, arts, performing arts, robotics, debating, and social service programs that inspire student passions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Notice Board & News */}
      <section className="updates-section">
        <div className="container updates-grid">
          {/* Left Column: Spotlight News */}
          <div className="news-spotlight">
            <span className="section-sub">WHAT'S HAPPENING</span>
            <h2>Spotlight & Stories</h2>
            <div className="news-card">
              <div className="news-date">July 26, 2026</div>
              <h3>Annual Debate & Creative Arts Symposium 2026</h3>
              <p>We are delighted to announce our students won 1st prize in the Inter-School Creative Writing & Debate Symposium held this weekend. Kudos to the debating society!</p>
              <button className="read-more-btn">Read full story <ChevronRight size={14} /></button>
            </div>
            <div className="news-card">
              <div className="news-date">July 18, 2026</div>
              <h3>Robotics Society Qualifies for Nationals</h3>
              <p>Vasant Valley Robotics team 'RoboQuest' secured their spot in the national championships with their autonomous waste sorting bot prototype.</p>
              <button className="read-more-btn">Read full story <ChevronRight size={14} /></button>
            </div>
          </div>

          {/* Right Column: Dynamic Notice Board */}
          <div className="notice-board">
            <h2>Notice Board</h2>
            <div className="notices-wrapper">
              <div className="notice-item">
                <div className="notice-badge">Admission</div>
                <div className="notice-content">
                  <h4>Registration Open for Nursery - Grade IX (A.Y. 2026-27)</h4>
                  <p>Parents are requested to check eligibility criteria and submit online registration forms before the deadline.</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-badge schedule">Academics</div>
                <div className="notice-content">
                  <h4>Revised Middle School Academic Term Plan</h4>
                  <p>The revised calendar for Term-I assignments is now downloadable from the student portal.</p>
                </div>
              </div>

              <div className="notice-item font-italic">
                <div className="notice-badge event">Events</div>
                <div className="notice-content">
                  <h4>Parent-Teacher Consultations scheduled for next Friday</h4>
                  <p>Time slots have been shared via e-portal. Check email for details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Hero Section styles */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #4A0E17 0%, #7A1C2E 100%);
          height: 80vh;
          min-height: 550px;
          display: flex;
          align-items: center;
          color: var(--text-light);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(197, 168, 128, 0.15) 0%, transparent 70%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--text-light);
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 15px;
        }

        .btn-primary {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(197, 168, 128, 0.25);
        }

        .btn-primary:hover {
          background-color: var(--text-light);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
        }

        .btn-secondary {
          border: 2px solid rgba(255, 255, 255, 0.25);
          color: var(--text-light);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .btn-secondary:hover {
          border-color: var(--accent-gold);
          background-color: rgba(197, 168, 128, 0.1);
          color: var(--accent-gold);
        }

        /* Motto banner styling */
        .motto-banner-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
          padding: 50px 0;
        }

        .motto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .motto-text-box {
          border-left: 4px solid var(--primary-maroon);
          padding-left: 24px;
        }

        .motto-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold-dark);
        }

        .motto-text-box h2 {
          font-size: 2.2rem;
          margin-top: 4px;
        }

        .motto-english {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--text-muted);
          margin-top: 5px;
        }

        .motto-desc-box p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Stats section styling */
        .stats-section {
          background-color: var(--primary-maroon-light);
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          background-color: var(--bg-pure);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .stat-card h3 {
          font-size: 2.5rem;
          color: var(--primary-maroon);
          margin-bottom: 8px;
        }

        .stat-card p {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Features section styling */
        .features-section {
          padding: 80px 0;
          background-color: var(--secondary-beige);
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-header span {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
        }

        .section-header h2 {
          font-size: 2.4rem;
          margin-top: 6px;
        }

        .header-bar {
          width: 60px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 15px auto 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .feature-card {
          background-color: var(--bg-card);
          padding: 40px 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          border-bottom: 4px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-bottom-color: var(--primary-maroon);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background-color: var(--primary-maroon-light);
          color: var(--primary-maroon);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: var(--transition-smooth);
        }

        .feature-card:hover .icon-wrapper {
          background-color: var(--primary-maroon);
          color: var(--text-light);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Updates & notice board section styling */
        .updates-section {
          padding: 80px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .updates-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
        }

        .section-sub {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          letter-spacing: 1.5px;
        }

        .news-spotlight h2, .notice-board h2 {
          font-size: 2.2rem;
          margin-bottom: 30px;
        }

        .news-card {
          padding: 24px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .news-card:last-child {
          border-bottom: none;
        }

        .news-date {
          font-size: 0.8rem;
          color: var(--accent-gold-dark);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .news-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .news-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }

        .read-more-btn {
          color: var(--primary-maroon);
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .read-more-btn:hover {
          color: var(--accent-gold-dark);
        }

        .notice-board {
          background-color: var(--secondary-beige);
          padding: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.2);
          height: fit-content;
        }

        .notices-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .notice-item {
          display: flex;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px dashed rgba(197, 168, 128, 0.4);
        }

        .notice-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .notice-badge {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          height: fit-content;
          text-transform: uppercase;
        }

        .notice-badge.schedule {
          background-color: #3b5a41; /* forest green accent */
        }

        .notice-badge.event {
          background-color: var(--accent-gold-dark);
        }

        .notice-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--text-dark);
          line-height: 1.3;
        }

        .notice-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .motto-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .updates-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-actions {
            flex-direction: column;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .notice-board {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
