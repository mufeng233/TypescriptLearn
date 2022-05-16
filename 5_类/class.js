"use strict";
/*
 * @Author: Mufeng
 * @Date: 2021-08-01 12:16:21
 * @FilePath: /typescript/5_类/class.ts
 */
class Animal {
    eat() {
        console.log("I can eat!");
    }
    run() {
        console.log("I can run!");
    }
}
class Human extends Animal {
    say(content) {
        console.log(`I say ${content}`);
    }
}
let human = new Human();
human.run();
human.eat();
human.say("Hello");
