"use strict";

/* Задачи LearnJS 5.5 */
/* Переведите текст вида border-left-width в borderLeftWidth */

function camelize(str) {
    let arr = str.split('-');
    console.log(arr);
    let str1 = arr.map(function (currentValue, index) {
        if (index == 0){
            return currentValue;
        } else {
            return currentValue[0].toUpperCase() + currentValue.slice(1);
        }
    }); 
    alert(str1.join(''));
    
}
camelize("background-color");
camelize("background-color-power-center-cover");


/* Фильтрация по диапазону */
let arr = [5, 3, 8, 1];
let arr1;
function filterRange(arr, a, b) {
    arr1 = arr.filter(function(item) {
        return (a <= item && b >= item);
        
    }); 
}
filterRange(arr, 1, 4);
alert(arr1);



/* Сортировать в порядке по убыванию */

let arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    if (a < b) {return 1;}
    if (a == b) {return 0;}
    if (a > b) {return -1;}
}
arr.sort(compareNumeric);
alert(arr);
  

/* Скопировать и отсортировать массив */

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return arr.slice().sort();
}
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)


/* Создать расширяемый калькулятор */

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };

    this.calculate = function(str) {

        let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2];
    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }
    
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
}

let calc = new Calculator();

alert( calc.calculate("3 + 7") );



/* Трансформировать в массив имён */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names);



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map (item => ({fullName : item.name + ' ' + item.surname, id: item.id}));


alert( usersMapped[0].id );
alert( usersMapped[0].fullName );




/* Отсортировать пользователей по возрасту */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age-b.age); 
        
}
sortByAge(arr);
// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


/* Получить средний возраст */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(us) {
    return us.reduce((sum, current) => sum + current.age / us.length, 0);
    
}
getAverageAge(arr);
alert( getAverageAge(arr) );