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

//Button Functionality
zero.addEventListener("click", () => {
    printNums(zero.textContent);
})

one.addEventListener("click", () => {
    printNums(one.textContent);
})

two.addEventListener("click", () => {
    printNums(two.textContent);
})

three.addEventListener("click", () => {
    printNums(three.textContent);
})

four.addEventListener("click", () => {
    printNums(four.textContent);
})

five.addEventListener("click", () => {
    printNums(five.textContent);
})

six.addEventListener("click", () => {
    printNums(six.textContent);
})

seven.addEventListener("click", () => {
    printNums(seven.textContent);
})

eight.addEventListener("click", () => {
    printNums(eight.textContent);
})

nine.addEventListener("click", () => {
    printNums(nine.textContent);
})

decimal.addEventListener("click", () => {
    printNums(decimal.textContent);
})

equals.addEventListener("click", () => {
    printNums(equals.textContent);
})

add.addEventListener("click", () => {
    printNums(add.textContent);
})

subtract.addEventListener("click", () => {
    printNums(subtract.textContent);
})

multiply.addEventListener("click", () => {
    printNums(multiply.textContent);
})

divide.addEventListener("click", () => {
    printNums(divide.textContent);
})

percent.addEventListener("click", () => {
    printNums(percent.textContent);
})

squared.addEventListener("click", () => {
    calc += "^2";
    screen.textContent += "^2";
    console.log(calc);
})

backspace.addEventListener("click", () => {
    printNums("B");
})

clear.addEventListener("click", () => {
    calc = "";
    screen.textContent = "";
    calcLength = 0;
})

//Putting Numbers on the screen
function printNums(x) {
    if(calcLength > 8) {
        screen.style.fontSize = "3em";
        if(calcLength > 15) {
            screen.style.fontSize = "2em";
            if(calcLength > 20) {
                console.log("Too Long!");
                return;
            }
        }
    } else {
        screen.style.fontSize = "5em";
    }
    calc += x;
    screen.textContent += x;
    console.log(calc);
    calcLength++;
}
