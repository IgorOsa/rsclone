import React, { useState } from 'react';
import AudioPlay from '../AudioPlay/AudioPlay'

import 'bootstrap/dist/css/bootstrap.min.css';
import './play-lesson.scss'

import { Link } from 'react-router-dom';
import levels from '../../../data/english';
import { number } from 'yup';
import { useAuth } from '../../auth/ProvideAuth';
import Questions from './Components/Questions'

export default function PlayLesson({ lessonNum }): JSX.Element {
  // let [wrongAnswers, setWrongAnswers] = useState(0)
  // let [correctAnswers, setCorrectAnswers] = useState(0)
  // let [learnedWords, setLearnedWords] = useState(0)

    return (
      <main className="lesson" style={{ minHeight: "calc(100vh - 160px)" }}>
        <div className="container">
          <Questions lessonNum={lessonNum} />
        </div>
      </main>
    );
}


