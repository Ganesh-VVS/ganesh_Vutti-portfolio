import React, { useEffect } from 'react';
import './Skills.css'; // Create a CSS file for styling

function Skills() {
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        const skillBars = document.querySelectorAll('.skill-level-bar');
        skillBars.forEach((bar) => {
          const percentage = bar.getAttribute('data-percentage');
          bar.style.width = percentage;
          bar.style.transition = 'width 2s ease-in-out';
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="skills" className="section">
      <div className="skills-container">
        <h1 className="skills-main-heading"><b>Technical Skills</b></h1>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-title">
              JAVA <span className="skill-percentage-bar">95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="95%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              REACT <span className="skill-percentage-bar">75%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="75%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              HTML <span className="skill-percentage-bar">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="90%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              CSS <span className="skill-percentage-bar">70%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="70%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              C <span className="skill-percentage-bar">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="80%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              JavaScript <span className="skill-percentage-bar">60%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="60%"></div>
            </div>
            
          </div>
          <div className="skill-item">
            <div className="skill-title">
              SQL <span className="skill-percentage-bar">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="80%"></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-title">
              Python <span className="skill-percentage-bar">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="80%"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-title">
              Data Visualisation <span className="skill-percentage-bar">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="80%"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-title">
              SAP ABAP <span className="skill-percentage-bar">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level-bar" data-percentage="80%"></div>
            </div>
          </div>
        </div>

        <h2 className="skills-main-heading"><b>Soft Skills</b></h2>
        <div class="soft-skills-list">
          <ul>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Attention to Detail</li>
            <li>Communication Skills</li>
            <li>Team Collaboration</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;
