import React from 'react';
import classes from './CurrentComputation.module.css';

const CurrentComputation = (props) => {
    let result;
    if (props.value) {
        result = <span> = <br/><strong> {props.value}</strong></span>;
    } else {
        result = <span></span>;
    }
    
    return (
        <p className={classes.CurrentComputation}>{props.currentComputation === '' ? '0' : props.currentComputation} {result}</p>
    );
};

export default CurrentComputation;