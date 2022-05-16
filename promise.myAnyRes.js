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
                    results.push(result);
                    if (results.length == counts){
                        resolve(results);
                    }
                    if (i == promis.length - 1){
                        throw errors[errors.length - 1];
                    }
                }
            ).catch(
                (error) => {
                    errors.push(error);
                    if (i == promis.length - 1) {
                        errors.pop(error);
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
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(2);
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3 fulfilled");
        resolve(3);
    }, 2000); 
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 4 rejected");
        reject("error2");
    }, 2000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 5 rejected");
        reject("error3");
    }, 2000);
});
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 6 fulfilled");
        resolve(4);
    }, 2000); 
});
const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
        console.log("Promise 7 fulfilled");
    }, 2000); 
});
const p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 8 rejected");
        reject("error4");
    }, 2000);
});
const p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 9 rejected");
        reject("error5");
    }, 2000);
});
const p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6);
        console.log("Promise 10 fulfilled");
    }, 2000); 
});


const p = Promise.myAnyRes([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10], 6);
p.then(
    (value) => {
        console.log(value); 
    },
    (e) => {
        console.log("Returned Promise");
        console.log(e); // ['error', 'error2', 'error3', 'error4', 'error5']
    }
);

const a = Promise.myAnyRes([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10], 4);
a.then(
    (value) => {
        console.log(value); // [2, 3, 4, 5]
    },
    (e) => {
        console.log("Returned Promise");
        console.log(e); 
    }
);

