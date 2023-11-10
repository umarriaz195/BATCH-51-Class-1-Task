var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeGreats(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var originalMagicianNames = ["David Copperfield", "Houdini", "Derren Brown", "David Blaine"];
var greatMagicianNames = makeGreats(__spreadArray([], originalMagicianNames, true));
function showMagician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagician(originalMagicianNames);
showMagician(greatMagicianNames);
