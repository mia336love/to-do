let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.createElement("ul");

document.body.append(taskList);

let array = [
  {
    name: "do homework",
    done: false,
  },
  {
    name: "buy milk",
    done: false,
  },
];

if (localStorage.getItem("todo")) {
  array = JSON.parse(localStorage.getItem("todo"));
}

// размещение LS на странице (обновление стр)
array.forEach(function (task) {
  // console.log(task);
  let display = `
    <li class="taskList">
        <div>
          <span class="spanTitle">${task.name}</span>
          <button class="doneBtn" data-action="done">&#10004</button>
          <button class="deleteBtn" data-action="delete">&#10008</button>
        </div>
      </li>
  `;
  taskList.insertAdjacentHTML("beforeend", display);
});

function addTask() {
  // let task = inp.value;

  let obj = {
    name: inp.value,
    done: false,
  };

  array.push(obj);
  // console.log(array);
  saveToLK();

  let display = `
    <li class="taskList">
        <div>
          <span class="spanTitle">${obj.name}</span>
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

// enter
inp.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

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

function saveToLK() {
  localStorage.setItem("todo", JSON.stringify(array));
}
