"use strict";
async function returnNum() {
    return 1;
}

returnNum().then(console.log); // 1

async function aboba() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });

    let result = await promise;

    return result;
}

aboba().then(console.log); // 2

async function asyncFun() {
    let result = await new Promise((resolve) => {
        setTimeout(() => resolve("aboba"), 1000);
    });
    return result;
}

let test = asyncFun();
console.log(test); // Promise {<pending>} (синхронный код)


class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        setTimeout(() => resolve(this.num * 5), 1000); // (*)
    }
}

async function f() {
    let result = await new Thenable(10);
    console.log(result); // 50
}

function a() {
    console.log("aboba");
}

f();
a(); // это первее


/* function b() {
    let result = await new Thenable(10);
    console.log(result);
}
b(); //  SyntaxError */