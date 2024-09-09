#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('A CLI for managing Zenn and Qiita articles')
  .option('-d, --debug', 'output extra debugging')
  .action((options) => {
    if (options.debug) console.log(options);
    console.log('Hello from gane CLI!');
  });

program.parse(process.argv);