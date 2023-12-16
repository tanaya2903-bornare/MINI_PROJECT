import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./Footer";
import CardComponent from "./Card";
import Slide from "./Slide";
import NavigationBar from "./NavigationBar";

export function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container >
        <h1 className='text-white'>
          <center>Welcome to Fire Extinguishers World.....</center>
        </h1>
      </Container>

      <Container >
        <Slide />
      </Container>

      <Container classname="mt-4">
        <CardComponent />
      </Container>

      <Footer />
    </>
  );
}
