function funcCalc() {
    let mass = document.getElementById("mass").value;
    let block = document.getElementById("block").value;
    let critical = document.getElementById("critical").value;
    document.getElementById("total").innerHTML = mass * block * critical
}

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
    element.addEventListener('change', window.funcCalc)
});