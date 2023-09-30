
const ButtonRight = document.querySelector(".button-arrow.-right")
const ButtonLeft = document.querySelector(".button-arrow.-left")
const elements = document.querySelector(".elements")
let pixels = 0

ButtonRight.addEventListener("click", function() {
    pixels = pixels - 50
    elements.style = `transform: translateX(${pixels}px)`;
})

ButtonLeft.addEventListener("click", function() {
    pixels = pixels + 50
    elements.style = `transform: translateX(${pixels}px)`;
})