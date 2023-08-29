function countTime(leds) {
    let times = 0;

    while (leds.includes(0)) {
        let newLeds = Array.from(leds);

        (leds[leds.length - 1] == 1 && leds[0] == 0) ? newLeds[0] = 1 : ""

        for (let i = 1; i < leds.length; i++) {
            (leds[i - 1] == 1 && leds[i] == 0) ? newLeds[i] = 1 : ""
        }
        leds = newLeds;
        times += 7;
    }

    return times;
}