import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactPortfolio from '../../Assets/Projects/ReactPortfolio.png';
import ThreeDCarouse from '../../Assets/Projects/3D-Carouse.png';
import GitHub from '../../Assets/Projects/GitHubBattle.png';
import Portfolio from '../../Assets/Projects/Portfolio.png';
import MusicPlayer from '../../Assets/Projects/MusicPlayer.png';
import Netflix from '../../Assets/Projects/Netflix.png';

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
              imgPath={ReactPortfolio}
              isBlog={false}
              title="Portfolio"
              description="It is my personal Portfolio website developed using React, Node, CSS3 and Express"
              ghLink="https://github.com/FreakWolf/Portfolio"
              demoLink="https://react-portfolio-freak-wolf.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThreeDCarouse}
              isBlog={false}
              title="3D Carouse"
              description="It's a 3D carouse where you can see the 3D model of my Arts and Drawings. The arts and drawings are displayed in such a way that the photos rotates in a circular fashion."
              ghLink="https://github.com/FreakWolf/3D-Carousel"
              demoLink="https://3d-carousel-freakwolf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GitHub}
              isBlog={false}
              title="GitHub Battel"
              description="It is a web app that allows users to see the most famous GitHub users in the world, and we can make them battle as per their followers."
              demoLink="https://github-battle-freakwolf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="It is a basic Portfolio website developed using HTML, CSS, and Javascript."
              ghLink="https://github.com/FreakWolf/FreakWolf.github.io"
              demoLink="https://freakwolf.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicPlayer}
              isBlog={false}
              title="Music Player"
              description="It is a music player that allows users to play music and listen to the music developed using Android Studio. It lists all the songs that are availabe in the local storage."
              ghLink="https://github.com/FreakWolf/Music_player-Usning-android-studio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="It is a Netflix clone that allows users to search for movies and watch them on Netflix."
              ghLink="https://netflix-clone-freakwolf.netlify.app/"
              demoLink="https://netflix-clone-freakwolf.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
