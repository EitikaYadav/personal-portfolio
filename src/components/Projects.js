import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cImg1 from "../assets/img/c-img1.jpeg";
import cImg2 from "../assets/img/c-img2.jpeg";
import cImg3 from "../assets/img/c-img3.png";
import cImg4 from "../assets/img/c-img4.png";


export const Projects = () => {
  const projects = [
    {
      title: "EA-Store : Ecommerce Website",
      description:
        "A fully responsive and dynamic e-commerce website by react with intuitive navigation and authentication features.",
      imgUrl: projImg1,
    },
    {
      title: "Online Auction System",
      description:
        "Designed and developed an online auction system with secure bidding, real-time updates, and user-friendly interface for a seamless auction experience.",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio",
      description:
        "Developed a responsive personal portfolio website showcasing my projects, skills, and experiences.",
      imgUrl: projImg4,
    },
    {
      title: "Live Weather Monitor",
      description:
        "Created a real-time weather monitoring app with user-friendly interface for seamless weather updates using ReactJS.",
      imgUrl: projImg6,
    },
    {
      title: "HeavenCafe:Food Delivery Website",
      description: "Developed a food delivery app where user can order food online with the features of listing delivery person,restaurants,google maps etc. using NextJS",
      imgUrl: projImg5,
    },
    {
      title: "Dynamic Quote Generator",
      description: "Developed a dynamic quote generator website using HTML-CSS and JavaScript and Application fetches quotes from a remote API, providing users with a fresh quote each time they interact",
      imgUrl: projImg3,
    },
  ];

  const Certifications = [
    {
      title: "Front End Development - Coursera",
      imgUrl: cImg3,
    },
    {
      title: "Database Programming in SQL - Oracle Academy",
      imgUrl: cImg4,
    },
    {
      title: "Introduction to Programming through C++ -NPTEL",
      imgUrl: cImg2,
    },
    {
      title: "Introduction to IOT -NPTEL",
      imgUrl: cImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects & Certifications</h2>
            <p>
              In this portfolio section, you will find my projects and certifications,
              showcasing my dedication and the practical experience I have
              gained.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Experiences</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content
                id="slideInUp"
                
              >
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {Certifications.map((crtfcte, index) => {
                      return <ProjectCard key={index} {...crtfcte} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    As a Fresher, I am excited to start my journey in frontend
                    development, bringing fresh ideas and a strong desire to
                    learn. I’m eager to apply my skills in real-world projects.
                    Thriving in collaborative environments, I look forward to
                    work with experienced developers to hone my skills. My goal
                    is to contribute to innovative projects and continuously
                    improve my coding abilities in the fast-evolving field of
                    frontend development.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bcir"></img>
    </section>
  );
};
