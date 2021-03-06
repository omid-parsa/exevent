import React from 'react';

//COMPONENTS
import SectionAbout from '../section-about/section-about.component';
import SectionFeatures from '../section-features/section-features.component';
import SectionOptions from '../section-options/section-options.component';
import SectionStories from '../section-stories/section-stories.component';
import Footer from '../footer/footer.component';

const MainContent = () => (
    <div className="">
        <SectionAbout /> 
        <SectionFeatures />
        <SectionOptions />
        <SectionStories />
        <Footer />
    </div>
);

export default MainContent;