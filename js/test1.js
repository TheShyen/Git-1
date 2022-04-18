"use strict";
let timer1 = setInterval(() => alert("Здарова заебал"), 1000);
setTimeout(() => clearTimeout(timer1), 5000);


let timer2 = setTimeout(() => {
    alert("Здарова заебал");
}, 4000);
setTimeout(() => clearInterval(timer1), 3000);


let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]() {
        return {
            value : Object.keys(this),
            count : 0,
            next() { 
                if (this.count >= this.value.length) {
                    return {done: true};
                } else {
                    return {value: this.value[this.count++]};
                }

            }
        };
    }
};

let arr = ["1", "2", "3"];
console.log([...arr]); // ['1', '2', '3']
console.log([...arr] === arr); // false
console.log({...arr}); // {0: '1', 1: '2', 2: '3'}
console.log({...obj}); // {a: 1, b: 2, c: 3}
console.log([...obj]); // TypeError т.к не итерируемый объект, юзаем Symbol.iterator и все робит



const obj = {
    testProp: 120,
    method() {
        return this.testProp;
    }
};

const obj2 = {
    testProp: 777
};

const variable = obj.method.bind(obj2);
console.log(variable());