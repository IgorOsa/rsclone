import React from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './user-courses.scss';
import { Link } from 'react-router-dom';

export default function UserCourses(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="user-courses">
      <h2 className="user-info__title">My courses:</h2>
      <div className="card-group">
        <Link to="/english-lessons" className="card" style={{ maxWidth: "300px" }}>
          <img src="../../../assets/eng-flag-1.jpg" className="card-img-top" alt={t('English')} style={{ height: "150px", background: "#f78410" }} />
          <div className="card-body">
            <h5 className="card-title">{t('English')}</h5>
          </div>
        </Link>
      </div>
      <Link to="/english-lessons" className="btn btn-primary user-courses__all">{t('All courses')}</Link>
    </div>
  );
}
