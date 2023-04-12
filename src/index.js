
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const submitButton = document.querySelector("#submitButton");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
  });

  function addTask() {
    const taskList = document.querySelector("#tasks");
    const task = taskInput.value;
    const taskItem = document.createElement("li");
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
