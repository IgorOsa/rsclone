import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MainNav = () => (
  <Navbar className="nav-bar">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link><Link to="/courses">Courses</Link></Nav.Link>
        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        <Nav.Link><Link to="/signup">Sign up</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MainNav;