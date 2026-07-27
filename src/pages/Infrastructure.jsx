import React, { useState } from 'react';
import { Home, Shield, Library, Compass, Cpu, Target, Trees } from 'lucide-react';

export default function Infrastructure() {
  const [activeZone, setActiveZone] = useState('library');

  const tourZones = {
    library: {
      name: "Resource & Reading Library",
      desc: "Featuring cozy alcoves, natural sunlight panels, and an array of over 20,000+ scientific and academic volumes.",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80",
      gradient: "linear-gradient(135deg, #3E2723 0%, #5D4037 100%)",
      icon: <Library size={120} />
    },
    robotics: {
      name: "Robotics & Innovation Lab",
      desc: "Fitted with computing workspaces, advanced 3D printers, electronics prototyping kits, and sensor testing bays.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      gradient: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      icon: <Cpu size={120} />
    },
    pool: {
      name: "Indoor AC Swimming Complex",
      desc: "Fully temperature-regulated indoor pool designed for water polo meets, swim strokes coaching, and championship tournaments.",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
      gradient: "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)",
      icon: <Compass size={120} />
    },
    alcove: {
      name: "Classroom Study Alcoves",
      desc: "Localized reading lounges directly adjacent to primary and senior wing class setups for self-study hours.",
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1000&q=80",
      gradient: "linear-gradient(135deg, #7A1C2E 0%, #C5A880 100%)",
      icon: <Home size={120} />
    }
  };
  const infraItems = [
    {
      title: "Classroom Alcoves",
      icon: <Home size={28} />,
      desc: "Our innovative classroom architecture utilizes localized 'alcoves' for self-study, interactive team discussions, and individual focus centers."
    },
    {
      title: "Science & Robotics Laboratories",
      icon: <Cpu size={28} />,
      desc: "Advanced physics, chemistry, biology, and computer learning suites fitted with modern research apparatus and robotics prototyping modules."
    },
    {
      title: "Resource & Reading Library",
      icon: <Library size={28} />,
      desc: "A wide resource center hosting over 20,000+ print volumes, online subscriptions, digital catalogs, and cozy learning spaces."
    },
    {
      title: "Olympic Sports Complex",
      icon: <Target size={28} />,
      desc: "Lush green athletic track, concrete basketball courts, standard tennis courts, and a fully temperature-controlled indoor swimming pool."
    }
  ];

  return (
    <div className="infra-page animate-fade-in">
      {/* Header Banner */}
      <section className="infra-header">
        <div className="container header-container">
          <span className="infra-badge">CAMPUS ARCHITECTURE</span>
          <h1>Campus & Facilities</h1>
          <p className="header-subtitle">Purpose-built spaces nurturing intellectual curiosity and physical wellness.</p>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Campus Introduction */}
      <section className="infra-intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>Nurturing Environment</h2>
            <p className="large-lead">
              A modern, eco-friendly 8-acre campus designed specifically to support dynamic co-educational growth in Vasant Kunj.
            </p>
            <p>
              Vasant Valley's campus is split into functional wings ensuring age-appropriate play and learning environments. Class sections are kept to a standard maximum of 30 students to provide ample personal workspace.
            </p>
          </div>
          <div className="intro-stats-panel">
            <div className="stats-box">
              <Trees size={24} className="box-icon" />
              <h3>8+ Acres</h3>
              <p>Lush Green Campus</p>
            </div>
            <div className="stats-box">
              <Shield size={24} className="box-icon" />
              <h3>1:9</h3>
              <p>Mentor Ratio</p>
            </div>
            <div className="stats-box">
              <Compass size={24} className="box-icon" />
              <h3>30</h3>
              <p>Students per Section</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Items Grid */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-header text-center">
            <span>MODERN SPACES</span>
            <h2>Key Facilities At A Glance</h2>
            <div className="header-bar"></div>
          </div>
          <div className="facilities-grid">
            {infraItems.map((item, idx) => (
              <div key={idx} className="facility-card">
                <div className="facility-icon-row">
                  <div className="fac-icon-wrapper">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Virtual Tour Section */}
      <section className="virtual-tour-section">
        <div className="container">
          <div className="section-header text-center">
            <span>EXPLORE IN 360</span>
            <h2>Interactive Campus Showcase</h2>
            <div className="header-bar"></div>
          </div>
          <div className="tour-box">
            <div className="tour-nav">
              {Object.keys(tourZones).map((key) => (
                <button 
                  key={key}
                  className={`tour-tab-btn ${activeZone === key ? 'active' : ''}`}
                  onClick={() => setActiveZone(key)}
                >
                  {tourZones[key].name}
                </button>
              ))}
            </div>
            <div className="tour-display-panel">
              <div className="tour-image-container">
                <div 
                  className="tour-gradient-bg" 
                  style={{ 
                    background: tourZones[activeZone].gradient,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255, 255, 255, 0.15)',
                    transition: 'var(--transition-smooth)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={tourZones[activeZone].img} 
                    alt={tourZones[activeZone].name}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.5s ease',
                      zIndex: 2
                    }}
                    onError={(e) => {
                      e.target.style.opacity = '0';
                    }}
                  />
                  {tourZones[activeZone].icon}
                </div>
                <div className="tour-image-overlay">
                  <h4>{tourZones[activeZone].name}</h4>
                  <p>{tourZones[activeZone].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .infra-page {
          background-color: var(--secondary-beige);
        }

        .infra-header {
          position: relative;
          background: linear-gradient(rgba(74, 14, 23, 0.85), rgba(40, 6, 10, 0.95)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
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

        .infra-header h1 {
          color: var(--text-light);
          font-size: 3.6rem;
          font-family: var(--font-serif);
          margin-top: 10px;
        }

        .header-subtitle {
          font-size: 1.25rem;
          color: var(--accent-gold);
          font-family: var(--font-serif);
          font-style: italic;
          margin-top: 12px;
          opacity: 0.95;
        }

        .infra-badge {
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

        .infra-intro {
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

        .intro-stats-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stats-box {
          background: linear-gradient(135deg, rgba(122, 28, 46, 0.04) 0%, rgba(197, 168, 128, 0.08) 100%);
          padding: 24px 30px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.25);
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: var(--shadow-sm);
        }

        .box-icon {
          color: var(--primary-maroon);
        }

        .stats-box h3 {
          font-size: 1.8rem;
          color: var(--primary-maroon);
          margin-bottom: 2px;
          margin-top: 0;
        }

        .stats-box p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .facilities-section {
          padding: 100px 0;
          background-color: var(--secondary-beige);
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
          margin-top: 50px;
        }

        .facility-card {
          background-color: var(--bg-card);
          padding: 45px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }

        .facility-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-maroon);
        }

        .facility-icon-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .fac-icon-wrapper {
          color: var(--primary-maroon);
          background-color: var(--primary-maroon-light);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .facility-card h3 {
          font-size: 1.45rem;
          color: var(--primary-maroon);
          margin: 0;
        }

        .facility-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .intro-stats-panel {
            grid-template-columns: repeat(3, 1fr);
            display: grid;
          }
          .facilities-grid {
            grid-template-columns: 1fr;
          }
          .infra-header h1 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .intro-stats-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .infra-header {
            padding: 90px 0 70px 0;
          }
        }
        /* Tour Section Styling */
        .virtual-tour-section {
          padding: 100px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .tour-box {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          margin-top: 50px;
          align-items: start;
        }

        .tour-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .tour-tab-btn {
          background-color: var(--primary-maroon-light);
          border: 1px solid rgba(122, 28, 46, 0.15);
          color: var(--primary-maroon);
          padding: 16px 24px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.95rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .tour-tab-btn:hover, .tour-tab-btn.active {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-color: var(--primary-maroon);
          box-shadow: var(--shadow-sm);
        }

        .tour-display-panel {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .tour-image-container {
          position: relative;
          height: 400px;
          overflow: hidden;
        }

        .tour-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .tour-image-container:hover img {
          transform: scale(1.03);
        }

        .tour-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
          padding: 30px;
          color: var(--text-light);
          z-index: 5;
        }

        .tour-image-overlay h4 {
          font-size: 1.5rem;
          color: var(--accent-gold);
          margin-bottom: 8px;
          font-family: var(--font-serif);
        }

        .tour-image-overlay p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .tour-box {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
