import React from 'react';

//COMPONENTS
import SectionAbout from '../section-about/section-about.component';
import SectionFeatures from '../section-features/section-features.component';
import SectionOptions from '../section-options/section-options.component';
import SectionStories from '../section-stories/section-stories.component';

const MainContent = () => (
    <div className="">
        <SectionAbout /> 
        <SectionFeatures />
        <SectionOptions />
        <SectionStories />
    </div>
);

export default MainContent;