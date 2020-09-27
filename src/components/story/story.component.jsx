//imported in SectionStories 
import React from 'react';

import './story.styles.scss';

//COMPONENTS
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';

const Story = ({caption, img, title, text, alt}) => (
    <div className="story">
        <figure className='story__shape'>
            <img src={img} className='story__image' alt={alt} />
            <figcaption className='story__caption'>{caption}</figcaption>
        </figure>

        <div className="story__text">
            <HeadingTertiary text={title} className='u-margin-bottom-small' />
            <p>{text}</p>
        </div>
    </div>
);
export default Story;