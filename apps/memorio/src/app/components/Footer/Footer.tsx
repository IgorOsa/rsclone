import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
  <footer className="footer absolute-bottom">
    <Container>
      <Row className="justify-content-between align-items-center">
        <div className="students">
          <h4 className="students__title">{t('studentsTitle')}</h4>
          <ul className="students__list">
            <li className="students__item">
              <a className="students__link" href="https://github.com/IgorOsa">
                <div className="icon icon--github" />
                Igor Osadchyi
              </a>
            </li>
            <li className="students__item">
              <a className="students__link link" href="https://github.com/Kelevrra">
                <div className="icon icon--github" />
                Alex Kelevrra
              </a>
            </li>
          </ul>
        </div>
        <div className="alma-mater">
          <a className="alma-mater__link" href="https://rs.school/js/">
            <img src="https://rs.school/images/rs_school_js.svg" width="60" alt="RSS" />
          </a>
        </div>
      </Row>
    </Container>
  </footer>
);}

export default Footer;