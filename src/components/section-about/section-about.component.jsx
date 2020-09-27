//imported in MainContent component

import React from 'react';

import './section-about.styles.scss';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';
import Paragraph from '../paragraph/paragraph.component';
import ButtonText from '../button-text/button-text.component';
import Composition from '../composition/composition.component';


const SectionAbout = () => (
    <div className="section-about">
        <div className="u-text-center u-margin-bottom-big">
            <HeadingSecondary text='Exciting excursions for students'/>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <HeadingTertiary text='The Benefits of School Excursions for Students'/>
                <Paragraph text='excursions take planning and effort but the rewards can be huge for both students and teachers and something students will remember for a long time.  The importance of school excursions and the benefits school excursions offer students are listed below. it has been taught in the classroom - Students may get to learn in a new environment with new teachers or instructors.' />
                <Paragraph text='Social skills - Getting out of the classroom gives children an opportunity to spend time with each other in a new environment without the structure of the classroom. School excursions often require students to spend time in small groups, observing, chatting and learning.' />
                <ButtonText text='learn more &rarr;' to='/' />
            </div>
            <div className="col-1-of-2">
                <Composition />
            </div>
        </div>
    </div>
);

export default SectionAbout;