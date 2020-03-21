function showMessage(numOrStr) {
	if(typeof(numOrStr) === "string" || "number" && 
		!isNaN(numOrStr) && (typeof(numOrStr) !== "object")){
		return typeof(numOrStr);
	}

	return undefined;
}
module.exports = showMessage;