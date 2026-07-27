import React, { useState } from 'react';
import { Shield, BookOpen, Key, Mail, Globe, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Login() {
  const [activeForm, setActiveForm] = useState(null); // { label, type }
  const [successMsg, setSuccessMsg] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardRole, setDashboardRole] = useState('Student');
  const [dashboardType, setDashboardType] = useState('student-erp');
  const [selectedEmail, setSelectedEmail] = useState(0);

  const emails = [
    { from: "Principal's Office", subject: "Syllabus Review & Lesson Planners", date: "09:30 AM", body: "Dear Anjali, please submit the revised physics practical syllabus for Class IX & X by Friday. Ensure alignment with the new CBSE guidelines." },
    { from: "Admissions Department", subject: "Inquiry on Nursery Point Guidelines", date: "Yesterday", body: "Hello Mrs. Sen, a parent is asking about science specialization weightages in the senior wing points system. Please review." },
    { from: "IT Helpdesk", subject: "System Upgrades & Wi-Fi Access", date: "25 Jul", body: "Please note that the staffroom Wi-Fi router will undergo maintenance on Sunday from 09:00 AM to 01:00 PM." }
  ];

  const handlePortalSubmit = (e, link) => {
    e.preventDefault();
    setSuccessMsg(`${link.label} login successfully authenticated! Launching Dashboard...`);
    const role = link.type.startsWith('teacher') ? 'Teacher' : link.type.startsWith('student') ? 'Student' : 'Parent';
    setDashboardRole(role);
    setDashboardType(link.type);
    setTimeout(() => {
      setSuccessMsg('');
      setActiveForm(null);
      setShowDashboard(true);
    }, 2000);
  };

  const portalSections = [
    {
      title: "Teacher Login",
      description: "Access academic registries, lesson planners, and class schedules.",
      links: [
        { label: "Faculty ERP", type: "teacher-erp" },
        { label: "Staff Mail", type: "teacher-email" },
        { label: "Google Hub", type: "teacher-google" }
      ]
    },
    {
      title: "Student Login",
      description: "Access assignments, grades repository, and digital learning modules.",
      links: [
        { label: "Student ERP", type: "student-erp" },
        { label: "G-Classroom", type: "student-google" }
      ]
    },
    {
      title: "Parent Login",
      description: "Monitor child progress reports, circulars, and make fee payments.",
      links: [
        { label: "Parent Portal", type: "parent-erp" },
        { label: "Fee Desk", type: "parent-fee" }
      ]
    }
  ];

  if (showDashboard) {
    return (
      <div className="dashboard-view-container animate-fade-in">
        {/* Dashboard Header */}
        <section className="db-header">
          <div className="container db-header-flex">
            <div>
              <span className="db-welcome">WELCOME BACK,</span>
              <h2>{dashboardRole} Portal</h2>
              {dashboardRole === 'Teacher' && (
                <p className="db-sub">Mrs. Anjali Sen • HOD Science • ID: VVS-T-789</p>
              )}
              {dashboardRole === 'Student' && (
                <p className="db-sub">Aarav Sharma • Class IX-A • Enrollment: VVS-2024-098</p>
              )}
              {dashboardRole === 'Parent' && (
                <p className="db-sub">Mr. Rahul Sharma • Parent of Aarav Sharma (Class IX-A)</p>
              )}
            </div>
            <button className="logout-btn" onClick={() => setShowDashboard(false)}>Logout Portal</button>
          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="db-grid-section">
          <div className="container">
            {/* 1. MOCK MAIL INBOX VIEW */}
            {dashboardType === 'teacher-email' && (
              <div className="db-mail-layout" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '30px', margin: '0' }}>
                <div className="db-card mail-list-pane" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <h3>Outlook Staff Inbox</h3>
                  {emails.map((email, index) => (
                    <div 
                      key={index} 
                      className={`mail-item-card ${selectedEmail === index ? 'active' : ''}`}
                      onClick={() => setSelectedEmail(index)}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(197, 168, 128, 0.15)',
                        backgroundColor: selectedEmail === index ? 'var(--primary-maroon-light)' : 'var(--bg-pure)',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-gold-dark)', marginBottom: '6px' }}>
                        <span>{email.from}</span>
                        <span>{email.date}</span>
                      </div>
                      <h4 style={{ fontSize: '0.9rem', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>{email.subject}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email.body}</p>
                    </div>
                  ))}
                </div>
                <div className="db-card mail-detail-pane">
                  <h3>Message Reader</h3>
                  <div style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.15)', paddingBottom: '16px', marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-maroon)', margin: '0 0 6px 0' }}>{emails[selectedEmail].subject}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>From: <strong>{emails[selectedEmail].from}</strong> • Received: {emails[selectedEmail].date}</p>
                  </div>
                  <p style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{emails[selectedEmail].body}</p>
                </div>
              </div>
            )}

            {/* 2. GOOGLE CLASSROOM WORKSPACE VIEW */}
            {(dashboardType === 'teacher-google' || dashboardType === 'student-google') && (
              <div style={{ margin: '0' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-maroon)', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Google Workspace Hub</h3>
                <div className="db-grid">
                  <div className="db-card">
                    <h3>Physics IX Classroom</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Syllabus, homework assignments folders, and dynamic reading logs.</p>
                    <button className="pay-fee-btn" onClick={() => alert("Redirecting to shared G-Drive folder for Physics IX...")} style={{ backgroundColor: 'var(--primary-maroon)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Open G-Drive Folder</button>
                  </div>
                  <div className="db-card">
                    <h3>Robotics Lab Elective</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Shared blueprints repository, sensor calibration code sheets, and project logs.</p>
                    <button className="pay-fee-btn" onClick={() => alert("Opening Shared Robotics Lab G-Drive...")} style={{ backgroundColor: 'var(--primary-maroon)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Open G-Drive Folder</button>
                  </div>
                  <div className="db-card">
                    <h3>Science Symposium Shared Sheets</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>National invitational school entry registration lists, and coordination schedules.</p>
                    <button className="pay-fee-btn" onClick={() => alert("Loading Science Symposium Shared Google Sheet...")} style={{ backgroundColor: 'var(--primary-maroon)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Open Shared Sheet</button>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ONLINE FEE SETTLEMENT DESK VIEW */}
            {dashboardType === 'parent-fee' && (
              <div style={{ margin: '0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="db-card">
                  <h3 style={{ borderBottom: '1px solid rgba(197, 168, 128, 0.15)', paddingBottom: '16px' }}>Fee Invoice Settlement Desk</h3>
                  <div className="fee-breakdown" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div className="fee-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Invoice Number:</span><strong>VVS-2026-T2-089</strong>
                    </div>
                    <div className="fee-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Due Date:</span><strong>15th August 2026</strong>
                    </div>
                    <div className="fee-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Base Academic Tuition (Term-2):</span><strong>₹90,000</strong>
                    </div>
                    <div className="fee-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Air-Conditioned Bus Transport:</span><strong>₹15,000</strong>
                    </div>
                    <div style={{ height: '1px', backgroundColor: 'rgba(197, 168, 128, 0.2)' }}></div>
                    <div className="fee-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-maroon)' }}>
                      <span>Total Term Fee:</span><span>₹1,05,000</span>
                    </div>
                  </div>
                  <button 
                    className="pay-fee-btn" 
                    onClick={() => alert("Term-2 Fees of ₹1,05,000 paid successfully! Receipt has been sent to your registered email.")}
                    style={{
                      backgroundColor: 'var(--primary-maroon)',
                      color: 'var(--text-light)',
                      border: 'none',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: '700',
                      cursor: 'pointer',
                      width: '100%',
                      marginTop: '30px',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    Proceed to Bank Payment Secure Portal
                  </button>
                </div>
              </div>
            )}

            {/* 4. CLASSIC ERP DASHBOARD VIEWS */}
            {(dashboardType === 'teacher-erp' || dashboardType === 'student-erp' || dashboardType === 'parent-erp') && (
              <div className="db-grid">
                {/* TEACHER ERP VIEW */}
                {dashboardRole === 'Teacher' && (
                  <>
                    <div className="db-card info-kpi-card">
                      <h3>Academic Registry</h3>
                      <div className="kpi-score">4 / 5</div>
                      <p>Lessons completed today. <strong>1 session left.</strong></p>
                      <div className="schedule-row" style={{ marginTop: '20px', borderTop: '1px solid rgba(197, 168, 128, 0.2)', paddingTop: '15px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>NEXT CLASS</span>
                        <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem', color: 'var(--text-dark)' }}>Class IX-A (Physics Practical) • 10:45 AM</p>
                      </div>
                    </div>

                    <div className="db-card grades-card">
                      <h3>Task Queue</h3>
                      <div className="grades-stack">
                        <div className="grade-item"><span>Grade Class X Science papers</span><strong style={{ color: 'var(--primary-maroon)' }}>24 Pending</strong></div>
                        <div className="grade-item"><span>Submit Term syllabus outline</span><strong>Completed</strong></div>
                        <div className="grade-item"><span>Update labs inventory register</span><strong style={{ color: 'var(--primary-maroon)' }}>Urgent</strong></div>
                      </div>
                    </div>

                    <div className="db-card circulars-card">
                      <h3>Staff Circulars</h3>
                      <ul className="db-circulars-list">
                        <li>
                          <span>July 27, 2026</span>
                          <p>Science symposium coordinator planning meet at 03:00 PM today.</p>
                        </li>
                        <li>
                          <span>July 25, 2026</span>
                          <p>New CBSE practical guidelines document updated in cabinet.</p>
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {/* STUDENT ERP VIEW */}
                {dashboardRole === 'Student' && (
                  <>
                    <div className="db-card attendance-card">
                      <h3>Attendance Status</h3>
                      <div className="attendance-circle">
                        <span className="att-value">94%</span>
                      </div>
                      <p>Optimum threshold status: <strong>Excellent</strong></p>
                    </div>

                    <div className="db-card grades-card">
                      <h3>My Grades (Term-1)</h3>
                      <div className="grades-stack">
                        <div className="grade-item"><span>Mathematics</span><strong>A+</strong></div>
                        <div className="grade-item"><span>Science Theory</span><strong>A</strong></div>
                        <div className="grade-item"><span>English Literature</span><strong>A</strong></div>
                        <div className="grade-item"><span>Robotics Elective</span><strong>O (Outstanding)</strong></div>
                      </div>
                    </div>

                    <div className="db-card circulars-card">
                      <h3>Student Announcements</h3>
                      <ul className="db-circulars-list">
                        <li>
                          <span>July 27, 2026</span>
                          <p>Revision of Bus Route 14 South Delhi departures.</p>
                        </li>
                        <li>
                          <span>July 24, 2026</span>
                          <p>Science & Tech Symposium registrations close tomorrow.</p>
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {/* PARENT ERP VIEW */}
                {dashboardRole === 'Parent' && (
                  <>
                    <div className="db-card payment-status-card">
                      <h3>Fee Invoice Status</h3>
                      <div className="fee-amount" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-maroon)', margin: '15px 0' }}>₹1,05,000</div>
                      <p style={{ marginBottom: '20px' }}>Term-2 Academic Fee invoice: <strong style={{ color: 'var(--accent-gold-dark)' }}>Pending</strong></p>
                      <button 
                        className="pay-fee-btn" 
                        onClick={() => alert("Term-2 Fees of ₹1,05,000 paid successfully! Receipt has been sent to your registered email.")}
                        style={{
                          backgroundColor: 'var(--primary-maroon)',
                          color: 'var(--text-light)',
                          border: 'none',
                          padding: '12px 20px',
                          borderRadius: 'var(--radius-sm)',
                          fontWeight: '700',
                          cursor: 'pointer',
                          width: '100%',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        Pay Term-2 Fee Online
                      </button>
                    </div>

                    <div className="db-card feedback-card">
                      <h3>Teacher Feedback Review</h3>
                      <div className="feedback-content" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        <p>"Aarav has shown outstanding commitment in physics labs and robotics initiatives. He continues to excel in team collaboration projects."</p>
                        <span style={{ display: 'block', marginTop: '10px', fontStyle: 'italic', color: 'var(--accent-gold-dark)', fontWeight: '600' }}>— Mrs. Anjali Sen (Class Teacher)</span>
                      </div>
                    </div>

                    <div className="db-card circulars-card">
                      <h3>Parent Circulars</h3>
                      <ul className="db-circulars-list">
                        <li>
                          <span>July 27, 2026</span>
                          <p>Scheduled Parent-Teacher Meeting (PTM) slots selection is live.</p>
                        </li>
                        <li>
                          <span>July 20, 2026</span>
                          <p>Immunization & immunization guidelines compliance check instructions.</p>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        <style>{`
          .dashboard-view-container {
            background-color: var(--secondary-beige);
            min-height: 80vh;
          }
          .db-header {
            background-color: var(--primary-maroon);
            color: var(--text-light);
            padding: 40px 0;
            border-bottom: 2px solid var(--accent-gold);
          }
          .db-header-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .db-welcome {
            font-size: 0.8rem;
            letter-spacing: 2px;
            font-weight: 700;
            color: var(--accent-gold);
          }
          .db-header h2 {
            font-size: 2rem;
            margin: 4px 0;
            color: var(--text-light);
          }
          .db-sub {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
          }
          .logout-btn {
            background-color: var(--accent-gold);
            color: var(--primary-maroon);
            font-weight: 700;
            border: none;
            padding: 10px 20px;
            border-radius: var(--radius-sm);
            cursor: pointer;
            transition: var(--transition-fast);
          }
          .logout-btn:hover {
            background-color: var(--text-light);
          }
          .db-grid-section {
            padding: 60px 0;
          }
          .db-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          .db-card {
            background-color: var(--bg-card);
            padding: 35px;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(197, 168, 128, 0.15);
            box-shadow: var(--shadow-sm);
          }
          .db-card h3 {
            font-size: 1.25rem;
            color: var(--primary-maroon);
            margin-bottom: 20px;
            font-family: var(--font-serif);
          }
          .attendance-card {
            text-align: center;
          }
          .attendance-circle {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 8px solid var(--accent-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
          }
          .att-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-maroon);
          }
          .grades-stack {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .grade-item {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(197, 168, 128, 0.15);
            padding-bottom: 8px;
            font-size: 0.95rem;
          }
          .db-circulars-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .db-circulars-list li span {
            font-size: 0.75rem;
            color: var(--accent-gold-dark);
            font-weight: 700;
          }
          .db-circulars-list li p {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-top: 4px;
          }
          @media (max-width: 992px) {
            .db-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="login-portal-page animate-fade-in">
      {/* Header Banner */}
      <section className="login-banner">
        <div className="container text-center">
          <span className="login-badge">SECURE GATEWAY</span>
          <h1>School Portals</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      {/* Portal Category Cards */}
      <section className="portal-selector-section">
        <div className="container">
          <div className="portal-columns-grid">
            {portalSections.map((sec, idx) => (
              <div key={idx} className="portal-column-card">
                <h3>{sec.title}</h3>
                <p className="portal-card-desc">{sec.description}</p>
                <div className="portal-links-stack">
                  {sec.links.map((link, lIdx) => (
                    <button 
                      key={lIdx} 
                      className="portal-action-btn"
                      onClick={() => setActiveForm(link)}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Login Form Overlay */}
      {activeForm && (
        <div className="login-form-overlay">
          <div className="login-form-card animate-zoom-in">
            <button className="close-form-btn" onClick={() => setActiveForm(null)}>&times;</button>
            
            {successMsg ? (
              <div className="success-notification">
                <CheckCircle size={48} className="success-icon" />
                <h4>Access Granted</h4>
                <p>{successMsg}</p>
              </div>
            ) : (
              <form onSubmit={(e) => handlePortalSubmit(e, activeForm)} className="portal-login-form">
                <div className="form-header">
                  <Lock size={32} className="lock-icon" />
                  <h3>{activeForm.label}</h3>
                  <p>Secure authentication gateway for Vasant Valley Portals.</p>
                </div>
                <div className="form-group">
                  <label htmlFor="portal-username">Enrollment ID / Email Address *</label>
                  <input type="text" id="portal-username" required placeholder="e.g. vvs.user@vasantvalley.edu.in" />
                </div>
                <div className="form-group">
                  <label htmlFor="portal-password">Password *</label>
                  <input type="password" id="portal-password" required placeholder="••••••••" />
                </div>
                <button type="submit" className="portal-submit-btn">Authorize Session</button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .login-portal-page {
          background-color: var(--secondary-beige);
          min-height: 80vh;
        }
        .login-banner {
          background: linear-gradient(rgba(74, 14, 23, 0.85), rgba(40, 6, 10, 0.95)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
          text-align: center;
        }
        .login-banner h1 {
          color: var(--text-light);
          font-size: 3rem;
          font-family: var(--font-serif);
        }
        .login-badge {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .portal-selector-section {
          padding: 80px 0;
        }
        .portal-columns-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }
        .portal-column-card {
          background-color: var(--bg-card);
          padding: 40px 30px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 168, 128, 0.15);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }
        .portal-column-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-maroon);
        }
        .portal-column-card h3 {
          font-size: 1.6rem;
          color: var(--primary-maroon);
          margin-bottom: 12px;
          font-family: var(--font-serif);
        }
        .portal-card-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        .portal-links-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .portal-action-btn {
          background-color: var(--primary-maroon-light);
          border: 1px solid rgba(122, 28, 46, 0.15);
          color: var(--primary-maroon);
          padding: 14px 20px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .portal-action-btn:hover {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-color: var(--primary-maroon);
        }
        .btn-arrow {
          transition: transform 0.3s ease;
        }
        .portal-action-btn:hover .btn-arrow {
          transform: translateX(4px);
        }
        .login-form-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .login-form-card {
          background-color: var(--bg-card);
          border: 1px solid rgba(197, 168, 128, 0.3);
          border-radius: var(--radius-lg);
          max-width: 460px;
          width: 100%;
          padding: 40px;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        .close-form-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          color: var(--primary-maroon);
          cursor: pointer;
        }
        .success-notification {
          text-align: center;
          padding: 20px 0;
        }
        .success-icon {
          color: #3b5a41;
          margin-bottom: 16px;
        }
        .success-notification h4 {
          color: #3b5a41;
          font-size: 1.4rem;
          margin-bottom: 8px;
        }
        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .lock-icon {
          color: var(--primary-maroon);
          margin-bottom: 12px;
        }
        .form-header h3 {
          font-size: 1.6rem;
          color: var(--primary-maroon);
          margin-bottom: 6px;
        }
        .form-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .form-group input {
          padding: 12px;
          border: 1px solid rgba(197, 168, 128, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          background-color: var(--bg-pure);
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary-maroon);
          box-shadow: 0 0 0 3px rgba(122, 28, 46, 0.1);
        }
        .portal-submit-btn {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 14px;
          border: none;
          width: 100%;
          font-weight: 600;
          font-size: 1rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          margin-top: 10px;
        }
        .portal-submit-btn:hover {
          background-color: var(--primary-maroon-hover);
        }
        .kpi-score {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--primary-maroon);
          margin: 10px 0;
        }
        @media (max-width: 992px) {
          .portal-columns-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .db-mail-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
