import React from 'react';
import classes from './KeyButton.module.css';

const Button = (props) => {
    return (
        <button className={[classes.Button, props.btnType ? classes[props.btnType] : null].join(' ')} disabled={props.disabled} onClick={props.clicked}>{props.children}</button>
    );
}

export default Button;