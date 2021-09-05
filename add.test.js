const { test, expect } = require('@jest/globals')
const add = require('./add')

test('Properly adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
})