var min = document.getElementById("minute");
var mins = 0;

var seconds = document.getElementById("second");
var sec = 0;

var centiseconds = document.getElementById("centisecond");
var centisecs = 0;

var pause = 0;
// functions

function n(n) {
	return n > 9 ? "" + n : "0" + n;
}

const counting = () => {
	pause = 0;
	setInterval(() => {
		if (!pause) {
			centisecs += 1;
			centiseconds.innerHTML = n(centisecs);

			if (centisecs >= 99) {
				centisecs = 0;
				sec += 1;

				if (sec > 59) {
					sec = 0;
					mins += 1;
					min.innerHTML = n(mins);
				}
				seconds.innerHTML = n(sec);
			}
		}
	}, 10);
};

// const

//

var startbtn = document.getElementById("start");
var pausebtn = document.getElementById("pause");
var resetbtn = document.getElementById("reset");
var lapbtn = document.getElementById("lap");

var laps = 0;
var laplist = document.getElementById("laplist");

startbtn.addEventListener("click", () => {
	counting();
});

pausebtn.addEventListener("click", () => {
	pause = 1;
});

resetbtn.addEventListener("click", () => {
	pause = 1;
	mins = 0;
	sec = 0;
	centisecs = 0;
	centiseconds.innerHTML = n(0);
	min.innerHTML = n(0);
	seconds.innerHTML = n(0);
	laplist.innerHTML = "";
	laps = 0;
});

lapbtn.addEventListener("click", () => {
	laps += 1;
	var item = document.createElement("li");
	var text = document.createTextNode(
		`Lap${laps} : ${mins}:${sec}:${centisecs}.`
	);
	item.appendChild(text);
	laplist.appendChild(item);
});
