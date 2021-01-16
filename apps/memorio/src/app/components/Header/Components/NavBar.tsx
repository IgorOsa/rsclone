import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const MainNav = () => {
  const { t } = useTranslation();
  return (
  <Navbar className="nav-bar">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link><Link to="/courses">{t('Courses')}</Link></Nav.Link>
        <Nav.Link><Link to="/login">{t('Login')}</Link></Nav.Link>
        <Nav.Link><Link to="/signup">{t('Sign up')}</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);}

export default MainNav;
