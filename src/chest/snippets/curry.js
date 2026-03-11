const curry = (fn) => {

    return function (a) {

        return function (b) {

            return fn(a, b);

        }

    }

    //return (a) => (b) => fn(a, b);

};

const sum = (a, b) => a + b;


function make() {

    console.log(
        curry(sum)(1)(2)
    );

}

make();
