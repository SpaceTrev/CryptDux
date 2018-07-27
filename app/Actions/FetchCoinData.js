//imports axios
import axios from 'axios';
//grabs URL for the API
import { apiBaseURL } from '../Utils/Constants';
//importing those const variables for fetching coin data
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../Utils/ActionTypes';

// exports a function that returns a function that grabs api data
export default function FetchCoinData() {
        return dispatch => {
            dispatch({ type: FETCHING_COIN_DATA })
            return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
                .then(res => {
                    dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data})
                })
                .catch(err => {
                    dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data})
                });
        }
}
