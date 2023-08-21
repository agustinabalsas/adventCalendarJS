const getGiftsToRefill = require('./script-7.js')

test('Test 1 - returns array', () => {
    expect(
        Array.isArray(getGiftsToRefill([1, 2, 3], [1, 2, 3], [1, 2, 3])))
        .toBe(true)
})

test("Test 2 - getGiftsToRefill(['bici', 'coche', 'bici', 'bici'], ['coche', 'bici', 'muñeca', 'coche'], ['bici', 'pc', 'pc'])", () => {
    expect(
        getGiftsToRefill(['bici', 'coche', 'bici', 'bici'], ['coche', 'bici', 'muñeca', 'coche'], ['bici', 'pc', 'pc']))
        .toEqual(["muñeca","pc"])
})

test("Test 3 -  getGiftsToRefill([], [], [])", () => {
    expect(
        getGiftsToRefill([], [], []))
        .toEqual([])
})

test("Test 4 - getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])", () => {
    expect(
        getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']))
        .toEqual([])
})

test("Test 5 - getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])", () => {
    expect(
        getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"]))
        .toEqual([ "a", "b","c"])
})

test("Test 6 - getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])", () => {
    expect(
        getGiftsToRefill(["a", "b"], ['c', 'd'], ['e', 'f']))
        .toEqual(['a','b','c','d','e','f'])
})

