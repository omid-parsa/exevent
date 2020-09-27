//imported in SectionOptions
import React from 'react';

import './card.styles.scss';
import { Link } from 'react-router-dom';


const Card = ({title, feature1, feature2, feature3, modifier}) => (
    <div className={`card card--${modifier}`}>
        <div className={`card__picture card__picture--${modifier}`}/>
        <h4 className={`card__title card__title--${modifier}`}>
            <span className={`card__title-span card__title-span--${modifier}`} >{title}</span>
        </h4>
        <div className="card__details">
            <ul>
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
            </ul>
        </div>

        <Link className='card__btn' to='/'>Order Now</Link>
        
    </div>
);
export default Card;