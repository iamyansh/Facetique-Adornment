import { GET_DATA_ERROR_HOME, GET_DATA_LOADING_HOME, GET_DATA_SUCCESS_LOWER, GET_DATA_SUCCESS_UPPER } from "./actionTypes";

const init = {
    loading: false,
    upperData: [],
    lowerData: [],
    error: false
}

export const homeReducer = (state = init, {type, payload}) => {
    switch(type){
        case GET_DATA_LOADING_HOME:
            return {...state, loading: true, error: false};
        case GET_DATA_SUCCESS_UPPER:
            return {...state, upperData: payload, loading: false, error: false};
        case GET_DATA_SUCCESS_LOWER:
            return {...state, lowerData: payload, loading: false, error: false};
        case GET_DATA_ERROR_HOME:
            return {...state, loading: false, error: true};
        default:
            return state;
    }
}