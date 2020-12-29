import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
//primary button has fill, while 2nd button style in array is transparent in middle.

const SIZES = ['btn--medium', 'btn--large'];
// SIZE array for selecting button size

export const Button = ({
    children, 
    type, 
    onCLick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //this condition checks if a button has a stle already.
    //If it has one then it keeps it, if not, it adopts the first style in the STYLES array

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onCLick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
