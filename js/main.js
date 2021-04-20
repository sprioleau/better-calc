// Get elements
const previousOperand = document.getElementById("previous-operand");
const operator = document.getElementById("operator");
const currentOperand = document.getElementById("current-operand");
const allClearKey = document.getElementById("all-clear");
const inverseKey = document.getElementById("inverse");
const operations = document.querySelectorAll("[data-operation]");
const decimalKey = document.getElementById("decimal");
const equalsKey = document.getElementById("equals");
const numbers = document.querySelectorAll(".num");

// Add event listeners
numbers.forEach((number) => number.addEventListener("click", () => appendNumber(number.innerText)));
allClearKey.addEventListener("click", clearAll);
decimalKey.addEventListener("click", appendDecimal);
inverseKey.addEventListener("click", toggleInverse);
equalsKey.addEventListener("click", compute);
operations.forEach((operation) => operation.addEventListener("click", () => operate(operation)));

const isNegative = currentOperand.innerText.includes("-");

function appendNumber(value) {
	if (
		(isNegative && currentOperand.innerText.indexOf(0) === 1) ||
		(!isNegative && currentOperand.innerText.indexOf(0) === 0 && value === "0")
	)
		return;
	currentOperand.innerText += value;
}

function appendDecimal() {
	if (currentOperand.innerText.includes(".")) return;
	currentOperand.innerText += ".";
}

function toggleInverse() {
	if (isNegative) {
		currentOperand.innerText = currentOperand.innerText.split("-")[1];
	} else {
		currentOperand.innerText = "-" + currentOperand.innerText;
	}
}

function clearElement(element) {
	element.innerText = "";
}

function clearAll() {
	clearElement(previousOperand);
	clearElement(operator);
	clearElement(currentOperand);
}

function operate(operation) {
	if (operator.innerText === "") {
		previousOperand.innerText = currentOperand.innerText;
		clearElement(currentOperand);
	}

	operator.innerText = operation.innerText;
}

function compute() {
	if (currentOperand.innerText.length === 0 && previousOperand.innerText.length === 0) return;
	console.log("🧮 I'm trying to compute...");
}
