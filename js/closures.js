'use strict';

const obj = {
    testProp: 123,
    getData() {
      console.log(this.testProp);
    }
}; 
  
const otherObj = {
    testProp: 456,
};

function delayedMemoCall(delay) {
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        while(currentDate - date < milliseconds) {
            currentDate = Date.now();
        }
    }
    return function (th, arg) {
        sleep(delay);
        th.call(arg);
    };
}

let delayer = delayedMemoCall(3000);

delayer(obj.getData, obj);// 123 after 3 seconds
delayer(obj.getData, otherObj); // 456 after 3 seconds
//
// must memorize value data when called
delayer(obj.getData, otherObj); // 456 after 3 seconds

otherObj.testProp = 789; // mutation affects only next calls

delayer(obj.getData, otherObj); // 789 after 3 seconds

delayer.setDelay(5000); // не робит

delayer(obj.getData, otherObj); // 789 after 5 seconds