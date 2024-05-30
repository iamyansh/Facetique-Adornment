import axios from "axios";
import { GET_DATA_ERROR_HOME, GET_DATA_LOADING_HOME, GET_DATA_SUCCESS_CLOTH, GET_DATA_SUCCESS_SHOE, GET_DATA_SUCCESS_EARING } from "./actionTypes";

export const getDataLoadingHome = () => ({ type: GET_DATA_LOADING_HOME });

export const getDataSuccessCloth = (payload) => ({ type: GET_DATA_SUCCESS_CLOTH, payload });

export const getDataSuccessShoe = (payload) => ({ type: GET_DATA_SUCCESS_SHOE, payload });

export const getDataSuccessEaring = (payload) => ({type: GET_DATA_SUCCESS_EARING, payload});

export const getDataErrorHome = (payload) => ({ type: GET_DATA_ERROR_HOME, payload });


export const getClothData = () => async (dispatch) => {
    try {
        dispatch(getDataLoadingHome());
        let res = await axios.get("/homeBottomData");
        // console.log(res);
        dispatch(getDataSuccessCloth(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getDataErrorHome());
    }
};

// export const getShoeData = () => async (dispatch) => {
//     try {
//         dispatch(getDataLoadingHome());
//         let res = await axios.get("/shoeData");
//         dispatch(getDataSuccessShoe(res.data));
//     } catch (err) {
//         console.log(err);
//         dispatch(getDataErrorHome());
//     }
// };


export const getEaringData = () => async (dispatch) => {
    try {
        dispatch(getDataLoadingHome());
        let res = await axios.get("/homeTopData");
        dispatch(getDataSuccessShoe(res.data));
    } catch (err) {
        console.log(err);
        dispatch(getDataErrorHome());
    }
};