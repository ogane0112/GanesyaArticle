#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description('A CLI for managing Zenn and Qiita articles')
    .option('-d, --debug', 'output extra debugging')
    .action((options) => {
    if (options.debug)
        console.log(options);
    console.log('Hello  gane CLI!');
});
program.parse(process.argv);
