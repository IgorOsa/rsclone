import React, { useState } from 'react';
import AudioPlay from '../AudioPlay/AudioPlay'

import 'bootstrap/dist/css/bootstrap.min.css';
import './play-lesson.scss'

import { Link } from 'react-router-dom';
import levels from '../../../data/english';

export default function PlayLesson({ lessonNum }): JSX.Element {
  let [task, setTask] = useState(0)
  let [right, setRight] = useState('')
  let [wrong, setWrong] = useState('')
  let [answer, setAnswer] = useState('')
  let [rightModal, setRightModal] = useState('')
  const taskAnswer = levels[lessonNum].task[task].answer
  let [audio, setAudio] = useState('')

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
                    setTimeout(() => {
                      setRightModal('')
                      setTask(task += 1)
                    }, 500);
                  } else {
                    setAudio('error.mp3')
                    setWrong('wrong')
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
