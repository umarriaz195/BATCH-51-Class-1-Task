const dinnerGuestt: string[] = ["kahn", "saim", "adnan"];


console.log("I found a bigger dinner table, so I can invite more guests!");


dinnerGuestt.unshift("raheem");


dinnerGuestt.splice(1, 0, "Irtiza");


dinnerGuestt.push("ali");

console.log(`Dear ${dinnerGuestt[0]}, I would be honored if you would join me for dinner.`);
console.log(`Dear ${dinnerGuestt[1]}, I would be honored if you would join me for dinner.`);
console.log(`Dear ${dinnerGuestt[2]}, I would be honored if you would join me for dinner.`);
console.log(`Dear ${dinnerGuestt[3]}, I would be honored if you would join me for dinner.`);
console.log(`Dear ${dinnerGuestt[4]}, I would be honored if you would join me for dinner.`);
console.log(`Dear ${dinnerGuestt[5]}, I would be honored if you would join me for dinner.`);