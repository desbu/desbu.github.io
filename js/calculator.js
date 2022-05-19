const select = document.querySelector('#type');
const input = document.querySelector('#area');
const radios = document.querySelectorAll('[type=radio], [type=checkbox]');
const radioOne = document.querySelector('#one');
const radioTwo = document.querySelector('#two');
const checkboxBasement = document.querySelector('#basement');
const radioConstruction = document.querySelector('#construction');
const prices = document.querySelectorAll('.main-services__price');

select.addEventListener('change', countArea);
input.addEventListener('input', countArea);
radios.forEach(item => item.addEventListener('change', countArea));

const basisArea = 180;

function countArea() {
	if (input.value > 400) input.value = 400;
	if (input.value < 0) input.value = 0;

	let area = input.value;
	let k1 = radioOne.checked ? 1 : radioTwo.checked ? 1.25 : 1.3;
	let k2 = checkboxBasement.checked ? 1.3 : 1;
	let k3 = radioConstruction.checked ? 1 : 1.3;
	let k4 = 1;

	switch (select.value) {
		case 'house':
			k4 = 1;
			break;
		case 'garden-house':
			k4 = 0.9;
			break;
		case 'bath':
			k4 = 0.8;
			break;
		case 'garage':
			k4 = 0.7;
			break;
		case 'household-block':
			k4 = 0.6;
			break;
	}

	if (area > basisArea) {
		prices[0].innerText = `${Math.ceil((basisArea * 7 + (area - basisArea) * basisArea / area * 7) * k1 * k2 * k3 * k4 / 10) * 10 + 150} BYN`;
		prices[1].innerText = `${Math.ceil((basisArea * 12 + (area - basisArea) * basisArea / area * 12) * k1 * k2 * k3 * k4 / 10) * 10 + 150} BYN`;
		prices[2].innerText = `${Math.ceil((basisArea * 38 + (area - basisArea) * basisArea / area * 38) * k1 * k2 * k3 * k4 / 10) * 10} BYN`;
		console.log(k4);
	} else if (area > 0) {
		if (area < 90) area = 90;
		prices[0].innerText = `${Math.ceil((basisArea * 7 + (area - basisArea) * area / basisArea * 7) * k1 * k2 * k3 * k4 / 10) * 10 + 150} BYN`;
		prices[1].innerText = `${Math.ceil((basisArea * 12 + (area - basisArea) * area / basisArea * 12) * k1 * k2 * k3 * k4 / 10) * 10 + 150} BYN`;
		prices[2].innerText = `${Math.ceil((basisArea * 38 + (area - basisArea) * area / basisArea * 38) * k1 * k2 * k3 * k4 / 10) * 10} BYN`;
		console.log(k4);
	} else {
		prices[0].innerText = `0 BYN`;
		prices[1].innerText = `0 BYN`;
		prices[2].innerText = `0 BYN`;
	}
};