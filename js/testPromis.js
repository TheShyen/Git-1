'use strict';
// then возвращает промис. Значения возвращаемые из колбэков 
// будут автоматически обёрнуты в промис.
/* let p1 = new Promise(function(resolve, reject) {
    resolve(1);
});
  
p1.then(function(value) {
    console.log(value); // 1
    return value + 1;
}).then(function(value) {
    console.log(value); // 2
});
  
p1.then(function(value) {
    console.log(value); // 1
});
 */


/* function resolveLater(resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 1000);
  }
function rejectLater(resolve, reject) {
    setTimeout(function () {
        reject(20);
    }, 1000);
}
  
let p1 = Promise.resolve("foo");
let p2 = p1.then(function() {
    // Возвращает промис, который будет разрешен значением 10 через 1 секунду
    return new Promise(resolveLater);
});
p2.then(function(v) {
    console.log("resolved", v);  // "resolved", 10
}, function(e) {
    // не вызвано
    console.log("rejected", e);
});
  
let p3 = p1.then(function() {
  // Возвращает промис, который будет отброшен значением 20 через 1 секунду
    return new Promise(rejectLater);
});
p3.then(function(v) {
    // не
    console.log("resolved", v);
}, function(e) {
    console.log("rejected", e); // "rejected", 20
}); */

// Что будет, если на завершенный промис добавить .then()?

let promise = new Promise(resolve => resolve("готово!"));

promise.then(console.log);
promise.then(console.log);
promise.then(console.log); // готово! (выведется сразу)
  