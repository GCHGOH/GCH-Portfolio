import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Goh Chen How </span>
            from <span className="purple"> Selangor, Malaysia</span>
            <br />
            I am currently employed as a software developer at Cyber Village
            Sdn. Bhd.
            <br />
            I have completed Bachelor Degree of Computer Science-Honours in
            Universiti Tunku Abdul Rahman
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You never know if you never try"{" "}
          </p>
          <footer className="blockquote-footer">Ares</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
