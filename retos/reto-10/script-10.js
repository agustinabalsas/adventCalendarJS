function checkJump(heights) {
  let posAlta = 0;

  if (heights.length <= 1 || (heights.indexOf(Math.max(...heights)) == 0)){
    return false
  }

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[i + 1]) {
      posAlta = i;
      break;
    }
  }

  for (let j = posAlta; j < heights.length; j++) {
    if (heights[j] <= heights[j + 1]) {
      return false;
    }
  }

  return true;
}

console.log(checkJump([1]) )