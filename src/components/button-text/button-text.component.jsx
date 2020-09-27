// imported in SectionAbout component

import React from 'react';
import { Link } from 'react-router-dom';

import './button-text.styles.scss';

const ButtonText = ({to, text}) => (
    <Link className='btn-text' to={to}>{text}</Link>
);
export default ButtonText;