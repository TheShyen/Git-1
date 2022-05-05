'use strict';

try {
    console.log(aboba);
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // abc is not defined
    console.error(err.stack); // ReferenceError: aboba is not defined
}
  
const correctJSON = '{"name":"Ruslan", "age": 18}';
const parsedJSON = JSON.parse(correctJSON);
console.log(parsedJSON); // {name: 'Ruslan', age: 18}
  
const brokenJSON = '{name: "John";}';
const unparsedJSON = null;
try {
    unparsedJSON = JSON.parse(brokenJSON);
} catch (err) {
    console.log(err.name); // SyntaxError
    console.log(err.message); // Unexpected token n in JSON at position 1
}
  
const error = new TypeError("Ошибка типизации");
console.log(error.name); // TypeError
console.log(error.message); // Ошибка типизации
  
const obj1 = {
    name: "John",
    age: 30,
};
  
try {
    if (!obj1.surname) {
        throw new ReferenceError("Нет фамилии в данных");
    }
} catch (err) {
    console.log(`${err.name} - ${err.message}`); // ReferenceError - Нет фамилии в данных
}
  
function foo() {
    const obj2 = {
        name: "Alex",
    };
  
    try {
        aboba();
    } catch (e) {
        if (e.name != SyntaxError) {
            throw e;
        }
    }
}  
try {
    foo();
} catch (e) {
    console.log(`${e.name} - поймал внешний обработчик`); // ReferenceError - поймал внешний обработчик
}
  
try {
    zopa();
} catch (e) {
    console.log("catch"); // catch
} finally {
    console.log("finally"); // finally

}
  