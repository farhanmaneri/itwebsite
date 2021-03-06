import React from 'react';
import {Navbar , Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


const MyNavbar = ()=>{
    return(
        <>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">SwabiTech</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="">Home</Nav.Link>
      <Nav.Link href="">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="">Action</NavDropdown.Item>
        <NavDropdown.Item href="">Another action</NavDropdown.Item>
        <NavDropdown.Item href="">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default MyNavbar;