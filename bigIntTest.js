"use strict";

const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10);

console.log(bigintFromNumber); // 10n

//console.log(10n + 13n / 2); // Error: Cannot mix BigInt and other types

console.log(typeof 10n); // bigint

let number = 2;

// конвертируем number в bigint
console.log(bigint + BigInt(number)); // 1234567890123456789012345678901234567892n

// конвертируем `bigint` в number
console.log(Number(bigint) + number); // 1.2345678901234568e+39

if (0n) {
    console.log("Abobus"); // не выполнится
}

if (1n) {
    console.log("AYAYA"); // AYAYA
}
