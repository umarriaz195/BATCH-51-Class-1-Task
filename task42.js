function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicianNamess = ["Dynamo", "Houdini", "Doug Henning", "Max Maven"];
var greatMagicians = makeGreat(magicianNamess);
function showMagicianss(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagicianss(greatMagicians);
