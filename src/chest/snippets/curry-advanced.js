const transaction = (fee, balance, amount) => balance + amount - fee;

const curry = (fn, ...defaultArgs) => {

    return function (...arg) {

        return fn(...defaultArgs, ...arg);

    }

    //return (..._arg) => fn(...defaultArgs, ..._arg);

}
//Fee Free transaction
const feeFreeTransaction = curry(transaction, 0);

const feeTransaction = curry(transaction, 10);

function make() {

    console.log(feeFreeTransaction(10, 90));

    console.log(feeTransaction(10, 90));
}

make();
