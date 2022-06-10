interface Person {
  name: string;
  age: number;
}

let propName: keyof Person;
propName = "name";

function getValue<T, U extends keyof T>(arg1: T, arg2: U[]): T[U][] {
  return arg2.map((n) => arg1[n]);
}

const person: Person = {
  name: "lison",
  age: 18,
};

console.log(getValue(person, ["age"]));

type NameType = keyof Person["name"];

function getProperty<T, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}

interface Objs<T> {
  [key: string]: T;
}

let keys: keyof Objs<string>[""];

const obj1: Objs<number> = {
  age: 11,
};

interface Type {
  a: never;
  b: undefined;
  c: null;
  d: string;
  e: number;
  f: object;
  g: string[];
}

// keyof 里取出的类型都是非never，undefined，null的
type TestType = Type[keyof Type];

enum Sex {
  Male,
  Female,
}

interface Info {
  name: string;
  age: number;
  sex: Sex;
}

type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyInfo = ReadonlyType<Info>;
// 内置类型Readonly
// type ReadonlyInfo = Readonly<Info>;

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

function proxify<T>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>;
  for (const key in obj) {
    result[key] = {
      get: () => obj[key],
      set: (value) => (obj[key] = value),
    };
  }
  return result;
}

const props = {
  name: "mufeng",
  age: 17,
};

const proxifyProps = proxify(props);
console.log(proxifyProps);

function reverseProxify<T>(t: Proxify<T>): T {
  let result = {} as T;
  for (const key in t) {
    result[key] = t[key].get();
  }
  return result;
}

const originalProps = reverseProxify(proxifyProps);

console.log(originalProps);

type MapToPromise<T> = {
  [P in keyof T]: Promise<T[P]>;
};

type Tuple = [string, number, boolean];

type TuplePromise = MapToPromise<Tuple>;

const tuple1: TuplePromise = [
  new Promise((resolve) => resolve("a")),
  new Promise((resolve) => resolve(1)),
  new Promise((resolve) => resolve(true)),
];

type Type3<T> = {
  [K in keyof T]: T[K] extends () => any ? K : never;
}[keyof T];

interface Teacher {
  name: string;
  age: number;
  teach: () => void;
  teach2: () => void;
}

type Test3 = Type3<Teacher>;

// infer
type Type4<T> = T extends Array<infer U> ? U : T;
type Test4 = Type4<Array<number>>;
type Test5 = Type4<Array<string>>;

// Exclude<T, U>
type Type5<T> = Exclude<"a" | "b", "b" | "c">;
