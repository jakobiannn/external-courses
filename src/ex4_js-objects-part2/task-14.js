function generateRandom(min, max) {
	let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
	return rnd;
}

module.exports = generateRandom;