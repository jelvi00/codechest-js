//Reverse string
"pizza".split("").reduceRight((word, letter) => word + letter);

//Reverse in place
const reverseArrayInPlace = (array) => {
    const arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        array.splice(i, 0, array.pop());
    }
}