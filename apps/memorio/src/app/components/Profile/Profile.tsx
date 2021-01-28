import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../auth/ProvideAuth';
import Subheader from '../Subheader/Subheader';
import './Profile.scss';

export default function Preferences() {
  const { t } = useTranslation();
  const auth = useAuth();

  const { user } = auth;

  const child = () => {
    return (
      <div className="row">
        <div className="col-xs-5 col-sm-12 col-md-6">
          <h1 className="title">{t(`User's Profile`)}</h1>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-3">
        </div>
        <div className="col-xs-7 col-sm-3 col-md-3 text-right">
        </div>
      </div>
    );
  }

  return (
    <main
      style={{
        margin: '0px 20px',
        height: 'calc(100vh - 160px)'
      }}
    >
      <Subheader Child={child} />
      <div className="container container-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="inner sidebar">
              <div className="thumbnail thumbnail-block whitebox">
                <img src="../../../assets/cat.svg" alt="" />
              </div>

              <button className="btn btn-block btn-secondary" data-role="photo-upload-trigger" disabled>
                <span className="ico ico-top ico-white"></span>
                {t('Upload New Picture')}
              </button>

              <a href="/profile" className="btn btn-block btn-secondary" onClick={(e) => e.preventDefault()}>
                <span className="ico ico-user ico-white"></span>
                {t('View Profile')}
              </a>

              <hr />

              <button className="btn btn-primary btn-block" onClick={(e) => e.preventDefault()} disabled>
                <i className="ico ico-white ico-facebook"></i>
                {t('Connect with Facebook')}
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="field field-inline">
              <label>Логин</label>
              <input
                type="text"
                name="login"
                value={''}
                onChange={(e) => e.preventDefault()}
              />
            </div>

            <div className="field field-inline">
              <label>Имя</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => e.preventDefault()}
              />

            </div>

            <div className="field field-inline">
              <label>Язык</label>
              <select name="language" id="id_language" defaultValue="ru">
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
            </div>


            <div className="field field-inline">
              <button type="submit" className="btn btn-primary">
                Сохранить
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
