import React, {Component} from 'react';
import {decrement, increment} from "./actions";
import ReactReduxContext from "./context";

export default class Home extends Component {
    incrementClickHandler() {
        this.props.store.dispatch(increment());
    }

    decrementClickHandler() {
        this.props.store.dispatch(decrement());
    }

    render() {
        let {store} = this.props;
        return (
            <div className="outer">
                <p>
                    Counter: <span>{store.getState()}</span> times
                    <button onClick={this.incrementClickHandler}>+</button>
                    <button onClick={this.decrementClickHandler}>-</button>
                </p>
            </div>
        );
    }
}


