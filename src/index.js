import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./scripts/configure-store";
import Home from "./scripts/Home";

const store = configureStore();

ReactDOM.render(
	<Home store={store} />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
