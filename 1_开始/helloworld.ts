/*
 * @Author: Mufeng
 * @Date: 2021-07-30 18:08:19
 * @FilePath: /typescript/1_Typescript开始/helloworld.ts
 */
(()=>{
    function sayHello(name:string){
        return `Hello ${name}`;
    }
    let name:string = 'mufeng';
    console.log(sayHello(name));
})