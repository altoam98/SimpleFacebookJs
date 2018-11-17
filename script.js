var dataBase = [
	{
		username: "mohamed",
		password: "123"
	},
	{
		username: "ahmed",
		password: "456"
	},
	{
		username: "aya",
		password: "789"
	}
];

var newsfeed = [
	{
		username: "Ahmed",
		timeline: "so tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cooool!"
	}
];



function isUserVaild(username, password) {
	for (var i = 0; i < dataBase.length; i++) {
		if (dataBase[i].username === username &&
			dataBase[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserVaild(username, password)) {
		console.log(newsfeed);
	} else {
		alert("wrong in password or username");
	}
}



var userNamePrompt = prompt("what is username?");
var passwordPrompt = prompt("what is password?");
signIn(userNamePrompt, passwordPrompt);