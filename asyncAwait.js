"use strict";
async function returnNum() {
    return 1;
}

returnOne().then(console.log); // 1

async function aboba() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });

    let result = await promise;

    return result;
}

aboba().then(console.log);
