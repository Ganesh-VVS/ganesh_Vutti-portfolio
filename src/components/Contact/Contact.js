import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="section">
      <h1><b>Contact Me</b></h1>
      <br></br>
      <br></br>
      <div className="contact-info">
        <div className="info-item">
          <span className="material-symbols-outlined icon address-icon">location_on</span>
          <div>
            <h2>Address</h2>
            <p>Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
        <div className="info-item">
          <span className="material-symbols-outlined icon email-icon">email</span>
          <div>
            <h2>Email</h2>
            <p>2100030565cseh@gmail.com</p>
          </div>
        </div>
        <div className="info-item">
          <span className="material-symbols-outlined icon phone-icon">phone</span>
          <div>
            <h2>Phone</h2>
            <p>+91 9177021480</p>
          </div>
        </div>
      </div>


      <div className="aquarium">
        <div className="aquarium__table"></div>
        <div className="aquarium__aquarium">
          <div className="aquarium__water"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
          <div className="aquarium__bubble"></div>
        </div>
        <div className="aquarium__drops">
          <div className="aquarium__drop"></div>
          <div className="aquarium__water-column"></div>
          <div className="aquarium__splash"></div>
          <div className="aquarium__splash"></div>
        </div>
        <div className="aquarium__sponge-box">
          <div className="aquarium__body">
            <div className="aquarium__body-stripe"></div>
            <div className="aquarium__body-hole"></div>
          </div>
          <div className="aquarium__face">
            <div className="aquarium__mouth"></div>
            <div className="aquarium__smile"></div>
          </div>
        </div>
      </div>
      <section className="wrapper">
        <a href="https://www.facebook.com/ganesh.vtt" className="ibutton">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/ganesh_vutti/" className="ibutton">
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
          <span>Instagram</span>
        </a>
        <a href="https://x.com/Ganesh_Vutti480" className="ibutton">
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
          <span>Twitter</span>
        </a>
        <a href="https://www.linkedin.com/in/vutti-venkata-sai-ganesh-74981327b/" className="ibutton">
          <div className="icon">
            <i className="fab fa-linkedin"></i>
          </div>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Ganesh-VVS" className="ibutton">
          <div className="icon">
            <i className="fab fa-github"></i>
          </div>
          <span>Github</span>
        </a>
      </section>
      <div className="portfolio-info">
        <p><b>Ganesh Vutti's Portfolio</b></p>
        <p><b>© 2024 Ganesh Vutti. All rights reserved.</b></p>
      </div>
    </div>
  );
}

export default Contact;
