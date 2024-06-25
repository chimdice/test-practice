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

export function caeserCipher(string, shiftValue) {
    const letterCodes = {
        a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9,
        j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17,
        r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
    };
    const letters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'

    let newString = ''
    for (let i=0; i < string.length; i++) {
        let currentChar = string[i];
        const isLetter = letters.indexOf(currentChar);
        if (!(isLetter === -1)) {
            let isUpper = false;

            if (currentChar === currentChar.toUpperCase()) {
                isUpper = true
            };

            currentChar = currentChar.toLowerCase();
            const lowShift = shiftValue%26;
            let letterCode = letterCodes[currentChar];
            let newPosition = letterCode + lowShift;
            if (newPosition > 26) {
                newPosition -= 26;
            };
            const newLetter = Object.keys(letterCodes).find(key => letterCodes[key] === newPosition);

            if (isUpper) {
                newString += newLetter.toUpperCase();
            } else {
                newString += newLetter;
            };
        } else {
            newString += currentChar;
        };
    };

    return newString;
};

export function analyzeArray(array) {

    const length = array.length;
    let average;
    let min;
    let max;

    if (length === 0) {
        return {average:0, min:0, max:0, length};
    };

    const arraySum = array.reduce((prev, curr) => prev+curr, 0);
    average = arraySum/length;

    min = array[0];
    max = array[0];

    for (let i=1; i<length; i++) {
        if (array[i] > max) {
            max = array[i];
        };

        if (array[i] < min) {
            min = array[i]
        };
    };

    return {average, min, max, length}
}