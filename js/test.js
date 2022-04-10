'use strict';

/*Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись,
пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится
массив чисел, которые уже были сгенерированы функцией.*/

function getRandomNumber() {
    let numbersArray = [];
    return function() {
        let number = Math.floor(Math.random() * 100 + 1);
        for (let i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] == number) {
                return;
            }
        }
        console.log(number);
        numbersArray.push(number);
    };
}

let f = getRandomNumber();
f();
f();
f();
f();



/* Числа Фибоначчи с помощью замыканий; */

function getFib() {
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);
    return function() {
        let c = a + b;
        a = b;
        b = c;
        console.log(b);
    };
}

let a = getFib();
