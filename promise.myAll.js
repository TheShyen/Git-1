"use strict";

Promise.myAll = function (promis) {
    let arr = [];
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promis.length; i++) {
            promis[i].then(
                (result) => {
                    arr = arr.concat(result);
                    if (arr.length == promis.length) {
                        resolve(arr);
                    }
                },

                (error) => {
                    reject(error);
                }
            );
        }
    });
};

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
    // Этот промис прервёт Promise.all
    reject("reject");
});

Promise.myAll([p1, p2, p3, p4, p5]).then(
    (value) => {
        console.log(value);
    },
    (reason) => {
        console.log(reason); // reject
    }
);

var p1 = Promise.resolve(3);
var p2 = Promise.resolve(1337);
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.myAll([p1, p2, p3]).then((value) => {
    console.log(value);
});

//Выведет:
// [3, 1337, "foo"]
