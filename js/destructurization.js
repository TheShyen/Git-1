'use strict';

const obj = {
    test : 0,
    cat: "alice",
    dog: "Reks",
    name: "Jhon",
    [Symbol.iterator]() {
        return {
            value : Object.entries(this),
            count : 0,
            next() { 
                if (this.count >= this.value.length) {
                    return {done: true};
                } else {
                    return {value: this.value[this.count++]};
                }

            }
        };
    }
};
const arr = [10, 20, 30, 40, 50, 60];
const {0 : test, 1 : cat} = arr;
console.log(test, cat);

const [a, b] = obj;
console.log(a ,b);
