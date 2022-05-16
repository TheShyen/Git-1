'use strict';
// then возвращает промис. Значения возвращаемые из колбэков 
// будут автоматически обёрнуты в промис.
let p1 = new Promise(function(resolve, reject) {
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



function resolveLater(resolve, reject) {
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
});

// Что будет, если на завершенный промис добавить .then()?

let promise = new Promise(resolve => resolve("готово!"));

promise.then(console.log);
promise.then(console.log);
promise.then(console.log); // готово! (выведется сразу)

// микро и макрозадачи
setTimeout(() => alert("timeout"));

Promise.resolve()
    .then(() => alert("promise"));

alert("code");
// сначала "code", т.к синхронный вызов
// потом "promise", потому что .then проходит через очередь микрозадач и выполняется синхронного кода.
// потом "timeout" , т.к это макрозадача
Promise.resolve().then(() => console.log(2));
console.log(1) // 1, 2

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Aboba")), 1000);
});
promise1.then(
    result => console.log(result),
    reject => console.log(reject) // Aboba
)
    .then(x => console.log("OK!")); // OK

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Aboba")), 1000);
});
promise2.then(
    result => console.log(result),
    undefined
)
    .catch()
    .catch(undefined)
    .then(x => console.log("OK!")); // в then не попадаем


// 
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
      
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
      
    document.head.append(script);
}
// Промисификация
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
      document.head.append(script);
    });
}

// 

const prom = new Promise((resolve, reject) => {
    throw new Error("Error");
}).catch(result => console.log("aboba")); // aboba

new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert); // не обрабатывает, т.к скрытый try catch обрабатывает синхронные ошибки

const prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => reject(new Error("error")));
});
prom1.then(null, console.log) // then сработал
     .catch(alert);

const prom2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("aboba"));
});
prom2.then(console.log).catch(alert); // then сработал

const prom3 = new Promise((resolve, reject) =>{
    setTimeout(() => reject(new Error("error")));
});
prom3.catch(alert).then(null,console.log); // сработал alert

const prom4 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Ruslan"));
});
prom4.catch(alert).then(console.log);//сработал console.log
