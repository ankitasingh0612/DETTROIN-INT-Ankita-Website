import React from 'react';
import { Clock, BookOpen, Coffee, Sunrise, Sunset } from 'lucide-react';

export default function DayInSchool() {
  const schedule = [
    { time: "08:00 AM", event: "Morning Assembly & Mindfulness", icon: <Sunrise size={18} />, desc: "Students gather for corporate prayers, news updates, student speeches, and a 2-minute silent meditation." },
    { time: "08:20 AM - 10:20 AM", event: "Academic Block I", icon: <BookOpen size={18} />, desc: "Core subjects focusing on analytical exploration, mathematical theories, or scientific concepts." },
    { time: "10:20 AM - 10:50 AM", event: "Recess / Breakfast break", icon: <Coffee size={18} />, desc: "Healthy catered breakfast in the dining spaces or school canteen, encouraging casual social interaction." },
    { time: "10:50 AM - 12:50 PM", event: "Academic Block II", icon: <BookOpen size={18} />, desc: "Language arts, social sciences, or computational robotics workshops." },
    { time: "12:50 PM - 01:50 PM", event: "Co-curricular & Arts Specialization", icon: <Clock size={18} />, desc: "Elective hour focusing on student choice: drama rehearsals, visual arts, music, or sports coaching." },
    { time: "01:50 PM - 02:45 PM", event: "Academic Reflection & Check-out", icon: <BookOpen size={18} />, desc: "Individual worksheet feedback and academic review tasks before dismissal." },
    { time: "02:45 PM", event: "School Dispersal", icon: <Sunset size={18} />, desc: "Students board AC school buses, marking the completion of a rich school day." }
  ];

  return (
    <div className="day-in-school-page">
      {/* Header Banner */}
      <section className="day-header">
        <div className="container text-center">
          <span className="day-badge">CAMPUS ROUTINE</span>
          <h1>A Day in School</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Routine list */}
      <section className="routine-section">
        <div className="container">
          <div className="section-header text-center">
            <span>DAILY TIMELINE</span>
            <h2>Vasant Valley Daily Schedule</h2>
            <div className="header-bar"></div>
          </div>
          <div className="timeline-wrapper">
            {schedule.map((item, idx) => (
              <div key={idx} className="timeline-block">
                <div className="timeline-time-badge">{item.time}</div>
                <div className="timeline-content-card">
                  <div className="title-row">
                    {item.icon}
                    <h3>{item.event}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .day-in-school-page {
          background-color: var(--secondary-beige);
        }

        .day-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }

        .day-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
          margin-top: 8px;
        }

        .day-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }

        .routine-section {
          padding: 80px 0;
        }

        .timeline-wrapper {
          max-width: 800px;
          margin: 40px auto 0 auto;
          position: relative;
        }

        .timeline-wrapper::before {
          content: '';
          position: absolute;
          left: 140px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: rgba(197, 168, 128, 0.3);
        }

        .timeline-block {
          display: flex;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-block:last-child {
          margin-bottom: 0;
        }

        .timeline-time-badge {
          width: 120px;
          font-weight: 700;
          color: var(--primary-maroon);
          font-size: 0.95rem;
          padding-top: 12px;
          text-align: right;
          margin-right: 40px;
        }

        .timeline-content-card {
          flex-grow: 1;
          background-color: var(--bg-card);
          padding: 24px 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          position: relative;
        }

        .timeline-content-card::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 18px;
          width: 14px;
          height: 14px;
          background-color: var(--bg-card);
          border-left: 1px solid rgba(197, 168, 128, 0.15);
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
          transform: rotate(45deg);
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--primary-maroon);
          margin-bottom: 10px;
        }

        .title-row h3 {
          font-size: 1.2rem;
          margin: 0;
        }

        .timeline-content-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .timeline-wrapper::before {
            left: 20px;
          }
          .timeline-block {
            flex-direction: column;
            gap: 10px;
          }
          .timeline-time-badge {
            width: fit-content;
            text-align: left;
            margin-right: 0;
            padding-left: 45px;
            padding-top: 0;
          }
          .timeline-content-card {
            margin-left: 45px;
          }
          .timeline-content-card::before {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
