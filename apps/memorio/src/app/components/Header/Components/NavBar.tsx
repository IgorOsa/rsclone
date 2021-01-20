import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { useAuth } from '../../../auth/ProvideAuth';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainNav = () => {
  const { t } = useTranslation();
  const auth = useAuth();

  return (
<<<<<<< HEAD
  <Navbar className="nav-bar">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link><Link to="/courses">{t('Courses')}</Link></Nav.Link>
        <Nav.Link><Link to="/login">{t('Login')}</Link></Nav.Link>
        <Nav.Link><Link to="/signup/set-course">{t('Sign up')}</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);}
=======
    <Navbar className="nav-bar">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {
            !auth.user ? (
              <>
                <Nav.Link><Link to="/courses">{t('Courses')}</Link></Nav.Link>
                <Nav.Link><Link to="/login">{t('Login')}</Link></Nav.Link>
                <Nav.Link><Link to="/signup">{t('Sign up')}</Link></Nav.Link>
              </>
            )
              : (
                <>
                  <Nav.Link><Link to="/dashboard">{t('Dashboard')}</Link></Nav.Link>
                  <Nav.Link onClick={() => auth.logout()}><Link to="/login">{t('Logout')}</Link></Nav.Link>
                </>
              )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
>>>>>>> 937e8dd795ffcd9126bc188ad3393deae470f643

export default MainNav;
