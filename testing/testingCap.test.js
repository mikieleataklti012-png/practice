import capitalize from "./capitalize.js";
import {add, mult, div, sub} from "./calculator.js"

test('capitalize a the first letter',()=>{
    expect(capitalize('mikiele')).toBe('Mikiele');
}) 

test('add two numbers', ()=>{
    expect(add(3,4)).toBe(7);
})