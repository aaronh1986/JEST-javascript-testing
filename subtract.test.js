const { test, expect } = require('@jest/globals')
const minus = require('./subtract')

test('Correctly calculates subtraction of two numbers', () => {
    expect(minus(5, 2)).toBe(3)
})