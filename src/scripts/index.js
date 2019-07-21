import '../styles/index.scss';
//import {createStore} from 'redux';
import {createStore} from './create-store';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const store = createStore((state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}, 0);

let render = (store) => {
    document.querySelector('#value').innerHTML = store.getState().toString();
};

render = render.bind(null, store);
render();

store.subscribe(render.bind(store.getState()));

document.querySelector('#increment')
    .addEventListener('click', function () {
        store.dispatch({ type: 'INCREMENT' });
    });
document.querySelector('#decrement')
    .addEventListener('click', function () {
        store.dispatch({ type: 'DECREMENT' });
    });
document.querySelector('#incrementIfOdd')
    .addEventListener('click', function () {
        if (store.getState() % 2 !== 0) {
            store.dispatch({ type: 'INCREMENT' });
        }
    });
document.querySelector('#incrementAsync')
    .addEventListener('click', function () {
        setTimeout(function () {
            store.dispatch({ type: 'INCREMENT' });
        }, 1000);
    });
