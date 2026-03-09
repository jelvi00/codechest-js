const sumAll = (...args) => {

    return args.reduce((pv, cv) => pv + cv, 0);

};



export {sumAll};