import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  // const { t, i18n } = useTranslation();
  // function handleClick(lang: string) {
  //   i18n.changeLanguage(lang);
  // } 

  return (
    <>
      <DropdownButton style={{ }} as={ButtonGroup} title="Select Language" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1" onClick={ () => handleClick('en') }>English</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={ () => handleClick('ru') }>Russian</Dropdown.Item>
      </DropdownButton>
      {/* <p>{t('title')}</p>s */}
    </>
  );
};

export default Language;