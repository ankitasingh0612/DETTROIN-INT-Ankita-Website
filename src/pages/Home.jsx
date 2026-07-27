import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, Award, ShieldCheck, ChevronRight, BookOpen, Clock, CalendarRange, Quote, ChevronLeft } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Live Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date("October 15, 2026 10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference < 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Interactive Gallery Filter State
  const [galleryFilter, setGalleryFilter] = useState('all');
  const galleryItems = [
    { id: 1, category: 'infra', title: 'Modern Library & Resource Center', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 2, category: 'academics', title: 'Advanced Chemistry Lab Work', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 3, category: 'sports', title: 'Athletics & Professional Track', img: 'https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 4, category: 'campus', title: 'Annual Art & Painting Festival', img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 5, category: 'infra', title: 'Smart Digitized Classrooms', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 6, category: 'sports', title: 'Inter-School Basketball Finals', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 7, category: 'infra', title: 'State-of-the-Art Computer & Robotics Lab', img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 8, category: 'academics', title: 'Interactive Biology & Microscopy Lab', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 9, category: 'academics', title: 'Creative Writing & Seminar Session', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 10, category: 'sports', title: 'Air-conditioned Olympic Swimming Pool', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 11, category: 'campus', title: 'Annual Day Theatre & Dance Event', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    { id: 12, category: 'campus', title: 'Music Room Rehearsals & Jam Sessions', img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' }
  ];
  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  // 3. Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Vasant Valley gave me the confidence to explore beyond books. The focus on analytical skills helped me secure my research fellowship at Stanford.",
      author: "Aditi Rao",
      role: "Alumna, Batch of 2018 (Postdoc Researcher)",
      stars: 5
    },
    {
      quote: "The personalized attention here is unmatched. Teachers don't just teach; they act as mentors who understand my child's unique talents.",
      author: "Dr. Sandeep Mehta",
      role: "Parent of Grade IX Student",
      stars: 5
    },
    {
      quote: "Vasant Valley's emphasis on holistic development built my foundations. Debating and community projects shaped my career in public policy.",
      author: "Vikram Sen",
      role: "Alumnus, Batch of 2015 (Consultant)",
      stars: 5
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <span className="hero-badge">Est. 1990 | New Delhi</span>
          <h1 className="hero-title">Nurturing Leaders, Inspiring Excellence</h1>
          <p className="hero-subtitle">
            Welcome to Vasant Valley School. Where rigorous academics meet holistic character development to build a progressive global future.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigateTo('admissions')}>
              Admissions Open 2026-27 <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn-secondary" onClick={() => navigateTo('about')}>
              Discover Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Timer Widget Section */}
      <section className="countdown-section">
        <div className="container countdown-box">
          <div className="countdown-info">
            <CalendarRange size={24} className="countdown-icon" />
            <div>
              <h3>Annual Science & Tech Symposium 2026</h3>
              <p>Registration deadline is approaching fast. Enroll today!</p>
            </div>
          </div>
          <div className="countdown-timer">
            <div className="timer-segment">
              <span className="time-val">{timeLeft.days}</span>
              <span className="time-lbl">Days</span>
            </div>
            <div className="timer-segment">
              <span className="time-val">{timeLeft.hours}</span>
              <span className="time-lbl">Hrs</span>
            </div>
            <div className="timer-segment">
              <span className="time-val">{timeLeft.minutes}</span>
              <span className="time-lbl">Mins</span>
            </div>
            <div className="timer-segment">
              <span className="time-val">{timeLeft.seconds}</span>
              <span className="time-lbl">Secs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Motto & Core Philosophy Banner */}
      <section className="motto-banner-section">
        <div className="container motto-grid">
          <div className="motto-text-box">
            <span className="motto-tag">OUR MOTTO</span>
            <h2>"Shreshtha Tamaya Karmane"</h2>
            <p className="motto-english">Excellence in Deed</p>
          </div>
          <div className="motto-desc-box">
            <p>
              We believe in the beauty of striving for the best. Education at Vasant Valley is not just about scoring grades; it's about refining values, exploring creative thinking, and expressing integrity through every action.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics / Highlights */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>1:9</h3>
            <p>Teacher-Student Ratio</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Board Examination Success</p>
          </div>
          <div className="stat-card">
            <h3>35+</h3>
            <p>Co-curricular Activities Offered</p>
          </div>
          <div className="stat-card">
            <h3>Est. 1990</h3>
            <p>Over 3 Decades of Academic Legacy</p>
          </div>
        </div>
      </section>

      {/* Highlights / Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <span>WHY VASANT VALLEY?</span>
            <h2>Educational Framework Built for Tomorrow</h2>
            <div className="header-bar"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper">
                <BookOpen size={28} />
              </div>
              <h3>Progressive Academics</h3>
              <p>An innovative CBSE curriculum integrated with project-based, interactive learning that nurtures analytical minds and creative problem solvers.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <Heart size={28} />
              </div>
              <h3>Holistic Care & Guidance</h3>
              <p>Counseling support, personal development tracks, and peer mentorship to ensure the psychological, social, and emotional well-being of every student.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <Award size={28} />
              </div>
              <h3>Co-Curricular Eminence</h3>
              <p>Expert coaching in sports, arts, performing arts, robotics, debating, and social service programs that inspire student passions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Interactive Campus Gallery Grid Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <span>DISCOVER CAMPUS LIFE</span>
            <h2>A Glimpse Into Vasant Valley</h2>
            <div className="header-bar"></div>
          </div>

          {/* Filter Categories */}
          <div className="gallery-filters">
            <button className={`filter-btn ${galleryFilter === 'all' ? 'active' : ''}`} onClick={() => setGalleryFilter('all')}>All Photos</button>
            <button className={`filter-btn ${galleryFilter === 'infra' ? 'active' : ''}`} onClick={() => setGalleryFilter('infra')}>Infrastructure</button>
            <button className={`filter-btn ${galleryFilter === 'academics' ? 'active' : ''}`} onClick={() => setGalleryFilter('academics')}>Academics</button>
            <button className={`filter-btn ${galleryFilter === 'sports' ? 'active' : ''}`} onClick={() => setGalleryFilter('sports')}>Sports</button>
            <button className={`filter-btn ${galleryFilter === 'campus' ? 'active' : ''}`} onClick={() => setGalleryFilter('campus')}>Campus Life</button>
          </div>

          {/* Grid Layout */}
          <div className="gallery-grid">
            {filteredGallery.map(item => (
              <div className="gallery-card animate-zoom-in" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="gallery-card-overlay">
                  <h4>{item.title}</h4>
                  <span className="gallery-cat-badge">{item.category.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span>TESTIMONIALS</span>
            <h2>Voices of Vasant Valley</h2>
            <div className="header-bar"></div>
          </div>

          <div className="testimonial-slider-container">
            <button className="carousel-nav-btn prev" onClick={handlePrevTestimonial}>
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-card">
              <Quote size={40} className="quote-badge-icon" />
              <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              <h4 className="testimonial-author">{testimonials[activeTestimonial].author}</h4>
              <p className="testimonial-role">{testimonials[activeTestimonial].role}</p>
            </div>
            <button className="carousel-nav-btn next" onClick={handleNextTestimonial}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-indicators">
            {testimonials.map((_, i) => (
              <span 
                key={i} 
                className={`indicator-dot ${activeTestimonial === i ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Notice Board & News */}
      <section className="updates-section">
        <div className="container updates-grid">
          {/* Left Column: Spotlight News */}
          <div className="news-spotlight">
            <span className="section-sub">WHAT'S HAPPENING</span>
            <h2>Spotlight & Stories</h2>
            <div className="news-card">
              <div className="news-date">July 26, 2026</div>
              <h3>Annual Debate & Creative Arts Symposium 2026</h3>
              <p>We are delighted to announce our students won 1st prize in the Inter-School Creative Writing & Debate Symposium held this weekend. Kudos to the debating society!</p>
              <button className="read-more-btn">Read full story <ChevronRight size={14} /></button>
            </div>
            <div className="news-card">
              <div className="news-date">July 18, 2026</div>
              <h3>Robotics Society Qualifies for Nationals</h3>
              <p>Vasant Valley Robotics team 'RoboQuest' secured their spot in the national championships with their autonomous waste sorting bot prototype.</p>
              <button className="read-more-btn">Read full story <ChevronRight size={14} /></button>
            </div>
          </div>

          {/* Right Column: Dynamic Notice Board */}
          <div className="notice-board">
            <h2>Notice Board</h2>
            <div className="notices-wrapper">
              <div className="notice-item">
                <div className="notice-badge">Admission</div>
                <div className="notice-content">
                  <h4>Registration Open for Nursery - Grade IX (A.Y. 2026-27)</h4>
                  <p>Parents are requested to check eligibility criteria and submit online registration forms before the deadline.</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-badge schedule">Academics</div>
                <div className="notice-content">
                  <h4>Revised Middle School Academic Term Plan</h4>
                  <p>The revised calendar for Term-I assignments is now downloadable from the student portal.</p>
                </div>
              </div>

              <div className="notice-item font-italic">
                <div className="notice-badge event">Events</div>
                <div className="notice-content">
                  <h4>Parent-Teacher Consultations scheduled for next Friday</h4>
                  <p>Time slots have been shared via e-portal. Check email for details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Hero Section styles */
        .hero-section {
          position: relative;
          background: linear-gradient(rgba(74, 14, 23, 0.75), rgba(40, 6, 10, 0.85)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          height: 85vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          color: var(--text-light);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(197, 168, 128, 0.1) 0%, transparent 60%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          line-height: 1.15;
          color: var(--text-light);
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 15px;
        }

        .btn-primary {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(197, 168, 128, 0.25);
        }

        .btn-primary:hover {
          background-color: var(--text-light);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
        }

        .btn-secondary {
          border: 2px solid rgba(255, 255, 255, 0.25);
          color: var(--text-light);
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .btn-secondary:hover {
          border-color: var(--accent-gold);
          background-color: rgba(197, 168, 128, 0.1);
          color: var(--accent-gold);
        }

        /* Countdown section styles */
        .countdown-section {
          background-color: var(--bg-pure);
          padding: 30px 0;
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
        }

        .countdown-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(122, 28, 46, 0.05);
          border: 1px solid rgba(122, 28, 46, 0.1);
          border-radius: var(--radius-md);
          padding: 24px 40px;
          gap: 20px;
        }

        .countdown-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .countdown-icon {
          color: var(--primary-maroon);
          flex-shrink: 0;
        }

        .countdown-info h3 {
          font-size: 1.25rem;
          color: var(--primary-maroon);
          margin-bottom: 4px;
        }

        .countdown-info p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .countdown-timer {
          display: flex;
          gap: 15px;
        }

        .timer-segment {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          min-width: 70px;
        }

        .time-val {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.1;
        }

        .time-lbl {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
        }

        /* Motto banner styling */
        .motto-banner-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid rgba(197, 168, 128, 0.2);
          padding: 50px 0;
        }

        .motto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .motto-text-box {
          border-left: 4px solid var(--primary-maroon);
          padding-left: 24px;
        }

        .motto-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold-dark);
        }

        .motto-text-box h2 {
          font-size: 2.2rem;
          margin-top: 4px;
        }

        .motto-english {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--text-muted);
          margin-top: 5px;
        }

        .motto-desc-box p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* Stats section styling */
        .stats-section {
          background-color: var(--primary-maroon-light);
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          background-color: var(--bg-pure);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(197, 168, 128, 0.15);
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .stat-card h3 {
          font-size: 2.5rem;
          color: var(--primary-maroon);
          margin-bottom: 8px;
        }

        .stat-card p {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Features section styling */
        .features-section {
          padding: 80px 0;
          background-color: var(--secondary-beige);
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-header span {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
        }

        .section-header h2 {
          font-size: 2.4rem;
          margin-top: 6px;
        }

        .header-bar {
          width: 60px;
          height: 3px;
          background-color: var(--accent-gold);
          margin: 15px auto 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .feature-card {
          background-color: var(--bg-card);
          padding: 40px 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          border-bottom: 4px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-bottom-color: var(--primary-maroon);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background-color: var(--primary-maroon-light);
          color: var(--primary-maroon);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: var(--transition-smooth);
        }

        .feature-card:hover .icon-wrapper {
          background-color: var(--primary-maroon);
          color: var(--text-light);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Gallery Section Styles */
        .gallery-section {
          padding: 85px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-btn {
          background-color: transparent;
          border: 1px solid rgba(122, 28, 46, 0.2);
          color: var(--primary-maroon);
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .filter-btn:hover, .filter-btn.active {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-color: var(--primary-maroon);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .gallery-card {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          height: 250px;
          cursor: pointer;
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(74, 14, 23, 0.95), rgba(74, 14, 23, 0.4) 60%, transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .gallery-card:hover img {
          transform: scale(1.15);
        }

        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-overlay h4 {
          color: var(--text-light);
          font-size: 1.15rem;
          margin-bottom: 6px;
          font-family: var(--font-serif);
        }

        .gallery-cat-badge {
          background-color: var(--accent-gold);
          color: var(--primary-maroon);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          width: fit-content;
        }

        /* Testimonials Slider Section Styles */
        .testimonials-section {
          background-color: var(--secondary-beige);
          padding: 85px 0;
          border-top: 1px solid rgba(197, 168, 128, 0.2);
          position: relative;
          overflow: hidden;
        }

        .testimonial-slider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          gap: 30px;
        }

        .carousel-nav-btn {
          width: 50px;
          height: 50px;
          background-color: var(--bg-pure);
          border: 1px solid rgba(197, 168, 128, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-maroon);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }

        .carousel-nav-btn:hover {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          border-color: var(--primary-maroon);
        }

        .testimonial-card {
          background-color: var(--bg-pure);
          padding: 50px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(197, 168, 128, 0.2);
          text-align: center;
          width: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .quote-badge-icon {
          color: rgba(122, 28, 46, 0.08);
          position: absolute;
          top: 30px;
          left: 40px;
        }

        .testimonial-quote {
          font-size: 1.3rem;
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--text-dark);
          line-height: 1.6;
          margin-bottom: 24px;
          position: relative;
          z-index: 5;
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .testimonial-author {
          font-size: 1.2rem;
          color: var(--primary-maroon);
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          background-color: rgba(122, 28, 46, 0.2);
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .indicator-dot.active {
          width: 25px;
          border-radius: 10px;
          background-color: var(--primary-maroon);
        }

        /* Updates & notice board section styling */
        .updates-section {
          padding: 80px 0;
          background-color: var(--bg-pure);
          border-top: 1px solid rgba(197, 168, 128, 0.2);
        }

        .updates-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
        }

        .section-sub {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold-dark);
          letter-spacing: 1.5px;
        }

        .news-spotlight h2, .notice-board h2 {
          font-size: 2.2rem;
          margin-bottom: 30px;
        }

        .news-card {
          padding: 24px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .news-card:last-child {
          border-bottom: none;
        }

        .news-date {
          font-size: 0.8rem;
          color: var(--accent-gold-dark);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .news-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .news-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }

        .read-more-btn {
          color: var(--primary-maroon);
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .read-more-btn:hover {
          color: var(--accent-gold-dark);
        }

        .notice-board {
          background-color: var(--secondary-beige);
          padding: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(197, 168, 128, 0.2);
          height: fit-content;
        }

        .notices-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .notice-item {
          display: flex;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px dashed rgba(197, 168, 128, 0.4);
        }

        .notice-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .notice-badge {
          background-color: var(--primary-maroon);
          color: var(--text-light);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          height: fit-content;
          text-transform: uppercase;
        }

        .notice-badge.schedule {
          background-color: #3b5a41; /* forest green accent */
        }

        .notice-badge.event {
          background-color: var(--accent-gold-dark);
        }

        .notice-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--text-dark);
          line-height: 1.3;
        }

        .notice-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Animations */
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoomIn 0.4s ease-out forwards;
        }

        @media (max-width: 992px) {
          .motto-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .updates-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .countdown-box {
            flex-direction: column;
            padding: 24px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .testimonial-slider-container {
            gap: 15px;
          }
          .carousel-nav-btn {
            width: 40px;
            height: 40px;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .testimonial-quote {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-actions {
            flex-direction: column;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .notice-board {
            padding: 24px;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
