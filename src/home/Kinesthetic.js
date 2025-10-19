import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './Kinesthetic.css';

/* images */
import dance     from '../images/solo.jpg';
import story    from '../images/group.jpg';
import podcast  from '../images/martial.jpg';
import speech1  from '../images/kine.webp';
import speech   from '../images/mime.webp';
import comment  from '../images/puppet.jpg';

const Kinesthetic = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ------------------- ILLUSTRATION -------------------- */}
      <img src={speech1} className="speech" alt="Speech illustration" style={{  height: '30vh' }} />

      {/* ---------------------- PAGE TITLE ------------------- */}
      <h1 className="Title" id='head-title'> Bodily-Kinesthetiv</h1>

      {/* ---------------------- COMPETITION INFO ------------ */}
      <div className="h3Div">
       <div className="h3Div">
         <div className="h3Div">
            <h3>🤸‍♂ Theme: Bodily–Kinesthetic Creativity – உடல் மற்றும் இயக்கப்படைப்பாற்றல்</h3>
            <h3>👤 Type: Team/Individual</h3>
            <h3>🗣 Language: Tamil or English</h3>
            <h3>⏱ Time Limit: Will be communicated (Keep it energetic & impactful!)</h3>
          </div>

        </div>

      </div>


      {/* ------------------- HIGHLIGHTS TITLE --------------- */}
      <h1 className="Title">📌 Event Highlights:</h1>

      {/* ------------------- HIGHLIGHTS CONTENT ------------- */}
      <div className="highlights">
        {/* ---- English column ---- */}
        <div className="highlights-en">
          <p>🔹 🤸‍♂ Showcase Your Physical Creativity:</p>
          <p>Express your ideas through dance, gestures, role-play, or other physical activities – let your body tell the story!</p>

          <p>🔹 🗣 Choice of Language:</p>
          <p>Explain or narrate your performance in Tamil or English – your words support your movements.</p>

          <p>🔹 🎯 Focus on Expression & Coordination:</p>
          <p>Combine movement, timing, and creativity effectively. Original choreography or innovative physical storytelling is encouraged!</p>

          <p>🔹 ⏳ Time‑Conscious Performance:</p>
          <p>Stick to the allotted time – every move counts!</p>

          <p>🔹 🏆 Impress the Judges:</p>
          <p>Judging will be based on creativity, clarity of expression, coordination, energy, and stage presence.</p>

        </div>

        {/* ---- Tamil column ---- */}
        <div className="highlights-ta">
          <p>🔹 🤸‍♂ உங்கள் உடல் படைப்பாற்றலை வெளிப்படுத்துங்கள்:</p>
          <p>நடனம், சைன் மொழி, வேடமிடல் அல்லது பிற உடல்நடை நடவடிக்கைகள் மூலம் உங்கள் கருத்துக்களை வெளிப்படுத்துங்கள் – உங்கள் உடல் கதை சொல்லட்டும்!</p>

          <p>🔹 🗣 மொழி தேர்வு:</p>
          <p>உங்கள் நிகழ்ச்சியை தமிழ் அல்லது ஆங்கிலத்தில் விளக்குங்கள் அல்லது விவரியுங்கள் – உங்கள் வார்த்தைகள் உங்கள் இயக்கங்களை ஆதரிக்கட்டும்.</p>

          <p>🔹 🎯 வெளிப்பாடு மற்றும் ஒருங்கிணைப்பில் கவனம்:</p>
          <p>இயக்கம், நேரம் மற்றும் படைப்பாற்றலை திறமையாக இணைக்கவும். புதுமையான நடன அமைப்புகள் அல்லது தனித்துவமான உடல் கதை சொல்லல் encouraged!</p>

          <p>🔹 ⏳ நேரக் கட்டுப்பாடு:</p>
          <p>ஒதுக்கப்பட்ட நேரத்தை கடைபிடியுங்கள் – ஒவ்வொரு இயக்கமும் மதிப்புமிக்கது!</p>

          <p>🔹 🏆 மதிப்பீட்டு அளவுகோல்கள்:</p>
          <p>படைப்பாற்றல், வெளிப்பாடு தெளிவு, ஒருங்கிணைவு, சக்தி மற்றும் மேடை நடத்தை ஆகியவற்றின் அடிப்படையில் மதிப்பிடப்படும்.</p>


        </div>
      </div>

      {/* ------------------- COMPETITION GRID --------------- */}
      <div className="grid" id="compGrid" role="list">
        {/* Poetry */}
        <button
          className="card"
          role="listitem"
          onClick={() => navigate('/DanceSolo')}
        >
          <div className="comp-name">
            Dance - Solo  <br />
         தனி நடனம்
          </div>
          <img src={dance} className="Img" alt="Dance competition" />
        </button>

        {/* Short story */}
        <button className="card" role="listitem"
         onClick={() => navigate('/GroupDance')}
        >
          <div className="comp-name">
            Dance - Group <br />
            குழு நடனம்
          </div>
          <img src={story} className="Img" alt="Short story competition" />
        </button>

        {/* Podcast */}
        <button className="card" role="listitem"
        onClick={() => navigate('/MartialArts')}
        >
          <div className="comp-name">
            Performative Martial Arts
competition <br />தற்காப்பு கலை போட்டி
          </div>
          <img src={podcast} className="Img" alt="Podcast competition" />
        </button>

        {/* Speech */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Mime')}
        >
          <div className="comp-name">
            Mime <br />
                மௌன நாடகம்    </div>
          <img src={speech} className="Img" alt="Speech competition"  style={{height:'29vh'}}/>
        </button>

        {/* Commentary */}
        <button className="card" role="listitem"
        onClick={() => navigate('/Puppet')}
        >
          <div className="comp-name">
            Puppetry <br />பொம்மலாட்டம்
          </div>
          <img src={comment} className="Img" alt="Commentary competition" />
        </button>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default Kinesthetic;
