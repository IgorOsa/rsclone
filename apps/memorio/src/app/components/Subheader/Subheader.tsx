import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subheader.scss';

export default function Subheader({ Child }): JSX.Element {
  const [needRepeat, setNeedRepeat] = useState(false);
  const { t } = useTranslation();

  return (
    <div id="page-head" className="page-head ">
      <div className="inner container clearfix">
        <Child />
      </div>
    </div>
  );
}
