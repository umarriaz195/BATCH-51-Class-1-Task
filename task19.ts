const dinnerGuestLists: string[] = ["Ali", "khan", "adnnan", "Umer", "raheem", "noman"];

console.log(`I am inviting ${dinnerGuestLists.length} people to dinner.`);

console.log("But i have table only for two people.");


console.log(`Sorry ${dinnerGuestLists[5]}, I can't invite you to dinner.`);
dinnerGuestLists.pop();
console.log(`Sorry ${dinnerGuestLists[4]}, I can't invite you to dinner.`);
dinnerGuestLists.pop();
console.log(`Sorry ${dinnerGuestLists[3]}, I can't invite you to dinner.`);
dinnerGuestLists.pop();
console.log(`Sorry ${dinnerGuestLists[2]}, I can't invite you to dinner.`);
dinnerGuestLists.pop();

console.log(`You're still invited to dinner, ${dinnerGuestLists[0]}!`);
console.log(`You're still invited to dinner, ${dinnerGuestLists[1]}!`);

dinnerGuestLists.pop();
dinnerGuestLists.pop();

console.log(`${dinnerGuestLists.length} people are invited to dinner.`);