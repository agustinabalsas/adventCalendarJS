function countHours(year, holidays) {
    let accumulated = 0

    for (let holiday of holidays) {
        let day = new Date(`${holiday}/${year}`).getDay()

        if (day !== 6 && day !== 0) accumulated += 2
    }

    return accumulated
}

module.exports = countHours