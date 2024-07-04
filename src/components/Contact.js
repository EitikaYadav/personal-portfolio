import { Container, Row, Col } from "react-bootstrap";
  import contactImg from "../assets/img/contact-img.svg";

export const Contact =()=>{
    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            
              <Col md={6}>
                <img src={contactImg} alt="Contact Us" />
              </Col>
              <Col md={6}>
                <h2>Get In Touch</h2>
                <form action="https://formspree.io/f/mrbzznqd" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        required
                        autoComplete="off"
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        placeholder="Email"
                        name="Email"
                        required
                        autoComplete="off"
                      />
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea
                        name="Message"
                        cols="30"
                        rows="10"
                        required
                        autoComplete="off"
                        placeholder="Send Me A Message..."
                      ></textarea>
                    </Col>

                    <input type="submit" value="send" />
                  </Row>
                </form>
              </Col>
            
          </Row>
        </Container>
      </section>
    );
};
