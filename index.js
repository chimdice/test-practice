export function capitalize (string) {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() + string.slice(1);
};

export function reverseString(string) {
    let outString = '';
    for (let i = (string.length-1);i>=0;i--) {
        outString += string[i];
    };
    return outString;
};

export const calculator = (function () {
    const add = (x,y) => x+y;
    const subtract = (x,y) => x-y;
    const multiply = (x,y) => x*y;
    const divide = (x,y) => x/y;

    return {add, subtract, multiply, divide}
})();