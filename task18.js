var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["dubai", "saudia", "japan", "china", "london"];
console.log("Original Order:", placesToVisit);
var sortedAlphabetically = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedAlphabetically);
console.log("Original Order:", placesToVisit);
var reverseSorted = __spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", reverseSorted);
console.log("Original Order:", placesToVisit);
var reversedOrder = __spreadArray([], placesToVisit, true).reverse();
console.log("Reversed Order:", reversedOrder);
var originalOrderAgain = __spreadArray([], reversedOrder, true).reverse();
console.log("Original Order:", originalOrderAgain);
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Sorted Alphabetical Order:", sortedArray);
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted Reverse Alphabetical Order:", reverseSortedArray);
