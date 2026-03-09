const transaction = (fee, balance, amount) => balance + amount - fee;

const curry = (fn, ...args) => (
    (..._arg) => (
        fn(...args, ..._arg)
    )
);

//Fee Free transaction
const freeTransaction = curry(transaction, 0);

freeTransaction(10, 90);