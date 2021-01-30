import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../auth/ProvideAuth';
import Subheader from '../Subheader/Subheader';
import UserService from "./../../services/user.service";
import './Profile.scss';

export default function Preferences() {
  const { t, i18n } = useTranslation();
  const auth = useAuth();

  const { user } = auth;
  const [userLogin, setUserLogin] = useState(user.username);
  const [userName, setUserName] = useState(user.name);
  const [userLang, setUserLang] = useState(i18n.language);
  const [languages, setLanguages] = useState(i18n.languages);
  const [submitResult, setSubmitResult] = useState(null);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [errorSubmitMsg, setErrorSubmitMsg] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const updateFields = {
      login: userLogin,
      name: userName,
      profile: {
        lang: userLang
      }
    }

    await UserService.updateUser(user.userId, updateFields).then(
      (response) => {
        setErrorSubmit(false);
        setErrorSubmitMsg('');
        setSubmitResult(true);
        auth.updateCurrentUser(updateFields);
      },
      (error) => {
        const errorMsg = t('Error update!');

        setErrorSubmit(true);
        setErrorSubmitMsg(errorMsg);
        setSubmitResult(false);
      }
    );

    i18n.changeLanguage(userLang);
  }

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
        {errorSubmit && <Alert variant="danger">{errorSubmitMsg}</Alert>}
        {submitResult && <Alert variant="success">{t('Data updated!')}</Alert>}
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
            <form onSubmit={handleSubmit}>
              <div className="field field-inline">
                <label>{t('Username')}</label>
                <input
                  type="text"
                  name="username"
                  value={userLogin}
                  onChange={(e) => setUserLogin(e.target.value)}
                />
              </div>

              <div className="field field-inline">
                <label>{t('Name')}</label>
                <input
                  type="text"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

              </div>

              <div className="field field-inline">
                <label>{t('Language')}</label>
                <select name="language" id="id_language" defaultValue={userLang} onChange={(e) => setUserLang(e.target.value)}>
                  {languages.map(item => <option key={item} value={item}>{i18n.options.resources[item].langName}</option>)}
                </select>
              </div>

              <div className="field field-inline">
                <button type="submit" className="btn btn-primary">
                  {t('Save changes')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main >
  );
}
