import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './lesson-description.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import levels from '../../../data/english'
import { Link } from 'react-router-dom';

import AudioPlay from '../AudioPlay/AudioPlay'

export default function LessonDescription({ lessonNum }): JSX.Element {
  const { t } = useTranslation();
  const title = levels[lessonNum].title
  const [audio, setAudio] = useState('')

  return (
    <div className="container lesson-description">
      <div className="row d-flex justify-content-between align-items-center">
        <h1 style={{ lineHeight: "2" }}>{title}</h1>
        <Link className="link" to={`/task-${lessonNum}`}>
          {t('Learn these words')}
        </Link>
      </div>
      <table className="table">
        <tbody>
          {levels[lessonNum].task.map((it: { title: string; answer: string; id: number, audio: string }) => (
            <tr key={it.id}>
              <td>{it.id + 1}</td>
              <td>{it.title}</td>
              <td>{it.answer}</td>
              <td>
                <div onClick={() => setAudio(it.audio)}>
                  <img
                    className="audio-icon"
                    src="../../../assets/speaker.svg"
                    width="20"
                    alt="speaker"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AudioPlay audio={audio} />
    </div>
  )
}
