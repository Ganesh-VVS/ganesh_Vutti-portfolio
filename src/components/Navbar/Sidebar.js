import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faCode, faProjectDiagram, faCertificate, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="vh-100 d-flex align-items-center position-fixed start-0 top-0" role="navigation">
      <div className="p-2">
        <div id="mainNav">
          <ul className="list-unstyled rounded ms-2">
            <li>
              <a className="vlink rounded border-0" href="/">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </a>
            </li>
            <li>
              <a className="vlink rounded" href="#education" onClick={(e) => scrollToSection(e, "education")}>
                <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
              </a>
            </li>
            <li>
              <a className="vlink rounded" href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
                <FontAwesomeIcon icon={faCode} /> <span>Skills</span>
              </a>
            </li>
            <li>
              <a className="vlink rounded" href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                <FontAwesomeIcon icon={faProjectDiagram} /> <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="vlink rounded" href="#certificates" onClick={(e) => scrollToSection(e, "certificates")}>
                <FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span>
              </a>
            </li>
            <li>
              <a className="vlink rounded" href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                <FontAwesomeIcon icon={faEnvelope} /> <span>Contact Me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
