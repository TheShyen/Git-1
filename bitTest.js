'use strict';

console.log("AND");
console.log(0 & 0); // 0
console.log(0 & 1); // 0
console.log(1 & 0); // 0
console.log(1 & 1); // 1

console.log("OR");
console.log(0 | 0); // 0
console.log(0 | 1); // 1
console.log(1 | 0); // 1
console.log(1 | 1); // 1

console.log("XOR");
console.log(0 ^ 0); // 0
console.log(0 ^ 1); // 1
console.log(1 ^ 0); // 1
console.log(1 ^ 1); // 0


console.log("Побитовое НЕ");
console.log(~0); // -1
console.log(~1); // -2

console.log("БИТОВЫЙ СДВИГ ВПРАВО");
let test = 88;
console.log(test >> 1); // 44
console.log(test >> 2); // 22
console.log(test >> 3); // 11

console.log("БИТОВЫЙ СДВИГ ВЛЕВО");
let shift = 8;
console.log(shift << 1); // 16
console.log(shift << 2); // 32
console.log(shift << 3); // 64


console.log(1.333 ^ 0); // 1
console.log(~~1.333); // 1