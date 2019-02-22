window.onload = function () {
	let button = document.getElementById("execute");
	button.onclick = function () {
		let string = document.getElementById("string");
		let output = document.getElementById("output");
		let result = stringToHtmlSymbol(string.value)
		output.value = result;
	};
};

/**
 * Returns the html symbol of the specified string.
 * @param {string} string
 * @returns {string} the html symbol of the specified string
 */
function stringToHtmlSymbol(string) {
	let chars = string.split("");
	let result = "";
	for (let i in chars) {
		let char = chars[i];
		result += charToHtmlSymbol(char);
	}

	return result;
}

/**
 * Returns the html symbol of the speified string whose length is 1.
 * @param {string} char - the string whose length is 1
 * @returns {string} the html symbol of the specified string
 */
function charToHtmlSymbol(char) {
	return "&#" + char.codePointAt(0) + ";";
}