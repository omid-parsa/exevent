import React from 'react';

import './composition.styles.scss';

//import pictures
import pic1 from '../../assets/img/excrusion-1.jpg';
import pic1Large from '../../assets/img/excrusion-1-large.jpg';
import pic2 from '../../assets/img/excrusion-2.jpg';
import pic2Large from '../../assets/img/excrusion-2-large.jpg';
import pic3 from '../../assets/img/excrusion-3.jpg';
import pic3Large from '../../assets/img/excrusion-3-large.jpg';
import pic4 from '../../assets/img/excrusion-4.jpg';
import pic4Large from '../../assets/img/excrusion-4-large.jpg';

const Composition = () => (
    <div className="composition">
        <img srcSet={`${pic1} 300w, ${pic1Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="1"
            className="composition__photo composition__photo--p1"
            src={pic1Large}></img>
        <img srcSet={`${pic2} 300w, ${pic2Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="2"
            className="composition__photo composition__photo--p2"
            src={pic2Large}></img>
        <img srcSet={`${pic3} 300w, ${pic3Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="3"
            className="composition__photo composition__photo--p3"
            src={pic3Large}></img>
        <img srcSet={`${pic4} 300w, ${pic4Large} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="4"
            className="composition__photo composition__photo--p4"
            src={pic4Large}></img>
    </div>
);

export default Composition;