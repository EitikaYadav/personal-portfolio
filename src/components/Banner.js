import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowDownCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //   const [index, setIndex] = useState(1);
  const toRotate = ["Front End Developer", "Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //   setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      //   setIndex(1);
      setDelta(500);
    } else {
      //   setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Eitika Yadav `}</h1>
            <span className="wrap text">{text}</span>
            <p>
              An enthusiastic fourth-year engineering student with excellent
              time management skills and am a quick learner with a passion for
              technology and continuous growth. Gaining expertise in frontend
              development, crafting  visually  stunning  and responsive web
              interfaces using HTML, CSS, and JavaScript. Proficient in modern
              frameworks: React and NextJS. Committed to performance optimization and code
              maintainence. Eager to embark on a career in the web development
              field.
            </p>
            <button onClick={() => console.log("connect")}>
              <a
                className="btn btn-primary"
                href="CvEitika.pdf"
                download="CvEitika.pdf"
              >
                Donwload CV
                <ArrowDownCircle size={25} />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
