const distributeGifts = require('./script-3.js');

test ('Test 1 - returns a number' , () => {
    expect (
        typeof (distributeGifts(['a', 'b', 'c'], ['d', 'e'])))
    .toBe('number');
})

test ('Test 2 - distributeGifts(["a", "b", "c"], ["d", "e"])', () => {
    expect (
        distributeGifts(["a", "b", "c"], ["d", "e"]))
    .toBe(1);
})

test ('Test 3 - distributeGifts(["videogames", "console"], ["midu"])', () => {
    expect (
        distributeGifts(["videogames", "console"], ["midu"]))
    .toBe(0);
})

test ('Test 4 - distributeGifts(["game", "videoconsole", "computer"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"])', () => {
    expect (
        distributeGifts(["game", "videoconsole", "computer"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]))
    .toBe(5);
})

test ('Test 5 - distributeGifts(["music"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"])', () => {
    expect (
        distributeGifts(["music"], ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]))
    .toBe(26);
})