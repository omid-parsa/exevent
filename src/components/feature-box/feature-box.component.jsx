import React from 'react';

import './feature-box.styles.scss';



//COMPONENTS
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';

const FeatureBox = ({title, text, Icon}) => (
    <div className="feature-box">
        {/* <i class="feature-box__icon icon-basic-map"></i> */}
        <Icon className='feature-box__icon'/>
        <HeadingTertiary text={title} />
        <p className="feature-box__text">{text}</p>
    </div>
);

export default FeatureBox;