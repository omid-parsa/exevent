//imported in MainContent
import React from 'react';

import './section-options.styles.scss';

//COMPONENTS
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import Card from '../card/card.component';
import MainButton from '../main-button/main-button.component';



const SectionOptions = () => (
    <div className="section-options">
        <div className='u-text-center u-margin-bottom-big'>
            <HeadingSecondary text='Find your dream trip'/>
        </div>

        <div className="row">
            <div className="col-1-of-3">
                <Card title='Be with friends' modifier='1' feature1='3 Nights' feature2='Cozy Bedrooms' feature3='Up to 15 students'/>
            </div>
            <div className="col-1-of-3">
                <Card title='Among flowers' modifier='2' feature1='2 Nights' feature2='Beautiful landscapes' feature3='Up to 20 students'/>
            </div>
            <div className="col-1-of-3">
                <Card title='Explore the Beach' modifier='3' feature1='4 Nights' feature2='Camping at beach' feature3='Up to 25 students'/>
            </div>
        </div>
        <div className='u-text-center'>
            <MainButton color='primary' text='see more options' />
        </div>
    </div>

);
export default SectionOptions;


            