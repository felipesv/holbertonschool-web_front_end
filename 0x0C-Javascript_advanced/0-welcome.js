/*
	function to alert "Welcome <firstname> <lastname>!"
*/
function welcome(firstName, lastName) {
	let fullName = firstName + " " + lastName;

	function displayFullName() {
		alert("Welcome " + fullName + "!");
	}

	displayFullName();
}
