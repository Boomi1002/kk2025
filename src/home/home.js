/* ---------------  IMPORTS --------------- */
import React, { useState } from 'react';               // ← only one import of React + useState
import { useNavigate } from 'react-router-dom';        // ← keep a single import
import './home.css';

import leftLogo   from '../images/left-logo.png';
import rightLog   from '../images/right-logo.png';
import bannerImg  from '../images/banner.png';
import rightLogo  from '../images/foot-clg.png';

/* Event‑section images */
import lingustic      from '../images/linguistic.webp';
import musical        from '../images/musical.jpg';
import logical        from '../images/logical.jpg';
import kinesthetic    from '../images/kinesthetic.jpg';
import interpersonnal from '../images/interpersonnal.jpg';
import naturalistic   from '../images/naturalistic.jpg';
import spatial        from '../images/spatial.jpg';


function Home() {
  const navigate = useNavigate();

  // ----------  Hamburger state ----------
  const [navOpen, setNavOpen] = useState(false);

  // OPTIONAL – use this if you prefer a single helper for the cards
  // const go = (path) => { setNavOpen(false); navigate(path); };

  return (
    <div>

      {/* ------------------- HEADER ------------------- */}
      <div className="header-bar" id="home">
        <img src={leftLogo} alt="Left Logo" className="header-logo" />
        <div className="header-center">
          <div className="tamil-header">அண்ணா பல்கலைக்கழகம், சென்னை</div>
          <div className="eng-header">University College of Engineering, Tindivanam</div>
          <div className="tamil-subheader">பல்கலைக்கழக பொறியியல் கல்லூரி, திண்டிவனம்</div>
          <div className="eng-subheader">(A Constituent College of Anna University, Chennai)</div>
          <div className="aicte">
            <span className="tnea">TNEA CODE : 1014</span> | Approved by AICTE : <span className="aicte-code">1-4670706161</span>
          </div>
        </div>
        <img src={rightLog} alt="Right Logo" className="header-logo" />
      </div>

      {/* ------------------- HAMBURGER (mobile) ------------------- */}
      <button
        className={`hamburger ${navOpen ? 'open' : ''}`}
        aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ------------------- MAIN MENU ------------------- */}
      <nav className={`main-menu ${navOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          {/* Every link closes the panel after a click */}
          <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
          <li><a href="#event" onClick={() => setNavOpen(false)}>Event</a></li>
          <li><a href="/" onClick={() => setNavOpen(false)}>Judges</a></li>
          <li><a href="/" onClick={() => setNavOpen(false)}>Gallery</a></li>
        </ul>
      </nav>

      {/* ------------------- BANNER ------------------- */}
      <div className="main-banner">
        <img src={bannerImg} alt="Banner" className="banner-img" />
      </div>

      {/* ------------------- ABOUT SECTION ------------------- */}
      <div className="about-section" id="about">
        <h2>கல்லூரி கலைத் திருவிழா</h2>
        <p className="line"></p>
        <h4>
          Tamil Nadu State Council for Higher Education has added that the "Kalloori Kalai Thiruvizha" seeks to redefine youth engagement by tapping into the multiple intelligences of students, celebrating their talents and giving voice to their innovative spirit. Through this initiative, it is hope to build a stronger, more creative and dynamic youth community poised to lead the future.
        </h4>
      </div>

      {/* ------------------- COMPETITION GRID ------------------- */}
      <section>
        <h2 className="head" id="event">கல்லூரி கலைத் திருவிழா போட்டி விவரங்கள்</h2>

        <div className="grid" id="compGrid" role="list">
          <button className="card" onClick={() => navigate('/linguistic')} role="listitem">
            <div className="comp-name">Linguistic</div>
            <img src={lingustic} className="Img" alt="Linguistic" />
          </button>

          <button className="card" onClick={() => navigate('/logical')} role="listitem">
            <div className="comp-name">Logical</div>
            <img src={logical} className="Img" alt="Logical" />
          </button>

          <button className="card" onClick={() => navigate('/musical')} role="listitem">
            <div className="comp-name">Musical</div>
            <img src={musical} className="Img" alt="Musical" />
          </button>

          <button className="card" onClick={() => navigate('/kinesthetic')} role="listitem">
            <div className="comp-name">Bodily‑Kinesthetic</div>
            <img src={kinesthetic} className="Img" alt="Kinesthetic" />
          </button>

          <button className="card" onClick={() => navigate('/spatial')} role="listitem">
            <div className="comp-name">Visual‑Spatial</div>
            <img src={spatial} className="Img" alt="Spatial" />
          </button>

          <button className="card" onClick={() => navigate('/interpersonnal')} role="listitem">
            <div className="comp-name">Interpersonal</div>
            <img src={interpersonnal} className="Img" alt="Interpersonal" />
          </button>

          <button className="card" onClick={() => navigate('/nature')} role="listitem">
            <div className="comp-name">Naturalistic</div>
            <img src={naturalistic} className="Img" alt="Naturalistic" />
          </button>
        </div>
      </section>

      {/* ------------------- FOOTER ------------------- */}
      <div className="App">
        <footer className="footer">
          <div className="footer-container">

            {/* About / logo */}
            <div className="footer-section about">
              <img src={rightLogo} alt="College Logo" className="college-logo" />
              <div className="footer-logo-para">
                <p>UCET Melpakkam, Tindivanam – 604 307</p>
                <p>📞 Office: 04147-224477</p>
                <p>✉ Email: deanoffice.ucet@gmail.com</p>
                <p>📞 TNEA Enquiry: 04147-224477</p>
              </div>
            </div>

            {/* Useful links */}
            <div className="footer-section links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            </div>

            {/* Map */}
            <div className="footer-section map">
              <h4>Location</h4>
              <iframe
                title="ucet-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.456789012345!2d79.12345678901234!3d12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI5LjIiTiA3O8KwMDcnMjguNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 UCET | Developed by UCET Web Team | Maintained by Department of IT
          </div>
        </footer>
      </div>

    </div>
  );
}

export default Home;
