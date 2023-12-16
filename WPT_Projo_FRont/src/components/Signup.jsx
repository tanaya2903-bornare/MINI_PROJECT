import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveCustomer } from "../services/CustomerService";
import { Link } from "react-router-dom";
import "./Signup.css"; // Import your custom Signup.css file

export function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError(""); // Clear validation error when user types
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Simple password validation (e.g., minimum length)
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.password
    ) {
      setValidationError("Customer already registered");
      return;
    }

    // Additional email validation
    if (!validateEmail(formData.email)) {
      setValidationError("Please enter a valid email address");
      return;
    }

    // Additional password validation
    if (!validatePassword(formData.password)) {
      setValidationError("Password must be at least 8 characters long");
      return;
    }

    try {
      const result = await saveCustomer(formData);
      setFormData({ first_name: "", last_name: "", email: "", password: "" });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <div className="text-center mb-4">
              <img
                src="https://icon2.cleanpng.com/20171220/fuw/extinguisher-png-5a3a637a36ebd4.9770630315137759942256370.jpg"
                alt="Your Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>

            <h1 className="mb-4 text-center">Sign Up</h1>

            <Form.Group className="mb-3">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Firstname"
                name="first_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Lastname"
                name="last_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            {validationError && (
              <Alert variant="danger" className="mt-3">
                {validationError}
              </Alert>
            )}

            <Button
              variant="primary"
              type="submit"
              className="btn w-100"
              onClick={handleSubmit}
            >
              Register
            </Button>

            <Form.Text className="register-link mt-3 text-center">
              <p className="mb-0">
                Already have an account? <Link to="/">Login</Link>
              </p>
            </Form.Text>
          </Form>

          {isSubmitted && (
            <Alert variant="success" className="mt-3">
              Customer Registered
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}