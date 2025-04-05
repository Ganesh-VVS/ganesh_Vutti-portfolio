import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certificates.css';

import awsImage from '../../images/aws.jpg';
import redhatImage from '../../images/redhat.jpg';
import javaImage from '../../images/front-end.png';

function Certificates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="certificates-page">
      <div id="certificates" className="csection">
        <h1><b>Certificates</b></h1>
        <section id="certificates-section" className="certificates-section">
          <div className="container">
            <div className="section-header">
              <p><b>Check out <span>the</span> latest certificates</b></p>

            </div>
            <div className="certificates-content">
              <Slider {...settings}>
                <div className="certificates-item">
                  <div className="single-certificate-item">
                    <div className="certificate-img">
                      <img src={awsImage} alt="AWS Certificate" />
                    </div>
                    <div className="certificate-txt">
                      <h2><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner</a></h2>
                      <p>
                        Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.
                      </p>
                      <p className="certificate-para2">
                        Validation Number : P42Q7NWC0NVE145R.
                      </p>
                      <button className="welcome-btn certificate-btn" onClick={() => window.location.href = 'https://www.credly.com/badges/374455fd-605f-4ccb-bb11-a87cc2d3ffaa/public_url'}>
                        Validate Here
                      </button>
                    </div>
                  </div>
                </div>
                <div className="certificates-item">
                  <div className="single-certificate-item">
                    <div className="certificate-img">
                      <img src={redhatImage} alt="RedHat Certificate" />
                    </div>
                    <div className="certificate-txt">
                      <h2><a href="https://www.redhat.com/en/services/certification/red-hat-certified-enterprise-application-developer">Red Hat Certified Enterprise Application Developer</a></h2>
                      <p>
                        A Red Hat® Certified Enterprise Application Developer possesses the skills, knowledge, and abilities required to to undertake real-world Java development tasks. The credential is earned after successfully passing the Red Hat Certified Enterprise Application Developer exam (EX183). The exam is designed for experienced JSE developers.
                      </p>
                      <p className="certificate-para2">
                        Red Hat Certification ID : 230-170-904.
                      </p>
                      <button className="welcome-btn certificate-btn" onClick={() => window.location.href = 'https://www.credly.com/badges/8837053e-98f1-4f0d-932a-771078999d1f/public_url'}>
                        Validate Here
                      </button>
                    </div>
                  </div>
                </div>
                <div className="certificates-item">
                  <div className="single-certificate-item">
                    <div className="certificate-img">
                      <img src={javaImage} alt="Java Certificate" />
                    </div>
                    <div className="certificate-txt">
                      <h2><a href="https://www.hackerrank.com/skills-verification/frontend_developer_react">Frontend Developer (React) Certificate</a></h2>
                      <p>
                        The React developer assessment evaluates the candidate's proficiency in using ReactJS, a popular front-end JavaScript library, to build scalable and responsive web applications. This assessment is typically administered to candidates for web development roles requiring expertise in ReactJS.
                      </p>
                      <p className="certificate-para2">
                        Role Certifications consist of a specific set of skill assessments using valid HackerRank assessments.
                      </p>
                      <button className="welcome-btn certificate-btn" onClick={() => window.location.href = 'https://www.hackerrank.com/certificates/ad7c6ff6c27e'}>
                        Validate Here
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Certificates;
