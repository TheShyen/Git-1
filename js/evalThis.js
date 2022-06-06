


const obj = {
    name: "Ruslan",
    method() {
        eval("console.log(this)");
    }
    
};
eval("console.log(this)"); // window

obj.method(); // obj
function d() {
    "use strict";
    eval("console.log(this)"); // без строгого window, со строгим undefined
}
console.log(eval("this")); // window
d();

const func = () => {
    console.log(eval("this")); // window
};
func();

function Dw() {
}

eval("console.log(new Dw())"); // Dw {}

const obj2 = {
    method() {
        const fuc = () => {
            return this;
        };
        fuc();
    }
};
"use strict";
let a = this;
eval("console.log(a)"); // window
eval("console.log(obj2.method())");