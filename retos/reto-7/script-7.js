function getGiftsToRefill(a1, a2, a3) {
  let toRefill = []

  a1 = a1.filter((item, index) => a1.indexOf(item) === index)

  a2 = a2.filter((item, index) => a2.indexOf(item) === index)

  a3 = a3.filter((item, index) => a3.indexOf(item) === index)

  let allGifts = a1.concat(a2, a3)
  
  allGifts.filter((item,index) => {
    allGifts.splice(index,1)
    const unique = !allGifts.includes(item)
    allGifts.splice(index,0,item)
    if (unique) toRefill.push(item)
  })

  return toRefill
}

module.exports = getGiftsToRefill