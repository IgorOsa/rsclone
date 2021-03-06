import React from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './user-info.scss';

import { useAuth } from '../../auth/ProvideAuth';

export default function UserInfo(): JSX.Element {
  const { t } = useTranslation();
  const auth = useAuth();
  const login = auth.user.username;
  return (
    <div className="user-info">
      <h2 className="user-info__title">{ login }</h2>
      <p className="user-info__level">level 1</p>
      <div className="user-info__pic">
        <img src="../../../assets/cat.svg" width="100" alt="user-pic"/>
      </div>
      <div className="user-info__progress">
        <p>
          <span>learned words</span> 
          <span className="num">0</span>
        </p>
        <p>
          <span>points</span> 
          <span className="num">0</span>
        </p>
      </div>
    </div>
  );
}
