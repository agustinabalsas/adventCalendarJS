function wrapping(gifts) {
    let retorno = []
    for (let gift of gifts) {
        
        let wrapper = ""
        for (let i = 0; i < gift.length + 2; i++) {
            wrapper += "*"
        }
        retorno.push(wrapper + "\n*" + gift + "*\n" + wrapper)
    }
    return retorno
}

module.exports = wrapping