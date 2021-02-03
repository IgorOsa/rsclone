import React, { useState } from 'react';
import AudioPlay from '../../AudioPlay/AudioPlay'
import Result from './Result'
import levels from '../../../../data/english';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../play-lesson.scss'

export default function Questions({ lessonNum }): JSX.Element {
  const [task, setTask] = useState(0)
  const [right, setRight] = useState('')
  const [wrong, setWrong] = useState('')
  const [answer, setAnswer] = useState('')
  const [check, setCheck] = useState(0)
  const [rightModal, setRightModal] = useState('')
  const taskAnswer = levels[lessonNum].task[task].answer
  const tasksLength = levels[lessonNum].task.length
  const [audio, setAudio] = useState('')
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  if (check >= levels[lessonNum].task.length) {
    return (
      <Result
        wrongAnswers={wrongAnswers}
        correctAnswers={correctAnswers}
        tasksLength={tasksLength}
      />
    );
  } else {
    return (
      <>
        { !rightModal ? (
          <>
            <h2 className={`lesson__title ${wrong}`}>{levels[lessonNum].task[task].title}</h2>
            <div className="lesson__body">{levels[lessonNum].task[task].test.map((it: string, i: number) => (
              <button
                className={`btn btn-outline-secondary`}
                type="button"
                key={i}
                onClick={() => {
                  if (it === levels[lessonNum].task[task].answer) {
                    setRight('right')
                    setAnswer('')
                    setRightModal('Верно!')
                    setAudio(levels[lessonNum].task[task].audio)
                    setCorrectAnswers(el => el += 1)
                    setTimeout(() => {
                      setRightModal('')
                      if (task !== levels[lessonNum].task.length - 1) {
                        setTask(task + 1)
                      }
                      setCheck(check + 1)

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
            ))}
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
            <h2 style={{ marginTop: '10px' }}>{answer}</h2>

          </>
        ) : (
          <h2 className="lesson__title right">{rightModal}</h2>
        )}
        <AudioPlay audio={audio} />
      </>
    )
  }
}
