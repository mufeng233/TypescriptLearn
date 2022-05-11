/*
 * @Author: Mufeng
 * @Date: 2021-07-31 13:18:18
 * @FilePath: /typescript/5_类/index.ts
 */
// 类

class Person {
  // 类属性
  name: string;
  age: number;

  /**
   * 构造函数
   * @param name
   * @param age
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * 类方法
   * @param name
   * @returns
   */
  sayHello(name: string) {
    return `Hello ${name}`;
  }
}

let me = new Person("Mufeng", 16);

interface Person {
  name: string;
  age: number;
}

function showPerson(person: Person) {
  return `Name:${person.name}, Age:${person.age}`;
}
// console.log(me.sayHello("LiNanJiang")); // Hello LiNanJinag

console.log(showPerson(me));
