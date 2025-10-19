import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Linguistic.css';

/* images */
import budget    from '../images/budget.jpg';
import story    from '../images/treasure.jpg';
import podcast  from '../images/college.png';
import speech1 from '../images/logical1.jpg'

const Logical = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Logical</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
  <h3>🧠 Theme: Logic & Innovation – தர்க்கமும் புதுமையும்</h3>
  <h3>👤 Type: Team</h3>
  <h3>🗣 Language: Tamil or English</h3>
  <h3>⏱ Time Limit: Will be communicated (Keep it concise & impactful!)</h3>
</div>


      {/* ------------------- HIGHLIGHTS TITLE --------------- */}
      <h1 className="Title">📌 Event Highlights:</h1>

      {/* ------------------- HIGHLIGHTS CONTENT ------------- */}
      <div className="highlights">
        {/* ---- English column ---- */}
        <div className="highlights-en">
          <p>🔹 🧠 Apply Logical Thinking:</p>
          <p>Present your ideas based on reasoning, problem-solving, and practical innovation.</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Express your thoughts in Tamil or English – whichever helps you explain clearly.</p>

          <p>🔹 🎯 Focus on Clarity & Structure:</p>
          <p>Organize your points logically, use facts or examples, and make your argument strong and coherent.</p>

          <p>🔹 ⏳ Time-Bound Presentation:</p>
          <p>Stay within the given time – be sharp, structured, and impactful.</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on logical flow, clarity, reasoning, and effective communication.</p>

        </div>

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🧠 தர்க்க சிந்தனையைப் பயன்படுத்துங்கள்:</p>
          <p>காரணம், பிரச்சினை தீர்வு மற்றும் நடைமுறை புதுமையை அடிப்படையாகக் கொண்டு உங்கள் எண்ணங்களைப் பதிவு செய்யுங்கள்.</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>உங்களுக்கு வசதியான தமிழ் அல்லது ஆங்கிலத்தில் தெளிவாக உங்கள் கருத்துகளை வெளிப்படுத்துங்கள்.</p>

          <p>🔹 🎯 தெளிவும் அமைப்பும் முக்கியம்:</p>
          <p>உங்கள் கருத்துகளை தர்க்கரீதியாக ஒழுங்குபடுத்து, உண்மை அல்லது உதாரணங்களை பயன்படுத்தி வலுவான விளக்கத்தை வழங்குங்கள்.</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்திற்குள் முடிக்குங்கள் – துல்லியமாகவும் தாக்கமுள்ளதாகவும் இருங்கள்.</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>தர்க்க ஓட்டம், தெளிவு, காரணவியல் மற்றும் விளக்கத் திறன் ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>

        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/budgetbattle')}
        >
          <div className="comp-name">
            Budget Battle <br />
            பட்ஜெட் போர்
          </div>
          <img src={budget} className="Img" alt="Budget battle competition" />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/treasurehunt')}
        >
          <div className="comp-name">
            Treasure Hunt <br />
            புதையல் வேட்டை
          </div>
          <img src={story} className="Img" alt="Treasure hunt competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/college2.0')}
        >
          <div className="comp-name">
            College 2.0 <br /> Tech லயும்	கலக்குவோம்	
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Logical;
