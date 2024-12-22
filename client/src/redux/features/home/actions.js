import axios from "axios";
import { GET_DATA_ERROR_HOME, GET_DATA_LOADING_HOME, GET_DATA_SUCCESS_LOWER, GET_DATA_SUCCESS_UPPER } from "./actionTypes";

export const getDataLoadingHome = () => ({type: GET_DATA_LOADING_HOME});
export const getDataSuccessUpper = (payload) => ({type: GET_DATA_SUCCESS_UPPER, payload});
export const getDataSuccessLower = (payload) => ({type: GET_DATA_SUCCESS_LOWER, payload});
export const getDataErrorHome = () => ({type: GET_DATA_ERROR_HOME});

export const getUpperData = () => async (dispatch) => {
    
    try{
        dispatch(getDataLoadingHome());
        const res = await axios.get('/homeUpperData');
        dispatch(getDataSuccessUpper(res.data));
    }catch(err){
        console.log(err)
        dispatch(getDataErrorHome());
    }
}

export const getLowerData = () => async (dispatch) => {
    try{
        dispatch(getDataLoadingHome());
        const res = await axios.get('/homeLowerData');
        dispatch(getDataSuccessLower(res.data));
    }catch(err){
        console.log(err)
        dispatch(getDataErrorHome());
    }
    
}