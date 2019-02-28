/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;

  preferences.forEach(function getLoveTriangle(count) {
    for (let a = 0; a < preferences.length; a ++){
       let b = preferences[a];
       let c = preferences[b];
       count = count + a == preferences[c];
      }
  })

  return count / 3
};
