/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	// your implementation

	let count = 0;

<<<<<<< HEAD
	for (let i = 0; i <= preferences.length; i++) {
		let a = preferences[i] - 1;
		let b = preferences[a] - 1;
		let c = preferences[b] - 1;
=======
  preferences.forEach(function getLoveTriangle(count) {
    for (let a = 1; a < preferences.length; a++) {
      let b = preferences[a];
      let c = preferences[b];
       a == preferences[c];
    }
  })
>>>>>>> 3729d3ae531e091a1fad594d9d411caeca870547

		if (c == i) {
			count++;
		}
	}

	return Math.floor(count / 3);
};
