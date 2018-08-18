#!/usr/bin/env node

const addNumbers = (a, b) => +a + +b;
const divideNumbers = (a, b) => {
    if (b === 0) {
        throw "Second number cannot be 0!";
    }

    return +a / +b;
};

const arguments = process.argv.slice(2);
let value;

try {
    switch (arguments[0]) {
        case 'add':
            value = addNumbers(arguments[1], arguments[2]);
            break;
        case 'div':
            value = divideNumbers(arguments[1], arguments[2]);
            break;
    }

    console.log('Result: ', value);
} catch (e) {
    console.error('Error occurred during calculating the result.', e);

    process.exit(1);
}