import PurchaseSummary from "../App";
import {RECIEVE_PURCHASE_SUMMARY, SET_LOADING,
    VALIDATE_PROMO_CODE, INVALID_PROMO} from "../actions/types";



function purchaseSummary(state, action) {
    const {payload, type} = action;
    switch(type) {
        case RECIEVE_PURCHASE_SUMMARY:
            return {
                ...state,
                loading: false,
                purchaseSummary: payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }

        case VALIDATE_PROMO_CODE:
            return {
                ...state,
                purchaseSummary: {
                    ...state.purchaseSummary,
                    pricing: {
                        ...state.purchaseSummary.pricing,
                        ...payload
                    }
                }
            }

        case INVALID_PROMO:
            return {
                ...state,
                ...payload
            }

        default:
            return state;
    }
}

export default purchaseSummary;