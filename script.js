let display = document.getElementById("display");

function clearDisplay() {
    display.textContent = "0";
}

function appendNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendSymbol(symbol) {
    display.textContent += symbol;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}

function toggleSign() {
    if (display.textContent.startsWith("-")) {
        display.textContent = display.textContent.substring(1);
    } else if (display.textContent !== "0") {
        display.textContent = "-" + display.textContent;
    }
}
