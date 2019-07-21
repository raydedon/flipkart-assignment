import {createStore} from "./create-store";
import {reducer} from "./reducer";

export function configureStore(initialState = 0) {
    return createStore(reducer, initialState);
}
