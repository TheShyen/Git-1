"use strict";

function* iter() {
    yield 1;
    yield 2;
    yield { aboba: 3 };
    yield 4;
}
const arr = [];
for (let key of iter()) {
    arr.push(key);
}
console.log(arr); // [1, 2, {aboba: 3}, 4]

const test = iter();
console.log(test.next()); // {value: 1, done: false}
console.log(test.next()); // {value: 2, done: false}
console.log(test.next()); // {value: {…}, done: false}
console.log(test.next()); // {value: 4, done: false}
console.log(test.next()); // {value: undefined, done: true}

const test1 = iter();
console.log([...test1]); // [1, 2, {…}, 4]

const test3 = iter();

for (let key of test3) {
    console.log(key); // 1
    break;
}

console.log(test3.next().value); // undefined

for (let key of test3) {
    console.log(key); // Генератор нельзя повторно обойти
}

// Композиция
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
function* generatePasswordCodes() {
    yield* generateSequence(48, 57);

    yield* generateSequence(65, 90);

    yield* generateSequence(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str);
