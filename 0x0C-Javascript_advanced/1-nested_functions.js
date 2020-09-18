/*
	alert "Welcome Holberton School!" with nested function
*/
let globalVariable = "Welcome";

function outer() {
	let course = "Holberton";
	alert(globalVariable);

	function inner() {
		let exclamation = "!";
		alert(globalVariable + " " + course);

		function inception() {
			alert(globalVariable + " " + course + " " + exclamation)
		}

		inception();
	}

	inner();	
}

outer();
