import React from 'react';

import classes from './NumPad.module.css';

import KeyButton from './KeyButton/KeyButton';

const NumPad = (props) => {

    const isHex = props.base === 'HEX' ? true : false;
    const isOct = props.base === 'OCT' ? true : false;
    const isBin = props.base === 'BIN' ? true : false;
    const isDec = props.base === 'DEC' ? true : false;

    return (
        <div className={classes.NumPad}>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('A')}>A</KeyButton>
            <KeyButton clicked={() => props.onClickKey('<<')}>&laquo;</KeyButton>
            <KeyButton clicked={() => props.onClickKey('>>')}>&raquo;</KeyButton>
            <KeyButton clicked={() => props.onClickKey('clear')}>C</KeyButton>
            <KeyButton clicked={() => props.onClickKey('backspace')}>&larr;</KeyButton>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('B')}>B</KeyButton>
            <KeyButton clicked={() => props.onClickKey('(')}>(</KeyButton>
            <KeyButton clicked={() => props.onClickKey(')')}>)</KeyButton>
            <KeyButton clicked={() => props.onClickKey('%')}>%</KeyButton>
            <KeyButton btnType="operator" clicked={() => props.onClickKey('/')}>&divide;</KeyButton>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('C')}>C</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(7)}>7</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isHex} clicked={() => props.onClickKey(8)}>8</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isHex} clicked={() => props.onClickKey(9)}>9</KeyButton>
            <KeyButton btnType="operator" clicked={() => props.onClickKey('*')}>&times;</KeyButton>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('D')}>D</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(4)}>4</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(5)}>5</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(6)}>6</KeyButton>
            <KeyButton btnType="operator" clicked={() => props.onClickKey('-')}>&minus;</KeyButton>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('E')}>E</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex && !isBin} clicked={() => props.onClickKey(1)}>1</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(2)}>2</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex} clicked={() => props.onClickKey(3)}>3</KeyButton>
            <KeyButton btnType="operator" clicked={() => props.onClickKey('+')}>&#43;</KeyButton>
            <KeyButton btnType="digit" disabled={!isHex} clicked={() => props.onClickKey('F')}>F</KeyButton>
            <KeyButton clicked={() => props.onClickKey('sign')}>+/-</KeyButton>
            <KeyButton btnType="digit" disabled={!isDec && !isOct && !isHex && !isBin} clicked={() => props.onClickKey(0)}>0</KeyButton>
            <KeyButton clicked={() => props.onClickKey('**')}>^</KeyButton>
            <KeyButton btnType="equal" clicked={() => props.onClickKey('=')}>=</KeyButton>
        </div>
    );
}

export default NumPad;