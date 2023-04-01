let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.createElement("ul");

document.body.append(taskList);
// let taskElement = document.createElement("li");
// document.body.append(taskElement);
// let taskList = document.querySelector(".taskList");

function addTask() {
  let task = inp.value;

  let display = `
    <li class="taskList">
        <div>
          <span class="spanTitle">${task}</span>
          <button class="doneBtn" data-action="done">&#10004</button>
          <button class="deleteBtn" data-action="delete">&#10008</button>
        </div>
      </li>
  `;
  taskList.insertAdjacentHTML("beforeend", display);
  inp.value = "";
  inp.focus();
}
btn.addEventListener("click", addTask);

// function doneButtom() {
//   // display.style.cssText = "text-decoration: line-through";
//   alert("good job");
// }

let doneBtn = document.querySelector(".doneBtn");
// doneBtn.addEventListener("click", function () {
//   alert("good job");
// });

function doneButton(event) {
  if (event.target.closest(".doneBtn")) {
    console.log("good");
  }
}
// doneBtn.addEventListener("click", doneButton);
// stop.propogation()

// function deleteButtom() {
//   let check = confirm("Вы уверены, что хотите удалить задачу?");
//   if (check == true) {
//     // alert("delete");
//     task.parentNode.removeChild(task);
//     // console.log(taskList);
//   }
// }

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

// use submit for delete btn

// const parentNode = event.target.closest("li");
// parentNode.remove();
