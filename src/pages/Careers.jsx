import React, { useState } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

export default function Careers() {
  const [applied, setApplied] = useState(false);
  const jobs = [
    { title: "Primary School Teacher (Math & Science)", dept: "Junior School", type: "Full-Time", experience: "3-5 Years" },
    { title: "Robotics & STEAM Mentor", dept: "Middle & Senior School", type: "Full-Time", experience: "2+ Years" },
    { title: "Student Welfare Counselor", dept: "SEN Support Cell", type: "Full-Time", experience: "5+ Years (PG in Psychology)" }
  ];

  return (
    <div className="careers-page">
      <section className="careers-header">
        <div className="container text-center">
          <span className="careers-badge">JOIN THE FACULTY</span>
          <h1>Careers at Vasant Valley</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="careers-body">
        <div className="container body-grid">
          <div className="careers-list">
            <h2>Current Job Openings</h2>
            <p className="intro-text">We look for passionate teachers, mentors, and administrators who love creating dynamic, child-centric environments.</p>
            <div className="jobs-wrapper">
              {jobs.map((job, idx) => (
                <div key={idx} className="job-card">
                  <div className="job-meta">
                    <span className="job-dept">{job.dept}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="job-exp">Required Experience: <strong>{job.experience}</strong></p>
                  <button className="apply-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                    Apply Online
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="apply-form-wrapper">
            <h3>Online Job Application</h3>
            <p>Please upload your details and CV here. Our recruitment team will review your application.</p>
            {applied ? (
              <div className="success-box">
                <CheckCircle size={40} className="success-icon" />
                <h4>Application Logged!</h4>
                <p>Thank you. Your resume profile has been safely saved. We will contact you if your profile matches our requirements.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="apply-form">
                <div className="form-group">
                  <label htmlFor="teacherName">Full Name *</label>
                  <input type="text" id="teacherName" required placeholder="e.g. Meenakshi Iyer" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="teacherEmail">Email ID *</label>
                    <input type="email" id="teacherEmail" required placeholder="e.g. meenakshi@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teacherPhone">Phone *</label>
                    <input type="tel" id="teacherPhone" required placeholder="e.g. 9876543210" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="teacherRole">Position Applied For *</label>
                  <select id="teacherRole" required>
                    <option value="junior">Primary School Teacher</option>
                    <option value="robotics">Robotics Mentor</option>
                    <option value="counselor">Student Counselor</option>
                    <option value="admin">Administrative Roles</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="teacherCv">Attach CV (Link / Drive URL) *</label>
                  <input type="url" id="teacherCv" required placeholder="https://drive.google.com/..." />
                </div>
                <button type="submit" className="form-submit-btn">Submit Resume Profile</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .careers-page {
          background-color: var(--secondary-beige);
        }
        .careers-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .careers-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .careers-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .careers-body {
          padding: 80px 0;
        }
        .body-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: start;
        }
        .careers-list h2 {
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: var(--primary-maroon);
        }
        .intro-text {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 30px;
        }
        .jobs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .job-card {
          background-color: var(--bg-card);
          padding: 24px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-sm);
        }
        .job-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .job-dept {
          background-color: var(--primary-maroon-light);
          color: var(--primary-maroon);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .job-type {
          background-color: #e2e8f0;
          color: #4a5568;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .job-card h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
          color: var(--text-dark);
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .job-exp {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .apply-btn {
          color: var(--primary-maroon);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .apply-btn:hover {
          text-decoration: underline;
        }
        .apply-form-wrapper {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }
        .apply-form-wrapper h3 {
          font-size: 1.4rem;
          margin-bottom: 4px;
        }
        .apply-form-wrapper p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .apply-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        input, select {
          padding: 10px 14px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          background-color: var(--bg-pure);
        }
        input:focus, select:focus {
          outline: none;
          border-color: var(--primary-maroon);
          box-shadow: 0 0 0 3px rgba(122, 28, 46, 0.1);
        }
        .form-submit-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .form-submit-btn:hover {
          background-color: var(--primary-maroon-hover);
        }
        .success-box {
          text-align: center;
          padding: 30px 10px;
        }
        .success-icon {
          color: #3b5a41;
          margin-bottom: 16px;
        }
        .success-box h4 {
          color: #3b5a41;
          margin-bottom: 10px;
        }
        @media (max-width: 992px) {
          .body-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
