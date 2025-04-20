import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"; // Custom CSS for styling
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        {/* Page Title */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Reach out to us and become a part of our timeless journey.
            </p>
          </Col>
        </Row>

        {/* Contact Form & Info */}
        <Row className="mt-5">
          {/* Contact Form */}
          <Col md={6}>
            <div className="contact-form">
              <h3 className="section-title">Send Us a Message</h3>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                    required
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="send-button">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Information */}
          <Col md={6}>
            <div className="contact-info">
              <h3 className="section-title">Our Details</h3>
              <p>
                <strong>Address:</strong> 123 Heritage Street, Pune, Maharashtra
              </p>
              <p>
                <strong>Email:</strong> contact@rudraarts.com
              </p>
              <p>
                <strong>Phone:</strong> +91 1234567890
              </p>

              {/* Quick Links */}
              <h3 className="section-title">Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>

              {/* WhatsApp Contact */}
              <div className="whatsapp-contact">
                <a href="https://wa.me/1234567890" className="whatsapp-button">
                  <FaWhatsapp className="whatsapp-icon" /> Connect on WhatsApp
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
