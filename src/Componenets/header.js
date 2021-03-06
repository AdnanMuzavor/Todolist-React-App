import React from 'react';

import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'
export default function Header(){
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link to="#home">Home</Nav.Link>
      <Nav.Link to="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


    );
}