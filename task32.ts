let current_users: string[] = ["faizan", "hammad", "khan", "Bahsir", "Daniyal"];

let new_users: string[] = ["Muneeb", "Ali", "IRTIZA", "Faizan", "Ronaldo"];

for (const new_user of new_users) {

  const isUsernameTaken = current_users.some(
    (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}