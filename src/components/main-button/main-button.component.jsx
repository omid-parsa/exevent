// imported in components/header/header.component.jsx
// imported in SectionOptions

import React from 'react';

import { Button } from './main-button.styles';



const MainButton = ({ text, to, color }) => (
    <Button color={color} to={to}>{text}</Button>
);

export default MainButton;