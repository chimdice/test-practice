import { capitalize, reverseString, calculator, caeserCipher, analyzeArray } from "./index.js";

//capitalization test
test("Convert poop to Poop", ()=>{
    expect(capitalize('poop')).toBe('Poop');
});

test("Convert OPEN to OPEN", ()=>{
    expect(capitalize('OPEN')).toBe('OPEN');
});

test("Convert fRiEd to FRiEd", ()=>{
    expect(capitalize('fRiEd')).toBe('FRiEd');
});

//reverse string test
test("Convert mine to enim", ()=>{
    expect(reverseString('mine')).toBe('enim');
});

test("Convert POG to GOP", ()=>{
    expect(reverseString('POG')).toBe('GOP');
});

test("Convert 12345 to 54321", ()=>{
    expect(reverseString('12345')).toBe('54321');
});

//calculator test
test("Add 3 and 5 which equals 8", ()=>{
    expect(calculator.add(3,5)).toBe(8);
});

test("Subtracts 15 from 50 which equals 35", ()=>{
    expect(calculator.subtract(50,15)).toBe(35);
});

test("Multiplies 3 and 5 which equals 15", ()=>{
    expect(calculator.multiply(3,5)).toBe(15);
});

test("Divides 28 by 2 which equals 14", ()=>{
    expect(calculator.divide(28,2)).toBe(14);
});

//caeserCipher test
test("Coverts xyz to cde", ()=>{
    expect(caeserCipher('xyz', 5)).toBe('cde')
});

test("Coverts Dog! to Fqi!", ()=>{
    expect(caeserCipher('Dog!', 2)).toBe('Fqi!')
});

test("Coverts abc to bcd", ()=>{
    expect(caeserCipher('abc', 27)).toBe('bcd')
});

//analyze array test
test('Find average, min, max and lenght of array', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average:4,min:1,max:8,length:6})
});

test('Find average, min, max and lenght of array', ()=>{
    expect(analyzeArray([])).toMatchObject({average:0,min:0,max:0,length:0})
});

test('Find average, min, max and lenght of array', ()=>{
    expect(analyzeArray([-1,0,-9,30])).toMatchObject({average:5,min:-9,max:30,length:4})
});