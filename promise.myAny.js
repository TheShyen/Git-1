"use strict";
/* Функция Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис: */
/* Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращённый объект 
Promise будет отклонён (rejected) с одним из значений: массив содержащий причины ошибки */

Promise.myAny = function (promis) {
    let errors = [];
    let resolved;
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promis.length; i++) {
            promis[i].then(
                (result) => {
                    if (resolved) {
                        return;
                    }
                    resolved = true;
                    resolve(result);
                },

                (error) => {
                    if (resolved) {
                        return;
                    }
                    errors = errors.concat(error);

                    if (errors.length === promis.length) {
                        reject(errors);
                    }
                }
            );
        }
    });
};

// тесты

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 rejected");
        reject("error1");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 rejected");
        reject("error2");
    }, 2000);
});

const p = Promise.myAny([p1, p2]);
p.catch((e) => {
    console.log("Returned Promise");
    console.log(e); // ['error1', 'error2']
});

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 rejected");
        reject("error");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(2);
    }, 2000);
});

const p = Promise.myAny([p1, p2]);
p.then((value) => {
    console.log("Returned Promise");
    console.log(value); // 2
});

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 fulfilled");
        resolve(1);
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(2);
    }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
    console.log("Returned Promise");
    console.log(value); // 1
});
