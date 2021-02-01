import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './english-lessons.scss';

import levels from '../../../data/english'
import { Link } from 'react-router-dom';

export default function EnglishLessons(): JSX.Element {
  const { t } = useTranslation();
  
  return (
    <main className="english-lessons" style={{ minHeight: "calc(100vh - 160px)" }}>
      <div className="container">
        <h2 className="english-lessons__title">English lessons</h2>
        <div className="card-group">
          { levels.map((it: { title: React.ReactNode; }, i: number) => (
            <Link to={`/english-${i}`} className="card lessons-card">
              <img src="" className="card-img-top" alt=""></img>
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