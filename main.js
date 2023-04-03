let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.createElement("ul");

document.body.append(taskList);

// add tasks
function addTask() {
  if (!inp.value == "") {
    let task = inp.value;

    let display = `
    <li class="taskList">
    <span class="taskTitle">${task}</span>
        <div class="taskButtons">
          <button class="doneBtn" data-action="done">&#10004</button>
          <button class="deleteBtn" data-action="delete">&#10008</button>
        </div>
      </li>
  `;
    taskList.insertAdjacentHTML("beforeend", display);
    inp.value = "";
    inp.focus();
  } else {
    alert("Введите задачу");
  }
}
btn.addEventListener("click", addTask);

inp.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
// done button
function doneTask(event) {
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest("li");
    parentNode.style.textDecoration = "line-through";
  }
}
taskList.addEventListener("click", doneTask);

// delete button
function deleteTask(event) {
  if (event.target.dataset.action === "delete") {
    let check = confirm("Вы уверены, что хотите удалить задачу?");
    if (check == true) {
      const parentNode = event.target.closest("li");
      parentNode.remove();
    }
  }
}
taskList.addEventListener("click", deleteTask);
