//// importing the actions
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from '../Utils/ActionTypes';

//declaring the initial state within a const variable
const intitialState = {
    isFetching: false,
    data: [],
    hasError: false,
    errorMessage: null,
};
//creating a default export function and setting the state to the value of the initial state above, then an action that implements a switch statement for each action that we imported
export default function (state = intitialState, action) {
    switch (action.type) {

        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });

        default:
            return state;
    }
}