import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Linguistic from "./Event/Lingusitic";
// import Logical from "./Event/Logical";
// import Musical from "./Event/Musical";
// import Kinesthetic from "./Event/Kinesthetic";
// import Spatial from "./Event/Spatial";
// import Interpersonnal from "./Event/Interpersonal";
// import Nature from "./Event/Nature";

import Home from "./home/home.js";
import Linguistic from "./home/Linguistic.js";
import Poetic from "./home/Poetic.js";
import ShortStory from "./home/Short-story.js";
import Bodcast from "./home/Bodcast.js";
import Speech from "./home/Speech.js";
import Commentary from "./home/Commentary.js";
import Logical from "./home/Logical.js";
// import Musical from "./home/Musical.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linguistic" element={<Linguistic />} />
        <Route
          path="/poetic"
          element={
            <Poetic
              title="🎙 Poetry Contest – கவிதைப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Style="Free Style – Classical or Modern"
              AcceptedForms="All forms of poetry – Haiku, Long Form,
                Traditional, Free Verse, New Age, Experimental, etc."
              Description="Participants are invited to submit original poems in either Tamil or English. You are free to explore any form or style – be it haiku, long form, or even new‑age formats. The focus is on creativity, expression, and originality. Let your poetic imagination fly!"
              Titletamil="🎙 கவிதைப் போட்டி – Poetry Contest"
              வகை=" தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              பாணி="சுதந்திர பாணி – பாரம்பரியமாகவோ, நவீனமாகவோ"
              வடிவங்கள்="ஹைக்கூ, நீண்ட கவிதை, பாரம்பரிய
                கவிதை, புதிய வகை, இலக்கணக்கேடான கவிதைகள் உள்ளிட்ட அனைத்து
                வடிவங்களும்"
              விவரம்="பங்கேற்பாளர்கள் தமிழ் அல்லது ஆங்கிலத்தில் தாங்கள் இயற்றிய அசல்
              கவிதைகளை சமர்ப்பிக்கலாம். ஹைக்கூ, நீண்ட வடிவம் அல்லது புதிய
              பாணி என எந்தவொரு கவிதை வடிவத்திலும் நீங்கள் எழுதலாம். படைப்பாற்றல்,
              உணர்வுப் பொழிவு மற்றும் தனிப்பட்டக் குரல்தான் முக்கியம். உங்கள் கவிதை
              எண்ணங்களை பறக்க விடுங்கள்!"
              Formlink="https://forms.gle/9Fk7aPzpVu6ykWWE9"
              venue="Multi-purpose Hall(FF16)"
              date="22.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="22.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்
"         Note="Poetry can be written in Tamil or English. All forms are welcome — classical, modern, haiku, long form, traditional, experimental, or new-age styles."
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/shortstory"
          element={
            <ShortStory
              title="📖 Short Story Writing – சுருக்கக் கதைப்போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="Migration – இடப்பெயர்"
              Style="Narrative or Creative Writing"
              AcceptedForms="Short story writing (Tamil/English) based on given social theme"
              Description="Participants must craft an original short story centered on the theme of migration. Stories can be in Tamil or English and should reflect human experiences, emotions, and imagination. Use your creativity to bring characters and journeys to life."
              Titletamil="📖 சுருக்கக் கதைப்போட்டி – Short Story Contest"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="சமூகத்தை ஒட்டிய ஒரு தலைப்பை ஒட்டிய ஒரு சிறுகதை எழுதும் போட்டி"
              தைலம்="இடப்பெயர்"
              விவரம்="‘இடப்பெயர்’ என்ற தலைப்பை மையமாகக் கொண்டு ஒரு சிறுகதை எழுத வேண்டும். கதை மனித உணர்வுகள், அனுபவங்கள், மற்றும் சிந்தனைகளை வெளிப்படுத்த வேண்டும். உங்கள் கற்பனை மூலம் ஒரு வாழ்க்கை பயணத்தை உருவாக்குங்கள்."
              Formlink="https://forms.gle/Mz2DLUSjbKCQQ3pz6"
              venue="Multi-purpose Hall(FF16)"
              date="22.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Stories must be original. Maximum word limit: 1000 words."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="22.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்
"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Bodcast"
          element={
            <Bodcast
              title="🎧 Podcast Competition – போட்காஸ்ட் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="Democracy in Today’s India – ஜனநாயகம் இன்றைய இந்தியாவில்"
              Style="Audio Presentation / Storytelling"
              AcceptedForms="Record & play 1-minute Tamil/English audio describing a given theme. The podcast can be one person monologue or two person dialogue."
              Description="Create a one-minute Tamil or English podcast based on the theme of democracy in modern India. You can perform solo or as a duo. Use your voice, ideas, and storytelling to express how democracy shapes our world today."
              Titletamil="🎧 போட்காஸ்ட் போட்டி – Podcast Competition"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              வடிவங்கள்="ஒருவர் அல்லது இருவர் பேசக்கூடியதாக ஒரு நிமிடம்  நீளமுள்ள ஒரு பொட்காஸ்ட்டை பதிவு செய்ய வேண்டு"
              தைலம்="ஜனநாயகம் இன்றைய இந்தியாவில்"
              விவரம்="இன்றைய இந்தியாவின் ஜனநாயகத்தைப் பற்றி ஒரு நிமிட ஆடியோ பதிவு உருவாக்குங்கள். தனியாக அல்லது இருவர் சேர்ந்து பேசலாம். ஜனநாயகத்தின் மகத்துவத்தை வெளிப்படுத்தும் ஒரு குரலாக இருங்கள்."
              Formlink="https://forms.gle/y1Pm7wqwV1gLb2RS6"
              venue="Multi-purpose Hall(FF16)"
              date="22.10.2025"
              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Audio must be in MP3 format. Maximum duration: 1 minute."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="22.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Speech"
          element={
            <Speech
              title="🗣 Speech Contest – பேச்சுப் போட்டி"
    type="Individual"
    Language="Tamil or English"
    Theme="My Dream World – என் கனவு உலகம்"
    Style="Speech / Oral Presentation"
    Description="Deliver a powerful speech in Tamil or English on the topic ‘My Dream World’. Focus on your aspirations, vision, and creative thoughts for a better future. Your words should inspire change and imagination."
    Titletamil="🗣 பேச்சுப் போட்டி – Speech Contest"
    வகை="தனிப்பட்ட (Individual)"
    மொழி="தமிழ் அல்லது ஆங்கிலம்"
    தைலம்="என் கனவு உலகம்"
    விவரம்="‘என் கனவு உலகம்’ என்ற தலைப்பில் ஒரு உற்சாகமான பேச்சு வழங்குங்கள். உங்கள் கனவுகள், கற்பனை, மற்றும் சிறந்த எதிர்காலக் காட்சிகளை வெளிப்படுத்துங்கள். உங்கள் சொற்கள் மாற்றத்தைத் தூண்டட்டும்."
    Formlink="https://forms.gle/AQnZnt8QBcGRrTh96"
     பாணி="பேச்சு / உரை"
     வடிவங்கள்="கொடுக்கப்பட்ட தலைப்பை ஒட்டி கொடுக்கப்பட்ட கால அளவில் தமிழிலோ ஆங்கிலத்திலோ பேச வேண்டும்."
    AccepteForms="Speech about a given theme in Tamil/English."
    venue="Mini Seminar Hall(GF18)"
    date="16.10.2025"
    time="11:00 AM – 12:00 PM"
    coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
    Note="Speeches must be 3–5 minutes. Judges will assess content, delivery, and creativity."
    இடம்="மினி செமினார் ஹால் (GF18)"
    தேதி="16.10.2025"
    நேரம்="காலை 11:00 – 12:00"
    ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route
          path="/Commentary"
          element={
            <Commentary
              title="🎙 Commentary Contest – வர்ணனைப் போட்டி"
              type="Individual"
              Language="Tamil or English"
              Theme="From Home to College – வீட்டிலிருந்து கல்லூரி வரை"
              Style="Oral Commentary / Speech"
              AcceptedForms="commentary describing your journey from home to college, this can be your actual travel from home to college or describing the transition from school to college life, or any other meanings too"
              Description="Share your commentary about your journey from home to college — either literally or symbolically. Capture the emotions, experiences, and transition of entering a new phase of life. Express it with liveliness and creativity."
              Titletamil="🎙 வர்ணனைப் போட்டி – Commentary Contest"
              வகை="தனிப்பட்ட (Individual)"
              மொழி="தமிழ் அல்லது ஆங்கிலம்"
              தைலம்="வீட்டிலிருந்து கல்லூரி வரை"
              வடிவங்கள்="நடத்தல் உண்ணுதல் மற்றும் உறங்குதல் போன்ற தலைப்புகள் நடுவர்களால் வழங்கப்பட்டு அதற்கான வர்ணனை போட்டியாளர்களால் வழங்கப்பட வேண்டும்"
              விவரம்="வீட்டிலிருந்து கல்லூரி வரையிலான உங்கள் பயணத்தை வர்ணியுங்கள் — அது உண்மையானதோ அல்லது உணர்வுப்பூர்வமானதோ இருக்கலாம். உங்கள் அனுபவங்களையும் உணர்வுகளையும் படைப்பாற்றலுடன் வெளிப்படுத்துங்கள்."
              Formlink="https://forms.gle/nkqGHs7LZebcjjZeA"
              venue="Multi-purpose Hall(FF16)"
              date="22.10.2025"
              பாணி="வாய்மொழி வர்ணனை / பேச்சு"

              time="Submission on or Before 21.10.2025"
              coordinator="Dr.S.Sivasubraminiyan., Prof.&HoD.,Science and Humanities."
              Note="Maximum duration: 4 minutes. Creativity and expression will be evaluated."
              இடம்="பல்நோக்கு மண்டபம் (FF16)"
              தேதி="22.10.2025 சமர்ப்பிக்கும் கடைசி நாள்: 21.10.2025 க்குள்"
              ஒழுங்குபடுத்துபவர்="டா. எஸ். சிவசுப்பிரமணியன், பேராசிரியர் மற்றும் தலைமை, அறிவியல் மற்றும் மனிதவியல் துறை"
            />
          }
        />

        <Route path="/logical" element={<Logical />} />
         
        {/*<Route path="/musical" element={<Musical />} />
        <Route path="/kinesthetic" element={<Kinesthetic/>} />
        <Route path="/spatial" element={<Spatial/>} />
        <Route path="/interpersonnal" element={<Interpersonnal/>} />
        <Route path="/nature" element={<Nature/>} />*/}
      </Routes>
    </Router>
  );
}

export default App;
