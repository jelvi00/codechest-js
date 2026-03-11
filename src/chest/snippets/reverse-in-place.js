const reverseString = (str) => {

    if (!str || typeof str !== 'string' || !str.trim()) return;

    return str.split("").reduceRight((word, letter) => word + letter);
}

//Reverse in place
const reverseArrayInPlace = (arr) => {

    if (!arr?.length) return;

    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }

    return arr;
}


function make() {

    console.log(reverseString("pizza"));

    console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

}

make();
