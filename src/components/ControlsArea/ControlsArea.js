import React from 'react';

import BasePicker from './BasePicker/BasePicker';
import NumPad from './NumPad/NumPad';

import classes from './ControlsArea.module.css';

const ControlsArea = (props) => (
    <React.Fragment>
        <div className={classes.ControlsHeader}>
            <BasePicker setBase={props.setBase} currentBase={props.base}/>
        </div>
        <NumPad onClickKey={props.clickKey} base={props.base}/>
    </React.Fragment>
);

export default ControlsArea;