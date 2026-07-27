import React from 'react';
import { Target, Eye, Quote, Users, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="about-header">
        <div className="container text-center">
          <span className="about-badge">SINCE 1990</span>
          <h1>Our Legacy & Vision</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="about-intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>Nurturing the Minds of Tomorrow</h2>
            <p>
              Vasant Valley School was established in July 1990 with a vision to create a vibrant space of learning where education meets creativity. Initially starting with classes Prep to Grade III, the school has grown into a prestigious co-educational day-school hosting students up to Grade XII.
            </p>
            <p>
              Our academic architecture focuses on individual potential, encouraging student curiosity rather than mechanical test-taking. We nurture leaders who are self-aware, active contributors to society, and rooted in strong ethical foundations.
            </p>
          </div>
          <div className="intro-image-placeholder">
            <Quote size={48} className="quote-icon" />
            <blockquote>
              "We strive to foster a supportive learning environment that honors academic integrity and promotes lifelong intellectual curiosity."
            </blockquote>
            <cite>— Leadership Team, Vasant Valley</cite>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="vision-mission">
        <div className="container vision-mission-grid">
          <div className="vm-card">
            <div className="vm-icon">
              <Eye size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To lead progressive educational standards globally by building a community of self-directed learners who demonstrate high integrity, compassion, and the capacity to resolve complex socio-economic challenges.
            </p>
          </div>

          <div className="vm-card">
            <div className="vm-icon">
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide a nurturing, safe, and academically rigorous environment that promotes critical inquiry, active collaboration, environmental stewardship, and a commitment to personal growth and societal responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <span>CORE VALUES</span>
            <h2>The Pillars of Our Community</h2>
            <div className="header-bar"></div>
          </div>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"><Users size={24} /></div>
              <h4>Integrity</h4>
              <p>Doing the right thing even when no one is watching. Honesty is the anchor of our character.</p>
            </div>

            <div className="value-item">
              <div className="value-icon"><Sparkles size={24} /></div>
              <h4>Excellence</h4>
              <p>Striving continuously for improvement in academics, sports, and human relationships.</p>
            </div>

            <div className="value-item">
              <div className="value-icon"><BookOpen size={24} /></div>
              <h4>Respect</h4>
              <p>Embracing diversity and honoring the thoughts, feelings, and backgrounds of others.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: var(--secondary-beige);
        }

        .about-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }

        .about-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
          margin-top: 8px;
        }

        .about-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }

        .about-intro {
          padding: 80px 0;
          background-color: var(--bg-pure);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .intro-text h2 {
          font-size: 2.2rem;
          margin-bottom: 24px;
        }

        .intro-text p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .intro-image-placeholder {
          background-color: var(--primary-maroon-light);
          padding: 40px;
          border-radius: var(--radius-md);
          border-left: 5px solid var(--primary-maroon);
          position: relative;
        }

        .quote-icon {
          color: var(--accent-gold);
          opacity: 0.3;
          margin-bottom: 12px;
        }

        blockquote {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--primary-maroon);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        cite {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-style: normal;
        }

        .vision-mission {
          padding: 80px 0;
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .vm-card {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }

        .vm-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .vm-icon {
          background-color: var(--primary-maroon-light);
          color: var(--primary-maroon);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .vm-card h3 {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        .vm-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .values-section {
          padding: 80px 0;
          background-color: var(--bg-pure);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .value-item {
          text-align: center;
          padding: 20px;
        }

        .value-icon {
          color: var(--primary-maroon);
          margin-bottom: 16px;
          display: inline-block;
          padding: 12px;
          background-color: var(--primary-maroon-light);
          border-radius: 50%;
        }

        .value-item h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .value-item p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .vision-mission-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
