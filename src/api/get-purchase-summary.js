const purchaseSummary = {
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

const SAMPLE_PROMO= "DISCOUNT";
let applied = false;
export const validatePromo = (promoCode) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (promoCode === SAMPLE_PROMO && !applied) {
                const {total} = purchaseSummary.pricing;
                const total_price = total - (total / 100) * 10;
                applied = true;
                resolve({total: total_price});
            } else {
                // this indicate error in the validate promo thunk function
                if (applied) {
                    reject({
                        promoApplied: true,
                        invalidPromo: false
                    })
                } else {
                    reject({invalidPromo: true})
                }
            }
        }, 1000);
    })
};

export const fetchPurchaseSummary = (delay = 1000) => {
    return new Promise(function(resolve, reject) {
       setTimeout(function(){
           resolve(purchaseSummary)
       }, delay);
    });
};