function add2<T, P>(x: T, y: P) {
  return `${x}${y}`;
}

const num = add2<number, number>(1, 2);
const num2 = add2<number, string>(1, "2");

console.log(num);

// 数组中使用泛型
function myFun<T>(msgs: T[]) {
  return msgs;
}

const msgs = myFun<{ msg: string }>([
  { msg: "a" },
  { msg: "b" },
  { msg: "c" },
  { msg: "d" },
]);
console.log(msgs);
