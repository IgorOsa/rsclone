import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import '../../../../locales/locales';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  const { t, i18n } = useTranslation();
  function handleClick(lang: string) {
    i18n.changeLanguage(lang);
  }
  return (
    <Suspense fallback="loading">
      <DropdownButton
        style={{}}
        as={ButtonGroup}
        title={t('Select Language')}
        id="bg-nested-dropdown"
      >
        <Dropdown.Item eventKey="1" onClick={() => handleClick('en')}>
          English
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => handleClick('ru')}>
          Russian
        </Dropdown.Item>
      </DropdownButton>
      <img src={`../../../../${t('iconLang')}`} width="30" alt="" />
    </Suspense>
  );
};

export default Language;
