import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Musical.css';

/* images */
import budget    from '../images/sing.jpg';
import story    from '../images/instruments.jpg';
import podcast  from '../images/storytelling.jpg';
import speech1 from '../images/music1.jpg'
import tune from '../images/tune.png'
import music from '../images/music.png'

const Musical = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Musical</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
        <h3>🎶 Theme: Musical Harmony – இசையின் ஒற்றுமை</h3>
        <h3>👤 Type: Team/Individual</h3>
       <h3>🗣 Language: Tamil or English</h3>
       <h3>⏱ Time Limit: Will be communicated (Keep it melodious & impactful!)</h3>
      </div>


      {/* ------------------- HIGHLIGHTS TITLE --------------- */}
      <h1 className="Title">📌 Event Highlights:</h1>

      {/* ------------------- HIGHLIGHTS CONTENT ------------- */}
      <div className="highlights">
        {/* ---- English column ---- */}
        <div className="highlights-en">
          <p>🔹 🎵 Showcase Your Musical Talent:</p>
          <p>Perform a song, instrumental piece, or fusion – express emotions through melody and rhythm!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Sing or perform in Tamil or English – let your language bring the tune to life.</p>

          <p>🔹 🎯 Focus on Harmony & Creativity:</p>
          <p>Blend rhythm, tone, and expression beautifully. Original compositions or creative renditions are welcome!</p>

          <p>🔹 ⏳ Time-Conscious Performance:</p>
          <p>Stay within the allotted time – make every note count!</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on melody, rhythm, creativity, coordination, and stage presence.</p>
        </div>

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🎵 உங்கள் இசைத்திறனை வெளிப்படுத்துங்கள்:</p>
          <p>பாடல், வாத்திய இசை அல்லது சங்கமம் — ராகமும் தாளமும் மூலம் உங்கள் உணர்வுகளை வெளிப்படுத்துங்கள்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>தமிழ் அல்லது ஆங்கிலத்தில் பாடலாம் அல்லது இசைக்கலாம் — உங்கள் மொழி இசையில் உயிர் ஊட்டட்டும்.</p>

          <p>🔹 🎯 ஒற்றுமையும் படைப்பாற்றலும் முக்கியம்:</p>
          <p>இசையின் தாளம், சுருதி மற்றும் உணர்வுகளை அழகாக இணைக்குங்கள். புதிய பாடல்கள் அல்லது சுவாரஸ்யமான மாற்றங்கள் வரவேற்கப்படுகின்றன!</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்திற்குள் நிகழ்த்துங்கள் — ஒவ்வொரு நொடியும் மதிப்புடையது!</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>ராகம், தாளம், படைப்பாற்றல், ஒருங்கிணைவு மற்றும் மேடை நடத்தை ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>

        </div>
      </div>
      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/SoloSinging')}
        >
          <div className="comp-name">
            Solo singing competition <br />
            தனிப்பாடல் போட்டி
          </div>
          <img src={budget} className="Img" alt="Budget battle competition"  style={{height:'25vh'}}/>
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/Instruments')}
        >
          <div className="comp-name">
            Instruments <br />
            வாத்திய இசை
          </div>
          <img src={story} className="Img" alt="Treasure hunt competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/MusicalStorytelling')}
        >
          <div className="comp-name">
            Musical Storytelling
competition <br /> இசை கதை சொல்லல் போட்டி
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

           {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/LyricsWriting')}
        >
          <div className="comp-name">
            Lyrics Writing with Tune <br />
            பாடல்வரிகள் எழுதுதல் போட்டி
          </div>
          <img src={tune} className="Img" alt="Treasure hunt competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/MusicAroundYou')}
        >
          <div className="comp-name">
            Music around you <br /> வாழ்க்கையின் இசை
          </div>
          <img src={music} className="Img" alt="Podcast competition" />
        </button>

      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Musical;
