'use strict';

const a = {
    zopa: 10
};

Object.defineProperty(a, "test", {
    get() {
        return this.zopa;
    },
    set(value) {
        this.zopa = value;
    }
});
console.log(a.test); // 10
a.test = 5;
console.log(a.test); // 5

let b = {
    name: "Ruslan",
    surname: "Gil`manov",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(b.fullName);// Ruslan Gil`manov

b.fullName = "Jhon Smith";
console.log(b.fullName);// Jhon Smith
console.log(b.name);// jhon