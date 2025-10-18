import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Nature.css';

/* images */
import dance     from '../images/nature.jpg';
import story    from '../images/cook.jpg';
import podcast  from '../images/show.jpg';
import speech1  from '../images/naturalistic.jpg';
import speech   from '../images/phot.webp';

const Nature = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" style={{  height: '30vh' }} />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Naturalistic</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
       <div className="h3Div">
         <h3>🎨 Theme: Naturalistic Creativity – இயற்கை மற்றும் சுற்றுச்சூழல் படைப்பாற்றல்</h3>
         <h3>👤 Type: Team/Individual</h3>
         <h3>🗣 Language: Tamil or English</h3>
         <h3>⏱ Time Limit: Will be communicated (Keep it creative & impactful!)</h3>
        </div>

      </div>


      {/* ------------------- HIGHLIGHTS TITLE --------------- */}
      <h1 className="Title">📌 Event Highlights:</h1>

      {/* ------------------- HIGHLIGHTS CONTENT ------------- */}
      <div className="highlights">
        {/* ---- English column ---- */}
        <div className="highlights-en">
          <p>🔹 🌱 Showcase Your Nature Creativity:</p>
          <p>Present ideas, projects, or performances related to nature, wildlife, sustainability, or environmental conservation – let your connection with nature shine!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Explain or narrate your ideas in Tamil or English – clarity and understanding are important.</p>

          <p>🔹 🎯 Focus on Awareness & Creativity:</p>
          <p>Demonstrate originality, eco-friendly solutions, and thoughtful presentation. Innovative ideas that highlight nature and sustainability are encouraged!</p>

          <p>🔹 ⏳ Time‑Conscious Presentation:</p>
          <p>Stick to the allotted time – make every point about nature count!</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on creativity, clarity, environmental relevance, presentation skills, and impact.</p>


        </div>
      

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🌱 உங்கள் இயற்கை படைப்பாற்றலை வெளிப்படுத்துங்கள்:</p>
          <p>இயற்கை, வனவிலங்கு, நிலைத்திருத்தம் அல்லது சுற்றுச்சூழல் பாதுகாப்புடன் தொடர்புடைய கருத்துக்கள், திட்டங்கள் அல்லது நிகழ்ச்சிகளை வெளிப்படுத்துங்கள் – உங்கள் இயற்கையுடன் உள்ள தொடர்பை வெளிப்படுத்துங்கள்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>உங்கள் கருத்துக்களை தமிழ் அல்லது ஆங்கிலத்தில் விளக்குங்கள் அல்லது விவரியுங்கள் – தெளிவு மற்றும் புரிதல் முக்கியம்.</p>

          <p>🔹 🎯 விழிப்புணர்வு மற்றும் படைப்பாற்றலில் கவனம்:</p>
          <p>மூல்மொழி, சுற்றுச்சூழலுக்கேற்ற தீர்வுகள் மற்றும் கவனமான விளக்கங்களை வெளிப்படுத்துங்கள். இயற்கை மற்றும் நிலைத்திருத்தத்தை முன்னிறுத்தும் புதுமையான கருத்துகள் வரவேற்கப்படுகின்றன!</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்தை கடைபிடியுங்கள் – இயற்கையுடன் தொடர்புடைய ஒவ்வொரு கருத்தும் மதிப்புமிக்கது!</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>படைப்பாற்றல், தெளிவு, சுற்றுச்சூழல் தொடர்பு, விளக்கம் திறன் மற்றும் தாக்கம் ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>

        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/NatureCollage')}
        >
          <div className="comp-name">
            Nature Collage  <br />
            அவியல்
          </div>
          <img src={dance} className="Img" alt="Dance competition" />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/Cooking')}
        >
          <div className="comp-name">
            Cooking without fire<br />நெருப்பில்லாமல் சமைபோம்	        </div>
          <img src={story} className="Img" alt="Short story competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/ShowAndTell')}
        >
          <div className="comp-name">
            Show and tell<br />ஒவ்வொரு பூக்களுமே
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

        {/* Speech */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Photography')}
        >
          <div className="comp-name">
            Natural Photography contest<br /> கவனிக்க மறந்த காட்சிகள்</div>
          <img src={speech} className="Img" alt="Speech competition" style={{height:'25vh'}} />
        </button>

      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Nature;
