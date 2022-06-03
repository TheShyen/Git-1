"use strict";
debugger;
function curry(func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}
let curriedSum = curry(sum);
console.log(curriedSum(10)(27)); // 37

function advancedCurry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sumOfThree(a, b, c) {
    return a + b + c;
}

let threeSum = advancedCurry(sumOfThree);
console.log(threeSum(1, 2, 3)); // 6
console.log(threeSum(1, 2)(4)); // 7
console.log(threeSum(1)(2)(5)); // 8
