import { admin, square, cube } from "./calculations.js";
import * as abobus from "./hi.js"; 


console.log(square(16)); // 256
console.log(cube(9)); // 729

let {sayHi, sayBye} = await import('./say.js');

console.log(sayHi("Ruslan")); // Hi, Ruslan
console.log(sayBye("Abobus")); // Bye, Abobus

console.log(abobus.hi()); // hi
console.log(abobus.bye()); // bye
console.log(abobus.adminName()); // aboda

admin.name = "Ruslan";

console.log(abobus.adminName()); // Ruslan
