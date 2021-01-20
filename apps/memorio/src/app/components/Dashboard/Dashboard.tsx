import React from 'react';
import { useTranslation } from "react-i18next";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';

export default function Dashboard(): JSX.Element {
  const { t } = useTranslation();

  function handleRepeatClick(e: { preventDefault: () => void; }): void {
    e.preventDefault();
    console.log('Reat hard words btn clicked');

    return;
  }

  return (
    <main style={{ margin: "60px 20px 0px 20px", height: "calc(100vh - 160px)" }}>
      <div id="page-head" className="page-head ">
        <div className="inner container clearfix">
          <div className="row">
            <div className="col-xs-5 col-sm-12 col-md-6">
              <h1 className="title">{t('Dashboard')}</h1>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-3">
            </div>
            <div className="col-xs-7 col-sm-3 col-md-3 text-right">
              <a
                href="/repeat"
                className="btn btn-primary"
                onClick={handleRepeatClick}>
                {t('Repeat')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        Other content
      </div>
    </main>
  );
}
