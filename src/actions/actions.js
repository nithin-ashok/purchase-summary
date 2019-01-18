import {
    SET_LOADING, RECIEVE_PURCHASE_SUMMARY,
    VALIDATE_PROMO_CODE, INVALID_PROMO
} from "./types";
import {fetchPurchaseSummary, validatePromo} from "../api/get-purchase-summary";

export const setLoading = (payload) =>({
   type: SET_LOADING,
    payload
});

export const receivedPurchaseSummary = (payload) =>({
    type: RECIEVE_PURCHASE_SUMMARY,
    payload
});

export const toValidatePromoCode = (payload) => ({
    type: VALIDATE_PROMO_CODE,
    payload
});

export const invalidPromoCode = (payload) =>({
   type: INVALID_PROMO,
    payload
});


/* thunk function to get purchase summary data from backend. This
is to demonstrate async operation in react redux eco-system */

export const getPurchaseSummary = () => dispatch => {
    // this turns spinner on during api call
    dispatch(setLoading("PURCHASE_SUMMARY"));
    return fetchPurchaseSummary().then((data) => {
        setLoading(null);
        dispatch(receivedPurchaseSummary(data))
    });
};

export const validatePromoCode = (promoCode) => dispatch => {
    dispatch(setLoading("PROMO_CODE"));
    return validatePromo(promoCode).then((data) => {
        dispatch(setLoading(null));
        dispatch(toValidatePromoCode(data));
        dispatch(invalidPromoCode({
            invalidPromo:null,
            appliedPromo:null
        }));
    }, (error) => {
        dispatch(setLoading(null));
        dispatch(invalidPromoCode(error))
    })
}