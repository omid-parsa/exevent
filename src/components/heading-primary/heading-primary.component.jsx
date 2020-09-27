// imported in components/header/header.component.jsx

import React from 'react';

import './heading-primary.styles.scss';

const HeadingPrimary = ({mainText, subText}) => (
    <h1 className='heading-primary'>
        <span className='heading-primary__main'>{mainText}</span>
        <span className='heading-primary__sub'>{subText}</span>
    </h1>
);

export default HeadingPrimary;