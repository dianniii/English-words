import React from 'react';
import styles from './AppButton.module.css';

const Button = ({ type, text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={type === 'close' ? styles.close : styles.check}
        >
            {text}
        </button>
    );
};

export default Button;


