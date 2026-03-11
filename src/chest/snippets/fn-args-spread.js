const sumAll = (...args) => args.reduce((pv, cv) => pv + cv, 0);

function make() {
    console.log(sumAll(1, 2, 3, 4, 5));
}

make();
