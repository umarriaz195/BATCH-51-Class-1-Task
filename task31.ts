
let usernamess: string[] = ["admin", "hammad", "khan", "Bahsir", "Daniyal"];

if (usernamess.length === 0) {
  console.log("We need to find some users!");
} else {
 
  for (const currentUser of usernamess) {
    if (currentUser === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${currentUser}, thank you for logging in again.`);
    }
  }
}

usernamess = [];

if (usernamess.length === 0) {
  console.log("We need to find some users!");
}