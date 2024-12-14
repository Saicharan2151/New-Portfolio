import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Charan Dudala </span>
            from <span className="purple">United States.</span>
            <br />
            I am a Software Engineer with over 3 years of experience in backend development.
            <br />
            I hold a Master’s in Computer Science from Auburn University at Montgomery.
            <br />
            My expertise includes cloud platforms, distributed systems, and automated testing.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cloud Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Charan Dudala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
