import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Slide() {
  return (
    <>
      <Container classname="mt-5">
        <Carousel fade indicators controls>
          <Carousel.Item >
            <img
              src="https://images.pexels.com/photos/571252/pexels-photo-571252.jpeg?cs=srgb&dl=pexels-levi-damasceno-571252.jpg&fm=jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://www.dmconsultants.co.in/images/products/firedistinguisher.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://www.chrislewis.co.uk/hs-fs/hubfs/Fire%20Extinguisher%20Types.webp?width=875&height=401&name=Fire%20Extinguisher%20Types.webp"
              className="d-block w-100"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default Slide;
