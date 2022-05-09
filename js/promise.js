'use strict';

let prom = new Promise(function(resolve) {
    setTimeout(() => resolve("aboba"), 1000);
});
let val = 222;

prom.then(
        resolve => {
            val = resolve;
            console.log(resolve);
        },
        reject => console.log(reject)
    
);

console.log(val);

setTimeout(() => console.log(val), 2000);
// в результате 222/aboba/aboba

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result); // 1
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // 2
        return result * 2;
    })
    .then(function (result) {
        console.log(result); // 4
        return result * 2;
    });


let prom1 = "aboba";
try {
    prom1 = new Promise((resolve, reject) => {
        try {
            aboba = 5;
        } catch (e) {
            console.log(e.name); // ReferenceError
            reject(e);
        }
        resolve(aboba);
    });
} catch (e) {
    console.log(e.name); // Не ловит
}

prom1.catch(function (reject) {
    console.log(reject); // ReferenceError: aboba is not defined
});
