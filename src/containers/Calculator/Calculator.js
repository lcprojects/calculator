import React, {Component} from 'react';

import ComputationArea from './../../components/ComputationArea/ComputationArea';
import ControlsArea from './../../components/ControlsArea/ControlsArea';
import * as BASES from './../../constants/Bases';

import classes from './Calculator.module.css';

class Calculator extends Component {

    state = {
        base: 'DEC',
        currentExpression: '',
        currentValue: '',
        expressionHistory: [],
        newComputation: false
    };

    convertBetweenBases(terms, from, to) {
        terms = terms.map((value, index) => {
            const number = Number.parseInt(value, from);
            if (!Number.isNaN(number)) {
                return number.toString(to).toUpperCase();
            } else {
                return value;
            }
        });
        return terms;
    }

    setBase = (base) => {
        if (this.state.currentExpression && base !== this.state.base) {
            let terms = this.state.currentExpression.split(' ');
            let value = this.state.currentValue;

            terms = this.convertBetweenBases(terms, BASES[this.state.base], BASES[base]);
            value = this.convertBetweenBases([value], BASES[this.state.base], BASES[base])[0]
            
            this.setState((state) => {
                return {
                    base: base,
                    newComputation: state.currentValue ? true : false,
                    currentExpression: terms.join(' '),
                    currentValue: value
                }
            });
        }

        this.setState({
            base: base
        });
    }

    clickKey = (key) => {
        this.setState((state) => {
            if (state.newComputation && state.currentExpression) {
                return {
                    currentValue: '',
                    currentExpression: '',
                    expressionHistory: [...state.expressionHistory, [state.currentExpression, state.currentValue]],
                    newComputation: false
                }
            }
        });
        if (key === '=') {
            this.setState((state) => {
                if (state.currentExpression && state.newComputation === false) {
                    let currentValue = '';
                    try {
                        if (state.base === 'DEC') {
                            currentValue = eval(state.currentExpression);
                        } else {
                            currentValue = eval(this.convertBetweenBases(state.currentExpression.split(' '), BASES[state.base], BASES.DEC).join(' '))
                            currentValue = this.convertBetweenBases([currentValue], BASES.DEC, BASES[state.base])[0];
                        }
                        return {
                            currentValue: currentValue,
                            newComputation: true
                        }
                    } catch (error) {
                        return {
                            currentValue: 'Error',
                            newComputation: true
                        }
                    }
                }
            });
        }
        if (Number.isInteger(key) || ['A', 'B', 'C', 'D', 'E', 'F'].includes(key)) {
            this.setState((state) => {
                return {
                    currentExpression: state.currentExpression + key
                }
            });
        }
        if ( key === '+' || key === '-' || key === '/' || key === '*' || key === '%' || key === '(' || key === ')' || key === '<<' || key === '>>' || key === '**') {
            this.setState((state) => {
                return {
                    currentExpression: state.currentExpression + ' ' + key + ' '
                }
            });
        }
        if ( key === 'sign') {
            const terms = this.state.currentExpression.split(' ');
            if (this.state.currentExpression) {
                if (terms[terms.length - 1][0] === '-') {
                    terms[terms.length - 1] = '+' + terms[terms.length - 1].substring(1);
                } else if (terms[terms.length - 1][0] === '+') {
                    terms[terms.length - 1] = '-' + terms[terms.length - 1].substring(1);
                } else {
                    terms[terms.length - 1] = '-' + terms[terms.length - 1];
                }
            }
            this.setState({
                currentExpression: terms.join(' ')
            });
        }
        if (key === 'clear') {
            this.setState((state) => {
                return {
                    currentValue: '',
                    currentExpression: '',
                }
            });
        }
        if (key === 'backspace') {
            this.setState((state) => {
                let newExpression;
                if (state.currentExpression[state.currentExpression.length - 1] === ' ') {
                    if (['>>','<<','**'].includes(state.currentExpression[state.currentExpression.length - 3] + state.currentExpression[state.currentExpression.length - 2])) {
                        newExpression = state.currentExpression.slice(0, -4);
                    } else if (['+','-','*','/','%'].includes(state.currentExpression[state.currentExpression.length - 2])) {
                        newExpression = state.currentExpression.slice(0, -3);
                    } else {
                        newExpression = state.currentExpression.slice(0, -2);
                        console.log(newExpression)
                    }
                } else {
                    newExpression = state.currentExpression.slice(0, -1);
                }
                
                return {
                    currentExpression: newExpression
                }
            });
        }
    }

    onKeyDown = function(e) {
        e.preventDefault();
        let keys = ['0', '1', '/', '+', '-', '*', 'Enter', '(', ')', 'Backspace'];
        
        switch (this.state.base) {
            case 'DEC' : keys = [...keys, '2','3','4','5','6','7','8','9']; break;
            case 'HEX' : keys = [...keys, 'A', 'B', 'C', 'D', 'E', 'F', '2', '3', '4', '5', '6', '7', '8', '9']; break;
            case 'OCT' : keys = [...keys, '2', '3', '4', '5', '6', '7']; break;
            default:
        }
        if (keys.includes(e.key)) {
            const key = e.key === 'Enter' ? '=' :
                e.key === 'Backspace' ? 'backspace' :
                    Number.isNaN(Number(e.key)) ? e.key : Number(e.key);

            this.clickKey(key);
        }
    }.bind(this);

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.onKeyDown);
    }

    render () {
        return (
            <div className={classes.Calculator}>
                <ComputationArea
                    currentExpression={this.state.currentExpression}
                    currentValue={this.state.currentValue}
                    history={this.state.expressionHistory}
                />
                <ControlsArea
                    setBase={this.setBase}
                    base={this.state.base}
                    clickKey={this.clickKey}
                />
            </div>
        );
    }
}

export default Calculator;