//imported in section-stories
//this component add a video background to the component
import React from 'react';

import './bg-video.styles.scss';

import video from '../../assets/video/video.mp4';

const BgVideo = () => (
    <div className="bg-video">
        <video className='bg-video__content' autoPlay muted loop>
            <source src={video} type='video/mp4'/>
            Your browser does not support videos!
        </video>
    </div>
);
export default BgVideo;