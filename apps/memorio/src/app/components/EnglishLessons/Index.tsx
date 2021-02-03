import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './english-lessons.scss';

import levels from '../../../data/english';
import { Link } from 'react-router-dom';

import Subheader from '../Subheader/Subheader';

export default function EnglishLessons(): JSX.Element {
  const { t } = useTranslation();

  const child = () => {
    return (
      <div className="row">
        <div className="col-xs-5 col-sm-12 col-md-6">
          <h1 className="title">{t(`English lessons`)}</h1>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-3">
        </div>
        <div className="col-xs-7 col-sm-3 col-md-3 text-right">
        </div>
      </div>
    );
  }
  
  return (
    <main className="english-lessons" style={{ minHeight: "calc(100vh - 160px)", margin: "0 20px" }}>
      <Subheader Child={child} />
      <div className="container">
        <div className="card-group">
          { levels.map((it: { title: React.ReactNode; }, i: number) => (
            <Link to={`/english-${i}`} className="card lessons-card" key={i}>
              <img src="../../../assets/eng-flag-1.jpg" className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title title">{ it.title }</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
