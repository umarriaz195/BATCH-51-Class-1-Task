let favoritePizzas: string[] = ["Creamy Fajita", "Chicken Tikka", "BBQ Chicken"];

console.log("Printing pizza names:");
for (const pizza of favoritePizzas) {
  console.log(pizza);
}

console.log("\nPrinting sentences about pizza:");
for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");