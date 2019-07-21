import React, {Component} from 'react';
import {decrement, increment} from "./actions";

export default class Home extends Component {
    incrementClickHandler() {
        store.dispatch(increment());
    }

    decrementClickHandler() {
        store.dispatch(decrement());
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }

    render() {
        return (
            <div className="outer">
                <p>
                    Counter: <span>{store.getState()}</span> times
                    <button onClick={incrementClickHandler}>+</button>
                    <button onClick={decrementClickHandler}>-</button>
                </p>
            </div>
        );
    }
}


