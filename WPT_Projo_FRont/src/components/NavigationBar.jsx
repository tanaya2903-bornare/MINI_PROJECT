import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, FormControl, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../utils/TokenUtil';

export default function NavigationBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const navigate=useNavigate();
  const handleLogoutClick=()=>{
    logout();
    navigate("/")
  }
  return (
    <Navbar expand='lg' bg='dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/home'>
          Fire Extinguisher
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarSupportedContent' onClick={() => setOpenBasic(!openBasic)} />

        <Navbar.Collapse id='navbarSupportedContent' className='justify-content-end'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About Us
            </Nav.Link>

            <NavDropdown title='Products' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/ProductList'>
                Product List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/ProductListDisplay'>
                ProductListDisplay
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/ProductRegistrationForm'>
                ProductRegistrationForm
              </NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link as={Link} to='/ContactUs'>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to='/LoginForm'>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to='/Signup'>
              Signup
            </Nav.Link>
          </Nav>

          <Form className='d-flex'>
            <FormControl type='search' placeholder='Search items..' className='mr-2' aria-label='Search' />&nbsp;&nbsp;
            <Button variant='outline-primary'>Search</Button>&nbsp;&nbsp;
          </Form>
          <Button Variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
