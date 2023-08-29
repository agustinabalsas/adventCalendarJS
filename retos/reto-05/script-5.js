function getMaxGifts(giftsCities, maxGifts, maxCities) {

  const combinations = giftsCities.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]])

  const result = combinations.filter((c) => c.length <= maxCities)

  let toReturn = 0

  for (let combination of result){
    let sum = combination.length == 0 ?  0 : combination[0]

    if (combination.length > 1){
       sum = combination.reduce((a, v) => a+v)
    }

    if (sum <= maxGifts && sum >= toReturn){
      toReturn = sum
    }
  }

  return toReturn
}

module.exports = getMaxGifts;