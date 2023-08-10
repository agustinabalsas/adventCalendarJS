function distributeGifts(packOfGifts, reindeers) {
    return Math.floor((reindeers.reduce((sum, reindeer) => sum + reindeer.length, 0 ) * 2) / packOfGifts.reduce((sum, gift) => sum + gift.length, 0));
}

module.exports = distributeGifts