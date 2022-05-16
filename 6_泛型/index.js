"use strict";
function identify(arg) {
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
let output = identify("abcd");
let output2 = identify("abcd");
let output3 = loggingIdentity([1, 2, 3, 4]);
console.log(output, output2);
console.log(output3);
let addNum = (x, y) => {
    return x + y;
};
console.log(addNum(1, 2));
