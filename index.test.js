import { capitalize, reverseString, calculator } from "./index.js";

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

//calculator
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