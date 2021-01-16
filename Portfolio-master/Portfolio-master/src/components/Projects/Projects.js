import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/shark.png";
import emotion from "../../Assets/Projects/spark.png";
import medhub from "../../Assets/Projects/fb.png";
import eeg from "../../Assets/Projects/fb.png";
import suicide from "../../Assets/Projects/laf.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SHARKONA"
              description="To help organizations and institutions that want to organize an event and adding it on the website , to  enable useres  book it to participate  "
              link="https://github.com/belal-abuhani/sharkona_v2"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SPARKLES"
              description="for booking cleaning services, user
              can add tips for other users , buy
              cleaning products.
              "
              link="https://github.com/belal-abuhani/pythons"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="LAFLEFNE"
              description="A MERN stack project that enables the user book a trip , and check the weather before booking .
              "
              link="https://github.com/belal-abuhani/LafLefne-V2"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="FACEBOOK-PROFILE"
              description=" static facebook profile on mobile wiith the reactions on posts  "
              link="https://belal-abuhani.github.io/FB-profile/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="Making Healthcare Easy and Hassle Free"
              description="Extract, store and retrieve medical information from Medical Reports using OCR.
              Display the information online Graphically for the use of Patients as well as Doctors only with Authorised Access.
              Giving an complete health Analytics to doctors of Patients as well as Doctors preseving user privacy."
              link="https://github.com/soumyajit4419/MedHub_360"
            />
          </Col> */}
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p> */}
        {/* <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
