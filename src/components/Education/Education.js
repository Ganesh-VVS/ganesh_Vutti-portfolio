// Education.js
import React from 'react';
import './Education.css';

function Education() {
  return (
    <div id="education" className="education-section">
      <h1 className="section-title"><b>Education</b></h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2021 - 2025</span>
            <h2>Koneru Lakshmaiah Educational Foundation, Guntur</h2>
            <p>Bachelor of Technology in Computer Science and Engineering (Honours)</p>
            <p className="education-cgpa">CGPA: 9.4</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2019 - 2021</span>
            <h2>Sri Sarada Educational Institutions, Vijayawada</h2>
            <p>Intermediate</p>
            <p>Board of Intermediate Education, Andhra Pradesh (BIEAP)</p>
            <p className="education-cgpa">CGPA: 7.6 (766 Marks)</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2016 - 2019</span>
            <h2>St. John's E.M High School</h2>
            <p>10th grade</p>
            <p>Central Board of Secondary Education</p>
            <p className="education-cgpa">CGPA: 8.0 (80%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
