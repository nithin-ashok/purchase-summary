import React from 'react';
import purchaseSummary from './purchase-summary-reducer';
import {RECIEVE_PURCHASE_SUMMARY, SET_LOADING} from "../actions/types";

const payload = {
    pricing: {
        subtotal : 102.96,
        savings: 3.85,
        tax: 8.92,
        total: 108.03,
        zip: 85050
    },
    itemDetails: {
        item_name: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        afterDisc_Price: "99.11",
        beforeDisc_Price: 102.96,
        quantity: 1,
    }
};

const load = false;


it('should receive and set purchase order summary data', () => {
    const action = {
        type: RECIEVE_PURCHASE_SUMMARY,
        payload
    };
    const state = purchaseSummary({}, action);
    expect(state.purchaseSummary).toEqual(action.payload);
});

it('should set loading', () => {
    const action = {
        type: SET_LOADING,
        payload: load
    };
    const state = purchaseSummary({}, action);
    expect(state.loading).toBe(action.payload);
});