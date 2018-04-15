var usernameInput = document.getElementById("username") // Object
var passwordInput = document.getElementById("password") // Object
var button = document.getElementById("btn")

var adminUser = {
	username: 'admin',
	password: 'admin'
}

// we don't need to pass 'adminUser' as an argument
// we have this varibale in scope
function adminToStorage() {
	localStorage.setItem('adminUser', JSON.stringify(adminUser));
}

function adminFromStorage() {
	return JSON.parse(localStorage.getItem('adminUser'))
}

adminToStorage();

var navigate = function (htmlFile) {
 window.location.href = 'file:///C:/Users/ruffus/learning/' + htmlFile;
};

// we don't need to pass these args (usernameInput, passwordInput, navigate) to
// the handleClick function, we have all these variables in scope
var handleClick = function () {

	// get values from input elements
	var usernameInputValue = usernameInput.value
	var passwordInputValue = passwordInput.value

	// get admin data from local storage
	var adminData = adminFromStorage()

	// check if username and password are correct
	var isUsernameCorrect = usernameInputValue === adminData.username
	var isPasswordIsCorrect = passwordInputValue === adminData.password

	if (isUsernameCorrect && isPasswordIsCorrect) {
		navigate('pages/table.html');
	}
	else {
		alert('Wrong username or password!');
	}
}

button.addEventListener('click', handleClick)
