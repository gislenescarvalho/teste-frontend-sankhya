const MAP_MONTH = [
	"Jan",
	"Fev",
	"Mar",
	"Abr",
	"Mai",
	"Jun",
	"Jul",
	"Ago",
	"Set",
	"Out",
	"Nov",
	"Dez",
];

window.onload = function () {
	var x = setInterval(function () {
		let now = new Date();

		let day = now.getDate().toString().padStart(0, 2);

		let month = MAP_MONTH[now.getMonth()];

		let year = now.getFullYear();

		let hour = now.getHours().toString().padStart(2, "0");

		let minute = now.getMinutes().toString().padStart(2, "0");

		let seconds = now.getSeconds().toString().padStart(2, "0");

		document.getElementById(
			"timer-content"
		).innerHTML = `${day} de ${month} de ${year} ${hour}:${minute}:${seconds}`;
	}, 1000);
};

function calc(n) {
	var start = new Date().getTime();
	var fibonacciCalculated = fibonacci(n);
	var end = new Date().getTime();
	var time = end - start;

	let elResult = document.getElementById("fibonacci-result");
	elResult.innerText = `Fibonacci de ${n}: ${fibonacciCalculated} / Tempo gasto: ${time} ms`;
}

// Uma tática de otimização é armazenar os resultados
// dos cálculos previamente calculados em um tipo Object.

var nums = {};
function fibonacci(n) {
	var acc;
	if (n < 3) return 1;
	else if (nums.hasOwnProperty(n)) acc = nums[n];
	else acc = fibonacci(n - 2) + fibonacci(n - 1);
	nums[n] = acc;
	return acc;
}
