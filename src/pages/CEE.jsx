import React from 'react';
import { BookOpen, Award, ShieldCheck } from 'lucide-react';

export default function CEE() {
  return (
    <div className="cee-page">
      <section className="cee-header">
        <div className="container text-center">
          <span className="cee-badge">TEACHER TRAINING & RESEARCH</span>
          <h1>Centre for Excellence in Education (CEE)</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="cee-body">
        <div className="container body-grid">
          <div className="cee-desc">
            <h2>Empowering Educators, Refining Pedagogy</h2>
            <p>
              The Vasant Valley Centre for Excellence in Education (CEE) is a research and training hub dedicated to improving teaching practices. CEE hosts regular national workshops, professional development programs, and certification courses in collaboration with leading educational experts.
            </p>
            <p>
              Our research focuses on innovative classroom methodologies, inclusive educational tools, digital resource integration, and modern evaluation systems.
            </p>
          </div>

          <div className="cee-programs">
            <h3>CEE Training Modules</h3>
            <div className="program-row">
              <div className="prog-icon"><Award size={20} /></div>
              <div>
                <h4>Digital Classroom Pedagogy</h4>
                <p>Enhancing teaching methods through interactive whiteboards, smart software, and digital assessment tools.</p>
              </div>
            </div>
            <div className="program-row">
              <div className="prog-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Inclusive Integration Framework</h4>
                <p>Providing specialized training for teachers to support students with learning difficulties and diverse cognitive styles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cee-page {
          background-color: var(--secondary-beige);
        }
        .cee-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .cee-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .cee-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .cee-body {
          padding: 80px 0;
        }
        .body-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }
        .cee-desc h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--primary-maroon);
        }
        .cee-desc p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .cee-programs {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cee-programs h3 {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: var(--primary-maroon);
        }
        .program-row {
          display: flex;
          gap: 16px;
        }
        .prog-icon {
          color: var(--primary-maroon);
          flex-shrink: 0;
          padding-top: 2px;
        }
        .program-row h4 {
          font-size: 1.05rem;
          color: var(--text-dark);
          margin-bottom: 4px;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .program-row p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media (max-width: 992px) {
          .body-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
}
