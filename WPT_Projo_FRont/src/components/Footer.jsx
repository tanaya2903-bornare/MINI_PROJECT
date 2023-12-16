import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>
              Address: 123 Fire Safety Street, Cityville, State, 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@fireextinguishers.com
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/safety-tips">Safety Tips</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2 bg-secondary">
        <p>&copy; {new Date().getFullYear()} Fire Extinguishers, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer