import React from 'react';
import {setLoading, receivedPurchaseSummary, toValidatePromoCode, invalidPromoCode} from "./actions";
import {RECIEVE_PURCHASE_SUMMARY, SET_LOADING, VALIDATE_PROMO_CODE, INVALID_PROMO} from "./types";

const payload = "info";


it("should setLoading action object", () => {
    const action = setLoading(payload);

    expect(action).toEqual({
        type: SET_LOADING,
        payload
    });
});

it("should receivedPurchaseSummary action object", () => {
    const action = receivedPurchaseSummary(payload);

    expect(action).toEqual({
        type: RECIEVE_PURCHASE_SUMMARY,
        payload
    });
});

it("should toValidatePromoCode action object", () => {
    const action = toValidatePromoCode(payload);

    expect(action).toEqual({
        type: VALIDATE_PROMO_CODE,
        payload
    });
});

it("should invalidPromoCode action object", () => {
    const action = invalidPromoCode(payload);

    expect(action).toEqual({
        type: INVALID_PROMO,
        payload
    });
});