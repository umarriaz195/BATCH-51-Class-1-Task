var usernamess = ["admin", "hammad", "khan", "Bahsir", "Daniyal"];
if (usernamess.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernamess_1 = usernamess; _i < usernamess_1.length; _i++) {
        var currentUser = usernamess_1[_i];
        if (currentUser === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(currentUser, ", thank you for logging in again."));
        }
    }
}
usernamess = [];
if (usernamess.length === 0) {
    console.log("We need to find some users!");
}
