var dinnerGuestLists = ["Ali", "khan", "adnnan", "Umer", "raheem", "noman"];
console.log("I am inviting ".concat(dinnerGuestLists.length, " people to dinner."));
console.log("But i have table only for two people.");
console.log("Sorry ".concat(dinnerGuestLists[5], ", I can't invite you to dinner."));
dinnerGuestLists.pop();
console.log("Sorry ".concat(dinnerGuestLists[4], ", I can't invite you to dinner."));
dinnerGuestLists.pop();
console.log("Sorry ".concat(dinnerGuestLists[3], ", I can't invite you to dinner."));
dinnerGuestLists.pop();
console.log("Sorry ".concat(dinnerGuestLists[2], ", I can't invite you to dinner."));
dinnerGuestLists.pop();
console.log("You're still invited to dinner, ".concat(dinnerGuestLists[0], "!"));
console.log("You're still invited to dinner, ".concat(dinnerGuestLists[1], "!"));
dinnerGuestLists.pop();
dinnerGuestLists.pop();
console.log("".concat(dinnerGuestLists.length, " people are invited to dinner."));