import styled from 'styled-components';

import { Link } from 'react-router-dom';

// export const Button = () => {

//     return (styled(Link)`
//     text-decoration:none;
//     text-transform: uppercase;
    
//     `);
// }
export const Button = styled(Link)`
    text-decoration:none;
    text-transform: uppercase;
    margin-top: 4rem;
    padding: 1.5rem 4rem;
    display: inline-block;
    transition: all .2s;
    position: relative;
    font-size: var(--default-font-size);
    border: none;
    cursor: pointer;

    background-color: ${props => props.color === 'white' ? 'var(--color-white);' :  props.color === 'primary' ? 'var(--color-primary);' : ';'}
    color: ${props => props.color === 'white' ? 'var(--color-grey-dark);' :  props.color === 'primary' ? 'var(--color-white);' : ';'}
    
    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);;

     
    }    
`;