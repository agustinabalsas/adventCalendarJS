function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const n = giftsCities.length;
    const dp = new Array(maxCities + 1).fill(0).map(() => new Array(maxGifts + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= maxCities; j++) {
        for (let k = giftsCities[i - 1]; k <= maxGifts; k++) {
          dp[j][k] = Math.max(dp[j][k], dp[j - 1][k - giftsCities[i - 1]] + giftsCities[i - 1]);
        }
      }
    }
    
    return dp[maxCities][maxGifts]
}