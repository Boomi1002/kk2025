import React from 'react';
import Header from './header';
import Footer from './footer';
import './Poetic.css';

/* images */
import register from '../images/register.jpg';

const Poetic = () => {
  return (
    <>
      <Header />

      <main className="poetic-page">
        {/* ---------- TOP SECTION – left text / right picture ---------- */}
        <section className="poetic-top">
          {/* ----- left side – all textual content ----- */}
          <div className="poetic-left">
            <h1 className="Title">🎙 Poetry Contest – கவிதைப் போட்டி</h1>

            <div className="h3Div">
              <h3>👤 Type: Individual</h3>
              <h3>🗣 Language: Tamil or English</h3>
              <h3>Style: Free Style – Classical or Modern</h3>
              <h3>
                Accepted Forms: All forms of poetry – Haiku, Long Form,
                Traditional, Free Verse, New Age, Experimental, etc.
              </h3>
            </div>

            <h1 className="Title">📌 Description:</h1>
            <p className="description">
              Participants are invited to submit original poems in either Tamil
              or English. You are free to explore any form or style – be it
              haiku, long form, or even new‑age formats. The focus is on
              creativity, expression, and originality. Let your poetic imagination
              fly!
            </p>

            <h1 className="Title">🎙 கவிதைப் போட்டி – Poetry Contest</h1>

            <div className="h3Div">
              <h3>👤 வகை: தனிப்பட்ட (Individual)</h3>
              <h3>🗣 மொழி: தமிழ் அல்லது ஆங்கிலம்</h3>
              <h3>✍ பாணி: சுதந்திர பாணி – பாரம்பரியமாகவோ, நவீனமாகவோ</h3>
              <h3>
                📜 ஏற்கப்படும் வடிவங்கள்: ஹைக்கூ, நீண்ட கவிதை, பாரம்பரிய
                கவிதை, புதிய வகை, இலக்கணக்கேடான கவிதைகள் உள்ளிட்ட அனைத்து
                வடிவங்களும்
              </h3>
            </div>

            <h1 className="Title">📌 விவரம்:</h1>
            <p className="description">
              பங்கேற்பாளர்கள் தமிழ் அல்லது ஆங்கிலத்தில் தாங்கள் இயற்றிய அசல்
              கவிதைகளை சமர்ப்பிக்கலாம். ஹைக்கூ, நீண்ட வடிவம் அல்லது புதிய
              பாணி என எந்தவொரு கவிதை வடிவத்திலும் நீங்கள் எழுதலாம். படைப்பாற்றல்,
              உணர்வுப் பொழிவு மற்றும் தனிப்பட்டக் குரல்தான் முக்கியம். உங்கள் கவிதை
              எண்ணங்களை பறக்க விடுங்கள்!
            </p>
          </div>

          {/* ----- right side – the register picture ----- */}
        
        </section>

        {/* ---------- CALL‑TO‑ACTION BUTTONS ---------- */}
        <div className="poetry-link">
          <a
            href="https://forms.gle/9Fk7aPzpVu6ykWWE9"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/2x/forms_48dp.png"
              alt="Google Forms"
              className="google-icon"
            />
            பதிவு செய்ய இங்கே கிளிக் செய்யவும்
          </a>
        </div>

        <div className="poetry-link1">
          <a
            href="https://forms.gle/9Fk7aPzpVu6ykWWE9"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/2x/forms_48dp.png"
              alt="Google Forms"
              className="google-icon"
            />
            Click here to register
          </a>
        </div>

        <p className="note">
          <span>NOTE:</span> Participants may submit poems in either Tamil or
          English. Please include your name, institution, and contact
          information on the registration form.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Poetic;
