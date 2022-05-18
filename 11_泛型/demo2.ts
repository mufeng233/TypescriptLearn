/* class SelectGirl<T extends string | number> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl<string>(["小红", "小蓝", "小绿"]);
console.log(selectGirl.getGirl(1));
 */

interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl<Girl>([
  { name: "小红" },
  { name: "小蓝" },
  { name: "小绿" },
]);
console.log(selectGirl.getGirl(1));
