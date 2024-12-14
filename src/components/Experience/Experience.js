import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Include the Particle component


// Add image paths
import NestorImage from "../../Assets/Nestor.png";
import AuburnImage from "../../Assets/Auburn.jpeg";
import TCSImage from "../../Assets/TCS.jpeg";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Nestor Technologies",
      duration: "Jul '24 – Present",
      location: "New Jersey, United States",
      description: [
        "Developed and maintained backend systems using C++ and Go.",
        "Built and optimized data pipelines using Kubernetes and Kafka.",
        "Designed and executed test cases for APIs using DevOps practices.",
      ],
      image: NestorImage,
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Auburn University",
      duration: "Jan '23 – Dec '23",
      location: "Montgomery, United States",
      description: [
        "Delivered lectures on programming fundamentals and backend development.",
        "Developed curriculum content linking academic concepts to practical cloud applications.",
        "Guided students in writing test cases, emphasizing best practices.",
      ],
      image: AuburnImage,
    },
    {
      role: "Software Developer",
      company: "Tata Consultancy Services",
      duration: "May '20 – Jul '22",
      location: "Hyderabad, India",
      description: [
        "Built and tested backend infrastructure for a healthcare data platform.",
        "Automated workflows with Twilio and integrated GCP solutions.",
        "Documented technical solutions and created automated tests.",
      ],
      image: TCSImage,
    },
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle /> {/* Add animated background */}
        <Row>
          <h2 className="section-heading">Experience</h2>
        </Row>
        <Row className="experience-list">
          {experiences.map((exp, index) => (
            <Col key={index} md={12} className="experience-item">
              <Row>
                <Col md={3} className="experience-image">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="experience-logo"
                  />
                </Col>
                <Col md={9} className="experience-content">
                  <h3>{exp.role} - {exp.company}</h3>
                  <p>{exp.duration} | {exp.location}</p>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
