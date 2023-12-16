import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";



const FireExtinguisher = ({ extinguisher }) => {
  const [quantity, setQuantity] = useState(1);


  const navigate=useNavigate();
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCLick = () => {
  navigate('/CartTotal')
  };
  return (
    <Card>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/rendering-extinguisher_311470-52.jpg"alt={extinguisher.name} />
      <Card.Body>
        <Card.Title>{extinguisher.name}</Card.Title>
        <Card.Text>{extinguisher.description}</Card.Text>
        <Row>
          <Col md={6}>
            <Button onClick={handleDecrement} variant="danger">-</Button>
            <span className="mx-2">{quantity}</span>
            <Button onClick={handleIncrement} variant="success">+</Button>
          </Col>
          <Col md={6}>
            <Button variant="primary" className="float-end" onClick={handleCLick}>Buy Now</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const AddToCart = () => {
  const fireExtinguishers = [
    { id: 1, name: "ABC Fire Extinguisher", description: "Multipurpose fire extinguisher suitable for all fire types.", image: "image_url_1" },
    //{ id: 2, name: "CO2 Fire Extinguisher", description: "Effective against electrical fires and flammable liquids.", image: "image_url_2" },
    // Add more fire extinguishers as needed
  ];

  return (
    <>
    <NavigationBar></NavigationBar>
    <Container>
      <header>
        <h1 className="text-white">Add to Cart</h1>
      </header>
      <section>
        <Row xs={1} md={2} lg={3} className="g-4">
          {fireExtinguishers.map((extinguisher) => (
            <Col key={extinguisher.id}>
              <FireExtinguisher extinguisher={extinguisher} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
    </>
  );
};

export default AddToCart;
