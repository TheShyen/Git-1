'use strict';
/* Функция Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис: */
/* Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected), тогда возвращённый объект 
Promise будет отклонён (rejected) с одним из значений: массив содержащий причины ошибки */

Promise.myAny = function(promises) {
    var errors = [];
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve);
        }
    });
};
  
// тест
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 rejected');
      reject('error');
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);
  });
  
  const p = Promise.any([p1, p2]);
  p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
  });