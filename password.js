#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require("clipboardy");
const createPassword = require("./utilities/createPassword");
const savePassword = require("./utilities/savePassword");

program.version('1.0.0').description("Custom Password Generator")

// let's see make how to make custom help commads
// <number> is used to generate the password of that specified length
program
    .option('-l, --length <number>' ,'length of password' , '12')
    .option('-s, --save' ,'save the passwords to mypasswords.txt')
    .option('-nn, --no-numbers' , 'generate password without number')
    .option('-ns, --no-symbols' , 'generate password without symbol')
    .parse()

// console.log(program.opts());
// The parsed options can be accessed by calling .opts() on a Command object --> which is program in our code 

// let's destructure these all help commands
const { length , save , numbers , symbols } = program.opts();

const generatePassword = createPassword( length , numbers , symbols);

// saving the generated passwords
if(save){
    savePassword(generatePassword);
}

// copying password to clipboard
clipboardy.writeSync(generatePassword);

// making CLI colourful
console.log(chalk.yellow("Generated Password : " ) + chalk.green.bold(generatePassword));
console.log(chalk.red.bold("Password copied to clipboard !! "));

