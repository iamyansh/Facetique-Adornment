const coupon = {
    FTQ5: 5,
    FTQ10: 10,
    FTQ15: 15,
    FTQ20: 20,
    FTQ25: 25,
    FTQ30: 30,
};


export const couponValidator = (couponCode) => {
    return coupon[couponCode] ? coupon[couponCode] : false;
};
