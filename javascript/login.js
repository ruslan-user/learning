document.addEventListener('DOMContentLoaded', function() {

// var username, password, btn;

btn = document.getElementById("btn");
form = document.getElementById("form");

function result () {
	var username, password, btn, form
		btn = document.getElementById("btn");
		form = document.getElementById("form");
		username = document.getElementById("username");
		password = document.getElementById("password");

		username = form.username;
		password = form.password;

		form = document.addEventListener("click", result,);

		console.log(username, password);
}

})