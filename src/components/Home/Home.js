import React from 'react';
import './Home.css';
import profileImage from '../../images/profile1.png';
// Remove unused import or use it
// import { useNavigate } from 'react-router-dom';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Certificates from '../Certificates/Certificates';
import Contact from '../Contact/Contact';
import pattern from '../../images/pattern.png';
import homeeg from '../../images/home-bg.png';

function Home() {
  // Remove unused variable
  // const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Correct path to the resume file in the public directory
    link.download = 'resume.pdf';

    // Logging for debugging
    console.log('Download link:', link.href);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="home" className="home-section" >
      <div className="home-content">
        <div className="left-content">
          <h1><b className="btn-shine">Vutti Venkata Sai Ganesh</b></h1>
          <h2>Front-end <span>Developer, SAP Consultant </span> and Data <span>Analyst</span></h2>
          <p>Solution-oriented mindset, problem-solving enthusiasm, positive attitude towards challenges, overcoming obstacles with enthusiasm.</p>
          <div className="buttons">
            <button className="hire-me" onClick={() => scrollToSection("contact")}>Hire Me</button>
            <div className="cont">
              <button className="btn download-Resume" onClick={downloadResume}>
                <span>Download Resume</span>
                <img src={homeeg} alt="Download icon" height="62" width="62" />
              </button>
            </div> 
          </div>
        </div>

        <div className="right-content">
          <img src={pattern} alt="Background pattern" className='patt' />
          <img src={profileImage} alt="Profile of Vutti Venkata Sai Ganesh" className="profile-image" />
        </div>

      </div>

      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
export default Home; 
