import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    // Your form submission logic here
    console.log("Form submitted:", name, email, message);
  };

  return (
    <>
    <NavigationBar/>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <h1 className="mb-4 text-center">Contact Us</h1>

            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              className="btn w-100"
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUs;