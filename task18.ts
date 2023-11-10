const placesToVisit: string[] = ["dubai", "saudia", "japan", "china", "london"];

console.log("Original Order:", placesToVisit);

const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);

console.log("Original Order:", placesToVisit);

const reverseSorted = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", reverseSorted);

console.log("Original Order:", placesToVisit);

const reversedOrder = [...placesToVisit].reverse();
console.log("Reversed Order:", reversedOrder);

const originalOrderAgain = [...reversedOrder].reverse();
console.log("Original Order:", originalOrderAgain);

const sortedArray = [...placesToVisit].sort();
console.log("Sorted Alphabetical Order:", sortedArray);

const reverseSortedArray = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", reverseSortedArray);