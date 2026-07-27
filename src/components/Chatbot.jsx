import React, { useState } from 'react';
import { MessageSquare, X, Send, Compass } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to the Vasant Valley School Support Desk. How can I help you today?", isBot: true }
  ]);

  const faqSuggestions = [
    { q: "Admission Guidelines", a: "Admissions for Nursery AY 2026-27 are open. Please navigate to the 'Admissions' page to download form guidelines." },
    { q: "Curriculum Details", a: "Vasant Valley offers both the National CBSE Board and Cambridge International (IGCSE & AS/A Levels) streams." },
    { q: "School Hours", a: "School timing is from 08:00 AM to 02:45 PM, Monday to Friday. View our 'A Day in School' page for the full schedule." },
    { q: "Gurgaon Campus", a: "Our primary wing in Gurgaon Sector 56 offers Prep to Grade III. Phone: +91-124-4050607." },
    { q: "Sports Programs", a: "Vasant Valley offers professional coaching in athletics, basketball, swimming (AC indoor pool), tennis, and squash." },
    { q: "Special Needs (SEN)", a: "Yes, our Special Education Needs (SEN) support program provides individualized education plans (IEPs) and dedicated therapies." },
    { q: "Co-curricular Clubs", a: "We have 35+ active clubs including Robotics, Model UN, Debating, Theatre, Fine Arts, and Science Society." },
    { q: "Academic Streams", a: "We offer Science (PCMB/CS), Commerce, and Humanities streams in Grade XI-XII with flexible subject combinations." },
    { q: "Nursery Point System", a: "Nursery admissions follow point parameters considering neighborhood proximity, sibling enrollment, and alumni parent status." },
    { q: "Transport & Bus Routes", a: "A fully air-conditioned, GPS-enabled bus network covers South Delhi and Gurgaon/NCR routes." },
    { q: "University Placements", a: "Alumni are regularly placed globally at Harvard, Stanford, Oxford, MIT, and within India at IITs and St. Stephen's." },
    { q: "Contact Details", a: "Phone: +91-11-26892787, Email: info@vasantvalley.edu.in. Located in Vasant Kunj, Sector C, New Delhi." }
  ];

  const handleSuggestionClick = (faq) => {
    setMessages((prev) => [
      ...prev,
      { text: faq.q, isBot: false },
      { text: faq.a, isBot: true }
    ]);
  };

  return (
    <div className="vvs-chatbot-widget">
      {/* Floating Chat Trigger Button */}
      <button className="chat-trigger-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Open Chat Helpdesk">
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="btn-badge">AI HELP</span>}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chat-window-panel animate-zoom-in">
          <div className="chat-window-header">
            <Compass className="chat-logo" size={20} />
            <div>
              <h4>VVS Helpdesk</h4>
              <p>Online Support Assistant</p>
            </div>
          </div>

          <div className="chat-messages-container">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-bubble ${msg.isBot ? 'bot-bubble' : 'user-bubble'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-suggestions-box">
            <p className="suggest-lbl">Frequently Asked Questions:</p>
            <div className="suggestions-list">
              {faqSuggestions.map((faq, idx) => (
                <button key={idx} className="suggest-chip" onClick={() => handleSuggestionClick(faq)}>
                  {faq.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .vvs-chatbot-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 10000;
          font-family: var(--font-sans);
        }
        .chat-trigger-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border: none;
          box-shadow: 0 10px 30px rgba(122, 28, 46, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: var(--transition-smooth);
        }
        .chat-trigger-btn:hover {
          transform: scale(1.06);
          background-color: var(--primary-maroon-hover);
        }
        .btn-badge {
          position: absolute;
          left: -80px;
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 1px;
          box-shadow: var(--shadow-sm);
        }
        .chat-window-panel {
          position: absolute;
          bottom: 75px;
          right: 0;
          width: 350px;
          max-width: 90vw;
          height: 480px;
          background-color: var(--bg-card);
          border: 1px solid rgba(197, 168, 128, 0.3);
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-window-header {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chat-logo {
          color: var(--accent-gold);
        }
        .chat-window-header h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }
        .chat-window-header p {
          margin: 2px 0 0 0;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .chat-messages-container {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: var(--secondary-beige);
        }
        .message-bubble {
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          line-height: 1.4;
          max-width: 80%;
        }
        .bot-bubble {
          background-color: var(--bg-card);
          color: var(--text-dark);
          align-self: flex-start;
          border: 1px solid rgba(197, 168, 128, 0.2);
          border-bottom-left-radius: 2px;
        }
        .user-bubble {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
        .chat-suggestions-box {
          background-color: var(--bg-card);
          padding: 16px;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }
        .suggest-lbl {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .suggestions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .suggest-chip {
          background-color: var(--primary-maroon-light);
          border: 1px solid rgba(122, 28, 46, 0.15);
          color: var(--primary-maroon);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .suggest-chip:hover {
          background-color: var(--primary-maroon);
          color: var(--text-light);
        }
      `}</style>
    </div>
  );
}
