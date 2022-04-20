'use strict';
// [Замыкания, преобразование объекта в примитивы]
// Реализуйте с помощью замыкания и методов преобразования объектов в примитивы логику, чтобы для объекта с этой логикой было:
// obj > obj \\ true
const obj= {
    valueOf() {
        return variables--;
    }
};

let variables = 0;
console.log(obj > obj); //true

// Можно ли сделать также, но без замыкания?
// Например, хранить данные в теле объекта и обращаться к ним через this?
// Попробуйте сделать.
const obj= {
    variables: 0,
    valueOf() {
        return this.variables--;
    }
};
console.log(obj > obj); // true


// Опционаольно: попробуйте сделать так чтобы:
// obj > obj \\ true
// obj > obj \\ false
// obj > obj \\ true
// obj > obj \\ false
// То есть чтобы один раз было false, а потом true, а потом опять false.
const obj= {
    variables: 0,
    counter: 0,
    valueOf() {
        this.variables += 2 + this.counter;
        this.counter++;
        return this.variables % 2;  
    }
};
console.log(obj > obj);//false
console.log(obj > obj);// true
console.log(obj > obj);//false
console.log(obj > obj);//true
console.log(obj > obj);//false