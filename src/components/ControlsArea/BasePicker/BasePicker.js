import React from 'react';

import classes from './BasePicker.module.css';

const BasePicker = (props) => {
    return (
        <ul className={classes.BasePicker}>
            <li><button className={props.currentBase === 'HEX' ? classes.active : null} onClick={() => props.setBase('HEX')}>HEX</button></li>
            <li><button className={props.currentBase === 'DEC' ? classes.active : null} onClick={() => props.setBase('DEC')}>DEC</button></li>
            <li><button className={props.currentBase === 'OCT' ? classes.active : null} onClick={() => props.setBase('OCT')}>OCT</button></li>
            <li><button className={props.currentBase === 'BIN' ? classes.active : null} onClick={() => props.setBase('BIN')}>BIN</button></li>
        </ul>
    );
};

export default BasePicker;