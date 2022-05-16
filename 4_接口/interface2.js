"use strict";
// “学生” 接口的实现
class Student {
    constructor() {
        this.name = "小明";
        this.age = 17;
        this.grade = 7;
    }
    study(knowledge) {
        console.log("学习了：" + knowledge);
    }
    doSport(sport) {
        console.log(`做了${sport}运动`);
    }
}
const xiaoMing = new Student();
console.log(xiaoMing);
xiaoMing.study("数学");
xiaoMing.doSport("篮球");
