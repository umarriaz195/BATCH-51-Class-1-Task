function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("No items selected. Please choose some items for your sandwich.");
    } else {
      console.log("Items selected: " + items.join(", "));
    }
    console.log("\n");
  }
  
  orderSandwich("Egg", "Kabab", "Lettuce", "Tomato");
  orderSandwich("Bun", "Cheese", "Ketchup");
  orderSandwich();
  