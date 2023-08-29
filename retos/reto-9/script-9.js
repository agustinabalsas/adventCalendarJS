function countTime(leds) {
    let times = 0;

    while (leds.includes(0)) {
        let newLeds = Array.from(leds);

        newLeds[0] |= (leds[leds.length - 1] == 1 && leds[0] == 0) ? 1 : 0;

        for (let i = 1; i < leds.length; i++) {
            newLeds[i] |= (leds[i - 1] == 1 && leds[i] == 0) ? 1 : 0
        }
        leds = newLeds;
        times += 7;
    }

    return times;
}

module.exports = countTime;