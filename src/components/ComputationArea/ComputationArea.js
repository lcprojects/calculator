import React from 'react';

import classes from './ComputationArea.module.css';

import Computation from './Computation/Computation';
import CurrentComputation from './CurrentComputation/CurrentComputation'

const ComputatationArea = (props) => (
    <div className={classes.Wrapper}>
        <div className={classes.ComputatationArea}>
            {props.history.map((value, index) => {
                return <Computation key={index} expression={value[0]} value={value[1]}/>
            })}
            <CurrentComputation currentComputation={props.currentExpression} value={props.currentValue} />
        </div>
    </div>
);

export default ComputatationArea;