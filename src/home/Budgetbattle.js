import React from 'react';
import Header from './header';
import Footer from './footer';
import './Poetic.css';

/* images */
// import register from '../images/register.jpg';

const Budgetbattle = (props) => {
  return (
    <>
      <Header />

      <main className="poetic-page">
        {/* ---------- TOP SECTION – left text / right picture ---------- */}
        <section className="poetic-top">
          {/* ----- left side – all textual content ----- */}
          <div className="poetic-left">
            <h1 className="Title">{props.title}</h1>

            <div className="h3Div">
              <h3>👤 Type: {props.type} </h3>
              <h3>🗣 Language: {props.Language} </h3>
              <h3>Style: {props.Style}</h3>
              <h3>
                Accepted Forms: {props.AcceptedForms}
              </h3>
            </div>

            <h1 className="Title">📌 Description:</h1>
            <p className="description">
              {props.Description}
            </p>



          <div className="event-details bilingual">
              <div className="event-box">
                <h1 className="Title">📅 Event Details</h1>
                <h3>🏫 Venue: {props.venue}</h3>
                <h3>🕒 Date & Time: {props.date} at {props.time}</h3>
                <h3>👨‍🏫 Coordinator: {props.coordinator}</h3>
              </div>

              <div className="event-box">
                <h1 className="Title">📅 நிகழ்ச்சி விவரங்கள்</h1>
                <h3>🏫 இடம்: {props.இடம்}</h3>
                <h3>🕒 தேதி & நேரம்: {props.தேதி} - {props.நேரம்}</h3>
                <h3>👨‍🏫 ஒழுங்குபடுத்துபவர்: {props.ஒழுங்குபடுத்துபவர்}</h3>
              </div>
            </div>





            <h1 className="Title">{props.Titletamil}</h1>

            <div className="h3Div">
              <h3>👤 வகை: {props.வகை}</h3>
              <h3>🗣 மொழி: {props.மொழி} </h3>
              <h3>✍ பாணி: {props.பாணி}</h3>
              <h3>
                📜 ஏற்கப்படும் வடிவங்கள்: {props.வடிவங்கள்}
              </h3>
            </div>

            <h1 className="Title">📌 விவரம்:</h1>
            <p className="description">
              {props.விவரம்}
            </p>
          </div>

          {/* ----- right side – the register picture ----- */}
        
        </section>

        {/* ---------- CALL‑TO‑ACTION BUTTONS ---------- */}
        <div className="poetry-link">
          <a
            href={props.Formlink}
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/2x/forms_48dp.png"
              alt="Google Forms"
              className="google-icon"
            />
            பதிவு செய்ய இங்கே கிளிக் செய்யவும்/Click here to register
          </a>
        </div>

        

        <p className="note">
          <span>NOTE:</span> {props.Note}
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Budgetbattle;
