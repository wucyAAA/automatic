#!/usr/bin/env node
 
const spawn = require('cross-spawn');
const chalk = require('chalk');

var argv = require('minimist')(process.argv.slice(2));

console.log(chalk.magenta('\n----------------- 又是努力的一天！-----------------\n'))

if(argv.b){
  spawn.sync('npm', ['run', 'build'], { stdio: 'inherit' });
}

let m = '今天又努力一点点'
if(argv.m){
  m = argv.m
}

spawn.sync('git', ['add', '.'], { stdio: 'inherit' });

spawn.sync('git', ['commit','-m', m], { stdio: 'inherit' });

spawn.sync('git', ['push'], { stdio: 'inherit' });

console.log(chalk.magenta('\n----------------- 加油！我们能赢！-----------------\n'))