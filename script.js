const inputField = document.getElementById("inputField");
function calculate(x) {
    inputField.value = inputField.value + x;
}


document.getElementById("equal").addEventListener("click", function () {
    inputField.value = eval(inputField.value);
})

document.getElementById("clear").addEventListener("click", function () {
    inputField.value = ""
})
