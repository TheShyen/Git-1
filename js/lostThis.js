
let obj = {
    testProp: 123,
    method() {
        console.log(this.testProp);
    }
};

obj.method(); // 123
// Как потерять this? Вот так ↓↓↓
setTimeout(obj.method, 5000); // undefined

let func = obj.method;
func(); //undefined, а в строгом TypeError

// Как не терять this?
setTimeout(function() {
    obj.method(); // 123
  }, 8000);

// минус способа в том, что если до срабатывания setTimeout будет перезаписан obj, результат будет другим
obj = {
    method() {
        console.log("666"); // уже не 123
    }
};

// фикс

let method = obj.method.bind(obj);
setTimeout(method, 10000); 