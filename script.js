const inputField = document.getElementById("inputField");
function calculate(x) {
    inputField.value = inputField.value + x;
}


document.getElementById("equal").addEventListener("click", function () {
    const result = inputField.value = eval(inputField.value);
    console.log(result);
})

document.getElementById("clear").addEventListener("click", function () {
    inputField.value = ""
})