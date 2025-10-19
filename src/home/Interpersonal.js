import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Interpersonal.css';

/* images */
import dance     from '../images/youth.webp';
import story    from '../images/startup.webp';
import podcast  from '../images/debate.jpg';
import speech1  from '../images/inter1.jpg';
import speech   from '../images/roleplay.webp';
import comment  from '../images/comedy.jpg';

const Interpersonal = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" style={{  height: '30vh' }} />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Interpersonal</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
       <div className="h3Div">
         <h3>🎨 Theme: Interpersonal Creativity – இடையாட்டத் திறன் மற்றும் சமூகப்படைப்பாற்றல்</h3>
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
          <p>🔹 🤝 Showcase Your Teamwork & Communication Skills:</p>
          <p>Work together to present ideas, solve problems, or perform tasks collaboratively – highlight your interpersonal strengths!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Communicate in Tamil or English – clarity and effective interaction are key.</p>

          <p>🔹 🎯 Focus on Collaboration & Creativity:</p>
          <p>Demonstrate coordination, empathy, and original ideas. Creative teamwork and meaningful engagement are encouraged!</p>

          <p>🔹 ⏳ Time‑Conscious Presentation:</p>
          <p>Stick to the allotted time – make every interaction count!</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on collaboration, clarity, communication effectiveness, creativity, and overall team dynamics.</p>

        </div>
      

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🤝 உங்கள் குழு மற்றும் தொடர்புத் திறன்களை வெளிப்படுத்துங்கள்:</p>
          <p>கருத்துகளை பகிர்ந்து, பிரச்சினைகளை தீர்த்து, அல்லது பணிகளை சேர்ந்து செய்யுங்கள் – உங்கள் இடையாட்டத் திறன்களை வெளிப்படுத்துங்கள்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>தமிழ் அல்லது ஆங்கிலத்தில் தொடர்பு கொள்ளுங்கள் – தெளிவு மற்றும் விளக்கமான தொடர்பு முக்கியம்.</p>

          <p>🔹 🎯 கூட்டாண்மை மற்றும் படைப்பாற்றலில் கவனம்:</p>
          <p>ஒத்துழைப்பு, பரிவு மற்றும் புதுமையான கருத்துகளை வெளிப்படுத்துங்கள். படைப்பாற்றலான குழு வேலை மற்றும் அர்த்தமுள்ள ஈடுபாடு வரவேற்கப்படுகின்றன!</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்தை கடைபிடியுங்கள் – ஒவ்வொரு தொடர்பும் மதிப்புமிக்கது!</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>கூட்டாண்மை, தெளிவு, தொடர்பு திறன், படைப்பாற்றல் மற்றும் குழு ஒருங்கிணைவு ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>


        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/Youth') }
        >
          <div className="comp-name">
            Youth Parliament <br />
            இளைஞர் பாராளுமன்றம்
          </div>
          <img src={dance} className="Img" alt="Dance competition" style={{height:'25vh'}} />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/Startup')}
        >
          <div className="comp-name">
            Startup Siruthai<br />
            ஐடியா மணி
          </div>
          <img src={story} className="Img" alt="Short story competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Debate')}
        >
          <div className="comp-name">
            Debate<br />விவாத மேடை
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

        {/* Speech */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Roleplay')}
        >
          <div className="comp-name">
            Roleplay <br /> குழு நாடகம் </div>
          <img src={speech} className="Img" alt="Speech competition" />
        </button>

        {/* Commentary */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Comedy')}
        >
          <div className="comp-name">
            Stand up Comedy <br />  நாலு விஷயம் பேசுவோம்
            நல்ல  விஷயம் பேசுவோம்

          </div>
          <img src={comment} className="Img" alt="Commentary competition" />
        </button>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Interpersonal;
