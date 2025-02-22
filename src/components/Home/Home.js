import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div
                style={{
                  width: "100%",
                  paddingBottom: "75%",
                  position: "relative",
                }}
              >
                {/* https://giphy.com/embed/IoP0PvbbSWGAM */}
                <iframe
                  src="https://giphy.com/embed/LHZyixOnHwDDy"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Nice to meet you!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GOH CHEN HOW</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
