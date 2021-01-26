import React from 'react';
import { useTranslation } from 'react-i18next';
import UserInfo from '../UserInfo/UserInfo'
import UserCourses from '../UserCourses/UserCourses'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';

export default function Dashboard(): JSX.Element {
  const { t } = useTranslation();

  function handleRepeatClick(e: { preventDefault: () => void }): void {
    e.preventDefault();
    console.log('Reat hard words btn clicked');

    return;
  }

  return (
    <main
      style={{ paddingTop: '30px', height: 'calc(100vh - 160px)', backgroundColor: '#FCFAF2' }}
    >
      {/* <div id="page-head" className="page-head "> */}
        <div className="container">
          <div className="row">
            <div className="col col-lg-4">
              <UserInfo />
            </div>
            <div className="col">
              <UserCourses />
            </div>
            {/* <div className="col-xs-5 col-sm-12 col-md-6">
              <h1 className="title">{t('Dashboard')}</h1>
            </div> */}
            {/* <div className="col-xs-12 col-sm-9 col-md-3"></div> */}
            {/* <div className="col-xs-7 col-sm-3 col-md-3 text-right">
              <a
                href="/repeat"
                className="btn btn-primary"
                onClick={handleRepeatClick}
              >
                {t('Repeat')}
              </a>
            </div> */}            
          </div>
        </div>
      {/* </div> */}
      {/* <div className="text-center">Other content</div> */}
    </main>
  );
}
