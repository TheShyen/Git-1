'use strict';

/* №1 */
/* Функция переставляет n элементов массива из конца в начало. */

function moveToStart (arr, n) {
    if (n < arr.length) {
        return (arr.slice(-n).concat(arr.slice(0, n-1)));
    } else {
        return arr.slice(0);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
    moveToStart(arr, 5)
);

console.log(arr);



/* №2 */
/* Принимает массив данных разных типов, и возвращает 
true если этот массив содержит массив внутри себя. */

function hasArray(data) {
    for (let item of data) {
        if (Array.isArray(item)) {
            return true;
        } 
    }
    return false;
}

const data1 = [1, 2, {}, [], 4],
      data2 = [];

console.log(hasArray(data1));
console.log(hasArray(data2));



/* №3  */
/* Функция создает новый массив из исходного, где значения подбираются по 2-му аргументу(четное/нечетное) */

function getNumbersByParity(arr, oddEven){
    if (oddEven == "even") {
        let newarr = [];
        for (let item of arr) {
            if (item % 2 == 0){
                newarr.push(item); 
            }
        }
        return newarr;
    } else if (oddEven == "odd") {
        let newarr1 = [];
        for (let item of arr) {
            if (item % 2 == 1){
                newarr1.push(item); 
            }
        }
        return newarr1;
    }
}
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(getNumbersByParity(arr1, "odd"));
console.log(arr1);