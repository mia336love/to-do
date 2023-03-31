let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.querySelector(".taskList");

// let toDo = [];
// function addTask() {
//   task.textContent = inp.value;
//   toDo.push(task);
// }

// function display() {
//   toDo.forEach();
// }
// btn.addEventListener("click");

// use submit for delete btn

function addTask() {
  let task = inp.value;

  let display = `
    <li class="taskList">
        <span class="spanTitle">${task}</span>
        <div>
          <button class="doneBtn">&#10004</button>
          <button class="deleteBtn">&#10008</button>
        </div>
      </li>
  `;
  taskList.insertAdjacentHTML("beforeend", display);
}
btn.addEventListener("click", addTask);

function taskButtons() {
  doneBtn = document.querySelector(".doneBtn");
  console.log(doneBtn);
}
