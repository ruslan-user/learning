var robot = {
		name: 'Spike',
		greetings: sayHello,
		startWalking: startWalking,
		stopWalking: stopWalking,
		walking: report
	}

var report = function() {
		if (robotIsWalking == true) {
			console.log("I'm walking.");
		} else {
			console.log("I'm standing.");
		}
	}

var sayHello = function sayHello() {
		console.log("Hello, I'm " + robot.name);
	}

var robotIsWalking

var startWalking = function startWalking() {
		robotIsWalking = true;
		console.log("I'm starting to walk");
	}


var stopWalking = function stopWalking() {
		robotIsWalking = false;
		console.log("I'm stopping");
	}


sayHello();
startWalking();
stopWalking();

