const checkJump = require('./script-10.js');

test ('Test 1 - returns a boolean', () => {
    expect (typeof( checkJump([1, 2, 1])))
    .toBe('boolean')
})

test ('Test 2 - checkJump([1, 2, 1])', () => {
    expect (checkJump([1, 2, 1]))
    .toBe(true)
})

test ('Test 3 - checkJump([1, 3, 8, 5, 2])', () => {
    expect (checkJump([1, 3, 8, 5, 2]))
    .toBe(true)
})

test ('Test 4 - checkJump([1, 7, 3, 5])', () => {
    expect (checkJump([1, 7, 3, 5]))
    .toBe(false)
})

test ('Test 5 - checkJump([1, 2, 3, 2, 1])', () => {
    expect (checkJump([1, 2, 3, 2, 1]))
    .toBe(true)
})

test ('Test 6 - checkJump([1, 2, 2, 2, 1])', () => {
    expect (checkJump([1, 2, 2, 2, 1]))
    .toBe(true)
})

test ('Test 7 - checkJump([0, 1, 0])', () => {
    expect (checkJump([0, 1, 0]))
    .toBe(true)
})

test ('Test 8 - checkJump([2, 2, 2, 2])', () => {
    expect (checkJump([2, 2, 2, 2]))
    .toBe(false)
})

test ('Test 9 - checkJump([1, 2, 3])', () => {
    expect (checkJump([1, 2, 3]))
    .toBe(false)
})

test ('Test 10 - checkJump([1, 2, 3, 2, 1, 2, 3])', () => {
    expect (checkJump([1, 2, 3, 2, 1, 2, 3]))
    .toBe(false)
})

test ('Test 11 - checkJump([1, 1000, 900, 800])', () => {
    expect (checkJump([1, 1000, 900, 800]))
    .toBe(true)
})

test ('Test 12 - checkJump([1, 1000, 100, 800])', () => {
    expect (checkJump([1, 1000, 100, 800]))
    .toBe(false)
})

test ('Test 13 - checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])', () => {
    expect (checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]))
    .toBe(true)
})

test ('Test 14 - checkJump([1, 2, 3, 1, 3, 1])', () => {
    expect (checkJump([1, 2, 3, 1, 3, 1]))
    .toBe(false)
})

test ('Test 15 - checkJump([1, 3, 2, 5, 4, 3, 2, 1])', () => {
    expect (checkJump([1, 3, 2, 5, 4, 3, 2, 1]))
    .toBe(false)
})