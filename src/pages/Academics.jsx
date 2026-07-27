import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award, Compass, Search } from 'lucide-react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('junior');

  const divisions = {
    junior: {
      title: 'Junior School (Prep to Grade V)',
      tagline: 'Fostering discovery, creativity, and foundational confidence.',
      desc: 'The Junior School curriculum is designed to stimulate intellectual curiosity and basic skills. We emphasize experimental discovery, active play, self-expression, and fundamental concepts in reading, writing, mathematics, and environmental sciences. Subject specialists in art, music, physical education, and computers enrich the classrooms.',
      features: [
        'Integrated thematic curriculum maps',
        'Emphasis on visual arts and storytelling',
        'Early development of social-emotional skills',
        'Innovative maths lab play models'
      ]
    },
    middle: {
      title: 'Middle School (Grades VI to VIII)',
      tagline: 'Bridging concrete knowledge to analytical thinking.',
      desc: 'During the Middle School years, students are introduced to specialized subjects and formal scientific methods. The framework is structured to challenge learners to analyze concepts critically, build reasoned arguments, and develop research-oriented study habits.',
      features: [
        'Introduction to third languages (German, French, Sanskrit)',
        'Robust computer-programming and robotics tracks',
        'Structured inter-house debates and presentations',
        'Practical science laboratory projects'
      ]
    },
    senior: {
      title: 'Senior School (Grades IX to XII)',
      tagline: 'Academic rigorous streams preparing global pioneers.',
      desc: 'The Senior School follows the Central Board of Secondary Education (CBSE) syllabus, offering diverse academic stream configurations (Science, Commerce, Humanities). We prepare students for standard examinations while encouraging them to apply theoretical principles to real-world contexts through comprehensive internships and research programs.',
      features: [
        'Dedicated career counseling and university preparation cells',
        'Student-led societies (Robotics, Model UN, Poetry, Commerce)',
        'Advanced computer lab and research facilities',
        'Focus on peer leadership and community service'
      ]
    }
  };

  return (
    <div className="academics-page">
      {/* Header Banner */}
      <section className="academics-header">
        <div className="container text-center">
          <span className="academics-badge">CURRICULUM ARCHITECTURE</span>
          <h1>Academics at Vasant Valley</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Tabs Layout */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'junior' ? 'active' : ''}`}
              onClick={() => setActiveTab('junior')}
            >
              <Compass size={18} /> Junior School
            </button>
            <button 
              className={`tab-btn ${activeTab === 'middle' ? 'active' : ''}`}
              onClick={() => setActiveTab('middle')}
            >
              <BookOpen size={18} /> Middle School
            </button>
            <button 
              className={`tab-btn ${activeTab === 'senior' ? 'active' : ''}`}
              onClick={() => setActiveTab('senior')}
            >
              <GraduationCap size={18} /> Senior School
            </button>
          </div>

          <div className="tab-content-wrapper">
            <div className="tab-details">
              <h2>{divisions[activeTab].title}</h2>
              <p className="tab-tagline">{divisions[activeTab].tagline}</p>
              <p className="tab-desc">{divisions[activeTab].desc}</p>
              
              <div className="features-highlight">
                <h4>Key Highlights:</h4>
                <ul>
                  {divisions[activeTab].features.map((feature, idx) => (
                    <li key={idx}>⭐ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Academics Section */}
      <section className="beyond-academics">
        <div className="container">
          <div className="section-header text-center">
            <span>CO-CURRICULAR & SPHERE OF STUDY</span>
            <h2>Nurturing the Whole Child</h2>
            <div className="header-bar"></div>
          </div>

          <div className="beyond-grid">
            <div className="beyond-card">
              <div className="beyond-card-header">
                <h3>Visual & Performing Arts</h3>
              </div>
              <p>Specialized clubs for Hindustani and Western music, classical dance, pottery, sculpting, theater, and fine arts where students showcase annual theater productions.</p>
            </div>

            <div className="beyond-card">
              <div className="beyond-card-header">
                <h3>Sports & Athletics</h3>
              </div>
              <p>Excellent training infrastructure for basketball, soccer, tennis, athletics, table tennis, badminton, and squash, encouraging active tournament participation.</p>
            </div>

            <div className="beyond-card">
              <div className="beyond-card-header">
                <h3>Clubs & Publications</h3>
              </div>
              <p>Under-edited and produced entirely by students, 'The Vasant Valley Newsletter' and various club journals encourage journalistic flair and creative expression.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .academics-page {
          background-color: var(--secondary-beige);
        }

        .academics-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }

        .academics-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
          margin-top: 8px;
        }

        .academics-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }

        .tabs-section {
          padding: 80px 0;
        }

        .tabs-nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .tab-btn {
          background-color: var(--bg-pure);
          color: var(--text-dark);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 1rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(197, 168, 128, 0.2);
        }

        .tab-btn.active {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-color: var(--primary-maroon);
          box-shadow: var(--shadow-md);
        }

        .tab-content-wrapper {
          background-color: var(--bg-pure);
          padding: 50px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }

        .tab-details h2 {
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .tab-tagline {
          font-size: 1.1rem;
          color: var(--accent-gold-dark);
          font-weight: 500;
          margin-bottom: 24px;
        }

        .tab-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .features-highlight {
          background-color: var(--primary-maroon-light);
          padding: 24px 30px;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary-maroon);
        }

        .features-highlight h4 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .features-highlight ul {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .features-highlight li {
          font-size: 0.95rem;
          color: var(--text-dark);
          font-weight: 500;
        }

        .beyond-academics {
          padding: 80px 0;
          background-color: var(--bg-pure);
        }

        .beyond-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .beyond-card {
          background-color: var(--secondary-beige);
          padding: 30px;
          border-radius: var(--radius-md);
          border-top: 4px solid var(--accent-gold);
        }

        .beyond-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .beyond-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .tabs-nav {
            flex-direction: column;
            gap: 12px;
          }
          .tab-content-wrapper {
            padding: 30px 24px;
          }
          .features-highlight ul {
            grid-template-columns: 1fr;
          }
          .beyond-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
