'use strict';

/* Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.*/

function getRandomNumber() {
	let numberArray = [];
    console.log(0 < numberArray.length + 1);
	return function() {
		let number = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < numberArray.length; i++) {
			if (numberArray[i] == number) {
                return;
            }
		}
        console.log(number);
		numberArray.push(number);
	};
    
}
let f = getRandomNumber();
f();
f();
f();
f();

