"use strict";

function bitwiseNot(value) {
    let result = Math.floor(value);
    return -(result + 1);
}

function binaryAddition(a, b) {
    var result = "",
        carry = 0;

    while (a || b || carry) {
        let sum = +a.slice(-1) + (+b.slice(-1)) + carry; // get last digit from each number and sum

        if (sum > 1) {
            result = (sum % 2) + result;
            carry = 1;
        } else {
            result = sum + result;
            carry = 0;
        }

        // trim last digit (110 -> 11)
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }

    return result;
}

function bitNot(value) {
    let base = value.toString(2);
    let ten = "";

    for (let k of base) {
        if (k == 0) {
            k = 1;
            ten += k;
        } else {
            k = 0;
            ten += k;
        }
    }
    let rev = ten.split("").reverse().join("");
    if (value >= 0) {
        rev = rev.padStart(32, "1");
    } else {
        rev = rev.padStart(32, "0");
    }
    console.log(rev);
    if (rev[0] == 1) {
        rev = binaryAddition(rev, "1");
        console.log(parseInt(rev,2));
    }
    rev = rev.slice(0, -1);
    rev = binaryAddition(rev, "1");
    console.log(rev);
    console.log(parseInt(rev,2));
}

bitNot(5);
let a = 5;
console.log(~a);
