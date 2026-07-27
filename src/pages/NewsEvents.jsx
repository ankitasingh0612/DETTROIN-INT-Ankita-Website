import React, { useState } from 'react';
import { Calendar, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function NewsEvents() {
  const [activeDay, setActiveDay] = useState(15);

  const calendarEvents = {
    12: { title: "Inter-School English Debate Tourney", time: "09:00 AM", location: "Auditorium", desc: "Vasant Valley senior debating society hosts 12 top schools for the annual invitational debate tournament." },
    15: { title: "Annual Science & Tech Symposium 2026", time: "10:00 AM", location: "Physics & Chemistry Labs", desc: "Interactive student exhibitions, live robotics matches, and keynote address by space scientist Dr. Alok Sen." },
    23: { title: "Mid-Term Recess Holiday Commences", time: "Full-Day", location: "Campus-wide", desc: "All academic classes close for the seasonal mid-term recess. Administrative departments remain open." },
    30: { title: "Inter-House Sports Championship Finals", time: "08:30 AM", location: "Athletics Field", desc: "Final matches for football, swimming, and tennis with a medal ceremony and parent invitations." }
  };
  const events = [
    {
      title: "Inter-School Debate Championship 2026",
      date: "July 26, 2026",
      desc: "Our senior debating society won the prestigious 1st prize trophy in the Delhi Invitational Debate Tournament.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Robotics Team Qualifies for Nationals",
      date: "July 18, 2026",
      desc: "Vasant Valley robotics club 'RoboQuest' qualified for the national robotics championships in Bengaluru.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Annual Creative Arts Festival 'Srijan'",
      date: "July 08, 2026",
      desc: "Students showcased stunning pottery, fine art canvas works, and classical theater acts during the week-long gala.",
      img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="news-page">
      <section className="news-header">
        <div className="container text-center">
          <span className="news-badge">LATEST HAPPENINGS</span>
          <h1>News & Events</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="news-body">
        <div className="container news-grid">
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              <div className="event-img-wrapper">
                <img src={event.img} alt={event.title} />
              </div>
              <div className="event-details">
                <div className="event-date">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
                <button className="read-more" onClick={() => alert(`Opening story details: ${event.title}`)}>
                  Read Full Story <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Academic Event Calendar Section */}
      <section className="calendar-section">
        <div className="container">
          <div className="section-header text-center">
            <span>PLANNER & SCHEDULES</span>
            <h2>Academic Events Calendar</h2>
            <div className="header-bar"></div>
          </div>
          <div className="calendar-layout-box">
            {/* Calendar Grid Wrapper */}
            <div className="calendar-grid-card">
              <div className="calendar-month-title">
                <h3>October 2026</h3>
              </div>
              <div className="calendar-days-header">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
              <div className="calendar-days-grid">
                {/* 3 blank cells for Oct 2026 which starts on Thursday */}
                <div className="day-cell empty"></div>
                <div className="day-cell empty"></div>
                <div className="day-cell empty"></div>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = !!calendarEvents[day];
                  return (
                    <button
                      key={day}
                      className={`day-cell ${hasEvent ? 'has-event' : ''} ${activeDay === day ? 'active' : ''}`}
                      onClick={() => setActiveDay(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Event Details Panel */}
            <div className="calendar-details-card">
              {calendarEvents[activeDay] ? (
                <div className="event-info-box animate-fade-in">
                  <span className="event-tag">HIGHLIGHTED EVENT</span>
                  <h3>{calendarEvents[activeDay].title}</h3>
                  <div className="event-meta-row">
                    <div className="meta-item"><Clock size={16} /> <span>{calendarEvents[activeDay].time}</span></div>
                    <div className="meta-item"><MapPin size={16} /> <span>{calendarEvents[activeDay].location}</span></div>
                  </div>
                  <p className="event-desc-txt">{calendarEvents[activeDay].desc}</p>
                </div>
              ) : (
                <div className="no-event-box">
                  <Calendar size={48} className="no-event-icon" />
                  <h4>No Scheduled Events</h4>
                  <p>Select any highlighted gold numbered day cell to review that date's academic highlights.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .news-page {
          background-color: var(--secondary-beige);
        }
        .news-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .news-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .news-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .news-body {
          padding: 80px 0;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .event-card {
          background-color: var(--bg-card);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-maroon);
        }
        .event-img-wrapper {
          height: 200px;
          overflow: hidden;
        }
        .event-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .event-card:hover .event-img-wrapper img {
          transform: scale(1.08);
        }
        .event-details {
          padding: 24px;
        }
        .event-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--accent-gold-dark);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .event-details h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-weight: 600;
          line-height: 1.3;
        }
        .event-details p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .read-more {
          color: var(--primary-maroon);
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .read-more:hover {
          color: var(--accent-gold-dark);
        }
        @media (max-width: 992px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
        }
        /* Calendar Section Styles */
        .calendar-section {
          padding: 85px 0;
          background-color: var(--secondary-beige);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .calendar-layout-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          margin-top: 40px;
        }

        .calendar-grid-card {
          background-color: var(--bg-card);
          padding: 30px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-sm);
        }

        .calendar-month-title h3 {
          font-size: 1.4rem;
          color: var(--primary-maroon);
          margin-bottom: 20px;
          font-family: var(--font-serif);
          text-align: center;
        }

        .calendar-days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .calendar-days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .day-cell {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-pure);
          border: 1px solid rgba(197, 168, 128, 0.1);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .day-cell:hover {
          border-color: var(--primary-maroon);
          background-color: var(--primary-maroon-light);
        }

        .day-cell.empty {
          background-color: transparent;
          border: none;
          cursor: default;
        }

        .day-cell.has-event {
          border: 2px solid var(--accent-gold);
          color: var(--primary-maroon);
          font-weight: 800;
        }

        .day-cell.active {
          background-color: var(--primary-maroon) !important;
          color: var(--text-light) !important;
          border-color: var(--primary-maroon) !important;
        }

        .calendar-details-card {
          background-color: var(--bg-card);
          padding: 30px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
        }

        .event-info-box {
          width: 100%;
        }

        .event-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .event-info-box h3 {
          font-size: 1.5rem;
          color: var(--primary-maroon);
          margin: 10px 0 16px 0;
          font-family: var(--font-serif);
          line-height: 1.3;
        }

        .event-meta-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
          padding-bottom: 16px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .event-desc-txt {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .no-event-box {
          text-align: center;
          color: var(--text-muted);
          max-width: 250px;
        }

        .no-event-icon {
          color: rgba(197, 168, 128, 0.3);
          margin-bottom: 16px;
        }

        .no-event-box h4 {
          font-size: 1.15rem;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .no-event-box p {
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .calendar-layout-box {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
