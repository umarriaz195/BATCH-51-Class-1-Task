var current_users = ["faizan", "hammad", "khan", "Bahsir", "Daniyal"];
var new_users = ["Muneeb", "Ali", "IRTIZA", "Faizan", "Ronaldo"];
var _loop_1 = function (new_user) {
    var isUsernameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
