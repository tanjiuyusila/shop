var db = connect('user');
var userList = db.user.find();
userList.forEach(function (user) {
    printjson(user)
});