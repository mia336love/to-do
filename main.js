let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let taskList = document.createElement("ul");

document.body.append(taskList);

let array = [
  {
    name: "Купить молоко",
    done: false,
  },
  {
    name: "Купить хлеб",
    done: false,
  },
];
// console.log(obj.name);
let taskArray = [];

function addObjects(value) {
  let arr = [];
  // console.log(arr);
  // console.log(array);
  let obj = {
    name: value,
    done: false,
  };
  arr.push(obj);
  taskArray.push(obj);
  // console.log(taskArray);
  // console.log(array);
  render(arr);
  // array = JSON.parse(localStorage.getItem("tasks"));
  console.log(taskArray);
  // localStorage
  // localStorage.setItem("tasks", JSON.stringify(taskArray));
  // taskArray = JSON.parse(localStorage.getItem("tasks"));
  localStorage.setItem("todo", JSON.stringify(taskArray));

  // восстановить
  // if (localStorage.getItem("todo")) {
  //   taskArray = JSON.parse(localStorage("todo"));
  //   for (let key in taskArray) {
  //     obj.elements[key].value = taskArray[key];
  //   }
  // }
  // const data = JSON.parse(localStorage.getItem("todo"));

  // console.log(localStorage.getItem("todo"));

  // satan's code
  // if (localStorage.getItem("todo")) {
  //   taskArray = JSON.parse(localStorage.getItem("todo"));
    // addObjects(arr);
//   }
// } 

render(array);
function render(array) {
  array.forEach((obj) => {
    // пробежать по массиву так, чтобы он получал индекс объекта. иначе он каждый раз делает пробег и каждый раз добавляет обновленный массив + новый и старые объекты
    // задать проверку на существование?
    let display = `
    <li class="taskList">
    <span class="taskTitle">${obj.name}</span>
        <div class="taskButtons">
          <button class="doneBtn" data-action="done">&#10004</button>
          <button class="deleteBtn" data-action="delete">&#10008</button>
        </div>
      </li>
  `;
    taskList.insertAdjacentHTML("beforeend", display);
  });
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   addTask(array[i]);
  // }
}
btn.addEventListener("click", () => {
  addObjects(inp.value);
});

// add tasks
function addTask(obj) {
  if (!inp.value == "") {
    // let task = inp.value;
    // let array = [];
    // берешь массив и через for его гоняешь от 0 до длинны массива. все.
    // ты берешь первый элемент, нулевой, и вызываешь функцию и передаешь ему нулевой объект массива, а там объект
    //
    // let task = obj.name;
    // console.log(obj);
    //   let display = `
    //   <li class="taskList">
    //   <span class="taskTitle">${obj.name}</span>
    //       <div class="taskButtons">
    //         <button class="doneBtn" data-action="done">&#10004</button>
    //         <button class="deleteBtn" data-action="delete">&#10008</button>
    //       </div>
    //     </li>
    // `;
    // taskList.insertAdjacentHTML("beforeend", display);
    inp.value = "";
    inp.focus();
  } // else {
  //   alert("Введите задачу");
  // }
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
// function deleteTask(event) {
//   if (event.target.dataset.action === "delete") {
//     let check = confirm("Вы уверены, что хотите удалить задачу?");
//     if (check == true) {
//       const parentNode = event.target.closest("li");
//       parentNode.remove();
//     }
//   }
// }
// taskList.addEventListener("click", deleteTask);

//
//
//
// готовые таски такски
// let array = [
//   {
//     name: "Купить молоко",
//     done: true,
//   },
//   {
//     name: "Купить хлеб",
//     done: false,
//   },
// ];

// let display = `
//     <li class="taskList">
//     <span class="taskTitle">${obj.name}</span>
//         <div class="taskButtons">
//           <button class="doneBtn" data-action="done">&#10004</button>
//           <button class="deleteBtn" data-action="delete">&#10008</button>
//         </div>
//       </li>
//   `;
