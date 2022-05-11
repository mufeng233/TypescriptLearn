/*
 * @Author: Mufeng
 * @Date: 2021-08-02 12:05:29
 * @FilePath: /typescript/5_Typescript类/class2.ts
 */
// 修饰符

class Man {
  // 只读
  readonly id: number;

  // 公有
  public name: string;

  // 私有
  private eat() {}

  // 受保护的
  protected sleep() {}
}

let man = new Man();

// man.id = 1 // error 只读属性无法修改

/* class Saler{
    
    private money: number = 0;

    private sell(money: number){
        this.money += money
    }
} */

/**
 * 存取器
 */

class Person2 {
  firstName: string = "A";
  lastName: string = "B";
  get fullName() {
    return this.firstName + "-" + this.lastName;
  }
  set fullName(value) {
    const names = value.split("-");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const p = new Person2();
console.log(p.fullName);

p.firstName = "C";
p.lastName = "D";
console.log(p.fullName);

p.fullName = "E-F";
console.log(p.firstName, p.lastName);

/**
 * 静态属性
 */

class Person3{
    public static name1: string;
}

