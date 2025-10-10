import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Linguistic.css';

/* images */
import poet     from '../images/poetry.jpg';
import story    from '../images/story.jpg';
import podcast  from '../images/podcast.jpg';
import speech1  from '../images/speech1.jpg';
import speech   from '../images/speech.jpg';
import comment  from '../images/commentry.jpg';

const Logical = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'>🎤 Linguistic</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
        <h3>📝 Theme: My Dream World – என் கனவு உலகம்</h3>
        <h3>👤 Type: Individual</h3>
        <h3>🗣 Language: Tamil or English</h3>
        <h3>⏱ Time Limit: Will be communicated (Keep it concise &amp; impactful!)</h3>
      </div>

      {/* ------------------- HIGHLIGHTS TITLE --------------- */}
      <h1 className="Title">📌 Event Highlights:</h1>

      {/* ------------------- HIGHLIGHTS CONTENT ------------- */}
      <div className="highlights">
        {/* ---- English column ---- */}
        <div className="highlights-en">
          <p>🔹 ✨ Express Your Imagination:</p>
          <p>Share your vision of a dream world – it could be peaceful, futuristic,
             magical, or entirely unique!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Speak in Tamil or English – your comfort, your voice.</p>

          <p>🔹 🎯 Focus on Clarity &amp; Creativity:</p>
          <p>Engage your audience with original ideas, clear articulation, and
             passionate delivery.</p>

          <p>🔹 ⏳ Time‑Conscious:</p>
          <p>Stick to the allotted time – every second counts!</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on content, delivery, creativity, and language
             skills.</p>
        </div>

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 ✨ உங்கள் கற்பனையை வெளிப்படுத்து:</p>
          <p>உங்கள் கனவு உலகைப் பற்றி பகிர்ந்து கொள்ளுங்கள் – அது சமாதானம்,
             எதிர்காலம், மாயை அல்லது முழுமையாக தனித்துவமானதுதான்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>தமிழ் அல்லது ஆங்கிலம் பேசுங்கள் – உங்கள் வசதிக்கேற்ப.</p>

          <p>🔹 🎯 தெளிவு &amp; படைப்பு மீது கவனம்:</p>
          <p>மூலக் கருத்துகள், தெளிவான உச்சரிப்பு, மற்றும் ஆர்வமான
             வழங்கலுடன் கேட்போரைக் கவருங்கள்.</p>

          <p>🔹 ⏳ நேரத்தின் கட்டுப்பாடு:</p>
          <p>நியமிக்கப்பட்ட நேரத்துக்குள் முடிக்கவும் – ஒவ்வொரு நொடியும் முக்கியம்!</p>

          <p>🔹 🏆 நீதிபதிகளை கவருங்கள்:</p>
          <p>விஷயம், வழங்கல், படைப்பு மற்றும் மொழி திறமைகளின் அடிப்படையில்
             மதிப்பீடு செய்யப்படும்.</p>
        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/poetic')}
        >
          <div className="comp-name">
            Poetry Contest <br />
            கவிதைப் போட்டி
          </div>
          <img src={poet} className="Img" alt="Poetry competition" />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/ShortStory')}
        >
          <div className="comp-name">
            Short Story Writing <br />
            சிறுகதை எழுதுதல்
          </div>
          <img src={story} className="Img" alt="Short story competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Bodcast')}
        >
          <div className="comp-name">
            Podcast Competition <br />
            போட்காஸ்ட் போட்டி
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

        {/* Speech */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Speech')}
        >
          <div className="comp-name">
            Speech Competition <br />
            பேச்சுப் போட்டி
          </div>
          <img src={speech} className="Img" alt="Speech competition" />
        </button>

        {/* Commentary */}
        <button className="card" role="listitem"
        onClick={() => navigate('/poetic')}
        >
          <div className="comp-name">
            Commentary Contest <br />
            வர்ணைனப் போட்டி
          </div>
          <img src={comment} className="Img" alt="Commentary competition" />
        </button>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Logical;
