import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ids from "../../Assets/Projects/ids.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import video from "../../Assets/Projects/video.png";
import StudentEmpowermentPortal from "../../Assets/Projects/StudentEmpowermentPortal.png";

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
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/vedantsp/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ids}
              isBlog={false}
              title="Intrusion Detection System using Hybrid Deep Learning Models"
              description="To detect the cyberattacks, intrusion detection is crucial. We developed a deep learning-based hybrid ID framework which uses CNN, CNN-LSTM and LSTM-RNN to predict and classify harmful cyber attacks. In order to do this, we tested the system using publicly accessible data and worked to increase the accuracy of the intrusion detection."
              ghLink="https://github.com/vedantsp/Intrusion-Detection-System-Using-CNN-RNN-and-LSTM-Hybrid-Models"
              demoLink="https://drive.google.com/drive/folders/1pRitj7haCIEZkKt1c3WKmKZ9FZ-xZw4A?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudentEmpowermentPortal}
              isBlog={false}
              title="Student Empowerment Portal"
              description=" The Student Empowerment Portal is a comprehensive web platform designed to support students' holistic development and provide valuable resources for their academic and career paths. Used-HTML, CSS, Vanilla JavaScript, NodeJS, Express, MongoDB"
              ghLink="https://github.com/vedantsp/Student-Empowerment-Portal-Full-Stack"
              s
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Second Hand Car Price Predictor"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/vedantsp/Second-hand-Car-Price-Predictor-with-UI"
              demoLink="https://car-price-price.herokuapp.com/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video to Text summarization using ML "
              description="Video summarization provides a concise overview of the content and key events in a video, enabling efficient browsing, retrieval, and understanding of large video collections. This Video Summarization tool first converts video into the text corpus and then uses different models like Gensim, NLTK, LSA, Luhn, Sumy, and TextRank to give us the meaningful summary"
              ghLink="https://github.com/vedantsp/Video-Summarization-using-ML"
               
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
