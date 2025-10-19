import './home.css';
import leftLogo from '../images/left-logo.png';
import rightLog from '../images/right-logo.png';


function Header(){
    return(
        <div className="header-bar" id='home'>
        <img src={leftLogo} alt="Left Logo" className="header-logo" />
        <div className="header-center">
          <div className="tamil-header">அண்ணா பல்கலைக்கழகம், சென்னை</div>
          <div className="eng-header">University College of Engineering, Tindivanam</div>
          <div className="tamil-subheader">பல்கலைக்கழக பொறியியல் கல்லூரி, திண்டிவனம்</div>
          <div className="eng-subheader">(A Constituent College of Anna University, Chennai)</div>
          <div className="aicte">
            <span className="tnea">TNEA CODE : 1014</span> | Approved by AICTE : <span className="aicte-code">1-4670706161</span>
          </div>
        </div>
        <img src={rightLog} alt="Right Logo" className="header-logo" />
      </div>
    )
}

export default Header;