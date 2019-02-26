/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    for (let x = 0; x < preferences.length; x++) {
      for (let y = 0; y < preferences.length; y++) {
        if (i === preferences[x] - 1 && x === preferences[y] - 1 && y === preferences[i] - 1) {
          count++;
        }
      }
    }
  }
  return Math.floor(count / 3);
};
