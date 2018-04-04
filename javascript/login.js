var usernameInput = document.getElementById("username") // Object
var passwordInput = document.getElementById("password") // Object
var button = document.getElementById("btn")

var handleClick = function () {
	console.log(usernameInput.value)
	console.log(passwordInput.value)
}

button.addEventListener('click', handleClick)
