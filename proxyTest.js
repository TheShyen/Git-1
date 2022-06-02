"use strict";

const numbers = [1, 2, 3];

let proxy = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return "Абоба";
        }
    },
});

console.log(proxy[1]); // 2
console.log(proxy[123]); // "Абоба"

let setNumbers = [];

setNumbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val == "number") {
            target[prop] = val;
            return true; // Если убрать - получим TypeError
        } else {
            console.log("А куда мы лезем");
            return false;
        }
    },
});

console.log(setNumbers.push(1)); // true (успешно)
console.log(setNumbers.push(2)); // true (успешно)
console.log(setNumbers.length); // 2
//setNumbers.push("aboba"); // А куда мы лезем (ниже код не выполнится из-за срабатывания ловушки)

let user = {
    name: "John",
    age: 30,
    _password: "passwd",
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("А вот фиг вам");
        } else {
            let value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
        }
    },

    set(target, prop, val) {
        if (prop.startsWith("_")) {
            throw new Error("Фигушки");
        } else {
            target[prop] = val;
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith("_"));
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true,
        };
    },

    deleteProperty(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("А вот фиг вам");
        } else {
            delete target[prop];
            return true;
        }
    },
});

for (let key in user) {
    console.log(key); // name, age
}

// get Refused
try {
    console.log(user._password);
} catch (e) {
    console.log(`On get ${e.message}`); // On get А вот фиг вам
}

// set Refused
try {
    user._password = "varvarvar";
} catch (e) {
    console.log(`On set ${e.message}`); // On set Фигушки
}

// delete Refused
try {
    delete user._password;
} catch (e) {
    console.log(`On delete ${e.message}`); // On delete А вот фиг вам
}

// Reflect set
let userData = {};
Reflect.set(userData, "name", "Alex");
console.log(userData.name); // Alex

userData = new Proxy(user, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, val, receiver) {
        return Reflect.set(target, prop, val, receiver);
    },
});

let name = user.name; // Alex
user.name = "Ruslan";

let defaultUser = {
    _name: "User",
    get name() {
        return this._name;
    },
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
        // receiver -> admin
        return Reflect.get(target, prop, receiver);
    },
});

let admin = {
    __proto__: userProxy,
    _name: "Administrator",
};
