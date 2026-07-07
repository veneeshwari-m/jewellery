import React, { useEffect } from 'react';
import './NewsAndMedia.css';
import { useNavigate } from 'react-router-dom';

const NewsAndMedia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-media-page">
      {/* Hero Banner */}
      <div className="news-media-hero">
        <header className="about-header">
          <div className="about-logo">
            <span className="about-logo-text">
              <span className="logo-icon"></span> Thangam
            </span>
          </div>
          <nav className="about-nav">
            <span className="about-nav-link" onClick={() => navigate('/about-us')} style={{cursor: 'pointer'}}>ABOUT US ˅</span>
            <span className="about-nav-link" onClick={() => navigate('/corporate-governance')} style={{cursor: 'pointer'}}>CORPORATE GOVERNANCE ˅</span>
            <span className="about-nav-link">CAREERS</span>
            <span className="about-nav-link">INVESTOR ˅</span>
          </nav>
        </header>

        <div className="news-media-hero-content">
          <h1>NEWS & MEDIA</h1>
        </div>
      </div>

      <div className="news-section">
        <h2 className="news-section-title">News</h2>
        <div className="news-grid">
          {/* Card 1 */}
          <div className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Retail Jewellery Partner" className="news-image" />
            </div>
            <h3 className="news-title">Retail Jewellery Partner for IIBS 11</h3>
            <div className="news-date">JANUARY 12, 2026</div>
            <p className="news-excerpt">
              We are pleased to share that Thangamayil Jewellery is the Official Retail Jewellery Partner for IIBS 11. Being part of...
            </p>
            <button className="news-read-more">Read More</button>
          </div>

          {/* Card 2 */}
          <div className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Re-Launch Of Showroom" className="news-image" />
            </div>
            <h3 className="news-title">Re-Launch Of Showroom – Dindigul – 27.04.2022</h3>
            <div className="news-date">MAY 13, 2022</div>
            <p className="news-excerpt">
              We are pleased to inform you that our Dindigul Showroom was Re-launched with better space and interiors for the convenience...
            </p>
            <button className="news-read-more">Read More</button>
          </div>
          
          {/* Card 3 */}
          <div className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=800" alt="Showroom Interior" className="news-image" />
            </div>
            <h3 className="news-title">Opening Of New Showroom – Trichy</h3>
            <div className="news-date">MAY 13, 2022</div>
            <p className="news-excerpt">
              We are very happy to inform our Grand Opening of Trichy Showroom on 14th April, 2022 - Tamil New year...
            </p>
            <button className="news-read-more">Read More</button>
          </div>

          {/* Card 4 */}
          <div className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1579547929496-e26372134e6f?auto=format&fit=crop&q=80&w=800" alt="Award Ceremony" className="news-image" />
            </div>
            <h3 className="news-title">Award To TMJL From Gem And Jewellery Domestic Council</h3>
            <div className="news-date">MAY 13, 2022</div>
            <p className="news-excerpt">
              We have pleasure in announcing that Shri.Ba.Ramesh, Joint Managing Director, Thangamayil Jewellery Limited has been honored by All India Gem...
            </p>
            <button className="news-read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndMedia;
