import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Spatial.css';

/* images */
import dance     from '../images/art.webp';
import story    from '../images/film.webp';
import podcast  from '../images/fashion.jpg';
import speech1  from '../images/spatial1.jpg';
import speech   from '../images/3d.jpg';
import comment  from '../images/digital.jpg';

const Spatial = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" style={{  height: '30vh' }} />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Visual-Spatial</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
       <div className="h3Div">
         <h3>🎨 Theme: Visual–Spatial Creativity – காட்சி மற்றும் இடைவெளி படைப்பாற்றல்</h3>
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
          <p>🔹 🎨 Showcase Your Visual Creativity:</p>
          <p>Present your ideas through drawings, models, diagrams, or other visual formats – make your imagination visible!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Explain your visual concepts in Tamil or English – clarity matters.</p>

          <p>🔹 🎯 Focus on Design & Creativity:</p>
          <p>Use colors, shapes, patterns, and spatial organization effectively. Original and innovative designs are encouraged!</p>

          <p>🔹 ⏳ Time‑Conscious Presentation:</p>
          <p>Stick to the allotted time – make every visual element count!</p>
          
          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on melody, rhythm, creativity, coordination, and stage presence.</p>
        </div>

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🎨 உங்கள் காட்சி படைப்பாற்றலை வெளிப்படுத்துங்கள்:</p>
          <p>வரையறைகள், மாடல்கள், வரைபடங்கள் அல்லது பிற காட்சித் தளங்களில் உங்கள் கருத்துக்களை வெளிப்படுத்துங்கள் – உங்கள் கற்பனையை காணக்கூடியதாக செய்யுங்கள்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>உங்கள் காட்சி கருத்துக்களை தமிழ் அல்லது ஆங்கிலத்தில் விளக்குங்கள் – தெளிவே முக்கியம்.</p>

          <p>🔹 🎯 வடிவமைப்பு மற்றும் படைப்பாற்றல் மீது கவனம்:</p>
          <p>நிறங்கள், வடிவங்கள், வடிவமைப்புகள் மற்றும் இடவமைப்புகளை திறமையாக பயன்படுத்துங்கள். புதிய மற்றும் 창조மான வடிவமைப்புகள் வரவேற்கப்படுகின்றன!</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்தை கடைபிடியுங்கள் – ஒவ்வொரு காட்சி கூறும் கூறும் மதிப்புமிக்கது!</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>படைப்பாற்றல், தெளிவு, காட்சிப் பார்வை மற்றும் கருத்துகளைச் சிறப்பாக வழங்கும் திறன் ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>


        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/Art')}
        >
          <div className="comp-name">
            Art Competition <br />
            ஓவியப் போட்டி
          </div>
          <img src={dance} className="Img" alt="Dance competition" />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/ShortFilm')}
        >
          <div className="comp-name">
            Short Film contest<br />
            குறும்படப் போட்டி
          </div>
          <img src={story} className="Img" alt="Short story competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/FashionDesigning')}
        >
          <div className="comp-name">
            Fashion Designing <br />கலை	 வடிவமைப்பு
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

        {/* Speech */}
        <button className="card" role="listitem"
        onClick={() => navigate('/ThreeD')}
        >
          <div className="comp-name">
            3D Art <br />முப்பரிமாண கலைப் படைப்புகள் உருவாக்கம் போட்டி  </div>
          <img src={speech} className="Img" alt="Speech competition" />
        </button>

        {/* Commentary */}
        <button className="card" role="listitem"
        onClick={() => navigate('/DigitalPoster')}
        >
          <div className="comp-name">
            Digital Poster Making <br />  டிஜிட்டல் போஸ்டர் வடிவமைப்பு

          </div>
          <img src={comment} className="Img" alt="Commentary competition" />
        </button>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Spatial;
