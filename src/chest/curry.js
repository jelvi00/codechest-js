const curry = (fn) => {

    return (a) => (b) => fn(a, b);

};

const sum = (a, b) => a + b;

const curriedSum = curry(sum);

