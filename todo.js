let addTask = document.getElementsByClassName("btn-add")[0];
let addDesc = document.getElementsByClassName("desc")[0];
let taskBody = document.getElementById("body-tasks");
let inputField = document.getElementsByClassName("taskInput")[0];

addTask.addEventListener("click", function add(event) {
  if (inputField.value) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    var a = document.createElement("a");
    a.href = "#";
    div.classList.add("task");
    p.classList.add("desc");
    a.classList.add("fa");
    a.classList.add("fa-trash");

    p.innerText = inputField.value;
    taskBody.appendChild(div);
    div.appendChild(p);
    div.appendChild(a);
    inputField.value = "";

    a.addEventListener("click", function () {
      a.parentNode.remove();
    });
  } else {
    alert("There was no input found!");
  }
});
