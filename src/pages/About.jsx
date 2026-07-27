import React from 'react';
import { Target, Eye, Quote, Users, Sparkles, BookOpen, GraduationCap, Award, MapPin } from 'lucide-react';

export default function About() {
  const universityPlacements = [
    { name: "Harvard University", location: "USA", logoBg: "#A51C30" },
    { name: "Stanford University", location: "USA", logoBg: "#8C1515" },
    { name: "University of Oxford", location: "UK", logoBg: "#002147" },
    { name: "University of Cambridge", location: "UK", logoBg: "#D60D22" },
    { name: "Massachusetts Institute of Technology (MIT)", location: "USA", logoBg: "#A31F34" },
    { name: "St. Stephen's College", location: "India", logoBg: "#115740" },
    { name: "IIT Delhi & Bombay", location: "India", logoBg: "#0B4C8C" },
    { name: "Ashoka University", location: "India", logoBg: "#6F2C3F" },
  ];

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

      {/* School Profile Stats Block */}
      <section className="profile-stats-section">
        <div className="container">
          <div className="section-header text-center">
            <span>SCHOOL PROFILE</span>
            <h2>Vasant Valley At A Glance</h2>
            <div className="header-bar"></div>
          </div>
          <div className="profile-stats-grid">
            <div className="profile-stat-card">
              <Users size={32} className="stat-icon" />
              <h3>1,300+</h3>
              <p>Active Student Community</p>
            </div>
            <div className="profile-stat-card">
              <Award size={32} className="stat-icon" />
              <h3>120+</h3>
              <p>Highly Trained Subject Mentors</p>
            </div>
            <div className="profile-stat-card">
              <GraduationCap size={32} className="stat-icon" />
              <h3>5,000+</h3>
              <p>Strong Global Alumni Network</p>
            </div>
            <div className="profile-stat-card">
              <MapPin size={32} className="stat-icon" />
              <h3>8+ Acres</h3>
              <p>Lush Green Eco-friendly Campus</p>
            </div>
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

      {/* College Placements Board */}
      <section className="placements-section">
        <div className="container">
          <div className="section-header text-center">
            <span>ALUMNI PLACEMENT BOARD</span>
            <h2>Top Global College Placements</h2>
            <div className="header-bar"></div>
          </div>
          <p className="placement-intro text-center">
            Our students consistently receive admission offers from leading institutions globally and within India.
          </p>
          <div className="placements-grid">
            {universityPlacements.map((univ, index) => (
              <div key={index} className="placement-card">
                <div className="univ-badge" style={{ backgroundColor: univ.logoBg }}>
                  {univ.name.charAt(0)}
                </div>
                <div className="univ-details">
                  <h4>{univ.name}</h4>
                  <span className="univ-loc">{univ.location}</span>
                </div>
              </div>
            ))}
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

        /* School Profile Stats Styling */
        .profile-stats-section {
          padding: 85px 0;
          background-color: var(--secondary-beige);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .profile-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        .profile-stat-card {
          background-color: var(--bg-card);
          padding: 30px 24px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .profile-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-maroon);
        }

        .stat-icon {
          color: var(--primary-maroon);
          margin-bottom: 16px;
        }

        .profile-stat-card h3 {
          font-size: 2.2rem;
          color: var(--primary-maroon);
          margin-bottom: 6px;
        }

        .profile-stat-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .vision-mission {
          padding: 80px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .vm-card {
          background-color: var(--secondary-beige);
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

        /* Placements Styling */
        .placements-section {
          padding: 85px 0;
          background-color: var(--secondary-beige);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .placement-intro {
          max-width: 650px;
          margin: 0 auto 40px auto;
          color: var(--text-muted);
        }

        .placements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .placement-card {
          background-color: var(--bg-card);
          padding: 20px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }

        .placement-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary-maroon);
          box-shadow: var(--shadow-md);
        }

        .univ-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: var(--text-light);
          font-weight: 700;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .univ-details h4 {
          font-size: 0.95rem;
          color: var(--text-dark);
          margin-bottom: 2px;
          font-family: var(--font-sans);
        }

        .univ-loc {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .values-section {
          padding: 80px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
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
          .profile-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .placements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .profile-stats-grid {
            grid-template-columns: 1fr;
          }
          .placements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
