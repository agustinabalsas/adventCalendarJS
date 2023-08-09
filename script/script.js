////////// 1
function wrapping(gifts) {
    var retorno = [];
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var gift = gifts_1[_i];
        var wrapper = "";
        for (var i = 0; i < gift.length + 2; i++) {
            wrapper += "*";
        }
        retorno.push(wrapper + "\n*" + gift + "*\n" + wrapper);
    }
    return retorno;
}
console.log('Ejercicio 1 --->');
console.log(wrapping(["toy", "phone"]));
console.log(' ');
////////// 2
function countHours(year, holidays) {
    var accumulated = 0;
    for (var _i = 0, holidays_1 = holidays; _i < holidays_1.length; _i++) {
        var holiday = holidays_1[_i];
        var day = new Date("".concat(holiday, "/").concat(year)).getDay();
        if (day !== 6 && day !== 0)
            accumulated += 2;
    }
    return accumulated;
}
console.log('Ejercicio 2 --->');
console.log(countHours(2021, ["01/01", "12/02", "25/12"]));
