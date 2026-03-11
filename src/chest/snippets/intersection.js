const intersection = (intersected, ...arrays) => [...new Set(intersected)]
    .filter((e) => arrays.every((array) => array.includes(e)));

//intersection([1, 2, 3], [2, 3, 4, 7, 8])

console.log(intersection([1, 2, 3], [2, 3, 4, 7, 8], [1, 3, 9]))
