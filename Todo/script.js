document.querySelector("#push").onclick = function () {
  let taskInput = document.querySelector("#taskInput input");
  
  if (taskInput.value.length === 0) {
    alert("Please enter a task");
  } else {
    // Create a new task element
    let task = document.createElement("div");
    task.classList.add("task");

    // Create task name span
    let taskName = document.createElement("span");
    taskName.id = "taskName";
    taskName.innerText = taskInput.value;

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "DELETE";

    // Append elements to task
    task.appendChild(taskName);
    task.appendChild(deleteButton);

    // Append task to task list
    document.querySelector("#tasks").appendChild(task);

    // Clear input field
    taskInput.value = "";

    // Add event listener to delete button
    deleteButton.onclick = function () {
      this.parentNode.remove();
    };

    // Add event listener for task completion toggle
    task.onclick = function () {
      this.classList.toggle("completed");
    };
  }
};
