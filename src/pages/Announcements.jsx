import React from 'react';
import { Calendar, FileText, Bell } from 'lucide-react';

export default function Announcements() {
  const notices = [
    { date: "July 27, 2026", cat: "Admissions", title: "Nursery to Grade IX Registration Guidelines AY 2026-27", link: "#" },
    { date: "July 24, 2026", cat: "Academics", title: "Cambridge IGCSE & A-Levels Term-1 Exam Schedule", link: "#" },
    { date: "July 20, 2026", cat: "Events", title: "Annual Parent-Teacher Consultation Slots Booking Link", link: "#" },
    { date: "July 15, 2026", cat: "Circular", title: "Revised Bus Routes & Transport Guidelines South Delhi", link: "#" },
    { date: "July 10, 2026", cat: "Sports", title: "Inter-House Swimming Championship Registration Form", link: "#" },
    { date: "July 05, 2026", cat: "CEE", title: "Teacher Training Workshop: Digital Pedagogy Certificate", link: "#" }
  ];

  return (
    <div className="announcements-page">
      <section className="ann-header">
        <div className="container text-center">
          <span className="ann-badge">OFFICIAL CIRCULARS</span>
          <h1>Announcements</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="ann-body">
        <div className="container">
          <div className="notices-list-wrapper">
            {notices.map((notice, idx) => (
              <div key={idx} className="notice-row-card">
                <div className="date-badge">
                  <Calendar size={16} />
                  <span>{notice.date}</span>
                </div>
                <div className="notice-main">
                  <span className={`cat-label ${notice.cat.toLowerCase()}`}>{notice.cat}</span>
                  <h3>{notice.title}</h3>
                </div>
                <button className="download-btn" onClick={() => alert(`Downloading circular: ${notice.title}`)}>
                  <FileText size={18} /> View PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .announcements-page {
          background-color: var(--secondary-beige);
        }
        .ann-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .ann-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .ann-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .ann-body {
          padding: 80px 0;
        }
        .notices-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .notice-row-card {
          background-color: var(--bg-card);
          padding: 24px 30px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .notice-row-card:hover {
          transform: translateY(-2px);
          border-color: var(--primary-maroon);
          box-shadow: var(--shadow-md);
        }
        .date-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-gold-dark);
          font-size: 0.85rem;
          font-weight: 600;
          min-width: 140px;
        }
        .notice-main {
          flex-grow: 1;
          padding: 0 30px;
        }
        .cat-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--text-light);
          background-color: var(--primary-maroon);
        }
        .cat-label.admissions { background-color: #7A1C2E; }
        .cat-label.academics { background-color: #3b5a41; }
        .cat-label.events { background-color: var(--accent-gold-dark); }
        .cat-label.circular { background-color: #4a5568; }
        .notice-main h3 {
          font-size: 1.15rem;
          margin-top: 6px;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .download-btn {
          color: var(--primary-maroon);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .download-btn:hover {
          color: var(--accent-gold-dark);
        }
        @media (max-width: 768px) {
          .notice-row-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .notice-main {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
