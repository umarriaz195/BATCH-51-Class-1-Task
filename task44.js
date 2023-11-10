function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items selected: " + items.join(", "));
    }
    console.log("\n");
}
orderSandwich("Egg", "Kabab", "Lettuce", "Tomato");
orderSandwich("Bun", "Cheese", "Ketchup");
orderSandwich();
