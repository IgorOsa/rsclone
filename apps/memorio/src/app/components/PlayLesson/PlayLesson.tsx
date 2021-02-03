import React, { useState } from 'react';
import AudioPlay from '../AudioPlay/AudioPlay'

import 'bootstrap/dist/css/bootstrap.min.css';
import './play-lesson.scss'

import { Link } from 'react-router-dom';
import levels from '../../../data/english';
import { number } from 'yup';
import { useAuth } from '../../auth/ProvideAuth';

export default function PlayLesson({ lessonNum }): JSX.Element {
  let [task, setTask] = useState(0)
  let [right, setRight] = useState('')
  let [wrong, setWrong] = useState('')
  let [answer, setAnswer] = useState('')
  let [rightModal, setRightModal] = useState('')
  const taskAnswer = levels[lessonNum].task[task].answer
  let [audio, setAudio] = useState('')
  const auth = useAuth();
  
  console.log(auth)
  // let [wrongAnswers, setWrongAnswers] = useState(0)
  // let [correctAnswers, setCorrectAnswers] = useState(0)
  // let [learnedWords, setLearnedWords] = useState(0)
  

  return (
    <main className="lesson" style={{ minHeight: "calc(100vh - 160px)" }}>
      <div className="container">
        { !rightModal ? (
          <>
            <h2 className={`lesson__title ${wrong}`}>{ levels[lessonNum].task[task].title }</h2>
            <div className="lesson__body">{ levels[lessonNum].task[task].test.map((it: string, i: number) => (
              <button 
                className={`btn btn-outline-secondary`}
                type="button" 
                key={i}
                onClick={() => {
                  if(it === levels[lessonNum].task[task].answer) {
                    setRight('right')
                    setAnswer('')
                    setRightModal('Верно!')
                    setAudio(levels[lessonNum].task[task].audio)
                    // setLearnedWords(el => el += 1)
                    setTimeout(() => {
                      setRightModal('')
                      setTask(task += 1)
                    }, 500);
                  } else {
                    setAudio('error.mp3')
                    setWrong('wrong')
                    // setWrongAnswers(el => el += 1)
                      setTimeout(() => {
                        setAudio('')
                        setWrong('s')
                      }, 1000)
                  }
                }}
              >
                {it}
              </button>
            )) }</div>
            <button 
              className="btn btn-outline-secondary show-answer"
              type="button"
              onClick={() => {
                answer === taskAnswer ? setAnswer('') : setAnswer(taskAnswer)
              }}
            >
              Посмотреть ответ
            </button>
            <h2 style={{ marginTop: '10px' }}>{ answer }</h2>
          </>
        ) : (
          <h2 className="lesson__title right">{ rightModal }</h2>
        ) }
      </div>
      <AudioPlay audio={ audio } />
    </main>
  );
}
