const countHours = require('./script-2.js');

test('Test 1 - returns a number' , () => {
    expect (
        typeof (countHours(2023, ['01/06', '04/01', '12/25'])))
    .toBe('number');
})

test('Test 2 - countHours(2023, ["01/06", "04/01", "12/25"])', () => {
    expect(
        countHours(2023, ["01/06", "04/01", "12/25"]))
    .toBe(4);
})

test('Test 3 - countHours(2022, ["01/06", "04/01", "12/25"])', () => {
    expect(
        countHours(2022, ["01/06", "04/01", "12/25"]))
    .toBe(4);
})

test('Test 4 - countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"])', () => {
    expect(
        countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))
    .toBe(10);
})

test('Test 5 - countHours(2023, ["01/01"])', () => {
    expect(
        countHours(2000, ['01/01']))
    .toBe(0);
})