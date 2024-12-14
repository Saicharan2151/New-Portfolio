import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real Time Event Feedback Analysis System"
              description="The Real Time Event Feedback Analysis System is a web-based application designed to streamline event management and enhance attendee engagement. Unlike traditional feedback systems, our platform collects feedback data in real-time during events and instantly presents it to organizers, presenters, and administrators. This innovative approach empowers event organizers to dynamically adjust presentations, content, and agendas based on live feedback, resulting in more engaging, interactive, and impactful events."
              ghLink="https://github.com/Saicharan2151/Real_Time_feedback_analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Full Stack Ordering Platform"
              description="
                            Developed a scalable ordering platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a responsive front-end, secure back-end, Stripe payment integration, and features like user authentication, role-based access, and real-time order management."
              ghLink="https://github.com/Saicharan2151/Tomato"
              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
