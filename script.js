document.addEventListener('DOMContentLoaded', function() {
  var addtask = document.getElementById("addto");
  var tasktext = document.getElementById("input-field");
  var tdcontainer = document.getElementById("todo-container");

  addtask.addEventListener('click', add);

  function add() {
      var task = tasktext.value;

      if (task.trim() !== '') {
        var taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container", "d-flex", "align-items-center", "justify-content-between", "mb-2");

        var taskContent = document.createElement("p");
        taskContent.textContent = task;
        taskContent.style.fontSize = "25px";
        taskContent.style.marginLeft= "2px";

        var removeButton = document.createElement("i");
        removeButton.classList.add("fas", "fa-trash-alt", "remove-btn", "text-danger", "cursor-pointer");
        removeButton.style.marginRight = "10px"
        removeButton.style.fontSize = "large"
        removeButton.addEventListener('click', function() {
            taskContainer.remove();
        });

        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(removeButton);

        tdcontainer.appendChild(taskContainer);
        tasktext.value = '';
      } else {
          alert("Please enter a task.");
      }
  }
});


