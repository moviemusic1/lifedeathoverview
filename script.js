var bps = 4.25, dps = 1.75;
var h1 = document.querySelector('#h1'), love_p = document.querySelector('#love'), event_p = document.querySelector('#event'), births = document.querySelector('#births'), deaths = document.querySelector('#deaths');
var alife = 0;
var births_num = 0;
var deaths_num = 0;

var birth_interval = setInterval(function() {
	event_p.innerHTML = "Birth!";
	event_p.classList.remove('death');
	event_p.classList.add('birth');
	alife += 1;
	births_num += 1;
	update();
	if(alife >= 1000 && alife < 10000) {
		h1.style.fontSize = "7em";
	}
	if(alife >= 10000) {
		h1.style.fontSize = "5em";
	}
}, 1/bps * 1000);

var death_interval = setInterval(function() {
	event_p.innerHTML = "Death.";
	event_p.classList.remove('birth');
	event_p.classList.add('death');
	alife -= 1;
	deaths_num += 1;
	update();
}, 1/dps * 1000);

function update() {
	h1.innerHTML = alife;
	births.innerHTML = births_num;
	deaths.innerHTML = deaths_num;
}
