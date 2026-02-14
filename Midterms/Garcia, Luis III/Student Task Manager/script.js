// Array to store tasks
let tasks = [];
let editingIndex = -1;

// When page loads, set minimum date
window.onload = function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    
    var minDate = year + '-' + month + '-' + day;
    document.getElementById("dueDate").setAttribute("min", minDate);
};

// When form is submitted
document.getElementById("taskForm").onsubmit = function(e) {
    e.preventDefault();
    saveTask();
};

// Function to save task
function saveTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var priority = document.getElementById("priority").value;
    var dueDate = document.getElementById("dueDate").value;
    var errorMessage = document.getElementById("errorMessage");
    
    // Clear previous error
    errorMessage.textContent = "";
    
    // Check if fields are empty
    if (taskName == "" || taskDescription == "" || priority == "" || dueDate == "") {
        errorMessage.textContent = "Please fill all fields";
        return;
    }
    
    // Create task object
    var task = {
        name: taskName,
        description: taskDescription,
        priority: priority,
        date: dueDate,
        completed: false
    };
    
    // Add or update task
    if (editingIndex == -1) {
        tasks.push(task);
    } else {
        tasks[editingIndex] = task;
        editingIndex = -1;
        document.getElementById("submitBtn").textContent = "Save Task";
    }
    
    // Clear form
    document.getElementById("taskForm").reset();
    
    // Show tasks
    showTasks();
}

// Function to display tasks
function showTasks() {
    var tableBody = document.getElementById("taskList");
    tableBody.innerHTML = "";
    
    // If no tasks
    if (tasks.length == 0) {
        var row = document.createElement("tr");
        row.className = "empty-state";
        row.innerHTML = '<td colspan="6">No tasks yet</td>';
        tableBody.appendChild(row);
        return;
    }
    

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var row = document.createElement("tr");
        
        if (task.completed == true) {
            row.className = "completed";
        }
        

        
        var statusText = "Pending";
        if (task.completed == true) {
            statusText = "Completed";
        }
        
// Priority
        var priorityClass = "";
        if (task.priority == "High") {
            priorityClass = "high";
        } else if (task.priority == "Medium") {
            priorityClass = "medium";
        } else if (task.priority == "Low") {
            priorityClass = "low";
        }
        

        row.innerHTML = '<td>' + task.name + '</td>' +
                       '<td>' + task.description + '</td>' +
                       '<td class="' + priorityClass + '">' + task.priority + '</td>' +
                       '<td>' + task.date + '</td>' +
                       '<td>' + statusText + '</td>' +
                       '<td class="action-buttons">' +
                       '<button class="edit-btn" onclick="editTask(' + i + ')">Edit</button>' +
                       '<button class="delete-btn" onclick="deleteTask(' + i + ')">Delete</button>' +
                       '<button class="check-btn" onclick="toggleStatus(' + i + ')">✓</button>' +
                       '</td>';
        
        tableBody.appendChild(row);
    }
}

function toggleStatus(index) {
    if (tasks[index].completed == true) {
        tasks[index].completed = false;
    } else {
        tasks[index].completed = true;
    }
    showTasks();
}

// Edit Task
function editTask(index) {
    var task = tasks[index];
    
    document.getElementById("taskName").value = task.name;
    document.getElementById("taskDescription").value = task.description;
    document.getElementById("priority").value = task.priority;
    document.getElementById("dueDate").value = task.date;
    
    editingIndex = index;
    document.getElementById("submitBtn").textContent = "Update Task";
}

// Delete Task
function deleteTask(index) {
    var confirmDelete = confirm("Are you sure you want to delete this task?");
    
    if (confirmDelete == true) {
        tasks.splice(index, 1);
        showTasks();
    }
}