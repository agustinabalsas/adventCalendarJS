function wrapping(gifts) {
    let retorno = []
    for (let _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        let gift = gifts_1[_i]
        let wrapper = ""
        for (let i = 0; i < gift.length + 2; i++) {
            wrapper += "*"
        }
        retorno.push(wrapper + "\n*" + gift + "*\n" + wrapper)
    }
    return retorno
}

module.exports = wrapping