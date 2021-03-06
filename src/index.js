/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	// your implementation

	let count = 0;

	for (let i = 1; i <= preferences.length; i++) {
		let a = preferences[i - 1]; //проверяем последнего
		let b = preferences[a - 1];
		let c = preferences[b - 1];

		if (c == i) {
			count++;
		}
	}

	return Math.floor(count / 3);
};