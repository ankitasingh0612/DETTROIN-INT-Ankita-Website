import React from 'react';
import { Shield, Users, Award, BookOpen, Clock, Activity } from 'lucide-react';

export default function SchoolProfile() {
  const profileDetails = [
    { title: "Affiliation", value: "CBSE (Central Board of Secondary Education)", icon: <Shield size={20} /> },
    { title: "Student-Teacher Ratio", value: "1:9 (Personalized mentoring)", icon: <Users size={20} /> },
    { title: "Total Student Strength", value: "1,300+ Students", icon: <Users size={20} /> },
    { title: "Year Group Structure", value: "Prep to Grade XII (divided into 3 sections per class)", icon: <BookOpen size={20} /> },
    { title: "Co-curricular Clubs", value: "35+ Active student-led societies", icon: <Activity size={20} /> },
    { title: "Sports Offered", value: "Athletics, Basketball, Swimming, Squash, Tennis", icon: <Award size={20} /> }
  ];

  return (
    <div className="profile-page">
      {/* Header Banner */}
      <section className="profile-header">
        <div className="container text-center">
          <span className="profile-badge">INSTITUTIONAL FACT SHEET</span>
          <h1>School Profile</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Profile Details List */}
      <section className="profile-body">
        <div className="container">
          <div className="section-header text-center">
            <span>KEY STATISTICS</span>
            <h2>Vasant Valley School Profile</h2>
            <div className="header-bar"></div>
          </div>
          <div className="profile-details-grid">
            {profileDetails.map((detail, idx) => (
              <div key={idx} className="detail-card">
                <div className="detail-icon-wrapper">{detail.icon}</div>
                <div className="detail-info">
                  <h4>{detail.title}</h4>
                  <p>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .profile-page {
          background-color: var(--secondary-beige);
        }
        .profile-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .profile-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .profile-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .profile-body {
          padding: 80px 0;
        }
        .profile-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .detail-card {
          background-color: var(--bg-card);
          padding: 30px;
          border-radius: var(--radius-md);
          display: flex;
          gap: 20px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }
        .detail-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-maroon);
        }
        .detail-icon-wrapper {
          color: var(--primary-maroon);
          background-color: var(--primary-maroon-light);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .detail-info h4 {
          font-size: 1.15rem;
          color: var(--primary-maroon);
          margin-bottom: 6px;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .detail-info p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .profile-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
