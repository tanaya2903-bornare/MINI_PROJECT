import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const ProductDetails = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Container className="mt-5" fluid style={{ height: '100vh' }}>
      <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
        <Col md={10}>
          <Card className="shadow-lg">
            <Row>
              <Col md={4}>
                <Card.Img
                  src="https://m.media-amazon.com/images/I/61Idv9zVjeL.jpg"
                  alt="Fire Extinguisher"
                  className="product-image"
                />
              </Col>
              <Col md={8}> 
                <Card.Body>
                  <Card.Title className="product-title" >Power Fire Extinguisher</Card.Title>
                  <Card.Text className="product-description">
                  ISI Marked 1-year warranty
                  Safe for use on live electrical equipment
                  Squeeze grip operation
                  Fully refillable
                  Controlled discharge
                  Supplied with wall bracket
                  Full range of spare parts are available.
                  The extinguisher's versatility is highlighted by its safe application on live electrical equipment, catering to a variety of environments where such risks are present. The intuitive squeeze grip operation ensures ease of use during emergencies, facilitating a controlled and targeted discharge of the extinguishing agent.
                  </Card.Text>
                  <ul className="product-details-list">
                    <li>
                      <strong>Capacity:</strong> 5 kg
                    </li>
                    <li>
                      <strong>Type:</strong> Dry Chemical
                    </li>
                    <li>
                      <strong>Usage:</strong> Suitable for Class A, B, and C fires
                    </li>
                    <li>
                      <strong>Price:</strong> 50000 RS
                    </li>
                  </ul>
                  <div className="product-buttons">
                    <Button variant="primary" className="mr-2">
                      Add to Cart
                    </Button>&nbsp;
                    <Button variant="success">Buy Now</Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ProductDetails;