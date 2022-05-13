type Dog = {
  name: string;
  age: number;
};

class Cat {
  name: string;
  age: number;
}

const dog: Dog = {
  name: "小黑",
  age: 2,
};

const cat: Cat = {
  name: "小白",
  age: 1,
};

/**
 * 数字数组类型
 * @param {string} title - 标题
 * @returns {array}
 */
type NumberArray = number[];

const numberArray: NumberArray = [1, 1, 4, 5, 1, 4];
