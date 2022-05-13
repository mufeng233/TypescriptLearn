/*
 * @Author: Mufeng
 * @Date: 2021-07-31 13:13:43
 * @FilePath: /typescript/4_Typescript接口/index.ts
 */
// 接口

interface Person {
  name: string;
  age: number;
}

function greeter(person: Person) {
  console.log(`Hello ${person.name}, Your age is ${person.age}`);
}

/* greeter({
    name:"Mufeng",
    age:18
}) */

// 函数类型
interface SearchFunc {
  (keyword: string, limit?: number): any;
}

const searchContent: SearchFunc = function (
  keyword: string,
  limit?: number
): any {
  return keyword;
};

console.log(searchContent("misakaloli"));

// 类类型
interface Alarm {
  alert(): any;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}

// 一个类实现多个接口

class Truck implements Light, Alarm {
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

// 接口继承接口

interface LightableAlarm extends Light, Alarm {
  // something
}
