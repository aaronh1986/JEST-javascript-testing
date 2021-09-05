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

//toEqual
test('User should be Aaron Harbourne object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Aaron', lastName: 'Harbourne'})
})

// Less than or Greater than...Can just build the function here and not in functions.js
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1500)
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/i/)
})

// Working with async data
test('User fetched name should be LG initials', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// Async await, to do on Monday
test('User fetched name should be LG initials', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})