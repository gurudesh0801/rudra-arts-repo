import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"; // Custom styles for historical design

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <Container className="">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="about-title">Our Legacy</h1>
            <p className="about-subtitle">
              A Journey Through Time: Building Innovation, Preserving Tradition
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <Card className="history-card">
              <Card.Body>
                <Card.Title>The Beginning</Card.Title>
                <Card.Text>
                  Founded in the heart of the digital revolution, our journey
                  started with a vision: to blend cutting-edge technology with
                  the wisdom of the past.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="history-card">
              <Card.Body>
                <Card.Title>The Evolution</Card.Title>
                <Card.Text>
                  Over the years, we have embraced new innovations while staying
                  true to our core values—crafting solutions that stand the test
                  of time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <Card className="history-card">
              <Card.Body>
                <Card.Title>The Beginning</Card.Title>
                <Card.Text>
                  Founded in the heart of the digital revolution, our journey
                  started with a vision: to blend cutting-edge technology with
                  the wisdom of the past.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="history-card">
              <Card.Body>
                <Card.Title>The Evolution</Card.Title>
                <Card.Text>
                  Over the years, we have embraced new innovations while staying
                  true to our core values—crafting solutions that stand the test
                  of time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="text-center mb-5">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-text">
              To create a bridge between history and the future by delivering
              digital solutions that inspire, educate, and empower.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
