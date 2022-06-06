"use strict";

function bitwiseNot(value) {
    let result = Math.floor(value);
    return -(result + 1);
}
console.log(bitwiseNot(3));
console.log(bitwiseNot(-1));
console.log(bitwiseNot(6));
console.log(bitwiseNot(2));
console.log(bitwiseNot(1));