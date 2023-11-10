let usernames: string[] = ["admin", "saim", "khan", "kishan", "raim"];


for (const currentUser of usernames) {
  if (currentUser === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${currentUser}, thank you for logging in again.`);
  }
}