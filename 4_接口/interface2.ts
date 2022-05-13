// 定义一个 “学生” 接口
interface Student {
  name: string;
  age: number;
  grade: number;
  study(knowledge: string): void;
  doSport(sport: string): void;
  [propName: string]: any;
}

// “学生” 接口的实现
class Student implements Student {
  name = "小明";
  age = 17;
  grade = 7;
  study(knowledge: string) {
    console.log("学习了：" + knowledge);
  }
  doSport(sport: string) {
    console.log(`做了${sport}运动`);
  }
}

const xiaoMing = new Student();
console.log(xiaoMing);
xiaoMing.study("数学");
xiaoMing.doSport("篮球");
