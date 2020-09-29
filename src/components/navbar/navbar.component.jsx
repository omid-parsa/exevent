//imported in App.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    
    console.log(navOpen);
    
    return(
        <div className="navbar">
            <div className={navOpen ? 'navbar__background active' : 'navbar__background'} />

            <button className="navbar__btn" onClick={() => setNavOpen(!navOpen)}>
                <span className={navOpen ? 'navbar__icon active' : 'navbar__icon'} />
            </button>

            <div className={navOpen ? 'navbar__nav active' : 'navbar__nav'}>
                <ul className="navbar__nav__menu">
                    <li className="navbar__nav__menu__item">
                        <Link to='/' className='navbar__nav__menu__item__link'>Home</Link>
                    </li>
                    <li className="navbar__nav__menu__item">
                        <Link to='/' className='navbar__nav__menu__item__link'>Tours</Link>
                    </li>
                    <li className="navbar__nav__menu__item">
                        <Link to='/' className='navbar__nav__menu__item__link'>Services</Link>
                    </li>
                    <li className="navbar__nav__menu__item">
                        <Link to='/' className='navbar__nav__menu__item__link'>Contact Us</Link>
                    </li>
                    <li className="navbar__nav__menu__item">
                        <Link to='/' className='navbar__nav__menu__item__link'>About Us</Link>
                    </li>
                </ul>
            </div>
        
            
        </div>
    );

};


export default NavBar;