function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    var span = document.createElement("span");
    span.textContent = " ❌";
    span.classList.add("delete");
    span.onclick = function () {
      li.remove();
    };
    li.appendChild(span);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
