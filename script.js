const timer = document.querySelector('.timer');
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let intervalId;

function counter() {
	if (miliseconds < 99) {
		miliseconds++;

		timer.querySelector('.miliseconds').innerText =
			miliseconds < 10 ? `:0${miliseconds}` : `:${miliseconds}`;
	}

	if (miliseconds === 99) miliseconds = 0;

	if (seconds < 60 && miliseconds === 0) {
		seconds++;

		timer.querySelector('.seconds').innerText = seconds < 10 ? `:0${seconds}` : `:${seconds}`;
	}

	if (seconds === 59) seconds = 0;

	if (minutes < 60 && seconds === 0 && miliseconds === 0) {
		minutes++;
		timer.querySelector('.minutes').innerText = minutes < 10 ? `:0${minutes}` : `:${minutes}`;
	}

	if (minutes === 59) minutes = 0;

	if (hours < 24 && minutes === 0 && seconds === 0 && miliseconds === 0) {
		hours++;
		timer.querySelector('.hour').innerText = hours < 10 ? `0${hours}` : `${hours}`;
	}
}

function start() {
	console.log('iniciado');
	document.querySelector('.btnStart').style.display = 'none';
	document.querySelector('.btnStop').style.display = 'block';
	intervalId = setInterval(counter, 10);
}

function stop() {
	console.log('encerrado');
	document.querySelector('.btnStart').style.display = 'block';
	document.querySelector('.btnStop').style.display = 'none';
	intervalId = clearInterval(intervalId);
}
