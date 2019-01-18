import purchaseSummaryReducer from "../reducers/purchase-summary-reducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const initialState = {
    loading: false,
    purchaseSummary: {},
    promoError: false,
    promoApplied: false
};

const store = createStore(purchaseSummaryReducer, initialState, applyMiddleware(thunk));

export default store;