import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserInfo from '../UserInfo/UserInfo'
import UserCourses from '../UserCourses/UserCourses'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';
import Subheader from '../Subheader/Subheader';

export default function Dashboard(): JSX.Element {
  const [needRepeat, setNeedRepeat] = useState(false);
  const { t } = useTranslation();

  const child = () => {
    function handleRepeatClick(e: { preventDefault: () => void; }): void {
      e.preventDefault();
    }

    return (
      <div className="row">
        <div className="col-xs-5 col-sm-12 col-md-6">
          <h1 className="title">{t('Dashboard')}</h1>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-3">
        </div>
        <div className="col-xs-7 col-sm-3 col-md-3 text-right">
          {needRepeat && <a
            href="/repeat"
            className="btn btn-primary"
            onClick={handleRepeatClick}>
            {t('Repeat')}
          </a>
          }
        </div>
      </div>
    );
  }

  return (
    <main style={{ margin: "0px 20px", minHeight: "calc(100vh - 160px)" }}>
      <Subheader Child={child} />
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <UserInfo />
          </div>
          <div className="col">
            <UserCourses />
          </div>
        </div>
      </div>
    </main>
  );
}
