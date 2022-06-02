"use strict";

let cmd = 'console.log("Abobus")';
let calc = "1+2";

eval(cmd); // Abobus
console.log(eval(calc)); // 3
console.log(eval(calc) == 3); // true

let x = 1;
{
    let x = 5;
    eval("console.log(x)"); // 5
    window.eval("console.log(x)"); // 1
}
eval("console.log(x)"); // 1
