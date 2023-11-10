var usernames = ["admin", "saim", "khan", "kishan", "raim"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var currentUser = usernames_1[_i];
    if (currentUser === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(currentUser, ", thank you for logging in again."));
    }
}
