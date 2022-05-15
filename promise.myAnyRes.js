"use strict";
/* Функция Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис: */
/* Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращённый объект 
Promise будет отклонён (rejected) с одним из значений: массив содержащий причины ошибки */

Promise.myAnyRes = function (promis, counts) {
    let errors = [];
    let results = [];
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promis.length; i++) {
            promis[i].then(
                (result) => {
                    results = results.concat(result);
                    if (results.length == counts){
                        resolve(results);
                    }
                },

                (error) => {
                    errors = errors.concat(error);
                    if (errors.length == promis.length - results.length) {
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
        reject("error");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(2);
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(3);
    }, 2000); 
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 rejected");
        reject("error2");
    }, 2000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 rejected");
        reject("error3");
    }, 2000);
});

const p = Promise.myAnyRes([p1, p2, p3, p4, p5], 3);
p.then(
    (value) => {
        console.log(value); 
    },
    (e) => {
        console.log("Returned Promise");
        console.log(e); // ['error', 'error2', 'error3']
    }
);

const a = Promise.myAnyRes([p1, p2, p3, p4, p5], 2);
a.then(
    (value) => {
        console.log(value); // [2, 3]
    },
    (e) => {
        console.log("Returned Promise");
        console.log(e); 
    }
);

