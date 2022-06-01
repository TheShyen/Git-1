

function wait(ms) {
    const now = Date.now();
    let passed = 0;
    while (passed < ms) {
        passed = Date.now() - now;
    }
    console.log('end');
}
//wait(10000);
// console.log("Aboba"); // ждет выполнения функции wait

async function waits(ms) {
    return await new Promise ((resolve) =>
    setTimeout(() => resolve("ABOBUS"), 10000));
}
waits().then(console.log);
console.log("Aboba"); // Выведет это впервую очередь
wait(5000);

class Thenable {
    constructor(num) {
        this.num = num;
    }
    wait() {
        return "Wait";
    }
}

async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return 10;
}

function f() {
    wait().then(
        (result) => {
            if (result == "[object Object]" && typeof result.wait == 'function') {
                result = result.wait();
                alert(result);
            } else {
                alert(result);
            }
            
    });
}

f();

let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise((resolve) => {
                    setTimeout(resolve, 1000);
                });

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

(async () => {
    for await (let value of range) {
        console.log(value); // 1, 2, 3, 4, 5
    }
})();

let range1 = {
    from: 1,
    to: 5,
    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
        // если убрать звездочку то: SyntaxError: Unexpected strict mode reserved word это если строгий режим
        // в не строгом SyntaxError: Unexpected identifier 
        for (let value = this.from; value <= this.to; value++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            yield value;
        }
    },
};

(async () => {
    for await (let value of range1) {
        console.log(value); //  1, 2, 3, 4, 5
    }
})();

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

for (let value of generator) {
    alert(value);
    break;
}
console.log(generator.next()); // {value: undefined, done: true}
for (let value of generator) {
    alert(value); // после break еще раз итерировать не можем
}
