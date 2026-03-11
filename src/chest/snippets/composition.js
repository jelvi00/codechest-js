const compose = (...fns) => {

    return (x) => fns.reduce((pv, fn) => fn(pv), x);

}

// Before sell functions
const addFee = (amount) => amount + 2;
const addDiscount = (amount) => amount - 5;


const finalAmount = compose(addFee, addDiscount)(100);