import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_PRICE_RANGE, NAME_A_TO_Z, NAME_Z_TO_A, RATING_HIGH_TO_LOW, RATING_LOW_TO_HIGH, RESET_FILTERS, SET_ALL_FILTERS, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes"
import { convertObject } from "../../../utils/extraFunctions";


const init = {
    isLoading : false,
    isError : false,
    products: [],
    backupData: [],
    filter: {
        Category: {Earing: false, Bracelet: false, Chain: false},
        Size: {Small: false, Medium: false, Large: false},
        Color: {Black: false, White: false, Gold: false, Blue: false}
    }
}


export const prodReducer = (state = init, {type, payload}) => {
    switch(type){
        case GET_DATA_LOADING:
            return {...state, isLoading: true, isError: false };
        case GET_DATA_ERROR:
            return {...state, isError: true, isLoading: false};
        case GET_DATA_SUCCESS:
            return {...state, isError: false, isLoading: false, backupData: payload, products: payload};
        case SORT_LOW_TO_HIGH:
            return {...state, products: state.products.sort((a,b)=> a.price-b.price)};
        case SORT_HIGH_TO_LOW:
            return {...state, products: state.products.sort((a,b)=> b.price-a.price)};
        case RATING_LOW_TO_HIGH:
            return {...state, products: state.products.sort((a,b)=> a.rating-b.rating)};
        case RATING_HIGH_TO_LOW:
            return {...state, products: state.products.sort((a,b)=> b.rating-a.rating)};
        case NAME_A_TO_Z:
            return {...state, products: state.products.sort((a,b)=> a.title.localeCompare(b.title))};
        case NAME_Z_TO_A:
            return {...state, products: state.products.sort((a,b)=> b.title.localeCompare(a.title))};
        case GET_PRICE_RANGE:
            return {
                ...state,
                products: state.products.filter((e)=>(e.price>=payload.minPrice && e.price<=payload.maxPrice))
            }
        case RESET_FILTERS:
            return {
                ...state,
                products: state.backupData,
                filters: {
                    Category: { Cloths: false, Shoes: false },
                    Size: { Small: false, Medium: false, Large: false },
                    Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
                }
            };
        case SET_ALL_FILTERS:

            const {Category, Color, Size} = convertObject(payload);
            console.log(Category, Color, Size);

            const variableMapped = {
                Category, Color, Size
            };

            const functionMapped = {
                "Category": "Category.includes(e.category)",
                "Color": "Color.includes(e.color)",
                "Size": "checkSize(Size, e.size)"
            };

            return {
                ...state,
                filters: payload,
                products: state.backupData.filter((e) => {
                    let equation = ['Category', 'Size', 'Color'].filter((e) => (variableMapped[e].length > 0));
                    
                    equation = equation.map((e) => (functionMapped[e])).join(' && ');
                    return eval(equation);
                })
            }
        default:
            return state;
    }
}


function checkSize(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                return true;
            }
        }
    }
    return false;
}
