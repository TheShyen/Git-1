'use strict';

Promise.myAll = function (promis) {
    return new Promise(function (resolve, reject) {
        let count = 0;
        let result = [];
        for (let i = 0; i < promis.length; i++) {
            promis.then(function (data) {
                result[i] = data;
                count++;
            });
        }
    });
};


  
// тест
Promise.myAll([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);