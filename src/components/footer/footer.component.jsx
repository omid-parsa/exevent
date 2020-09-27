//imported in MainContent
import React from 'react';

import './footer.styles.scss';

import {MdLocationCity, MdEmail} from 'react-icons/md';

//COMPONENTS
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';

const Footer = () => (
    <div className="footer">
        <div className="row">
            <HeadingTertiary text='contact us' />
            <div>
                <MdLocationCity className='footer__icon'/>
                <span>Oslo, Norway</span>
            </div>
            <div>
                <MdEmail className='footer__icon'/>
                <span>omidparsa.1985@gmail.com</span>
            </div>
        </div>
    </div>
); 

export default Footer;