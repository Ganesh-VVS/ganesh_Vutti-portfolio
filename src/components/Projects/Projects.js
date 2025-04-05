import React, { useState } from 'react';
import './Projects.css';

// Import the images
import employbility2 from '../../images/employbility2.jpg';
import hotel from '../../images/hotel.jpg';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Designed a user-friendly interface for guests to easily search for available rooms, check rates, and make reservations',
      type: 'Hotel Booking System',
      imageUrl: hotel,
      description: `
        <ul>
        <li>Developed an efficient room management module to track room availability, occupancy, and cleaning status.</li>
        <li>Implemented a robust reservation management system to handle bookings, cancellations, and modifications in real-time.</li>
        <li>Involved in User Interface design using HTML and CSS, writing code for UI functionality, and contributing to overall UI functionality.</li>
        <li>Technologies Used: HTML, CSS, Java, Spring Boot, MySQL.</li>
        
        </ul>
      `,
      githubUrl: 'https://github.com/Ganesh-VVS/Hotel-Booking-Management-System',
      date: '6th Jul - 10th Nov'
    },
    {
      id: 2,
      title: 'Designed a user-friendly web application aimed at assisting job seekers in discovering suitable employment opportunities.',
      type: 'Employability and Consultancy System',
      imageUrl: employbility2,
      description: `
        <ul>
        <li>Project Highlights: An employability and consultancy system website designed to connect job seekers with potential employers and provide consulting services related to career development, recruitment, and human resources.</li>
        <li>Involved in User Interface design using HTML and CSS, writing code for UI functionality, and contributing to overall UI functionality.</li>
        <li>Technologies Used: HTML, CSS, Python, Django, MySQL.</li>
        
        </ul>
      `,
      githubUrl: 'https://github.com/Ganesh-VVS',
      date: '14th July - 15th Dec'
    }
  ];


  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      <div id="projects" className="section">
        <h1><span>PRO</span>J<span>ECTS</span></h1>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-date">{project.date}</div>
              <div className="project-type">{project.type}</div>
              <div className="project-title">{project.title}</div>
            </div>

          ))}
        </div>

        {showModal && selectedProject && (
          <div className="project-modal">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <div className="project-modal-content">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
              <p className="project-type">{selectedProject.type}</p>
              <div className="project-description" dangerouslySetInnerHTML={{ __html: selectedProject.description }}></div>

              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="project-button"> Github</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
