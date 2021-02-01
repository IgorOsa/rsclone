import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import './courses-intro.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CoursesIntro = () => {
  const { t } = useTranslation();
  return (
    <div className="courses-intro">
      <Container className="container">
        <Row className="justify-content-center align-items-center">
          <h2 className="courses-intro__title">{t('coursesIntroTitle')}</h2>
          <p className="courses-intro__description">
            {t('coursesIntroDescription')}
          </p>
          <Link className="courses-intro__link" to="/signup">
            {t('coursesIntroLink')}
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesIntro;
