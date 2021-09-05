const functions = require('./functions');

test('Correctly adds two numbers', () => {
    expect(functions.add(2, 5)).toBe(7);
})

test('Does not correctly add two numbers', () => {
    expect(functions.add(2, 5)).not.toBe(9);
})

test('Displays null', () => {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})