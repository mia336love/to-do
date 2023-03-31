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
        <span class="spanTitle">${task}</span>
        <div>
          <button class="doneBtn" onclick="doneButtom()">&#10004</button>
          <button class="deleteBtn" onclick="deleteButtom()">&#10008</button>
        </div>
      </li>
  `;
  taskList.insertAdjacentHTML("beforeend", display);
  inp.value = "";
  inp.focus();
}
btn.addEventListener("click", addTask);

function doneButtom() {
  display.style.cssText = "text-decoration: line-through";
  // alert("good job");
}
function deleteButtom() {
  let check = confirm("Вы уверены, что хотите удалить задачу?");
  if (check == true) {
    // alert("delete");
    task.parentNode.removeChild(task);
    // console.log(taskList);
  }
}
// function doneButtom() {
//   doneBtn = document.querySelector(".doneBtn");
//   // if ($("doneBtn").click()) {
//   //   console.log("cool");
//   // }

//   // $(doneBtn).click

//   doneBtn.addEventListener("click", function () {
//     console.log("cool");
//   });
//   // doneBtn.addEventListener("click", doneButtom);
// }
// doneButtom();

// use submit for delete btn
