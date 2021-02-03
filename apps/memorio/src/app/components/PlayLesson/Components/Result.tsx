import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../play-lesson.scss'
import { Link } from 'react-router-dom';
import levels from '../../../../data/english';


export default function Result({ lessonNum, correctAnswers, wrongAnswers, tasksLength }): JSX.Element {
   
  return (
    <>
      <h2>Тест пройден!</h2>
      <h3>Ваш результат:</h3>
      <p>Ошибки: { wrongAnswers }</p>
      <p>Точночть: {correctAnswers / 100 * tasksLength}%</p>
      <Link className="btn finish-btn" to="/dashboard">В кабинет</Link>
      <Link className="btn finish-btn" to="/english-lessons">Учить еще!</Link>
    </>
  )
}