import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../../auth/ProvideAuth';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainNav = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  return (
    <Navbar className="nav-bar">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {!auth.user ? (
            <>
              <div className="nav-link">
                <Link to="/courses">{t('Courses')}</Link>
              </div>
              <div className="nav-link">
                <Link to="/login">{t('Login')}</Link>
              </div>
              <div className="nav-link">
                <Link to="/signup/set-course">{t('Sign up')}</Link>
              </div>
            </>
          ) : (
            <>
              <div className="nav-link">
                <Link to="/dashboard">{t('Dashboard')}</Link>
              </div>
              <div className="nav-link">
                <Link to="/profile">{t('Profile')}</Link>
              </div>
              <div className="nav-link">
                <Link to="/login" onClick={() => auth.logout()}>{t('Logout')}</Link>
              </div>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
