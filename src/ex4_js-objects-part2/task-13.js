function generateRandom() {
	return Math.round(Math.random() * (101 - 1) + 1);
}

module.exports = generateRandom;