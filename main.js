const plus = document.querySelector(".sizeUp");
const minus = document.querySelector(".sizeDown");
const color = document.querySelector(".color");
const p = document.querySelector("p");
let fontSize = 36;

const buttonUp = () => {
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};
const buttonDown = () => {
	if (fontSize <= 6) return;
	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
};

const changeColor = () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	p.style.color = `rgb(${r}, ${g}, ${b})`;
};

plus.addEventListener("click", buttonUp);
minus.addEventListener("click", buttonDown);
color.addEventListener("click", changeColor);
