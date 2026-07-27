import React from 'react';
import { BookOpen, Smile, Sparkles, Heart, Activity, Globe, Stars } from 'lucide-react';

export default function LearningExperience() {
  const developmentAreas = [
    {
      title: "Social Development",
      icon: <Smile size={32} />,
      desc: "Nurturing empathy, communication, and peer collaboration through interactive projects and community leadership programmes."
    },
    {
      title: "Emotional Development",
      icon: <Heart size={32} />,
      desc: "Building resilience, self-awareness, and emotional intelligence through dedicated mental health support and counseling."
    },
    {
      title: "Cerebral Development",
      icon: <BookOpen size={32} />,
      desc: "Fostering creative inquiry, analytical thinking, and process-focused problem solving instead of standard textbook learning."
    },
    {
      title: "Physical Development",
      icon: <Activity size={32} />,
      desc: "Promoting physical fitness, teamwork, and athletic mastery across sports fields and professional indoor pools."
    },
    {
      title: "Spiritual Development",
      icon: <Sparkles size={32} />,
      desc: "Encouraging self-reflection, mindfulness, and inner peace in daily assemblies and character building programmes."
    }
  ];

  return (
    <div className="learning-exp-page animate-fade-in">
      {/* Header Banner */}
      <section className="learning-exp-header">
        <div className="luxury-overlay"></div>
        <div className="container header-container">
          <span className="learning-exp-badge">PEDAGOGICAL EXCELLENCE</span>
          <h1>The Learning Experience</h1>
          <p className="header-subtitle">Nurturing holistic development through a process-focused curriculum.</p>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="philosophy-section">
        <div className="container philosophy-grid">
          <div className="phil-text">
            <h2>Process-Focused Learning</h2>
            <p className="large-lead">
              Education is not about standard memorization; it's about building cognitive tools for lifelong intellectual curiosity.
            </p>
            <p>
              At Vasant Valley, we design curriculum frameworks that encourage students to investigate the core principles of every topic. By combining scientific lab experiments with humanities research and digital coding, we build well-rounded minds that are ready for the complex questions of tomorrow.
            </p>
          </div>
          <div className="phil-highlight-box">
            <div className="highlight-tag">OUR PHILOSOPHY</div>
            <h3>Five Spheres of Human Development</h3>
            <p>Our academic architecture maps to five fundamental areas of growth:</p>
            <div className="phil-tag-list">
              <span className="phil-tag">Social</span>
              <span className="phil-tag">Emotional</span>
              <span className="phil-tag">Cerebral</span>
              <span className="phil-tag">Physical</span>
              <span className="phil-tag">Spiritual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Development Areas Grid */}
      <section className="areas-section">
        <div className="container">
          <div className="section-header text-center">
            <span>HOLISTIC FRAMEWORK</span>
            <h2>Areas of Student Development</h2>
            <div className="header-bar"></div>
          </div>
          <div className="areas-grid">
            {developmentAreas.map((area, idx) => (
              <div key={idx} className="area-card">
                <div className="area-icon-wrapper">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .learning-exp-page {
          background-color: var(--secondary-beige);
        }

        .learning-exp-header {
          position: relative;
          background: linear-gradient(rgba(74, 14, 23, 0.85), rgba(40, 6, 10, 0.95)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 120px 0 100px 0;
          color: var(--text-light);
          text-align: center;
        }

        .header-container {
          position: relative;
          z-index: 10;
        }

        .learning-exp-header h1 {
          color: var(--text-light);
          font-size: 3.6rem;
          font-family: var(--font-serif);
          margin-top: 10px;
          letter-spacing: 1px;
        }

        .header-subtitle {
          font-size: 1.25rem;
          color: var(--accent-gold);
          font-family: var(--font-serif);
          font-style: italic;
          margin-top: 12px;
          opacity: 0.95;
        }

        .learning-exp-badge {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--accent-gold);
          text-transform: uppercase;
        }

        .header-bar {
          width: 80px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 25px auto 0 auto;
        }

        .philosophy-section {
          padding: 100px 0;
          background-color: var(--bg-pure);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .phil-text h2 {
          font-size: 2.6rem;
          margin-bottom: 24px;
          color: var(--primary-maroon);
        }

        .large-lead {
          font-size: 1.3rem;
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--accent-gold-dark);
          line-height: 1.6;
          margin-bottom: 24px;
          border-left: 3px solid var(--accent-gold);
          padding-left: 20px;
        }

        .phil-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .phil-highlight-box {
          background: linear-gradient(135deg, rgba(122, 28, 46, 0.04) 0%, rgba(197, 168, 128, 0.08) 100%);
          padding: 45px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.25);
          box-shadow: var(--shadow-md);
        }

        .highlight-tag {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--primary-maroon);
          margin-bottom: 10px;
        }

        .phil-highlight-box h3 {
          font-size: 1.65rem;
          color: var(--primary-maroon);
          margin-bottom: 16px;
        }

        .phil-highlight-box p {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .phil-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .phil-tag {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(122, 28, 46, 0.15);
        }

        .areas-section {
          padding: 100px 0;
          background-color: var(--secondary-beige);
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .area-card {
          background-color: var(--bg-card);
          padding: 50px 35px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .area-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-maroon);
        }

        .area-icon-wrapper {
          color: var(--primary-maroon);
          background-color: var(--primary-maroon-light);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px auto;
          box-shadow: 0 6px 15px rgba(122, 28, 46, 0.08);
          transition: var(--transition-smooth);
        }

        .area-card:hover .area-icon-wrapper {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          transform: scale(1.08);
        }

        .area-card h3 {
          font-size: 1.45rem;
          margin-bottom: 16px;
          color: var(--text-dark);
        }

        .area-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .areas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .learning-exp-header h1 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 576px) {
          .areas-grid {
            grid-template-columns: 1fr;
          }
          .learning-exp-header {
            padding: 90px 0 70px 0;
          }
        }
      `}</style>
    </div>
  );
}
