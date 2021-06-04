function sumArr (arr) {
    let sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
    return sum(arr);
}

let arr = [1, [2, [3, [4]]]];

console.log(sumArr(arr));