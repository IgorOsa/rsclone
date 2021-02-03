import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './play-lesson.scss'

import Questions from './Components/Questions'

export default function PlayLesson({ lessonNum }): JSX.Element {
  return (
    <main className="lesson" style={{ minHeight: "calc(100vh - 160px)" }}>
      <div className="container">
        <Questions lessonNum={lessonNum} />
      </div>
    </main>
  );
}


