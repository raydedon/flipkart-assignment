import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./scripts/configure-store";
import Home from "./scripts/Home";
import Provider from "./scripts/Provider";

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
