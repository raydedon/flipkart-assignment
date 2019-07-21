export function createStore(reducer, initialState) {
    const listenerArray = [];
    let currentState = initialState;
    function subscribe(listener) {
        let index = listenerArray.length;
        listenerArray.push(listener);
        function unSubscribe() {
            listenerArray.splice(index, 1);
        }

        return unSubscribe;
    }

    function dispatch(action) {
        currentState = reducer(currentState, action);
        for(let listener of listenerArray) listener();
        return action;
    }

    function getState() {
        return currentState;
    }

    return {
        subscribe,
        dispatch,
        getState
    };
}