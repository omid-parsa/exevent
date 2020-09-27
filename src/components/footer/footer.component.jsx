//imported in MainContent
import React from 'react';

import './footer.styles.scss';

//COMPONENTS
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';

const Footer = () => (
    <div className="footer">
        <div className="row">
            <div className="col-1-of-3">
                <HeadingTertiary text='contact me' />
            </div>
        </div>
    </div>
); 
export default Footer;