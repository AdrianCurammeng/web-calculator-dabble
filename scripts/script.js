//Variables for Buttons
const zero = document.querySelector(".zero-pad");
const one = document.querySelector(".one-pad");
const two = document.querySelector(".two-pad");
const three = document.querySelector(".three-pad");
const four = document.querySelector(".four-pad");
const five = document.querySelector(".five-pad");
const six = document.querySelector(".six-pad");
const seven = document.querySelector(".seven-pad");
const eight = document.querySelector(".eight-pad");
const nine = document.querySelector(".nine-pad");

const decimal = document.querySelector(".decimal-pad");
const equals = document.querySelector(".equals-pad");

const add = document.querySelector(".add-pad");
const subtract = document.querySelector(".subtract-pad");
const multiply = document.querySelector(".multiply-pad");
const divide = document.querySelector(".divide-pad");
const percent = document.querySelector(".percent-pad");
const squared = document.querySelector(".squared-pad");

const backspace = document.querySelector(".backspace-pad");
const clear = document.querySelector(".clear-pad");

const screen = document.querySelector(".screenNums");

//Length of Calculation
let calcLength = 0;
let calc = "";
let ans;

//Button Functionality
zero.addEventListener("click", () => {
    doBoth(0, 0);
})

one.addEventListener("click", () => {
    doBoth(1, 1);
})

two.addEventListener("click", () => {
    doBoth(2, 2);
})

three.addEventListener("click", () => {
    doBoth(3, 3);
})

four.addEventListener("click", () => {
    doBoth(4, 4);
})

five.addEventListener("click", () => {
    doBoth(5, 5);
})

six.addEventListener("click", () => {
    doBoth(6, 6);
})

seven.addEventListener("click", () => {
    doBoth(7, 7);
})

eight.addEventListener("click", () => {
    doBoth(8, 8);
})

nine.addEventListener("click", () => {
    doBoth(9, 9);
})

decimal.addEventListener("click", () => {
    doBoth(".", ".");
})

equals.addEventListener("click", () => {
    ans = math.evaluate(calc);
    console.log(ans);
})

add.addEventListener("click", () => {
    doBoth("+", "+");
})

subtract.addEventListener("click", () => {
    doBoth("-", "-");
})

multiply.addEventListener("click", () => {
    doBoth("x", "*");
})

divide.addEventListener("click", () => {
    doBoth("÷", "/");
})

percent.addEventListener("click", () => {
    doBoth("%", "/100");
})

squared.addEventListener("click", () => {
    calc += "^2";
    screen.textContent += "^2";
    console.log(calc);
})

backspace.addEventListener("click", () => {
    calc = calc.toString().slice(0, calc.length - 1);
    screen.textContent = calc;
    console.log(calc);
})

clear.addEventListener("click", () => {
    calc = "";
    screen.textContent = "";
    calcLength = 0;
    ans = 0;
})

//Putting Numbers on the screen
function printNums(x) {
    if(calcLength > 8) {
        screen.style.fontSize = "3em";
        if(calcLength > 14) {
            screen.style.fontSize = "2em";
            if(calcLength > 20) {
                console.log("Too Long!");
                return;
            }
        }
    } else {
        screen.style.fontSize = "5em";
    }
    screen.textContent += x;
    calcLength++;
    console.log(calc);
}

//Calculates Numbers
function calculate(x) {
    if(calcLength > 20) {
        return;
    }
    calc += x;
    console.log(calc);
}

function doBoth(x, y) {
    printNums(x);
    calculate(y);
}

//Experiment with JQuery
