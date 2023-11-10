var countries = ["dubai", "saudia", "japan", "china", "london"];
// Print the list of countries in a bullet form
console.log("Countries:");
console.log(countries.map(function (country) { return "\u2022 ".concat(country); }).join('\n'));
