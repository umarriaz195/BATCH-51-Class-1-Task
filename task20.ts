const countries: string[] = ["dubai", "saudia", "japan", "china", "london"];


// Print the list of countries in a bullet form
console.log("Countries:")
console.log(countries.map(country => `• ${country}`).join('\n'));
