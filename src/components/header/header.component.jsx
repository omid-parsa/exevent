import React from 'react';
import './header.styles.scss';

import logo from '../../assets/img/logo.png';

//COMPONENTS
import HeadingPrimary from '../heading-primary/heading-primary.component';
import MainButton from '../main-button/main-button.component';

const Header = () => (
    <div className='header'>
        <div className="header__logo-box">
            <img src={logo} alt='logo' className='header__logo'/>
        </div>
        <div className='header__text-box'>
            <HeadingPrimary mainText='Excursions' subText='Another dimension of class' />
            <MainButton color='white' text='explore more' to='/'/>
        </div>
    </div>

);

export default Header;