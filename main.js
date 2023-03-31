let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.createElement("ul");
document.body.append(taskList);
// let taskList = document.querySelector(".taskList");

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

// use submit for delete btn
