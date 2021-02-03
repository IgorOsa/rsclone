import React, { useState } from 'react';
import AudioPlay from '../../AudioPlay/AudioPlay'
import Result from './Result'

import levels from '../../../../data/english';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../play-lesson.scss'

export default function Questions({ lessonNum }): JSX.Element {
  let [task, setTask] = useState(0)
  let [right, setRight] = useState('')
  let [wrong, setWrong] = useState('')
  let [answer, setAnswer] = useState('')
  let [check, setCheck] = useState(0)
  let [rightModal, setRightModal] = useState('')
  const taskAnswer = levels[lessonNum].task[task].answer
  const tasksLength = levels[lessonNum].task.length
  let [audio, setAudio] = useState('')
  let [wrongAnswers, setWrongAnswers] = useState(0)
  let [correctAnswers, setCorrectAnswers] = useState(0)
  
  if(check >= levels[lessonNum].task.length) {
    return (
      <>
        <Result 
          wrongAnswers={wrongAnswers} 
          correctAnswers={correctAnswers}
          tasksLength={tasksLength}
        />
      </>
    );} else {
    return (
    <>
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
              setCorrectAnswers(el => el += 1)
              setTimeout(() => {
                setRightModal('')
                if(task !== levels[lessonNum].task.length - 1) {
                  setTask(task += 1)
                }
                setCheck(check += 1)
               
              }, 1000);
            } else {
              setAudio('error.mp3')
              setWrong('wrong')
              setWrongAnswers(el => el += 1)
                setTimeout(() => {
                  setAudio('')
                  setWrong('')
                }, 1000)
            }
          }}
        >
          {it}
        </button>
      )) }
      </div>
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
      <AudioPlay audio={ audio } />
    </>
  )
  }
}