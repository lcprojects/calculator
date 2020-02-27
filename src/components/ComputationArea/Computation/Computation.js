import React from 'react';

import classes from './Computation.module.css';

const Computation = (props) => (
    <p className={classes.Computation}>{props.expression} = {props.value}</p>
);

export default Computation;