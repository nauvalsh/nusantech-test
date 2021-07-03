/**
 *
 * @param {number} s
 * @returns
 */
const maze = (s) => {
  let mazeString = '';
  let oddCount = 1;

  for (let row = 1; row <= s; row++) {
    for (let column = 1; column <= s; column++) {
      // odd row
      if (row % 2 !== 0) {
        // 2n-1
        // n is odd ? left track (1,5,9, n...)
        // n is even ? right track (3,7,11 n...)
        if (oddCount % 2 !== 0) {
          if (column !== 2) {
            mazeString += '@';
          } else {
            mazeString += ' ';
          }
        } else {
          if (column !== s - 1) {
            mazeString += '@';
          } else {
            mazeString += ' ';
          }
        }
      } else {
        // even row
        if (column !== 1 && column !== s) {
          mazeString += ' ';
        } else {
          mazeString += '@';
        }
      }
    }
    // End of column looping

    if (row % 2 !== 0) ++oddCount;

    mazeString += '\n';
  }
  // End of row looping

  return mazeString;
};

console.log(maze(23));
