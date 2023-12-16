import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform server-side validation and payment processing here
    // For now, let's just simulate a successful payment
    alert("Payment successful!");
  };

  const validateForm = () => {
    const errors = {};

    if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      errors.cardNumber = "Invalid card number";
    }

    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate = "Invalid expiry date";
    }

    if (!cvv || cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      errors.cvv = "Invalid CVV";
    }

    if (!name || name.trim() === "") {
      errors.name = "Name is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <Container>
      <header>
        <h1>Payment Gateway</h1>
      </header>
      <section>
        <Row>
          <Col md={6}>
            <Form onSubmit={handlePayment}>
              <Form.Group className="mb-3" controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  isInvalid={!!formErrors.cardNumber}
                />
                <Form.Control.Feedback type="invalid">{formErrors.cardNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formExpiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  isInvalid={!!formErrors.expiryDate}
                />
                <Form.Control.Feedback type="invalid">{formErrors.expiryDate}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  isInvalid={!!formErrors.cvv}
                />
                <Form.Control.Feedback type="invalid">{formErrors.cvv}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name on card"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" disabled={!validateForm()}>
                Pay Now
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default PaymentGateway;
