"use strict";
/*
 * @Author: Mufeng
 * @Date: 2021-07-31 13:18:18
 * @FilePath: /typescript/5_类/index.ts
 */
// 类
class Person {
    /**
     * 构造函数
     * @param name
     * @param age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * 类方法
     * @param name
     * @returns
     */
    sayHello(name) {
        return `Hello ${name}`;
    }
}
let me = new Person("Mufeng", 16);
function showPerson(person) {
    return `Name:${person.name}, Age:${person.age}`;
}
// console.log(me.sayHello("LiNanJiang")); // Hello LiNanJinag
console.log(showPerson(me));
