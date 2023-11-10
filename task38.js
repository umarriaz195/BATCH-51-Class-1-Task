function describeCity(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Islamabad", "Pakistan");
describeCity("California", "USA");
describeCity("Tokyo");
