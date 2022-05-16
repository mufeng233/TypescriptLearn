"use strict";
/*
 * @Author: Mufeng
 * @Date: 2021-07-30 18:22:00
 * @FilePath: /typescript/2_Typescript自动编译/index.ts
 */
/**
 * 终端 -> 运行任务 -> tsconfig.json监视 即可完成vscode自动编译.ts文件
 * 在tsconfig.json可以更改js输出目录`"outDir": "./js",                              `
 */
/**
 *  1). 生成配置文件tsconfig.json
        tsc --init
    2). 修改tsconfig.json配置
        "outDir": "./js",
        "strict": false,
    3). 启动监视任务:
        终端 -> 运行任务 -> 监视tsconfig.json
 */
