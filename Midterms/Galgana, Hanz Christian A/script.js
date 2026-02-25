let tasks = [];

document.querySelector(".forms").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.querySelector(".task").value.trim();
  const description = document.querySelector(".description").value.trim();
  const priority = document.querySelector(".priority").value;
  const due = document.querySelector(".due").value; // <-- add class="due" in your HTML

  if (!title || !description || !due) {
    alert("All fields must be filled.");
    return;
  }
  if (new Date(due) < new Date()) {
    alert("Due date cannot be in the past.");
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    description,
    priority,
    due,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  this.reset();
});

function renderTasks() {
  const tableBody = document.querySelector(".task-table tbody");
  tableBody.innerHTML = "";

  tasks.forEach(task => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task.title}</td>
      <td>${task.description}</td>
      <td class="priority-${task.priority.toLowerCase()}">${task.priority}</td>
      <td>${task.due}</td>
      <td class="${task.completed ? "completed" : ""}">
        ${task.completed ? "Done" : "Pending"}
      </td>
      <td>
        <button onclick="toggleComplete(${task.id})">Complete</button>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  document.querySelector(".task").value = task.title;
  document.querySelector(".description").value = task.description;
  document.querySelector(".priority").value = task.priority;
  document.querySelector(".due").value = task.due;

  deleteTask(id);
}
