import React from 'react';

import './section-features.styles.scss';

import FeatureBox from '../feature-box/feature-box.component';

import { MdLanguage, MdSchool,MdSentimentVerySatisfied, MdNature } from 'react-icons/md';


const SectionFeatures = () => (
    <div className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox Icon={MdLanguage} title='Educate students' text='Children have the opportunity to learn about and see new things in a less structured environment.'/>
            </div>
            <div className="col-1-of-4">
                <FeatureBox Icon={MdSchool} title='Help them Learn' text=' Fun school excursions will help students retain the information they have learnt on their trip.'/>
            </div>
            <div className="col-1-of-4">
                <FeatureBox Icon={MdSentimentVerySatisfied} title='Make them happy' text='Getting out of the classroom gives children an opportunity to spend time with each other.'/>
            </div>
            <div className="col-1-of-4">
                <FeatureBox Icon={MdNature} title='Love nature' text='Outside the classroom students have opportunity of being exposured to new experiences and observe.'/>
            </div>
        </div>
    </div>


);
export default SectionFeatures;