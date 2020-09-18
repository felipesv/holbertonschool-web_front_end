/*
	Changing DOM with closure
*/
function changeMode(size, weight, transform, background, color) {
	document.body.style['font-size'] = size;
	document.body.style['font-weight'] = weight;
	document.body.style['text-transform'] = transform;
	document.body.style['background-color'] = background;
	document.body.style['color'] = color;
}

function main() {
	let spooky = function() { changeMode(9, "bold", "uppercase", "pink", "green"); }
	let darkMode = function() { changeMode(12, "bold", "capitalize", "black", "white"); }
	let screamMode = function() { changeMode(12, "normal", "lowercase", "white", "black"); }
	// add paragraph
	let paragraph = document.createElement("p");
	let valParagraph = document.createTextNode("Welcome Holberton!");
	paragraph.appendChild(valParagraph);
	document.body.appendChild(paragraph);
	// add button Spooky
	let buttonSpooky = document.createElement("button");
	let valButtonSpooky = document.createTextNode("Spooky");
	buttonSpooky.appendChild(valButtonSpooky);
	buttonSpooky.addEventListener("click", spooky);
	document.body.appendChild(buttonSpooky);
	// add button Dark mode
	let buttonDark = document.createElement("button");
	let valButtonDark = document.createTextNode("Dark mode");
	buttonDark.appendChild(valButtonDark);
	buttonDark.addEventListener("click", darkMode);
	document.body.appendChild(buttonDark);
	// add button Scream mode
	let buttonScream = document.createElement("button");
	let valButtonScream = document.createTextNode("Scream mode");
	buttonScream.appendChild(valButtonScream);
	buttonScream.addEventListener("click", screamMode);
	document.body.appendChild(buttonScream);
}

main();
