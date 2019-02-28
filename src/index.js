/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;

  preferences.forEach(function getLoveTriangle(count) {
    for (let a = 1; a < preferences.length; a++) {
      let b = preferences[a];
      let c = preferences[b];
       a == preferences[c]-1;
    }
  })

  return count / 3;
};
