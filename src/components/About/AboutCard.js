import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedant Pimple, </span>
            currently <span className="purple"> harnessing the power of code to create innovative solutions.</span>
            <br /> I am a Graduate student pursuing Masters in Computer Science (MSCS)
            at Syracuse University, New York.
            <br />
                       
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Standup Comedy
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Techical Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embracing the power to shape the digital realm with resilience and innovation"{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
