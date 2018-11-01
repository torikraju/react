import React, {Component} from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.crt}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        crt: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 15})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);