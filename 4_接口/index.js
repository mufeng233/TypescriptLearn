"use strict";
/*
 * @Author: Mufeng
 * @Date: 2021-07-31 13:13:43
 * @FilePath: /typescript/4_Typescript接口/index.ts
 */
// 接口
function greeter(person) {
    console.log(`Hello ${person.name}, Your age is ${person.age}`);
}
const searchContent = function (keyword, limit) {
    return keyword;
};
console.log(searchContent("misakaloli"));
class Car {
    alert() {
        console.log("Car alert");
    }
}
// 一个类实现多个接口
class Truck {
    alert() {
        console.log("Truck alert");
    }
    lightOff() {
        // something
    }
    lightOn() {
        // something
    }
}
