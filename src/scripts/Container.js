import React, {Component} from 'react';
import {decrement, increment} from "./actions";
import ReactReduxContext from "./context";
import Home from "./Home";

export default class Container extends Component {
    incrementClickHandler() {
        store.dispatch(increment());
    }

    decrementClickHandler() {
        store.dispatch(decrement());
    }

    updateStateFromStore() {
        const currentState = this.getCurrentStateFromStore();

        if (this.state !== currentState) {
            this.setState(currentState);
        }
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }

    render() {
        return (
            <ReactReduxContext.Consumer>
                {(store) => {
                    <Home store={store} />
                }}
            </ReactReduxContext.Consumer>
        );
    }
}


