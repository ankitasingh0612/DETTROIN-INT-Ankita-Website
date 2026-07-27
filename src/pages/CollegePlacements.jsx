import React from 'react';
import { GraduationCap, Award, Globe, ShieldCheck } from 'lucide-react';

export default function CollegePlacements() {
  const universityPlacements = [
    { name: "Harvard University", location: "USA", logoBg: "#A51C30" },
    { name: "Stanford University", location: "USA", logoBg: "#8C1515" },
    { name: "University of Oxford", location: "UK", logoBg: "#002147" },
    { name: "University of Cambridge", location: "UK", logoBg: "#D60D22" },
    { name: "Massachusetts Institute of Technology (MIT)", location: "USA", logoBg: "#A31F34" },
    { name: "St. Stephen's College", location: "India", logoBg: "#115740" },
    { name: "IIT Delhi & Bombay", location: "India", logoBg: "#0B4C8C" },
    { name: "Ashoka University", location: "India", logoBg: "#6F2C3F" },
    { name: "Yale University", location: "USA", logoBg: "#00356B" },
    { name: "Columbia University", location: "USA", logoBg: "#0033A0" }
  ];

  return (
    <div className="placements-page animate-fade-in">
      {/* Header Banner */}
      <section className="placements-header">
        <div className="container text-center">
          <span className="placements-badge">GLOBAL SCHOLARS</span>
          <h1>College Placements</h1>
          <p className="header-subtitle">Empowering students to step into the world's finest universities.</p>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Intro section */}
      <section className="placements-intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>Academic Footprint</h2>
            <p className="large-lead">
              Our graduates are recognized globally for their academic rigor, intellectual curiosity, and leadership potential.
            </p>
            <p>
              The Vasant Valley School College Counselling Cell works individually with students from Grade IX onwards to guide them through college searches, application essays, transcript building, and scholarship applications.
            </p>
          </div>
          <div className="counseling-highlight">
            <div className="highlight-tag">COUNSELLING SUPPORT</div>
            <h3>Customized Guidance</h3>
            <p>We host regular interactive sessions with admissions officers from leading ivy league and international universities, providing parents and students with a direct channel of query resolution.</p>
          </div>
        </div>
      </section>

      {/* University Placements List */}
      <section className="university-list-section">
        <div className="container">
          <div className="section-header text-center">
            <span>ALUMNI ACCREDITATION</span>
            <h2>Top Placement Destination Board</h2>
            <div className="header-bar"></div>
          </div>
          <div className="univ-placements-grid">
            {universityPlacements.map((univ, index) => (
              <div key={index} className="univ-card">
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

      <style>{`
        .placements-page {
          background-color: var(--secondary-beige);
        }
        .placements-header {
          background: linear-gradient(rgba(74, 14, 23, 0.85), rgba(40, 6, 10, 0.95)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 120px 0 100px 0;
          color: var(--text-light);
          text-align: center;
        }
        .placements-header h1 {
          color: var(--text-light);
          font-size: 3.6rem;
          font-family: var(--font-serif);
        }
        .header-subtitle {
          font-size: 1.25rem;
          color: var(--accent-gold);
          font-family: var(--font-serif);
          font-style: italic;
          margin-top: 12px;
        }
        .placements-badge {
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
        .placements-intro {
          padding: 100px 0;
          background-color: var(--bg-pure);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .intro-text h2 {
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
        .intro-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        .counseling-highlight {
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
        .counseling-highlight h3 {
          font-size: 1.65rem;
          color: var(--primary-maroon);
          margin-bottom: 16px;
        }
        .counseling-highlight p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .university-list-section {
          padding: 100px 0;
          background-color: var(--secondary-beige);
        }
        .univ-placements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 50px;
        }
        .univ-card {
          background-color: var(--bg-card);
          padding: 24px 30px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }
        .univ-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-maroon);
        }
        .univ-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .univ-details h4 {
          font-size: 1.2rem;
          margin-bottom: 4px;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .univ-loc {
          font-size: 0.85rem;
          color: var(--accent-gold-dark);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .univ-placements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
