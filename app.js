const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const resetBtn = document.getElementById('reset');
const subractBtn = document.getElementById('subtract');

let counterValue = 0;
addBtn.addEventListener("click", function (event) {    
    counterValue += 1;
    counter.innerHTML = counterValue;
});
subtractBtn.addEventListener("click", function (event) {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});
resetBtn.addEventListener("click", function (event) {
    counterValue = 0;
    counter.innerHTML = counterValue;
});