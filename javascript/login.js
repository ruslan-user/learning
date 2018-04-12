var usernameInput = document.getElementById("username") // Object
var passwordInput = document.getElementById("password") // Object
var button = document.getElementById("btn")

var handleClick = function (usernameInput, passwordInput, navigate) {
	if (usernameInput == 'admin' && passwordInput == 'admin') {
		navigate('pages/table.html');
	}	else {
			alert('Wrong username or password!');
		}
	console.log(usernameInput, passwordInput);
}

button.addEventListener('click', handleClick)


var adminUser = {
	username: 'admin',
	password: 'admin'
}


function adminToStorage(adminUser) {
	localStorage.setItem('adminUser', JSON.stringify(adminUser));
}
adminToStorage();


var navigate = function (htmlFile) {
 window.location.href = 'file:///C:/Users/ruffus/learning/' + htmlFile;
};
// navigate('pages/table.html');