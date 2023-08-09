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
