var rollsSlider = document.getElementById("rolls");
var rollsOutput = document.getElementById("rollsValue");
rollsOutput.innerHTML = rollsSlider.value;

rollsSlider.oninput = function() {
	rollsOutput.innerHTML = this.value;
	calculateRolls();
}

var daysSlider = document.getElementById("days");
var daysOutput = document.getElementById("daysValue");
daysOutput.innerHTML = daysSlider.value;

daysSlider.oninput = function() {
	daysOutput.innerHTML = this.value;
	calculateRolls();
}


function calculateRolls() {
	const rolls = rollsSlider.value;
	console.log(rolls);
	const quarantineDays =daysSlider.value;
	console.log(quarantineDays)
	const paperDays = rolls * 5;
	const ratio = paperDays / quarantineDays * 100; 
	console.log(ratio);
	const ratioDiv = document.getElementById('ratio');
	ratioDiv.innerText = `${Math.round(ratio)}%`;

	if (ratio > 100) {
		const emoji ='😀';
		ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
	} else {
	const emoji = '💩';
	ratioDiv.innerText = `${Math.round(ratio)}% ${emoji}`;
	}

	event.preventDefault();
};
const form = document.getElementById('form');
form.addEventListener('submit', calculateRolls);
