`use strict`;

let errorText = ``;
let string = `12345`;
let number = 6;
let symbol = `*`;
let boolean = true;
let symbolCount = ``;


function padString(string, number, symbol, boolean = true) {

    if (string === ``) {
        errorText = `Enter text`;
        alert(errorText);
        throw errorText;
    }
    if (number === ``) {
        errorText = `Enter number`;
        alert(errorText);
        throw errorText;
    }
    // if (number === !Number) {
    //     errorText = `Enter number`;
    //     alert(errorText);
    //     throw errorText;
    // }
    // if (number !== typeof Number) {
    //     errorText = `Enter number`;
    //     alert(errorText);
    //     throw errorText;
    // }
    if (symbol === ``) {
        errorText = `Enter symbol`;
        alert(errorText);
        throw errorText;
    }
    if (boolean === ``) {
        errorText = `Choose true or false`;
        alert(errorText);
        throw errorText;
    }

    if (string.length === number) {
        console.log(string);
    }

    if (string.length > number) {
        newString = string.substring(0, number);
        console.log(newString);
    }
    if (string.length < number && boolean === true) {
        for (let i = string.length; i < number; i++) {
            symbolCount = symbolCount + symbol;
        }
        newString = symbolCount + string;
        console.log(newString);
    }
    if (string.length < number && boolean === false) {
        for (let i = string.length; i < number; i++) {
            symbolCount = symbolCount + symbol;
        }
        newString = string + symbolCount;
        console.log(newString);
    }
}

padString(string, number, symbol, boolean);