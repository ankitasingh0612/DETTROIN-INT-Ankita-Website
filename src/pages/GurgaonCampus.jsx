import React from 'react';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

export default function GurgaonCampus() {
  return (
    <div className="campus-page">
      <section className="campus-header">
        <div className="container text-center">
          <span className="campus-badge">PRIMARY WING</span>
          <h1>Gurgaon Campus</h1>
          <div className="header-bar"></div>
        </div>
      </section>

      <section className="campus-body">
        <div className="container body-grid">
          <div className="campus-desc">
            <h2>Nurturing Young Thinkers in Gurugram</h2>
            <p>
              Vasant Valley's primary campus in Gurgaon extends our progressive educational pedagogy to early years. Focusing on classes Prep to Grade III, we provide a warm, sensory-rich learning environment that encourages collaborative exploration.
            </p>
            <p>
              Our Gurgaon campus maintains the same low student-to-teacher ratio (1:9) and offers integrated art, music, science, and computer rooms with specialized play courts.
            </p>
          </div>

          <div className="campus-info-card">
            <h3>Gurgaon Campus Contact</h3>
            <ul className="contact-details" style={{ marginBottom: '24px' }}>
              <li>
                <MapPin size={20} className="info-icon" />
                <span>Sector 56, Sushant Lok Phase II, Gurugram, Haryana 122011</span>
              </li>
              <li>
                <Phone size={20} className="info-icon" />
                <span>+91-124-4050607, +91-124-4050809</span>
              </li>
              <li>
                <Mail size={20} className="info-icon" />
                <span>gurgaon@vasantvalley.org</span>
              </li>
            </ul>
            <div className="campus-map-wrapper">
              <iframe 
                title="Vasant Valley Gurgaon Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.887968535492!2d77.08670877626942!3d28.422634375778213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21ff96555555%3A0x7d6f51cc72c0500!2sSector%2056%2C%20Sushant%20Lok%20Phase%20II%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1716503923984!5m2!1sen!2sin" 
                width="100%" 
                height="220" 
                style={{ border: 0, borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .campus-page {
          background-color: var(--secondary-beige);
        }
        .campus-header {
          background: linear-gradient(rgba(122, 28, 46, 0.9), rgba(90, 17, 31, 0.95)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: var(--text-light);
        }
        .campus-header h1 {
          color: var(--text-light);
          font-size: 2.8rem;
        }
        .campus-badge {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold);
        }
        .campus-body {
          padding: 80px 0;
        }
        .body-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }
        .campus-desc h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--primary-maroon);
        }
        .campus-desc p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .campus-info-card {
          background-color: var(--bg-card);
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
        }
        .campus-info-card h3 {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: var(--primary-maroon);
        }
        .contact-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-details li {
          display: flex;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .info-icon {
          color: var(--primary-maroon);
          flex-shrink: 0;
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
