import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

export const Language = () => (
  <DropdownButton style={{ }} as={ButtonGroup} title="Select Language" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">English</Dropdown.Item>
    <Dropdown.Item eventKey="2">Russian</Dropdown.Item>
  </DropdownButton>
);

export default Language;