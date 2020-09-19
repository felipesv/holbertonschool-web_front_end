/*
	Execution stack & timing execution
*/
function countPrimeNumbers() {
	return 25;
}

let begin = performance.now();
for (let i = 0; i < 100; i++)
	countPrimeNumbers();
let end = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (end - begin) + " milliseconds.");
