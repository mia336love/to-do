let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
// let task = document.getElementById("h2");
let task = document.querySelector("ul");

let toDo = [];
function addTask() {
  task.textContent = inp.value;
  toDo.push(task);
}

function display() {
  toDo.forEach();
}
btn.addEventListener("click");

// use submit for delete btn
