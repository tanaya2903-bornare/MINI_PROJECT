import { Button, Card, Col,Row } from "react-bootstrap";

export function ProductCard(props) {
    
    return (
      <Col xs={4} lg={4}>
        <Card className="item">
          <Card.Img src={props.product.image_url} alt="" />
          <Card.Body>
            <Card.Title>{props.product.product_name}</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <Row>
              <Col xs={12} md={6}>
                <p className="lead">{props.product.price}</p>
              </Col>
              <Col xs={12} md={6}>
                <Button variant="success" href="/AddToCart">
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
}