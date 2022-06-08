"use strict";

function bitwiseNot(value) {
    let result = Math.floor(value);
    return -(result + 1);
}


console.log(bitwiseNot(-9));
console.log(bitwiseNot(9));