const fitsInOneBox = require('./script-4');

test ('Test 1 - returns a boolean' , () => {
    expect (
        typeof (fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])))
    .toBe('boolean');
})

test ('Test 2 - fitsInOneBox([ { l: 1, w: 1, h: 10 },{ l: 3, w: 3, h: 12 },{ l: 2, w: 2, h: 1 }])', () => {
    expect (
        fitsInOneBox([    { l: 1, w: 1, h: 10 },    { l: 3, w: 3, h: 12 },    { l: 2, w: 2, h: 1 }, ]))
    .toBe(false);
})


test ('Test 3 - fitsInOneBox([ { l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 }])', () => {
    expect (
        fitsInOneBox([    { l: 1, w: 1, h: 1 },    { l: 2, w: 2, h: 2 }, ]))
    .toBe(true);
})

test ('Test 4 - fitsInOneBox([ { l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 },{ l: 3, w: 1, h: 3 }])', () => {
    expect (
        fitsInOneBox([{ l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 },{ l: 3, w: 1, h: 3 }]))
    .toBe(false);
})

test ('Test 5 - fitsInOneBox([  { l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 },{ l: 2, w: 10, h: 2}])', () => {
    expect (fitsInOneBox([ { l: 1, w: 1, h: 1 },{ l: 2, w: 2, h: 2 },{ l: 2, w: 10, h: 2}]))
    .toBe(false);
})

test ('Test 6 - fitsInOneBox([ { l: 1, w: 1, h: 1 },{ l: 3, w: 3, h: 3 },{ l: 2, w: 2, h: 2 }])', () => {
    expect (
        fitsInOneBox([{ l: 1, w: 1, h: 1 },{ l: 3, w: 3, h: 3 },{ l: 2, w: 2, h: 2 }]))
    .toBe(true);
})