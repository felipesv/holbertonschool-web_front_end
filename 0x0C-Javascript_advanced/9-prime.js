/*
	Prime numbers & timing execution
*/
function countPrimeNumbers() {
	return 25;
}

let begin = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (end - begin) + " milliseconds.")
