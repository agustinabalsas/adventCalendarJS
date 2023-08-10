const wrapping = require('./script-1.js')

test('Test 1 - returns an array', () => {
    expect(Array.isArray(wrapping(["toy", "phone"]))).toBe(true);
});

test('Test 2 - wrapping(["cat", "game", "socks"])', () => {
    expect(
        wrapping(["cat", "game", "socks"]))
        .toEqual(
            [ "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"]
        );
});

test('Test 3 - wrapping(["midu"])', () => {
    expect(
        wrapping(["midu"]))
        .toEqual(
            ["******\n*midu*\n******"]
        );
});

test('Test 4 - wrapping(["a"])', () => {
    expect(
        wrapping(["a"]))
        .toEqual(
            ["***\n*a*\n***"]
        );
});

test('Test 5 - empty parameter', () => {
    expect(
        wrapping([]))
        .toEqual(
            []
        );
});