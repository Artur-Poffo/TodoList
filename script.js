let local = localStorage;
const list = document.querySelector("#list");
const input = document.querySelector("#nametask");
const btn = document.querySelector("#btn");
let cont = 0;

let tasks = [];

function add() {
  if (input.value != "") {
    let nametask = input.value;

    tasks.push(nametask);

    let element = document.createElement("li");
    let texttask = document.createTextNode(tasks[cont]);
    cont++;

    element.appendChild(texttask);
    list.appendChild(element).onclick = function removetask() {
      element.style.display = "none";
      tasks.splice(tasks.indexOf(nametask), 1);
      cont--;
      local.setItem("task", JSON.stringify(tasks));
      loadtask();
    };

    local.setItem("task", JSON.stringify(tasks));

    input.value = "";
    loadtask();
  } else {
    alert("ERRO");
  }
}

function remove(e) {
  e.style.display = "none";
  tasks.splice(tasks.indexOf(e.innerHTML), 1);
  local.setItem("task", JSON.stringify(tasks));
  cont--;
}

function loadtask() {
  let taskstr = local.getItem("task");

  if (taskstr) {
    tasks = JSON.parse(taskstr);
  }
}

function update() {
  tasks.forEach((task) => {
    if (tasks != "") {
      list.innerHTML += `<li onclick="remove(this)">${tasks[cont]}</li>`;
      cont++;
    }
  });
}

btn.addEventListener("click", add);

loadtask();
update();
