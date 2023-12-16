import { Alert, Col, Container, Row } from "react-bootstrap";
//import { Contact } from "./components/Contact";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import NavigationBar from "./NavigationBar";

export default function About(){
    return(
      <>
      <NavigationBar></NavigationBar>
        <Container>
          
            <Alert variant="success mt-5">
                <h1><center>ABOUT US </center></h1>
            </Alert>

            <Row>
                <Col lg={4}>
                <h3 className="text-white"> Mission</h3>
                <p className="text-white">At Track Me , our mission is to empower individuals to lead healthier and more active lives by providing accessible and personalized fitness solutions. We believe that everyone deserves the opportunity to achieve their wellness goals, regardless of their fitness level or lifestyle.</p>
                </Col>
                <Col lg={4}>
                <h3 className="text-white"> Vision</h3>
                <p className="text-white">Our vision is to create a global community where fitness is enjoyable, inclusive, and sustainable. We aspire to be the go-to platform that inspires and supports individuals on their fitness journey, fostering a positive impact on their overall well-being.</p>
                </Col>
                <Col lg={4}>
                <h3 className="text-white">Our History</h3>
                <p className="text-white">Track Me was founded in 2023 by VAZ Foundation with a passion for making fitness accessible to everyone. Recognizing the challenges people face in maintaining a consistent exercise routine, we set out to create an app that combines cutting-edge technology with user-friendly design to simplify the path to a healthier lifestyle.</p>

                </Col>
            </Row>
         
           <Container>
           <Row>
        <Col lg={4}>
        <MDBCard>
     <MDBCardImage src={require('../Images/23094052089__Sushant_JH (1).jpeg')} alt='...' position='top' width="300px" height="450px"/> 
      <MDBCardBody>
        <MDBCardText>
        </MDBCardText>
        <b>Name: Sushant Borkar<br></br>
        Roll No:23094052089<br></br>
        Contact:9404071913<br></br>
        Email:<u>borkar.sushant3@gmail.com</u><br></br>
        Centre: JUHU</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    <Col lg={4}>
    <MDBCard>
       <MDBCardImage src={require('../Images/230940320120_Tanaya_KH.png')} alt='...' position='top' width="300px" height="450px" /> 
      <MDBCardBody>
      <b >Name: Tanaya Bornare<br></br>
        Roll No:230940320120<br></br>
        Contact:88051646010<br></br>
        Email:<u>bornaretanaya@gmail.com</u><br></br>
        Centre: Kharghar</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    <Col lg={4}>
    <MDBCard>
       <MDBCardImage src={require('../Images/23094052089__Sourabh_JH (2).jpeg')} alt='...' position='top' width="300px" height="450px" /> 
      <MDBCardBody>
      <b>Name: Sourabh Shelar<br></br>
        Roll No:230940520085<br></br>
        Contact:9415165912<br></br>
        Email:<u>sourabh133021@gmail.com</u><br></br>
        Centre: JUHU</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    </Row>
    </Container>
    </Container>
</>
        

  );
}