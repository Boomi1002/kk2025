import React from 'react';
import './home.css';
import leftLogo from '../images/left-logo.png';
import rightLogo from '../images/right-logo.png';
// import bannerImg from '../images/banner.png'; // Rename your image as needed

function Home() {
  return (
    <div>
      <div className="header-bar">
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
        <img src={rightLogo} alt="Right Logo" className="header-logo" />
      </div>
      <nav className="main-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/event">Event</a></li>
        </ul>
      </nav>
      {/* <div className="main-banner">
        <img src={bannerImg} alt="Banner" className="banner-img" />
      </div> */}
    </div>
  );
}

export default Home;