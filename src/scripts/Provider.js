import React, { Component } from 'react'
import ReactReduxContext from "./context";

export default class Provider extends Component {
    constructor(props) {
        super(props)

        const {store} = props;
        this.state = {
            store
        };

        this.previousState = store.getState()
    }

    render() {
        const {Provider} = this.props.context || ReactReduxContext;

        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}