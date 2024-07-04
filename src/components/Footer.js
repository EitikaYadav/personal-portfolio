import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/eitika-yadav-71b129231/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.github.com/EitikaYadav">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright @{year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
