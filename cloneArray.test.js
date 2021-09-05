const { test, expect } = require('@jest/globals')
const clone = require('./cloneArray')

test('Clones an array exactly', () => {
    const array = ['Dave Mustaine', 'Tom Araya', 'George Fisher']
    expect(clone(array)).toStrictEqual(array)
    expect(clone(array)).not.toBe(array)
})