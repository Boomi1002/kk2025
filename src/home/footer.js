import './Footer.css';
import rightLogo from '../images/foot-clg.png';




function Footer() {
    return (
        <div className="App">
      <footer className="footer">
        <div className="footer-container">
          {/* Left section */}
          <div className="footer-section about">
            <img
              src={rightLogo}
              alt="College Logo"
              className="college-logo"
            />
            
            
            <div className='footer-logo-para'>
                <p>UCET Melpakkam, Tindivanam – 604 307</p>
                <p>📞 Office: 04147-224477</p>
                <p>✉ Email: kkucet25@gmail.com</p>
                <p>📞 Organizer Number:+91 9791194793</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-section links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="/">Judges</a></li>
              <li><a href="/gallery">Gallery</a></li>
              
            </ul>
          </div>

          {/* Location */}
          <div className="footer-section map">
            <h4 className='H4'>Location</h4>
            {/* Placeholder Google Maps embed; replace with exact embed from Google Maps for UCET Melpakkam */}
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
    )

}

export default Footer