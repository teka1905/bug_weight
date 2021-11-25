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

function copyToClipboard() {
  let area = document.createElement('textarea');

  document.body.appendChild(area);
    area.value = document.getElementById("total").textContent;
    area.select();
    document.execCommand("copy");
  document.body.removeChild(area);
}

const copyElement = document.querySelectorAll('[data-action="copyElement"]');
copyElement.forEach((element) => {
    element.addEventListener('click', window.copyToClipboard)
});