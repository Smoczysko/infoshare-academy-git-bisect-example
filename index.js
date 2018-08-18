#!/usr/bin/env node

const addNumbers = (a, b) => +a + +b;
const divideNumbers = (a, b) => +a / +b;

const arguments = process.argv.slice(2);
let value;

switch (arguments[0]) {
    case 'add':
        value = addNumbers(arguments[1], arguments[2]);
        break;
    case 'div':
        value = divideNumbers(arguments[1], arguments[2]);
        break;
}

console.log('Result: ', value);