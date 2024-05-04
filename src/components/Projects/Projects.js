import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.PNG";
import chatify from "../../Assets/Projects/chatify.PNG";
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
              title="FARHANG"
              description="E-commerce platform for art enthusiasts to buy handicrafts and cultural attires"
              ghLink="https://github.com/HafsaQureshi1/Final_Project_Hafsa_Ali_Sadia"
              demoLink="https://farhang-official.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather classification"
              description="A weather classification model trained on CNN"
              ghLink="https://github.com/Aliraza-ui3/Weather-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Login/Register form"
              description="Login and register form using react"
              ghLink="https://github.com/Aliraza-ui3/Log_in-Page"
              demoLink="https://log-in-page-ten.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
