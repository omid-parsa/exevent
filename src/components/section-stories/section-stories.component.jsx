//imported in MainContent
import React from 'react';

import './section-stories.styles.scss';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';

//IMAGES
import storyImg1 from '../../assets/img/excrusion-2.jpg';
import storyImg2 from '../../assets/img/story2.jpg';

//COMPONENTS
import BgVideo from '../bg-video/bg-video.component';
import Story from '../story/story.component';

const SectionStories = () => (
    <div className="section-stories">
        <BgVideo />

        <div className="u-text-center u-margin-bottom-big">
            <HeadingSecondary text='we create beautiful experiences' />
        </div>
        <p></p>

        <div className="row">
            <Story img={storyImg1} caption='Alex Miller' title='The best experience that I ever had' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit id, eaque provident aliquid itaque eligendi veniam voluptates autem omnis, rerum laudantium delectus, maxime nesciunt ex quia ratione incidunt vel. aliquid itaque eligendi veniam voluptates autem omnis, rerum laudantium delectus, maxime nesciunt ex quia ratione incidunt vel.' alt='story 1' />
            <Story img={storyImg2} caption='Emma Jones' title='The best experience that I ever had' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit id, eaque provident aliquid itaque eligendi veniam voluptates autem omnis, rerum laudantium delectus, maxime nesciunt ex quia ratione incidunt vel. aliquid itaque eligendi veniam voluptates autem omnis, rerum laudantium delectus, maxime nesciunt ex quia ratione incidunt vel.' alt='story 2' />
        </div>
    </div>

);
export default SectionStories;