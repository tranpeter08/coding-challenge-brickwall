'use strict';

function brickwall(prevRow = [], bricks = {}, maxWidth = 0) {
  const prevWidths = [];
  let width = 0;
  let widthIndex = 0;

  let newRow = [];
  let currentIndex = null;
  let currentWidth = 0;
  let start = 0;

  const brickQue = [];
  for (let i = 0; i < prevRow.length; i++) {
    width += prevRow[i];
    prevWidths.push(width);
  }

  // the last element is the entire width of the previous wall, check if it doesn't equal the maxWidth
  if (prevWidths.pop() !== maxWidth) {
    throw new Error('max width and previous row are invalid');
  }

  for (let brick in bricks) {
    const arr = new Array(bricks[brick]).fill(brick);
    brickQue.push(...arr);
  }

  while (start < brickQue.length) {
    if (currentIndex >= brickQue.length) {
      currentIndex = 0;
    }

    // check if currentIndex goes back to start or if current width equals to a prev wdith
    if (currentIndex === start || currentWidth === prevWidths[widthIndex]) {
      // reset newRow and update indexes

      start += 1;
      currentIndex = start;
      newRow = [];
      widthIndex = 0;
      currentWidth = 0;
    }

    // initialize the currentIndex
    if (currentIndex === null) {
      currentIndex = 0;
    }

    if (currentWidth > prevWidths[widthIndex]) {
      widthIndex += 1;
      continue;
    }

    const nextBrick = brickQue[currentIndex];
    const brickWidth = parseInt(nextBrick);

    // check if we can use the brick

    // does it intersect with previous widths?
    if (brickWidth === prevWidths[widthIndex]) {
      // if so move on to next brick
      currentIndex += 1;
      continue;
    }

    // update current width
    currentWidth += brickWidth;

    // does it exceed maxWidth?
    if (currentWidth > maxWidth) {
      // if so move on to next brick
      // and reset currentWidth back to previous
      currentWidth -= brickWidth;
      currentIndex += 1;
      continue;
    }

    // if currentWidth exceeds width at current widthIndex, increment by 1
    if (
      currentWidth > prevWidths[widthIndex] &&
      widthIndex < prevWidths.length
    ) {
      widthIndex += 1;
    }

    newRow.push(nextBrick);

    if (currentWidth === maxWidth) {
      // console.log({ newRow });
      return newRow;
    }
    currentIndex += 1;
  }

  return false;
}

module.exports = brickwall;
