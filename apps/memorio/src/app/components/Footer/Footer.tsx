import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer absolute-bottom d-flex">
      <Container className="d-flex ">
        <Row className="justify-content-between align-items-center d-flex w-100">
          <div className="students d-flex">
            <div className="students__list d-flex">
              {t('studentsTitle')}&nbsp;
              <div className="students__item">
                <a className="students__link" href="https://github.com/IgorOsa">
                  <div className="icon icon--github" />
                  Igor Osadchyi
                </a>
              </div>
              {t('and')}&nbsp;
              <div className="students__item">
                <a
                  className="students__link link"
                  href="https://github.com/Kelevrra"
                >
                  <div className="icon icon--github" />
                  Alex Kelevrra
                </a>
              </div>
              {t('in')} 2021.
            </div>
          </div>
          <div className="alma-mater">
            <a className="alma-mater__link" href="https://rs.school/js/">
              <img
                src="https://rs.school/images/rs_school_js.svg"
                width="60"
                alt="RSS"
              />
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
