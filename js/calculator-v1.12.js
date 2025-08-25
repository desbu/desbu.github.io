const select = document.querySelector('#type');
const input = document.querySelector('#area');
const radios = document.querySelectorAll('[type=radio], [type=checkbox]');
const radioOne = document.querySelector('#one');
const radioTwo = document.querySelector('#two');
const checkboxBasement = document.querySelector('#basement');
const checkboxWithHouse = document.querySelector('#with-house');
const radioConstruction = document.querySelector('#construction');
const prices = document.querySelectorAll('.main-services__price');

select.addEventListener('change', countArea);
input.addEventListener('input', countArea);
radios.forEach(item => item.addEventListener('change', countArea));

function countArea() {
    let area;
    let k1 = radioOne.checked ? 1 : radioTwo.checked ? 1.25 : 1.3;
    let k2 = checkboxBasement.checked ? 1.3 : 1;
    let k3 = radioConstruction.checked ? 1 : 1.3;

    // Жилой дом или саловый домик

    if (select.value == 'house' || select.value == 'garden-house') {

        document.querySelector('.inputs__block:nth-of-type(3)').style.display = "flex";
        document.querySelector('.inputs__block:nth-of-type(5)').style.display = "none";
        document.querySelector('.inputs__block:nth-of-type(6)').style.display = "flex";

        if (select.value == 'house') {
            document.querySelectorAll('.list__item:nth-of-type(2)')
                .forEach(item => item.style.display = "block");
            document.querySelectorAll('.list__item:last-of-type')
                .forEach(item => item.style.display = "block");
        }

        if (select.value == 'garden-house') {
            document.querySelectorAll('.main-services__item:not(:last-of-type) .list__item:nth-of-type(2)')
                .forEach(item => item.style.display = "none");
            document.querySelectorAll('.main-services__item:not(:last-of-type) .list__item:last-of-type')
                .forEach(item => item.style.display = "none");

            // Восстановление видимости "Геральный план" и "Инженерные изыскания"
            document.querySelectorAll('.main-services__item:last-of-type .list__item:nth-of-type(2)')
                .forEach(item => item.style.display = "block");
            document.querySelectorAll('.main-services__item:last-of-type .list__item:last-of-type')
                .forEach(item => item.style.display = "block");
        }

        const basisArea = 180;
        const eng = select.value == 'house' ? 0 : 650;
        const geology = 1000;

        if (input.value > 400) input.value = 400;
        if (input.value < 0) input.value = 0;

        area = input.value;

        if (area > basisArea) {
            prices[0].innerText = `${Math.ceil(((basisArea * 16 + (area - basisArea) * basisArea / area * 16) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng} BYN`;
            prices[1].innerText = `${Math.ceil(((basisArea * 26 + (area - basisArea) * basisArea / area * 26) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng} BYN`;
            prices[2].innerText = `${Math.ceil(((basisArea * 57 + (area - basisArea) * basisArea / area * 57) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng + geology} BYN`;
        } else if (area > 0) {
            if (area < 90) area = 90;
            prices[0].innerText = `${Math.ceil(((basisArea * 16 + (area - basisArea) * area / basisArea * 16) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng} BYN`;
            prices[1].innerText = `${Math.ceil(((basisArea * 26 + (area - basisArea) * area / basisArea * 26) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng} BYN`;
            prices[2].innerText = `${Math.ceil(((basisArea * 57 + (area - basisArea) * area / basisArea * 57) * k1 * k2 * k3 / 10) * 1.2) * 10 + 100 - eng + geology} BYN`;
        } else {
            prices[0].innerText = `0 BYN`;
            prices[1].innerText = `0 BYN`;
            prices[2].innerText = `0 BYN`;
        }

        // Баня, гараж, хозблок

    } else {

        document.querySelector('.inputs__block:nth-of-type(3)').style.display = "none";
        document.querySelector('.inputs__block:nth-of-type(5)').style.display = "flex";
        document.querySelector('.inputs__block:nth-of-type(6)').style.display = "none";

        if (checkboxWithHouse.checked) {
            document.querySelectorAll('.list__item:nth-of-type(2)')
                .forEach(item => item.style.display = "none");
            document.querySelectorAll('.list__item:last-of-type')
                .forEach(item => item.style.display = "none");
        }

        if (!checkboxWithHouse.checked) {
            document.querySelectorAll('.list__item:nth-of-type(2)')
                .forEach(item => item.style.display = "block");
            document.querySelectorAll('.list__item:last-of-type')
                .forEach(item => item.style.display = "block");
        }

        const basisArea = 60;
        const eng = checkboxWithHouse.checked ? 650 : 0;
        const geology = checkboxWithHouse.checked ? 0 : 1000;
        const k4 = select.value == 'bath' ? 1.3 : select.value == 'garage' ? 1.15 : 1;

        if (input.value > 200) input.value = 200;
        if (input.value < 0) input.value = 0;

        area = input.value;

        if (area > basisArea) {
            prices[0].innerText = `${Math.ceil((basisArea * 18 + (area - basisArea) * basisArea / area * 18) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng} BYN`;
            prices[1].innerText = `${Math.ceil((basisArea * 29 + (area - basisArea) * basisArea / area * 29) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng} BYN`;
            prices[2].innerText = `${Math.ceil((basisArea * 66 + (area - basisArea) * basisArea / area * 66) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng + geology} BYN`;
        } else if (area > 0) {
            if (area < 60) area = 60;
            prices[0].innerText = `${Math.ceil((basisArea * 18 + (area - basisArea) * area / basisArea * 18) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng} BYN`;
            prices[1].innerText = `${Math.ceil((basisArea * 29 + (area - basisArea) * area / basisArea * 29) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng} BYN`;
            prices[2].innerText = `${Math.ceil((basisArea * 66 + (area - basisArea) * area / basisArea * 66) * k2 * k4 / 10 * 1.1) * 10 + 100 - eng + geology} BYN`;
        } else {
            prices[0].innerText = `0 BYN`;
            prices[1].innerText = `0 BYN`;
            prices[2].innerText = `0 BYN`;
        }
    }
};