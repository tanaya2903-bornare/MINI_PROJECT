import React from 'react';
import { Card, Button, CardGroup, Container } from 'react-bootstrap';

export default function CardExample() {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.dandsfire.com/wp-content/uploads/2015/10/Extinguishers-2.jpg"
            fluid
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button href='#'>Button</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jf1Ern1q8Lg0CtbKuJPj-cRI7TmZgL73EQ&usqp=CAU"
            fluid
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button href='#'>Button</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/b5/af/a4/b5afa4b043b0117fbae9c750203085e3.png"
            width="300px"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button href='#'>Button</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
