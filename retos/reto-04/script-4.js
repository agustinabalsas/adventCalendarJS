function fitsInOneBox(boxes) {
    let result = true;
    
    const sortedBoxes = boxes.sort((a, b) => a.l - b.l);

    for (let i = 1; i < sortedBoxes.length; i++) {
        if (
          (sortedBoxes[i].l <= sortedBoxes[i - 1].l) ||
          (sortedBoxes[i].w <= sortedBoxes[i - 1].w) ||
          (sortedBoxes[i].h <= sortedBoxes[i - 1].h)
        ) {
          result = false;
          break;
        }
      }
  
    return result;
  }
  
module.exports = fitsInOneBox;